import React from 'react'
import Sidebar from './Sidebar' // Assuming Sidebar component exists

const Quizzes = () => {
  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600">
      {/* Sidebar Component (Always visible on the left) */}
      <div className="w-64 bg-indigo-900 shadow-xl fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64 bg-gradient-to-t from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-6">
            Quizzes
          </h2>
          <div className="flex justify-center">
            {/* Wordwall Embed */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/embed/ab061fd76de14f31a51fb3adc07f3a56?themeId=21&templateId=69&fontStackId=0"
              width="500"
              height="380"
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
