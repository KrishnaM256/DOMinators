import React from 'react';
import { useNavigate } from 'react-router-dom';
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
                  title="30 Points Challenge"
                  description="Earn 30 points by completing eco-friendly tasks."
                  points="30"
                  rewards="Get a Dominos coupon for 2 free pizzas!"
                  image="/public/dominos.png" // Path from /public folder
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="100 Points Challenge"
                  description="Complete more eco-friendly actions to earn 100 points."
                  points="100"
                  rewards="Earn a Zomato discount of 30% on your next meal!"
                  image="/public/zomato.png" // Path from /public folder
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="Waste-Free Lunch Challenge"
                  description="Pack a zero-waste lunch and avoid paper cups."
                  points="200"
                  rewards="Get a free dessert at your favorite restaurant!"
                  image="/public/haldiram.png" // Path from /public folder
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="Say No to Paper Cups Challenge"
                  description="Refuse paper cups and bring your own reusable cup at coffee shops for a week."
                  points="150"
                  rewards="Get a Starbucks voucher for a free coffee!"
                  image="/public/starbucks.png" // Path from /public folder
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="Reusable Cup Challenge"
                  description="Use your reusable cup for at least 5 coffee purchases in a week."
                  points="250"
                  rewards="Get a 10% discount at Cafes 'R Us!"
                  image="/public/ubereats.png" // Path from /public folder
                  onComplete={handleCompleteChallenge}
                />
                <ChallengeCard
                  title="Eco-Friendly Office Challenge"
                  description="Encourage your workplace to switch to reusable cups instead of paper cups for a week."
                  points="300"
                  rewards="Get a voucher for eco-friendly office supplies!"
                  image="/public/haldiram.png" // Path from /public folder
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

const ChallengeCard = ({ title, description, points, rewards, image, onComplete }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-all transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4">
          <img src={image} alt="Company Logo" className="w-full h-full object-contain" />
        </div>
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
