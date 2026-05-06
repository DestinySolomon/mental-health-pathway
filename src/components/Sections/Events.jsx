import ScrollReveal from '../UI/ScrollReveal';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    { name: 'World Mental Health Day', date: 'October 10, 2026', location: 'Uyo & Virtual' },
    { name: 'World Suicide Prevention Day', date: 'September 10, 2026', location: 'Online Webinar' },
    { name: 'Mental Health Live 2025', date: 'December 5, 2026', location: 'Ibom Hall, Uyo' },
    { name: 'School Sensitization Tour', date: 'Ongoing – Book a Session', location: 'Various Schools' },
  ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 bg-light">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Upcoming & Ongoing Events</h2>
          <p className="text-center text-dark mb-12">Join us in creating awareness and building supportive communities.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{event.name}</h3>
                  <div className="flex items-center gap-2 text-muted mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <button className="bg-tertiary text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90 transition">
                  Register
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;