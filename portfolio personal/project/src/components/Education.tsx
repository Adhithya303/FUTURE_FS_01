import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.E Computer Science Engineering",
      institution: "PSG Institute of Technology and Applied Research",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 - 2028",
      description: "Currently pursuing Bachelor's degree in Computer Science Engineering. Actively participating in coding competitions and technical workshops.",
      gpa: "9.4"
    },
    {
      id: 2,
      degree: "Higher Secondary Education (Class 12)",
      institution: "Holy Cross Matric Higher Secondary School",
      location: "Salem, Tamil Nadu",
      period: "2022 - 2024",
      description: "Completed higher secondary education with distinction. Active leader in school clubs and community service activities.",
      gpa: "95%"
    },
    {
      id: 3,
      degree: "Secondary Education (Class 10)",
      institution: "Holy Cross Matric Higher Secondary School",
      location: "Salem, Tamil Nadu",
      period: "2020 - 2022",
      description: "Completed secondary education with excellent academic performance. Developed strong foundation in mathematics and science subjects.",
      gpa: "93.4%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600 transform md:-translate-x-0.5"></div>
            
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform md:-translate-x-2 z-10">
                  <div className="absolute inset-1 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <GraduationCap className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 leading-tight">{edu.degree}</h3>
                      </div>
                    </div>
                    
                    {/* Institution */}
                    <h4 className="font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                    
                    {/* Meta information */}
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-3 leading-relaxed">{edu.description}</p>
                    
                    {/* GPA */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-emerald-600">
                        {edu.id === 1 ? `GPA: ${edu.gpa}` : `Grade: ${edu.gpa}`}
                      </span>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;