import React, { useState, useEffect } from 'react';
import { FaCheck, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar'; // Assuming Sidebar component exists
import Confetti from 'react-confetti'; // Importing the confetti package
import { useSelector } from 'react-redux';

const Journey = () => {
  const totalChallenges = 6; // Total number of challenges
  const [completedChallenges, setCompletedChallenges] = useState(3); // Start at stage 3
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Automatically advance to stage 4 as soon as component is mounted
    if (completedChallenges < totalChallenges) {
      setAnimating(true);
      const nextStage = completedChallenges + 1;
      setTimeout(() => {
        setCompletedChallenges(nextStage);
        setAnimating(false); // Stop the animation after transition
      }, 500); // Adjust the delay for the animation effect
    }
  }, [completedChallenges]); // This effect runs whenever completedChallenges changes

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
          {completedChallenges === totalChallenges && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}

          {/* Progress Bar */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Your Progress</h2>
            <br />
            <div className="w-full h-4 bg-gray-300 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-teal-400 rounded-full"
                style={{ width: `${(completedChallenges / totalChallenges) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-green-500">{completedChallenges} of {totalChallenges} Challenges Completed!</p>
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
                    index < completedChallenges
                      ? 'bg-gradient-to-r from-green-500 to-teal-400 scale-110 shadow-lg'
                      : 'bg-gray-400'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: animating && index === completedChallenges ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {index < completedChallenges ? (
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
            {completedChallenges === totalChallenges ? (
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
                Keep going! You’ve completed {completedChallenges} stages so far. 🏁
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Journey;
