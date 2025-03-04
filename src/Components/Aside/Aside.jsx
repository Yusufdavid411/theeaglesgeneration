import './aside.css'
import React, { useRef, useState } from "react";


const Aside = () => {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute/unmute function
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay loop muted className="video-bg">
        <source src="/videos/tegen_bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? "🔇 Mute" : "🔊 Unmute"}
      </button>

      <div></div>
    </div>
  );
}
 
export default Aside;