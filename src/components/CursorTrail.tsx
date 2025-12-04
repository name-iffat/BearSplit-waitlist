import { useEffect, useState } from 'react';

interface Trail {
    id: number;
    x: number;
    y: number;
    emoji: string;
}

const emojis = ['🍯', '🐻', '🐝'];

export default function CursorTrail() {
    const [trails, setTrails] = useState<Trail[]>([]);
    const [nextId, setNextId] = useState(0);

    useEffect(() => {
        let throttleTimeout: number | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            if (throttleTimeout) return;

            throttleTimeout = window.setTimeout(() => {
                throttleTimeout = null;
            }, 300); // Increased from 100ms to 300ms to reduce emoji density

            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const newTrail: Trail = {
                id: nextId,
                x: e.clientX,
                y: e.clientY,
                emoji,
            };

            setNextId((prev) => prev + 1);
            setTrails((prev) => [...prev, newTrail]);

            // Remove trail after animation
            setTimeout(() => {
                setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (throttleTimeout) clearTimeout(throttleTimeout);
        };
    }, [nextId]);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {trails.map((trail) => (
                <div
                    key={trail.id}
                    className="absolute"
                    style={{
                        left: trail.x,
                        top: trail.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <span className="text-2xl animate-fade-out">
                        {trail.emoji}
                    </span>
                </div>
            ))}
        </div>
    );
}
