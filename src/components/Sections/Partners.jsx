import ScrollReveal from '../UI/ScrollReveal';

const Partners = () => {
  // Placeholder logos – add your own images in /public/partners/
  const partners = [
    { name: 'Partner 1', logo: '/partner1.png' },
    { name: 'Partner 2', logo: '/partner2.png' },
    { name: 'Partner 3', logo: '/partner3.png' },
    { name: 'Partner 4', logo: '/partner4.png' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">Our Strategic Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="opacity-70 hover:opacity-100 transition">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 mx-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-6">
            We collaborate with organizations, government agencies, and community leaders.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;