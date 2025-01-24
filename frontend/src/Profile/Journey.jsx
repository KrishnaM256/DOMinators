import React, { useState } from 'react';
import { FaCheck, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar'; // Assuming Sidebar component exists
import Confetti from 'react-confetti'; // Importing the confetti package

const Journey = () => {
  const [completed, setCompleted] = useState(3); // Example: 3 challenges done
  const totalChallenges = 6; // Total number of challenges

  const handleChallengeClick = (index) => {
    if (index <= completed) {
      setCompleted(index + 1); // Mark challenge as complete when clicked
    }
  };

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600">
      {/* Sidebar Component (Always visible on the left) */}
      <div className="w-64 bg-indigo-900 shadow-xl fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64 bg-gradient-to-t from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="container mx-auto p-8">

          {/* Confetti Explosion for last stage */}
          {completed === totalChallenges && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}

          {/* Progress Bar */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Your Progress</h2>
            <br />
            <div className="w-full h-4 bg-gray-300 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-teal-400 rounded-full"
                style={{ width: `${(completed / totalChallenges) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-green-500">{completed} of {totalChallenges} Challenges Completed!</p>
          </div>

          {/* Roadmap */}
          <section className="mb-20">
            <div className="relative flex items-center justify-between mb-16">
              {/* Roadmap Path */}
              <div className="absolute w-full h-2 bg-gray-300 rounded-full top-1/2" />
              {/* Stages */}
              {Array.from({ length: totalChallenges }).map((_, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center justify-center w-16 h-16 rounded-full text-white cursor-pointer transition-all duration-300 ease-in-out ${
                    index < completed
                      ? 'bg-gradient-to-r from-green-500 to-teal-400 scale-110 shadow-lg'
                      : 'bg-gray-400'
                  }`}
                  onClick={() => handleChallengeClick(index)}
                  animate={{
                    scale: index < completed ? [1, 1.3, 1] : 1,
                    rotate: index < completed ? [0, 360, 0] : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {index < completed ? (
                      <FaCheck className="text-2xl animate-pulse" />
                    ) : (
                      <FaTrophy className="text-2xl" />
                    )}
                  </div>
                  {/* Stage Label */}
                  <div className="absolute top-20 text-sm text-center w-full font-semibold text-indigo-700">{`Stage ${index + 1}`}</div>
                </motion.div>
              ))}
            </div>

            {/* Stage Description */}
            {completed === totalChallenges ? (
              <motion.div
                className="text-center mt-8 text-2xl font-semibold text-green-600"
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                🎉 You’ve completed all stages! 🚀
              </motion.div>
            ) : (
              <motion.div
                className="text-center mt-8 text-xl font-semibold text-gray-700"
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Keep going! You’ve completed {completed} stages so far. 🏁
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Journey;
