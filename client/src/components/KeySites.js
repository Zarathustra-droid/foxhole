import React, { useEffect, useState } from 'react';

const KeySites = () => {
  const [sites, setSites] = useState(null);

  useEffect(() => {
    fetch('/api/sites')
      .then(res => res.json())
      .then(data => setSites(data))
      .catch(console.error);
  }, []);

  if (!sites) return <div>Loading sites...</div>;

  return (
    <div>
      <h3>Sites</h3>
      {sites.map((site, index) => (
        <div key={index}>
          <a href={site.url}>{site.title}</a>
        </div>
      ))}
    </div>
  );
};

export default KeySites;

