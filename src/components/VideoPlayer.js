// components/VideoPlayer.js
import React, { useRef } from 'react';
import styles from './VideoPlayer.module.css'; // Import modular CSS

const VideoPlayer = ({ videoSrc }) => {
  const playerRef = useRef(null);

  const toggleFullScreen = () => {
    if (playerRef.current.requestFullscreen) {
      playerRef.current.requestFullscreen();
    } else if (playerRef.current.webkitRequestFullscreen) { /* Safari */
      playerRef.current.webkitRequestFullscreen();
    } else if (playerRef.current.msRequestFullscreen) { /* IE11 */
      playerRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <div ref={playerRef} style={{ position: 'relative' }}>
        <iframe
          src={videoSrc}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowfullscreen="true"
          title="Movie Player"
        ></iframe>
        <button className={styles.fullScreenButton} onClick={toggleFullScreen}>
          Full Screen
        </button>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default VideoPlayer;
