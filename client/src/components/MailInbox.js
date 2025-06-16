import React, { useEffect, useState } from 'react';

const MailInbox = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetch('/api/mail')
      .then(res => res.json())
      .then(data => setMails(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>Inbox</h3>
      <ul>
        {mails.map((mail, i) => (
          <li key={i}>
            <strong>{mail.from}</strong>: {mail.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailInbox;

