import React from 'react'
import AuthHeader from '../organisms/AuthHeader'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="transition-all duration-300">
        <AuthHeader></AuthHeader>
      </div>
      <main className="font-regular flex flex-1 w-full p-4 md:p-6 overflow-auto">
        {children}
      </main>
      {/* De momento no hay footer */}
      {/*
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 {APP_NAME}. All rights reserved.</p>
      </footer>
      */}
    </div>
  )
}

export default AuthLayout
