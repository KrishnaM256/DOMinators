import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaRecycle, FaTrashAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';
import * as Tooltip from '@radix-ui/react-tooltip';

const Challenges = () => {
  const navigate = useNavigate();

  const handleCompleteChallenge = () => {
    navigate('/challenge-status'); // Redirect to the challenge status page
  };

  return (
    <Tooltip.Provider>
      <div className="relative flex min-h-screen bg-gradient-to-br from-green-100 via-teal-200 to-blue-200">
        {/* Sidebar */}
        <div className="w-64 bg-green-800 shadow-xl fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 bg-gradient-to-t from-green-300 via-teal-100 to-blue-200 flex items-center justify-center">
          <div className="container mx-auto p-8">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-green-900 mb-8">Weekly Challenges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ChallengeCard
                  title="50 Points Challenge"
                  description="Earn 50 points by completing eco-friendly tasks."
                  points="50"
                  rewards="Get a Dominos coupon for 2 free pizzas!"
                  icon={<FaCamera />}
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="100 Points Challenge"
                  description="Complete more eco-friendly actions to earn 100 points."
                  points="100"
                  rewards="Earn a Zomato discount of 30% on your next meal!"
                  icon={<FaRecycle />}
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="Waste-Free Lunch Challenge"
                  description="Pack a zero-waste lunch and avoid paper cups."
                  points="200"
                  rewards="Get a free dessert at your favorite restaurant!"
                  icon={<FaTrashAlt />}
                  onComplete={handleCompleteChallenge}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

const ChallengeCard = ({ title, description, points, rewards, icon, onComplete }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-all transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="text-4xl text-green-500 mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Points:</strong> {points}
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Rewards:</strong> {rewards}
      </p>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className="text-green-500 hover:text-green-700 transition duration-200 underline"
          >
            Learn More
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" className="bg-green-600 text-white p-2 rounded-md">
          Click here to view more details about this challenge.
        </Tooltip.Content>
      </Tooltip.Root>
      <button
        onClick={onComplete}
        className="mt-4 bg-green-600 text-white p-2 rounded-md w-full hover:bg-green-700"
      >
        Complete Challenge
      </button>
    </div>
  );
};

export default Challenges;
