import ScrollReveal from "../UI/ScrollReveal";
import { Heart, Shield, BookOpen } from "lucide-react";
import founderImg from "../../assets/founder.jpg";

const About = () => {
  const values = [
    {
      title: "Empathy",
      desc: "We listen without judgment and act with compassion.",
      icon: Heart,
    },
    {
      title: "Safe Messaging",
      desc: "Every conversation is confidential and respectful.",
      icon: Shield,
    },
    {
      title: "Evidence-Based Practices",
      desc: "Our methods are grounded in research and proven results.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who We Are
            </h2>
            <p className="text-dark max-w-3xl mx-auto text-lg">
              We are a not‑for‑profit mental health advocacy organization
              operating from Uyo, Akwa Ibom State, Nigeria. Our work is rooted
              in the belief that everyone deserves access to mental well‑being,
              regardless of their background.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-8 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-dark">
                To serve as a guiding light on the journey to mental well‑being
                in the Nigerian mental health space.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-8 border-tertiary">
              <h3 className="text-2xl font-bold text-tertiary mb-3">
                Our Mission
              </h3>
              <p className="text-dark">
                We are dedicated to providing actionable support; fostering
                empathetic conversations; and delivering insights for
                individuals navigating the multifaceted landscape of mental
                health in Nigeria.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Values as cards with icons */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Our Core Values
          </h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-secondary/20 p-6 rounded-lg text-center hover:shadow-lg transition">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-dark mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted">{value.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Founder Bio Section */}
        <ScrollReveal delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-80 md:h-auto">
              <img
                src={founderImg}
                alt="Founder, Mental Health Pathway"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Meet Our Founder
              </h3>
              <p className="text-dark text-lg font-semibold mb-3">
                Ubong Friday Eyenobong
              </p>
              <p className="text-muted mb-4">
               A clinical psychologist with over 15 years
                of experience in community mental health, Ubong Friday Eyenobong founded Mental
                Health Pathway to bridge the gap between awareness and
                actionable support in Nigeria. His vision has touched
                thousands of lives across Akwa Ibom and beyond.
              </p>
              <div className="flex space-x-4 text-primary">
                <a href="#" className="hover:text-tertiary">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-tertiary">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
