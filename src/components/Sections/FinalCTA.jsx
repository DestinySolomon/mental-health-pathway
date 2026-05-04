import ScrollReveal from '../UI/ScrollReveal';

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-6">
            Whether you volunteer, donate, or simply share our message – you are a vital part of the Mental Health Pathway.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-secondary text-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              Volunteer
            </button>
            <button className="bg-tertiary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              Donate
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              Subscribe to Newsletter
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;