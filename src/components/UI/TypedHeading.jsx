import { ReactTyped } from "react-typed";

const TypedHeading = () => {
  const sentences = [
    "Provides actionable support.",
    "Fosters empathetic conversations.",
    "Delivers mental health insights.",
    "Builds resilient communities.",
  ];

  return (
    <div className="text-4xl md:text-6xl font-bold mb-4 h-32 md:h-40">
      <ReactTyped
        strings={sentences}
        typeSpeed={50}
        backSpeed={30}
        backDelay={1500}
        startDelay={500}
        loop={true}
        showCursor={true}
        cursorChar="|"
      />
    </div>
  );
};

export default TypedHeading;
