import React from 'react';
import { Users, BookOpen, Microscope, Heart } from 'lucide-react';

const Clubs: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: "School Interact Club President",
      organization: "Holy Cross Matric Higher Secondary School",
      period: "Class 12",
      description: "Led community service initiatives and organized various social welfare programs. Coordinated with team members to execute successful fundraising events.",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "English Literary Association Vice President",
      organization: "Holy Cross Matric Higher Secondary School",
      period: "Class 11",
      description: "Organized literary events, debates, and creative writing competitions. Helped students develop their communication and presentation skills.",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Science And Humanities Association - Event Co-ordinator",
      organization: "PSG Institute of Technology and Applied and Research",
      period: "2024-2025",
      description: "Conducted various Quiz in college and Bridged the gap between science and humanities through interdisciplinary events.",
      icon: Microscope,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Student Volunteer",
      organization: "Team Everest NGO",
      period: "2025-present",
      description: "Actively participated in community outreach programs and educational initiatives. Contributed to making a positive impact in underprivileged communities.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Clubs & Volunteering</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond academics, I believe in giving back to the community and developing leadership skills through active participation in various clubs and volunteer activities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} mr-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 leading-tight">{activity.title}</h3>
                      <p className="text-sm text-gray-500">{activity.period}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-blue-600 mb-3">{activity.organization}</h4>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clubs;