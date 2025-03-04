import './aside.css'

const Aside = () => {
  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay loop muted className="video-bg">
        <source src="/videos/tegen_bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Button */}
      <button className="action-btn">THE EAGLES GENERATION</button>

      <div></div>
    </div>
  );
}
 
export default Aside;