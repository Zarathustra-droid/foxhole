import React, { useEffect, useState } from 'react';
import { getDataFromCacheOrAPI } from '../utils/cache';

const Calendar = () => {
  const [calendar, setCalendar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = "calendar";
    getDataFromCacheOrAPI('/api/calendar', cacheKey)
        .then(fetchedData => {
          if (fetchedData) {
            setCalendar(fetchedData);
          } else {
            setError('Failed to load data.');
          }
    })
  }, []);

  if (!calendar) return <div>Loading calendar...</div>;

  return (
    <div>
      <h3>Calendar</h3>
      <p>{calendar.ocs.data.events}</p>
    </div>
  );
};

export default Calendar;

