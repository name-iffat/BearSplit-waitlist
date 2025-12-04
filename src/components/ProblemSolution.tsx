import React from 'react';

const ProblemSolution: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold text-bear-dark">
                    The Old Way <span className="text-bear-light">vs</span> The Bear Way
                </h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* The Problem: Chaos */}
                    <div className="bg-gray-50 p-8 rounded-hand border-2 border-gray-200 relative min-h-[400px] flex flex-col items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                        <h3 className="text-2xl font-bold text-gray-500 mb-8 z-10">The Chaos 🌪️</h3>

                        {/* Chaotic Chat Bubbles */}
                        <div className="relative w-full max-w-sm h-64">
                            <div className="absolute top-0 left-0 bg-white p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-gray-300 shadow-sm transform -rotate-6 z-10 max-w-[200px]">
                                <p className="text-sm text-gray-600 font-sans">"Wait, who paid for the uber?"</p>
                            </div>
                            <div className="absolute top-12 right-4 bg-blue-50 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border border-blue-100 shadow-sm transform rotate-3 z-20 max-w-[180px]">
                                <p className="text-sm text-blue-800 font-sans">"I think I owe $15? Or $20?"</p>
                            </div>
                            <div className="absolute top-32 left-8 bg-white p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-gray-300 shadow-sm transform -rotate-2 z-30 max-w-[220px]">
                                <p className="text-sm text-gray-600 font-sans">"Did we include tax and tip? 😫"</p>
                            </div>
                            <div className="absolute bottom-4 right-10 bg-red-50 p-3 rounded-full border border-red-100 shadow-md transform rotate-12 z-40 animate-pulse">
                                <p className="text-xs text-red-600 font-bold font-sans">RECEIPT LOST?!</p>
                            </div>
                        </div>
                    </div>

                    {/* The Solution: BearSplit */}
                    <div className="bg-cream p-8 rounded-hand border-2 border-bear-dark relative min-h-[400px] flex flex-col items-center justify-center overflow-hidden shadow-soft hover:shadow-hard transition-all duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(#D4A373_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

                        <h3 className="text-2xl font-bold text-bear-dark mb-8 z-10">The Bear Way 🐻</h3>

                        {/* Neat Expense Cards */}
                        <div className="flex flex-col gap-4 w-full max-w-sm z-10">
                            <div className="bg-white p-4 rounded-xl border-2 border-pastel-green shadow-sm flex justify-between items-center transform hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-pastel-green rounded-full flex items-center justify-center text-xl">🍕</div>
                                    <div>
                                        <p className="font-bold text-bear-dark">Pizza Night</p>
                                        <p className="text-xs text-gray-500">You owe Sarah</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-bear-dark">$12.50</p>
                                    <span className="text-xs bg-pastel-green/50 px-2 py-0.5 rounded-full text-green-800">Paid ✅</span>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border-2 border-pastel-blue shadow-sm flex justify-between items-center transform hover:scale-105 transition-transform delay-75">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-pastel-blue rounded-full flex items-center justify-center text-xl">🚕</div>
                                    <div>
                                        <p className="font-bold text-bear-dark">Uber Ride</p>
                                        <p className="text-xs text-gray-500">Split with 3 others</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-bear-dark">$8.20</p>
                                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">Pending ⏳</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Sparkles */}
                        <div className="absolute top-10 right-10 text-2xl animate-bounce delay-700">✨</div>
                        <div className="absolute bottom-10 left-10 text-xl animate-bounce delay-300">✨</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
