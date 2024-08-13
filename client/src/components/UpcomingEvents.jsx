import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to="/calendar">
              <div className="event-name">{event.name}</div>
              <div className="event-date">{new Date(event.date).toLocaleDateString()}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

export default UpcomingEvents;
