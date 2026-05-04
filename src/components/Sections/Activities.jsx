import ScrollReveal from '../UI/ScrollReveal';
import {
  GraduationCap,
  Users,
  School,
  BookOpen,
  Phone,
  Mic,
  Globe,
  Handshake,
} from 'lucide-react';

const Activities = () => {
  const activitiesList = [
    {
      title: 'Sensitization Trainings',
      desc: 'For schools, churches, unions, associations, and workplaces. Actionable insights into mental health.',
      icon: GraduationCap,
    },
    {
      title: 'Support Group Meetings',
      desc: 'Monthly safe, non‑judgmental space for the general population to share and learn.',
      icon: Users,
    },
    {
      title: 'Mental Health Clubs',
      desc: 'For secondary school students – fostering conversations, peer support, and tools to thrive.',
      icon: School,
    },
    {
      title: 'Quest Magazine',
      desc: '18‑page publication in 7+ Nigerian languages, raising awareness and sharing experiences.',
      icon: BookOpen,
    },
    {
      title: 'Mental Health Check‑Up Call',
      desc: 'Weekly check‑up call – sign up, choose your day, minimum 30 seconds, cancel anytime.',
      icon: Phone,
    },
    {
      title: 'Mental Health Live',
      desc: 'Annual fundraising event with music, dance, spoken word, games – all mental health themed.',
      icon: Mic,
    },
    {
      title: 'Global Mental Health Activities',
      desc: 'Commemorating World Suicide Prevention Day, World Mental Health Day, and more.',
      icon: Globe,
    },
    {
      title: 'Strategic Partnerships',
      desc: 'Policy advocacy, joint events, referrals with stakeholders across Nigeria.',
      icon: Handshake,
    },
  ];

  return (
    <section id="activities" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Our Activities</h2>
          <p className="text-center text-dark max-w-2xl mx-auto mb-12">
            Through these programs, we create pathways to mental well‑being across Nigeria.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activitiesList.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-light p-6 rounded-lg shadow-md hover:shadow-xl transition border-b-4 border-primary group">
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-dark mb-2">{activity.title}</h3>
                  <p className="text-muted text-sm">{activity.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;