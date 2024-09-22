import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './bgm.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Ensuring audio play is directly a result of this user interaction
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => console.log("Playback succeeded"))
        .catch(e => console.error("Playback failed:", e));
    }
  };

  const handleCloseLetter = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsOpen(false);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={isOpen ? handleCloseLetter : handleOpenLetter}>
      <div className={`flap ${isOpen ? 'open' : ''}`}>
        <div className="flap-text">
          <img src="design.png" alt="Stamp" className="stamp" />
        </div>
      </div>
      <div className={`body ${isOpen ? 'open' : ''}`}></div>
      <div className={`letter ${isOpen ? 'fullSize' : ''}`}>
        <p>Dear Wifey, ❤️<br /><br />
          I’ve been thinking about our fight, and it truly breaks my heart. You mean the world to me, and I want you to know just how much I cherish you. You are my sunshine ☀️, the light that brightens even my darkest days, and I can’t imagine life without your warmth and love. 🙁💓<br /><br />
          I know I’ve made mistakes, and I deeply regret the pain I’ve caused you. I’m truly sorry. 💔 I want to be better for you— to listen more and to understand you fully. You deserve the best version of me, and I’m committed to becoming that person. I want to be the partner you can trust and lean on, always. 🤗<br /><br />
          Let’s take this painful moment and turn it into a chance for us to grow together. I love you more than words can express, and I’m ready to fight for us, to put in the effort to make things right. You’re worth every bit of that effort. 💪<br /><br />
          Please give me the chance to show you how deeply I care. I promise to be here for you, to support you, and to love you unconditionally. You are my everything, and I want to make this right.<br /><br />
          Sorry, my cute little angry bird 🦚<br /><br />
          With all my love,<br />
          Yours forever,<br /> Hubby 💕
        </p>
        {/* <div className="stamp-container">
          <img src="design.png" alt="Stamp" className="stamp" />
        </div> */}
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
