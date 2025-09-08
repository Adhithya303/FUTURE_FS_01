import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', level: 70, color: 'bg-blue-600' },
    { name: 'C Programming', level: 85, color: 'bg-gray-600' },
    { name: 'HTML & CSS', level: 80, color: 'bg-orange-500' },
    { name: 'SQL', level: 75, color: 'bg-green-600' },
    { name: 'Java', level: 50, color: 'bg-red-500' },
  ];

  const certifications = [
    {
      name: "Ignite Bootcamp Entrepreneurship Certificate",
      link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=688cd0759d9dbb09073363c3"
    },
    {
      name: "Databases and SQL for Data Science with Python - IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/XYBIHV9H394M"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications & Courses */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications & Courses</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></div>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 group-hover:underline"
                      >
                        {cert.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;