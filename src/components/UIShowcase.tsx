import React, { useRef, useEffect } from 'react';
import homeImg from '../assets/ui-concept/home.png';
import shareCardImg from '../assets/ui-concept/share-card.png';
import whoOweWhoImg from '../assets/ui-concept/who-owe-who.png';
import addExpenseImg from '../assets/ui-concept/add-expense.png';
import addParticipantImg from '../assets/ui-concept/add-participant.png';
import profileSettingImg from '../assets/ui-concept/profile-setting.png';

const uiScreens = [
    { img: homeImg, title: 'Home', desc: 'Your cozy dashboard' },
    { img: shareCardImg, title: 'Share Card', desc: 'Magic payment cards' },
    { img: whoOweWhoImg, title: 'Who Owes Who', desc: 'Crystal clear splits' },
    { img: addExpenseImg, title: 'Add Expense', desc: 'Quick & easy' },
    { img: addParticipantImg, title: 'Add Friends', desc: 'Build your crew' },
    { img: profileSettingImg, title: 'Profile', desc: 'Your bear den' },
];

const UIShowcase: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;
                const maxScroll = scrollWidth - clientWidth;

                // Calculate next position
                const itemWidth = 304; // 288px width + 16px gap
                let nextScroll = container.scrollLeft + itemWidth;

                // Reset to start if at the end
                if (nextScroll >= maxScroll) {
                    nextScroll = 0;
                }

                container.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth',
                });
            }
        }, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = 304;
            container.scrollBy({
                left: -itemWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = 304;
            container.scrollBy({
                left: itemWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-br from-pastel-blue/20 via-cream to-pastel-green/20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-bear-dark mb-4">
                        Peek Inside the App! 🐻📱
                    </h2>
                    <p className="text-xl text-bear-dark/80 max-w-2xl mx-auto">
                        We're designing something special. Here's a sneak peek at what we're building for you!
                    </p>
                    <div className="mt-4 inline-block bg-pastel-yellow/50 px-6 py-3 rounded-hand border-2 border-bear-dark shadow-soft transform -rotate-1">
                        <span className="font-bold text-bear-dark">🎨 Work in Progress</span>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
                    >
                        {uiScreens.map((screen, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-72 snap-center group"
                            >
                                <div className="bg-white rounded-2xl border-3 border-bear-dark shadow-hard hover:shadow-soft transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:rotate-2">
                                    <div className="aspect-[9/19] bg-gray-50 overflow-hidden relative">
                                        <img
                                            src={screen.img}
                                            alt={screen.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bear-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-4 bg-cream border-t-2 border-bear-dark">
                                        <h3 className="font-bold text-lg text-bear-dark mb-1">{screen.title}</h3>
                                        <p className="text-sm text-bear-brown">{screen.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-pastel-yellow rounded-full p-3 border-2 border-bear-dark shadow-md hover:shadow-hard transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
                        aria-label="Scroll left"
                    >
                        <span className="text-2xl">👈</span>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-pastel-yellow rounded-full p-3 border-2 border-bear-dark shadow-md hover:shadow-hard transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
                        aria-label="Scroll right"
                    >
                        <span className="text-2xl">👉</span>
                    </button>
                </div>

                <div className="text-center mt-12">
                    <p className="text-bear-dark/70 text-sm">
                        <em>✨ Auto-scrolling • Click arrows or swipe to navigate ✨</em>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UIShowcase;
