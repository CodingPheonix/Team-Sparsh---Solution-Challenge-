import React, { JSX } from 'react';

const page = (): JSX.Element => {
  const teamMembers = [
    {
      name: 'Puskar Kumar Prasad',
      role: 'Database Administrator',
      special_role: 'Team Leader',
      course: 'B.Tech Computer Science',
      image: './Puskar_Kumar_Prasad_Profile.jpg',
    },
    {
      name: 'Sayan Biswas',
      role: 'Frontend Developer',
      course: 'B.Tech Computer Science',
      image: './Sayan_Biswas_Profile.jpg',
    },
    {
      name: 'Ranit Das',
      role: 'Backend Developer',
      course: 'B.Tech Computer Science',
      image: './Ranit_das_profile.jpg',
    },
    {
      name: 'Sohom Das',
      role: 'ML Engineer',
      course: 'B.Tech Computer Science',
      image: './Sohom_Das_Profile.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl text-center font-bold mb-2">{member.name}</h2>
            {member.special_role && <p className="mb-2">({member.special_role})</p>}
            <p className="text-gray-600 mb-1">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.course}</p>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">ABOUT US</h1>
        <p className="mb-2">
          We are Team Sparsh, a dynamic group of enthusiastic students from the College of Engineering and Management, Kolaghat, pursuing a Bachelor of Technology in Computer Science and Engineering.
        </p>
        <p className="mb-2">
          Our passion for technology drives us to create innovative solutions that make a real difference. We are dedicated to transforming the agricultural sector through the use of cutting-edge satellite technology, advanced soil analysis, and accurate weather data.
        </p>
        <p className="mb-2">
          By combining these modern tools, our goal is to empower farmers with actionable insights that can boost productivity, improve resource management, and promote sustainable farming practices.
        </p>
        <p>
          Join us on our journey as we explore new frontiers in agriculture, paving the way for a greener, more sustainable future.
        </p>
      </div>
    </div>
  );
};

export default page;
