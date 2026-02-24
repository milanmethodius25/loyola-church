import { useState, useEffect } from 'react';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1601136250153-e8e76cc09b2a?w=1600&q=80',
        title: 'Welcome to Loyola Church',
        subtitle: 'A place of faith, hope and love',
    },
    {
        image: 'https://images.unsplash.com/photo-1548625149-720f77dd89fe?w=1600&q=80',
        title: 'Come and Worship With Us',
        subtitle: 'Holy Mass celebrated daily in Tamil and English',
    },
    {
        image: 'https://images.unsplash.com/photo-1519620573003-8e5cde7b4e8a?w=1600&q=80',
        title: 'Divine Mercy Adoration Chapel',
        subtitle: 'Open 24 hours, 365 days a year',
    },
];

function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                />
            ))}

            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3">
                    ✝ st.Ignatius Church, Hanumantharayan kottai
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                    {slides[current].title}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl italic mb-8">
                    {slides[current].subtitle}
                </p>
                <button className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition">
                    View Mass Timings
                </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition ${index === current ? 'bg-yellow-400' : 'bg-transparent'}`}
                    />
                ))}
            </div>

        </div>
    );
}

export default Hero;