import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/gallery/all';

function Gallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load gallery. Please try again.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Our Moments
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">Gallery</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 italic">Loading gallery...</p>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg">❌ {error}</p>
                    </div>
                )}

                {/* Image Grid */}
                {images.map((item, index) => {
                    const isHeic = item.image_url.toLowerCase().includes('.heic');

                    return (
                        <div
                            key={item._id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group cursor-pointer overflow-hidden border border-yellow-200 border-t-4 border-t-yellow-500 bg-white shadow-sm hover:shadow-xl transition duration-300"
                            onClick={() => !isHeic && setSelected(item)}
                        >
                            <div className="overflow-hidden h-56 bg-amber-50 flex items-center justify-center">
                                {isHeic ? (
                                    <div className="text-center p-4">
                                        <div className="text-4xl mb-2">🖼️</div>
                                        <p className="text-amber-700 font-bold text-sm">Image Preview</p>
                                        <p className="text-gray-400 text-xs mt-1">HEIC format — not supported by browser</p>
                                    </div>
                                ) : (
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-amber-900 mb-1">{item.title}</h3>
                                {item.description && (
                                    <p className="text-gray-500 text-sm">{item.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}

            </div>

            {/* Lightbox Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="max-w-4xl w-full bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selected.image_url}
                            alt={selected.title}
                            className="w-full max-h-[70vh] object-contain"
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-amber-900 text-xl">{selected.title}</h3>
                                {selected.description && (
                                    <p className="text-gray-500 mt-1">{selected.description}</p>
                                )}
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                className="bg-yellow-500 text-gray-900 font-bold px-6 py-2 text-sm tracking-widest hover:bg-yellow-400 transition"
                            >
                                CLOSE ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Gallery;