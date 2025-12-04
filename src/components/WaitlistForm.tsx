import React, { useState } from 'react';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-pastel-green/50 p-6 rounded-hand border-2 border-bear-dark text-center animate-bounce">
                <p className="text-xl font-bold text-bear-dark">Yay! You're on the list! 🐻</p>
                <p className="text-sm mt-2">We'll let you know when we launch.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm underline hover:text-bear-brown"
                >
                    Add another email
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-4">
            <div className="relative group">
                <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-bear-dark rounded-hand text-lg focus:outline-none focus:ring-4 focus:ring-pastel-yellow transition-all shadow-soft group-hover:shadow-hard placeholder:text-bear-light"
                    required
                />
                <div className="absolute -top-3 -right-2 bg-pastel-pink text-xs px-2 py-1 rounded-full border border-bear-dark transform rotate-12 hidden group-hover:block transition-all">
                    No spam, promise!
                </div>
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-bear-brown text-cream text-xl font-bold rounded-hand border-2 border-bear-dark shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <span className="animate-spin">🍯</span> Saving...
                    </>
                ) : (
                    <>
                        Join the Waitlist <span className="text-2xl">✨</span>
                    </>
                )}
            </button>
        </form>
    );
};

export default WaitlistForm;
