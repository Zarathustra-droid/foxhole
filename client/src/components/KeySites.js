import React, { useEffect, useState } from 'react';
import { getDataFromCacheOrAPI } from '../utils/cache'
;
const KeySites = () => {
  const [sites, setSites] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const cacheKey="sites";
    getDataFromCacheOrAPI('/api/sites', cacheKey)
        .then(fetchedData => {
          if (fetchedData) {
            setSites(fetchedData);
          } else {
            setError('Failed to load data.');
          }
    })
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

