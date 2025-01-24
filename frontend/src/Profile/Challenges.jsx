// import React from 'react';
// import * as Tooltip from '@radix-ui/react-tooltip';
// import { FaCamera, FaRecycle, FaShareAlt, FaExchangeAlt, FaTrashAlt, FaCalendarCheck } from 'react-icons/fa';
// import Sidebar from './Sidebar'; // Assuming Sidebar component exists

// const Challenges = () => {
//   return (
//     <Tooltip.Provider>
//       <div className="relative flex min-h-screen bg-gradient-to-br from-green-100 via-teal-200 to-blue-200">
//         {/* Sidebar Component (Always visible on the left) */}
//         <div className="w-64 bg-green-800 shadow-xl fixed left-0 top-0 h-full">
//           <Sidebar />
//         </div>

//         {/* Main content area */}
//         <div className="flex-1 ml-64 bg-gradient-to-t from-green-300 via-teal-100 to-blue-200 flex items-center justify-center">
//           <div className="container mx-auto p-8">

//             <section className="mb-16">
//               <h2 className="text-3xl font-semibold text-green-900 mb-8">Weekly Challenges</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <ChallengeCard title="5 Photos a Day Challenge" description="Capture and share 5 photos each day of creative ways you're using reusable cups, bottles, or alternatives." icon={<FaCamera />} />
//                 <ChallengeCard title="Eco-Action of the Day" description="Complete one eco-friendly action each day and document it." icon={<FaRecycle />} />
//                 <ChallengeCard title="Social Media Shoutout" description="Post about your sustainable habits every day for a week." icon={<FaShareAlt />} />
//                 <ChallengeCard title="Cup Swap Challenge" description="Swap a paper cup for a reusable one each day for a week." icon={<FaExchangeAlt />} />
//                 <ChallengeCard title="Waste-Free Lunch Challenge" description="Pack a zero-waste lunch and avoid paper cups." icon={<FaTrashAlt />} />
//                 <ChallengeCard title="7 Days, 7 Cups Challenge" description="Use a different reusable cup every day for 7 days." icon={<FaCalendarCheck />} />
//               </div>
//             </section>

//             <section>
//               <h2 className="text-3xl font-semibold text-green-900 mb-8">Other Challenges</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <ChallengeCard title="Plastic-Free Week" description="Avoid single-use plastic cups and straws for an entire week." icon={<FaRecycle />} />
//                 <ChallengeCard title="Green Commute Challenge" description="Use sustainable transportation methods and avoid disposable cups." icon={<FaShareAlt />} />
//                 <ChallengeCard title="Sustainability Learning Challenge" description="Learn about sustainability and share what you’ve learned." icon={<FaCalendarCheck />} />
//                 <ChallengeCard title="Cup Reduction Challenge" description="Track and reduce your paper cup usage by 50% this week." icon={<FaTrashAlt />} />
//                 <ChallengeCard title="Community Engagement Challenge" description="Encourage others to join the movement and reduce paper cup usage." icon={<FaShareAlt />} />
//                 <ChallengeCard title="Upcycle a Cup Challenge" description="Repurpose a paper cup into something creative or useful." icon={<FaRecycle />} />
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </Tooltip.Provider>
//   );
// };

// const ChallengeCard = ({ title, description, icon }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-all transform hover:scale-105">
//       <div className="flex items-center mb-4">
//         <div className="text-4xl text-green-500 mr-4">{icon}</div>
//         <h3 className="text-xl font-semibold text-green-800">{title}</h3>
//       </div>
//       <p className="text-sm text-gray-700 mb-4">{description}</p>
//       <Tooltip.Root>
//         <Tooltip.Trigger asChild>
//           <button className="text-green-500 hover:text-green-700 transition duration-200">
//             Learn More
//           </button>
//         </Tooltip.Trigger>
//         <Tooltip.Content side="top" className="bg-green-600 text-white p-2 rounded-md">
//           Click here to view more details about this challenge.
//         </Tooltip.Content>
//       </Tooltip.Root>
//     </div>
//   );
// };

// export default Challenges;


import React, { useState, useEffect } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  FaCamera,
  FaRecycle,
  FaShareAlt,
  FaExchangeAlt,
  FaTrashAlt,
  FaCalendarCheck,
} from 'react-icons/fa';
import Sidebar from './Sidebar'; // Assuming Sidebar component exists
import { getResponseGemini } from '../../../backend/routes/Gemini'; // Import Gemini API integration

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState('Beginner'); // Replace with dynamic user level

  // Fetch challenges dynamically based on difficulty level
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const prompt = `Generate a list of sustainability challenges suitable for a ${difficultyLevel} user. Include a title, a brief description, and a unique aspect for each challenge.`;
        const response = await getResponseGemini({ prompt });
        const parsedChallenges = response?.data?.challenges || [];
        setChallenges(parsedChallenges);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, [difficultyLevel]);

  return (
    <Tooltip.Provider>
      <div className="relative flex min-h-screen bg-gradient-to-br from-green-100 via-teal-200 to-blue-200">
        {/* Sidebar Component (Always visible on the left) */}
        <div className="w-64 bg-green-800 shadow-xl fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 ml-64 bg-gradient-to-t from-green-300 via-teal-100 to-blue-200 flex items-center justify-center">
          <div className="container mx-auto p-8">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-green-900 mb-8">
                {difficultyLevel} Challenges
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {challenges.length > 0 ? (
                  challenges.map((challenge, index) => (
                    <ChallengeCard
                      key={index}
                      title={challenge.title}
                      description={challenge.description}
                      icon={getIconByTitle(challenge.title)}
                    />
                  ))
                ) : (
                  <p className="text-center text-green-700">
                    Loading challenges...
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

const ChallengeCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-all transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="text-4xl text-green-500 mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="text-green-500 hover:text-green-700 transition duration-200">
            Learn More
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" className="bg-green-600 text-white p-2 rounded-md">
          Click here to view more details about this challenge.
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
};

// Function to get icons based on the title (customize as needed)
const getIconByTitle = (title) => {
  if (title.toLowerCase().includes('photo')) return <FaCamera />;
  if (title.toLowerCase().includes('recycle')) return <FaRecycle />;
  if (title.toLowerCase().includes('social')) return <FaShareAlt />;
  if (title.toLowerCase().includes('swap')) return <FaExchangeAlt />;
  if (title.toLowerCase().includes('waste')) return <FaTrashAlt />;
  if (title.toLowerCase().includes('day')) return <FaCalendarCheck />;
  return <FaRecycle />; // Default icon
};

export default Challenges;
