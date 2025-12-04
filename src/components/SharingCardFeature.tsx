import React from 'react';
import bearMascot from '../assets/bear-stand-kid.png';
import qrCode from '../assets/qr-code.png';

const SharingCardFeature: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-pastel-yellow/30 overflow-hidden relative">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-bear-dark mb-6 leading-tight">
                        Magic Sharing Cards <br />
                        <span className="text-bear-brown text-3xl md:text-4xl">for everyone!</span>
                    </h2>
                    <p className="text-xl text-bear-dark/80 mb-8 leading-relaxed">
                        No more "send me your bank details". <br />
                        BearSplit generates a cute, personalized card for each person. Just scan, pay, and you're done!
                    </p>
                    <div className="inline-block bg-white px-6 py-3 rounded-hand border-2 border-bear-dark shadow-soft transform rotate-1 hover:rotate-0 transition-transform cursor-default">
                        <span className="text-2xl mr-2">✨</span>
                        <span className="font-bold text-bear-dark">It's actually kinda fun</span>
                    </div>
                </div>

                {/* Visual: Bear + Card */}
                <div className="flex-1 relative flex justify-center items-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-white/50 rounded-full blur-3xl transform scale-150"></div>

                    <div className="relative z-10 group cursor-pointer">
                        {/* The Bear */}
                        <img
                            src={bearMascot}
                            alt="Koji the Bear"
                            className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full border-4 border-bear-dark shadow-hard absolute -top-16 -left-10 md:-left-16 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500 z-20 bg-cream"
                        />

                        {/* The Sharing Card */}
                        <div className="bg-white p-6 rounded-2xl border-4 border-bear-dark shadow-hard w-64 md:w-72 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">You Owe</p>
                                    <p className="text-3xl font-bold text-bear-dark">$24.50</p>
                                </div>
                                <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center text-xl animate-pulse">
                                    🍯
                                </div>
                            </div>

                            {/* QR Code */}
                            <div className="bg-bear-dark p-2 rounded-lg mb-4">
                                <img
                                    src={qrCode}
                                    alt="QR Code"
                                    className="w-full h-32 object-contain bg-white rounded"
                                />
                            </div>

                            <div className="text-center">
                                <p className="font-bold text-bear-brown text-lg">Scan to Pay</p>
                                <p className="text-xs text-gray-400 mt-1">via QR scan</p>
                            </div>

                            {/* Sparkles */}
                            <div className="absolute -top-4 -right-4 text-3xl animate-bounce">✨</div>
                            <div className="absolute bottom-10 -left-6 text-2xl animate-bounce delay-500">✨</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SharingCardFeature;
