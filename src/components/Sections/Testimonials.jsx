import ScrollReveal from '../UI/ScrollReveal';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ekaette U.',
      role: 'Teacher, Uyo',
      text: 'The sensitization training at our school opened up conversations I never thought possible. Students are now more open about their struggles.',
      avatar: '/avatar1.jpg',
    },
    {
      name: 'Michael O.',
      role: 'Support Group Member',
      text: 'The monthly meetings gave me a safe space to share without judgment. I look forward to every session.',
      avatar: '/avatar2.jpg',
    },
    {
      name: 'Fatima B.',
      role: 'Parent',
      text: 'My daughter joined the Mental Health Club at her school. She now has tools to cope with anxiety. Thank you.',
      avatar: '/avatar3.jpg',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Stories of Impact</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                <p className="text-dark mb-6 italic">“{t.text}”</p>
                <div className="flex items-center gap-3 border-t border-secondary pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-muted text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;