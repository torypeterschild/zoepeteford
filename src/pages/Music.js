import React from 'react';

const iframes = [
  {
    src: "https://bandcamp.com/EmbeddedPlayer/album=3250475257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "Life's a Cigarette",
  },
  {
    src: "https://open.spotify.com/embed/album/2iXuWV2Su2qnXiQq0ukr98?utm_source=generator",
    title: "Life's a Cigarette",
  },
  {
    src: "https://embed.music.apple.com/us/album/lifes-a-cigarette/1689964589",
    title: "Life's A Cigarette",
  },
  {
    src: "https://bandcamp.com/EmbeddedPlayer/album=3571525450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "Dr. Fooze Acoustic 1"
  },
  {
    src: "https://bandcamp.com/EmbeddedPlayer/track=1272482558/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "Coast ain't clear"
  },
  {
    src: "https://bandcamp.com/EmbeddedPlayer/album=1278727878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "Bits N Scraps by superbluesurf",
  },
  {
    src: "https://bandcamp.com/EmbeddedPlayer/track=1738950390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "The Superbowl Song"
  },
  {
    src: "https://bandcamp.com/EmbeddedPlayer/album=1255565136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
    title: "Mrs. Freeze Lied O Lied to Chip"
  }
  // Add more iframe objects here
];

function Music() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {iframes.map((iframe, index) => (
        <div
          key={index}
          style={{
            flex: '1 1 45%', // Adjust column width as needed
            minWidth: '300px',
            maxWidth: '500px', // Optional max-width to prevent excessive stretching
            height: '400px', // Set a fixed height to ensure all iframes display correctly
            overflow: 'hidden',
          }}
        >
          <iframe
            src={iframe.src}
            title={iframe.title}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Music;
