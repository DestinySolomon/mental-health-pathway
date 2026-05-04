import ScrollReveal from '../UI/ScrollReveal';

const Magazine = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quest for Mental Health Magazine</h2>
              <p className="text-dark mb-4">
                An 18‑page publication designed to raise awareness, share experiences, and ignite conversations.
                Available in at least 7 major Nigerian languages to reach a diverse audience.
              </p>
              <ul className="space-y-2 text-dark">
                <li>✓ Stories of hope and recovery</li>
                <li>✓ Expert insights and practical tips</li>
                <li>✓ Community voices from across Nigeria</li>
              </ul>
              <button className="mt-6 bg-tertiary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
                Download Sample Issue
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img
                src="/magazine-cover-placeholder.jpg"
                alt="Magazine cover"
                className="w-full rounded-md"
              />
              <p className="text-center text-muted text-sm mt-2">Sample cover – Mockup</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Magazine;