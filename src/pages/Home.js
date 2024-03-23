// // src/pages/Home.js
// import React from 'react';
// import styles from './Home.module.css'; // Import modular CSS

// // const movies = [
// //   { id: 1, title: 'Movie 1', poster: 'movie1.jpg', videoSrc: "https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
// //   { id: 2, title: 'Movie 2', poster: 'movie2.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
// //   { id: 3, title: 'Movie 3', poster: 'movie3.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
// //   // Add more movie data
// // ];

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1 className={styles.title}>Movie Streaming</h1>
//         <div className={styles.buttons}>
//           <button className={styles.signInButton}>Sign In</button>
//           <button className={styles.registerButton}>Register</button>
//         </div>
//       </header>
//       <main className={styles.main}>
//         <h2 className={styles.sectionTitle}>Featured Movies</h2>
//         <div className={styles.movieGrid}>
//           {movies.map((movie) => (
//             <div key={movie.id} className={styles.movie}>
//               <img
//                 // src={require(`../images/${movie.poster}`).default}
//                 alt={movie.title}
//                 className={styles.movieImage}
//               />
//               <div className={styles.overlay}>
//                 <div style={{ padding: '41.67% 0 0 0', position: 'relative' }}>
//                   <iframe 
//                     src="https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//                     frameborder="0" 
//                     allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
//                     style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} 
//                     title="harry potter"
//                   ></iframe>
//                 </div>
//                 {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
                
//                 <button className={styles.watchButton}>Watch Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <p>&copy; {new Date().getFullYear()} Movie Streaming. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css'; // Import modular CSS
// import 'movie1.jpg' from '../images';

const movies = [
  { id: 1, title: 'Harry Potter And The Philosopher\'s Stone', poster: 'movie1.jpg', videoSrc: "https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { id: 2, title: 'Harry Potter And The Chamber of Secrets', poster: 'movie2.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 3, title: 'Harry Potter And The Prisoner of Azkaban', poster: 'movie3.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 4, title: 'Harry Potter And The Goblet of Fire', poster: 'movie4.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 5, title: 'Harry Potter And The Order of Phoenix', poster: 'movie5.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 6, title: 'Harry Potter And The Half Blood Prince', poster: 'movie6.jpg', videoSrc: '"https://player.vimeo.com/video/926607002?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 7, title: 'Harry Potter And The Deathly Hollows', poster: 'movie7.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  { id: 8, title: 'Harry Potter And The Battle of Hohgwarts', poster: 'movie8.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
//   { id: 8, title: 'Harry Potter And The Battle of Hohgwarts - Part 2', poster: 'movie8.jpg', videoSrc: 'https://player.vimeo.com/video/926513595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
  // Add more movie data
];

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>ReqFlix</h1>
        <div className={styles.buttons}>
          <button className={styles.signInButton}>Sign In</button>
          <button className={styles.registerButton}>Register</button>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Featured Movies</h2>
        <div className={styles.movieGrid}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img
                src="./movie1.jpg"
                alt={movie.title}
                className={styles.movieImage}
              />
              <div className={styles.overlay}>
                <iframe
                  src={movie.videoSrc}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                  title={movie.title}
                ></iframe>
                <button className={styles.watchButton}>Watch Now</button>
              </div>
            </div>
          ))}
          
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} ReqFlix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
