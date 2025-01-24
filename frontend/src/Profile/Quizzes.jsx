import React from 'react'
import Sidebar from './Sidebar' // Assuming Sidebar component exists

const Quizzes = () => {
  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600">
      {/* Sidebar Component (Always visible on the left) */}
      <div className="w-64 bg-indigo-900 shadow-lg fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64 flex items-start justify-center bg-gradient-to-t from-indigo-50 via-purple-50 to-pink-50 pt-16">
        <div
          className="container mx-auto max-w-5xl p-8 bg-white rounded-xl shadow-2xl"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <h2 className="text-5xl font-bold text-center text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
            Take a Quiz!
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Test your knowledge about environmental and health risks associated with paper cups.
            Click below to start the quiz!
          </p>
          <div className="flex justify-center">
            {/* Wordwall Embed */}
            <iframe
              style={{
                maxWidth: '100%',
                border: '4px solid #6D28D9',
                borderRadius: '12px',
              }}
              src="https://wordwall.net/embed/a67fb785dfef406097a2f1c043ff7fce?themeId=1&templateId=5&fontStackId=0"
              width="700"
              height="500"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quizzes
