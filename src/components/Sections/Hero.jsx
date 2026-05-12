import ScrollReveal from "../UI/ScrollReveal";
import TypedHeading from "../UI/TypedHeading";
import heroVideo from "../../assets/Mental-Health-Pathway.mp4";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt to play the video
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
          // Video will remain muted and attempt to play on user interaction
        }
      };

      playVideo();
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white px-4 pt-36 overflow-hidden"
    >
      {/* Background video with fallback */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onError={() => setVideoError(true)}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback background if video fails
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary z-0"></div>
      )}

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <TypedHeading />
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We are dedicated to providing actionable support, fostering
            empathetic conversations, and delivering insights for individuals
            navigating the multifaceted landscape of mental health in Nigeria.
          </p>
          <button className="bg-tertiary hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105">
            Join Our Next Support Group
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
