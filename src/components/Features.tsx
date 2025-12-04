import React from 'react';

const features = [
    {
        title: "No More Lost Receipts",
        description: "Snap a pic, and we'll keep it safe. Like a bear with honey.",
        icon: "🧾",
        color: "bg-pastel-blue",
        rotate: "-rotate-2"
    },
    {
        title: "No Awkward Math",
        description: "We calculate who owes who instantly. Save friendships, split bills.",
        icon: "🧮",
        color: "bg-pastel-pink",
        rotate: "rotate-1"
    },
    {
        title: "Just Plain Cute",
        description: "Finance apps are boring. We made one that makes you smile.",
        icon: "🐻",
        color: "bg-pastel-green",
        rotate: "-rotate-1"
    }
];

const Features: React.FC = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold text-bear-dark">
                    Why BearSplit?
                    <span className="block text-2xl mt-2 font-normal text-bear-brown transform -rotate-2">
                        (Besides the cute bear)
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-hand border-2 border-bear-dark shadow-hard hover:shadow-soft transition-all hover:-translate-y-2 ${feature.color} ${feature.rotate}`}
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-bear-dark">{feature.title}</h3>
                            <p className="text-lg text-bear-dark/80 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
