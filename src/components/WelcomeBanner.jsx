import React from "react";

const WelcomeHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-slate-800 dark:to-slate-700 shadow-md rounded-2xl p-6 mb-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
        👋 Welcome Back!
      </h1>
      
      {/* Extra Note */}
      <h2 className="text-sm text-gray-600 dark:text-gray-100 mt-5">
        Manage your job hunt like a pro. Track every step. 🧭
      </h2>
    </div>
  );
};

export default WelcomeHeader;

