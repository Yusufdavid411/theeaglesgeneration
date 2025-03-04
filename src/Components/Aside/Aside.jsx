import React, { useRef, useState } from "react";
import "./Aside.css";

const Aside = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Ensure video can play with sound
  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        videoRef.current.play(); // Ensure play resumes after unmuting
      } else {
        videoRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-container">
      {/* Background Video */}
      <video ref={videoRef} autoPlay loop muted className="video-bg" playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default Aside;
