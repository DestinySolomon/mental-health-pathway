import ScrollReveal from '../UI/ScrollReveal';
import Counter from '../UI/Counter';

const ImpactStats = () => {
  const stats = [
    { label: 'People Reached', value: 4930, suffix: '+' },
    { label: 'Support Calls Completed', value: 3290, suffix: '+' },
    { label: 'Schools & Organizations', value: 457, suffix: '+' },
    { label: 'Active Volunteers', value: 125, suffix: '' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact So Far</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div>
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                <p className="mt-2 text-secondary text-lg">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;