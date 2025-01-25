import React from 'react';
import { FaFire } from 'react-icons/fa';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'; // Import Tooltip components
import './Leaderboard.css';

const Leaderboard = () => {
  const users = [
    { rank: 1, name: 'Marion Stiedemann', cupsUsed: 200, streak: 30, challengesCompleted: 10 },
    { rank: 2, name: 'Shannon Kautzer', cupsUsed: 150, streak: 25, challengesCompleted: 8 },
    { rank: 3, name: 'Billy Mraz', cupsUsed: 100, streak: 20, challengesCompleted: 6 },
    { rank: 4, name: 'Ravi Kumar', cupsUsed: 95, streak: 18, challengesCompleted: 5 },
    { rank: 5, name: 'Priya Patel', cupsUsed: 90, streak: 22, challengesCompleted: 7 },
    { rank: 6, name: 'Amit Sharma', cupsUsed: 85, streak: 15, challengesCompleted: 4 },
    { rank: 7, name: 'Neha Deshmukh', cupsUsed: 80, streak: 14, challengesCompleted: 4 },
    { rank: 8, name: 'Vikram Singh', cupsUsed: 75, streak: 16, challengesCompleted: 3 },
    { rank: 9, name: 'Snehal Joshi', cupsUsed: 70, streak: 13, challengesCompleted: 3 },
    { rank: 10, name: 'Sushant Nair', cupsUsed: 65, streak: 12, challengesCompleted: 3 },
  ];

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* Dot grid background */}
        <div
          className="absolute -z-10 inset-0 h-full w-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%20fill%3D%22%23737373%22%2F%3E%3C%2Fsvg%3E')]"
          style={{ backgroundSize: '30px 30px' }}
        />
        <div className="flex h-screen bg-[#EFE3C2]">
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <header className="flex items-center justify-between bg-[#5C8B40] text-white px-8 py-6 shadow-lg rounded-b-2xl">
              <h1 className="text-3xl font-bold">Reusable Cups Leaderboard</h1>
            </header>

            <main className="flex-1 p-8">
              <div className="bg-white p-8 rounded-xl shadow-xl max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-center text-[#5C8B40] mb-8">Top Recyclers</h2>
                <div className="flex justify-center mb-12 space-x-10">
                  {/* Top 3 Graph Section */}
                  <div className="text-center">
                    <div className="w-28 h-28 bg-[#4A7729] rounded-full flex items-center justify-center text-white text-xl font-semibold mb-2">
                      <img src="/public/pr-1.jpg" alt="User 1" className="w-16 h-16 rounded-full object-cover" />
                    </div>
                    <p className="text-xl font-medium">Marion Stiedemann</p>
                    <p className="text-sm text-gray-600">200 uses</p>
                  </div>
                  <div className="text-center">
                    <div className="w-28 h-28 bg-[#3E6A27] rounded-full flex items-center justify-center text-white text-xl font-semibold mb-2">
                      <img src="/public/pr-2.jpg" alt="User 2" className="w-16 h-16 rounded-full object-cover" />
                    </div>
                    <p className="text-xl font-medium">Shannon Kautzer</p>
                    <p className="text-sm text-gray-600">150 uses</p>
                  </div>
                  <div className="text-center">
                    <div className="w-28 h-28 bg-[#3C7024] rounded-full flex items-center justify-center text-white text-xl font-semibold mb-2">
                      <img src="/public/pr-3.jpg" alt="User 3" className="w-16 h-16 rounded-full object-cover" />
                    </div>
                    <p className="text-xl font-medium">Billy Mraz</p>
                    <p className="text-sm text-gray-600">100 uses</p>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse text-left">
                    <thead>
                      <tr className="bg-[#5C8B40] text-white">
                        <th className="p-4 rounded-tl-lg">Rank</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Reusable Cups Used</th>
                        <th className="p-4">Streak</th>
                        <th className="p-4 rounded-tr-lg">Challenges Completed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.rank} className="hover:bg-[#F3F9F3] transition-all duration-300 ease-in-out">
                          <td className="p-4">{user.rank}</td>
                          <td className="p-4 font-semibold">{user.name}</td>
                          <td className="p-4">{user.cupsUsed}</td>
                          <td className="p-4 flex items-center justify-center">
                            <FaFire className="mr-2 text-red-500" /> {user.streak}
                          </td>
                          <td className="p-4 text-center">{user.challengesCompleted}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Leaderboard;
