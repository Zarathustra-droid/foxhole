// server/services/imapService.js
const Imap = require('imap');
const { simpleParser } = require('mailparser');

// Config — replace with environment variables in production
const IMAP_CONFIG = {
  user: process.env.MAIL_USER || 'your@domain.com',
  password: process.env.MAIL_PASS || 'yourpassword',
  host: process.env.MAIL_HOST || 'localhost',
  port: 993,
  tls: true,
};

function getEmail(mailbox = 'INBOX', max = 10) {
  return new Promise((resolve, reject) => {
    const imap = new Imap(IMAP_CONFIG);

    const openInbox = (cb) => {
      imap.openBox(mailbox, true, cb); // read-only
    };

    imap.once('ready', () => {
      openInbox((err, box) => {
        if (err) return reject(err);

        const fetchOptions = {
          bodies: '',
          markSeen: false,
        };

        const fetchRange = `${box.messages.total - max + 1}:${box.messages.total}`;
        const f = imap.seq.fetch(fetchRange, fetchOptions);

        const messages = [];

        f.on('message', (msg, seqno) => {
          let buffer = '';

          msg.on('body', (stream) => {
            stream.on('data', (chunk) => {
              buffer += chunk.toString('utf8');
            });
          });

          msg.once('end', async () => {
            try {
              const parsed = await simpleParser(buffer);
              messages.push({
                from: parsed.from?.text,
                subject: parsed.subject,
                date: parsed.date,
                snippet: parsed.text?.slice(0, 200),
              });
            } catch (err) {
              console.error('Parse error:', err);
            }
          });
        });

        f.once('error', (err) => reject(err));

        f.once('end', () => {
          imap.end();
          resolve(messages);
        });
      });
    });

    imap.once('error', (err) => reject(err));
    imap.connect();
  });
}

module.exports = {
  getEmail,
};

