import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold animate-fade-in">Frontend Note</h1>
        <p className="mt-3 text-base sm:text-lg animate-slide-up">This project represents my dedicated 30-day effort to build a modern frontend UI — an intensive practice in contemporary web development techniques.</p>
      </div>
      <div className="gradient-overlay"></div>
    </header>
  );
}

export default Header;