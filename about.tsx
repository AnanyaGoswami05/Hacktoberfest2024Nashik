import React from 'react';
import { Calendar, MapPin, Users, Code, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-800 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-8">About Hacktoberfest Nashik</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">What is Hacktoberfest Nashik?</h2>
          <p className="text-lg mb-4">
            Hacktoberfest Nashik is a month-long celebration of open source software, bringing together developers, designers, and tech enthusiasts from Nashik and beyond. It's part of the global Hacktoberfest event, encouraging participation in the open source community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start">
              <Calendar className="w-8 h-8 mr-4 text-yellow-300" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Event Date</h3>
                <p>October 1-31, 2023</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start">
              <MapPin className="w-8 h-8 mr-4 text-yellow-300" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>Nashik, Maharashtra, India (with virtual participation options)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Users className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p>Sign up on the official Hacktoberfest website and join our local Nashik community.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Code className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Contribute</h3>
              <p>Make four quality pull requests to participating open source projects during October.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Award className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p>Complete the challenge to earn a limited edition T-shirt and exclusive Nashik community perks.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Aarti Patil", role: "Event Organizer" },
              { name: "Rahul Sharma", role: "Technical Lead" },
              { name: "Priya Deshmukh", role: "Community Manager" },
              { name: "Amit Joshi", role: "Sponsor Relations" }
            ].map((member, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
                <img
                  src={https://i.pravatar.cc/150?img=${index + 1}}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["DigitalOcean", "GitHub", "Dev.to", "Intel"].map((sponsor, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
                <img
                  src={https://placehold.co/200x100/ffffff/000000?text=${sponsor}}
                  alt={${sponsor} logo}
                  className="h-12"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-lg mb-6">
            Be part of the vibrant Hacktoberfest Nashik community! Connect with fellow developers, learn from experts, and contribute to exciting open source projects.
          </p>
          <div className="flex justify-center">
            <a
              href="#join-now"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
            >
              <Heart className="w-5 h-5 mr-2" />
              Join Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;