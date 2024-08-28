import React from 'react';
import './Shows.css'; // Import CSS file

const shows = [
  { venue: 'Lampasas Beer Market', date: '2024-10-08', performer: 'Zoë Pete Ford', link: 'https://example.com' },
  { venue: 'Venue B', date: '2023-12-10', performer: 'Artist B', link: 'https://example.com' },
  { venue: 'Venue C', date: '2024-01-15', performer: 'Artist C', link: 'https://example.com' },
  // Add more show data here
];

function Shows() {
  const today = new Date();
  
  // Function to check if a show is in the past
  const isPastShow = (date) => new Date(date) < today;

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.replace(',', '').split(' ');
    return `${month.toLowerCase()} ${day} ${year}`;
  };

  // Separate shows into past and upcoming
  const pastShows = shows.filter(show => isPastShow(show.date)).sort((a, b) => new Date(b.date) - new Date(a.date));
  const upcomingShows = shows.filter(show => !isPastShow(show.date)).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="shows-container">
      <div className="shows-column upcoming">
        <h3>upcoming</h3>
        {upcomingShows.length > 0 ? (
          <ul>
            {upcomingShows.map((show, index) => (
              <li key={index}>
                <p><strong>{show.performer.toLowerCase()}</strong></p>
                <p>{show.venue.toLowerCase()}</p>
                <p>{formatDate(show.date)}</p>
                <a href={show.link} target="_blank" rel="noopener noreferrer">more info</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming shows</p>
        )}
      </div>
      <div className="shows-column past">
        <h3>past</h3>
        {pastShows.length > 0 ? (
          <ul>
            {pastShows.map((show, index) => (
              <li key={index}>
                <p><strong>{show.performer.toLowerCase()}</strong></p>
                <p>{show.venue.toLowerCase()}</p>
                <p>{formatDate(show.date)}</p>
                <a href={show.link} target="_blank" rel="noopener noreferrer">more info</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No past shows</p>
        )}
      </div>
    </div>
  );
}

export default Shows;
