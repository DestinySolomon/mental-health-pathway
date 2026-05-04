import ScrollReveal from '../UI/ScrollReveal';

const CallService = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Check‑Up Call</h2>
          <p className="text-lg mb-6">
            Sign up for a free weekly check‑in call. Choose your preferred day. Minimum 30 seconds.
            You can discontinue anytime. Your well‑being matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-secondary text-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              Sign Up Now
            </button>
            <button className="border-2 border-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-dark transition">
              Learn More
            </button>
          </div>
          <p className="text-sm opacity-80 mt-4">Already have 3,200+ active subscribers</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallService;