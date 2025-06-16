import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    fetch('/api/calendar')
      .then(res => res.json())
      .then(data => setCalendar(data))
      .catch(console.error);
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

