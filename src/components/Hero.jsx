import { useState, useEffect } from 'react';

const GALLERY_API = 'https://mass-backend.onrender.com/api/v1/gallery/all';

const defaultSlides = [
    {
        title: 'Welcome to Loyola Church',
        subtitle: 'A place of faith, hope and love',
    },
    {
        title: 'Come and Worship With Us',
        subtitle: 'Holy Mass celebrated daily in Tamil & English',
    },
    {
        title: 'Divine Mercy Adoration Chapel',
        subtitle: 'Open 24 hours, 365 days a year',
    },
];

function Hero() {
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(GALLERY_API)
            .then((res) => res.json())
            .then((data) => {
                const validImages = data.data.filter((img) => {
                    const url = img.image_url.toLowerCase();
                    return !url.endsWith('.heic') && !url.endsWith('.heif');
                });
                setImages(validImages);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (images.length === 0) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images]);

    const currentSlide = defaultSlides[current % defaultSlides.length];

    return (
        <div className="relative h-screen overflow-hidden">

            {/* Loading State */}
            {loading && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {/* Slides */}
            {images.map((img, index) => (
                <div
                    key={img._id}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${img.image_url})` }}
                />
            ))}

            {/* Fallback if no images */}
            {!loading && images.length === 0 && (
                <div className="absolute inset-0 bg-gray-900" />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-55" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3 font-semibold">
                    ✝ Loyola Church, Chromepet
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 transition-all duration-700">
                    {currentSlide.title}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl italic mb-8">
                    {currentSlide.subtitle}
                </p>
                <button className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition">
                    View Mass Timings
                </button>
            </div>

            {/* Dots */}
            {images.length > 0 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition
                ${index === current ? 'bg-yellow-400' : 'bg-transparent'}`}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Hero;