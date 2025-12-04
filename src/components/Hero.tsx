import React from 'react';
import WaitlistForm from './WaitlistForm';
import bearMascot from '../assets/bear_mascot.jpg';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-yellow rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-pastel-pink rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-700"></div>

            <div className="max-w-4xl w-full text-center z-10">
                <div className="mb-8 relative inline-block">
                    <img
                        src={bearMascot}
                        alt="Cute Bear Mascot"
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-bear-dark shadow-hard mx-auto transform hover:rotate-6 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-hand border-2 border-bear-dark shadow-sm transform -rotate-6">
                        <span className="text-lg font-bold">Hi, I'm Koji! 🐾</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-bear-dark leading-tight">
                    Eh bro… <br />
                    <span className="text-bear-brown">Who owe who?</span> 😅
                </h1>

                <p className="text-xl md:text-2xl mb-10 text-bear-dark/80 max-w-2xl mx-auto leading-relaxed">
                    Splitting bills shouldn't feel like homework.
                    <br className="hidden md:block" />
                    Join <span className="font-bold text-bear-brown">BearSplit</span> for a cozy, stress-free way to share costs with friends.
                </p>

                <WaitlistForm />

                {/* Social Links */}
                <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
                    <a
                        href="https://buymeacoffee.com/iffathaikal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-pastel-yellow border-2 border-bear-dark rounded-hand text-bear-dark font-bold hover:shadow-hard transition-all transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        ☕ Buy me a coffee
                    </a>
                    <a
                        href="https://x.com/iffathaikal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white border-2 border-bear-dark rounded-hand text-bear-dark font-bold hover:shadow-hard transition-all transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        𝕏 Follow on X
                    </a>
                    <a
                        href="https://www.threads.com/@iffat_haikal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-pastel-pink border-2 border-bear-dark rounded-hand text-bear-dark font-bold hover:shadow-hard transition-all transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        🧵 Threads
                    </a>
                </div>

                <p className="mt-8 text-sm text-bear-light">
                    Early access coming soon • 100% Free • No corporate vibes
                </p>
            </div>
        </section>
    );
};

export default Hero;
