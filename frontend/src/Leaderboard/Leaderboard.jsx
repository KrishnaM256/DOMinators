import React, { useState } from 'react';
import { FaBars, FaTimes, FaFire } from 'react-icons/fa'; // Ensure FaFire is imported here
import './Leaderboard.css';

const Leaderboard = () => {
  return (
    <div className="relative min-h-screen">
      {/* Dot grid background */}
      <div
        className="absolute -z-10 inset-0 h-full w-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%20fill%3D%22%23737373%22%2F%3E%3C%2Fsvg%3E')]"
        style={{ backgroundSize: '20px 20px' }}
      />

      <div className="flex h-screen bg-[#EFE3C2]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between bg-[#85A947] text-white px-6 py-4 shadow-md">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
          </header>

          <main className="flex-1 p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-center mb-6">Reusable Cups Leaderboard</h2>
              <div className="flex justify-center mb-8">
                {/* Top 3 Graph Section */}
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#85A947] rounded-full flex items-center justify-center text-white text-lg font-bold mb-2">🥈</div>
                    <p className="text-lg font-medium">Shannon Kautzer</p>
                    <p className="text-sm">150 uses</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#3E7B27] rounded-full flex items-center justify-center text-white text-lg font-bold mb-2">🥇</div>
                    <p className="text-lg font-medium">Marion Stiedemann</p>
                    <p className="text-sm">200 uses</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#85A947] rounded-full flex items-center justify-center text-white text-lg font-bold mb-2">🥉</div>
                    <p className="text-lg font-medium">Billy Mraz</p>
                    <p className="text-sm">100 uses</p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse text-left">
                  <thead>
                    <tr className="bg-[#85A947] text-white">
                      <th className="p-4 rounded-tl-lg">Rank</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Reusable Cups Used</th>
                      <th className="p-4">Streak</th>
                      <th className="p-4 rounded-tr-lg">Challenges Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table Rows */}
                    <tr className="hover:bg-[#EFE3C2]">
                      <td className="p-4">1</td>
                      <td className="p-4">Marion Stiedemann</td>
                      <td className="p-4">200</td>
                      <td className="p-4 flex items-center justify-center">
                        <FaFire className="mr-2 text-red-500" /> 30
                      </td>
                      <td className="p-4 text-center">10</td>
                    </tr>
                    <tr className="hover:bg-[#EFE3C2]">
                      <td className="p-4">2</td>
                      <td className="p-4">Shannon Kautzer</td>
                      <td className="p-4">150</td>
                      <td className="p-4 flex items-center justify-center">
                        <FaFire className="mr-2 text-red-500" /> 25
                      </td>
                      <td className="p-4 text-center">8</td>
                    </tr>
                    <tr className="hover:bg-[#EFE3C2]">
                      <td className="p-4">3</td>
                      <td className="p-4">Billy Mraz</td>
                      <td className="p-4">100</td>
                      <td className="p-4 flex items-center justify-center">
                        <FaFire className="mr-2 text-red-500" /> 20
                      </td>
                      <td className="p-4 text-center">6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
