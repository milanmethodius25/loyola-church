import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/youtubeLink/all';

function getYouTubeId(url) {
    try {
        if (url.includes('youtu.be/')) {
            return url.split('youtu.be/')[1].split('?')[0];
        }
        if (url.includes('youtube.com/watch')) {
            return new URL(url).searchParams.get('v');
        }
        return null;
    } catch {
        return null;
    }
}

function Videos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setVideos(data.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load videos. Please try again.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Watch & Pray
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Videos
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-500 italic">
                        Watch our Mass recordings and parish events
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 italic">Loading videos...</p>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg">❌ {error}</p>
                    </div>
                )}

                {/* Videos Grid */}
                {!loading && !error && (
                    <>
                        {videos.length === 0 ? (
                            <div className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-12 text-center">
                                <div className="text-5xl mb-4">🎥</div>
                                <h3 className="font-bold text-amber-900 text-xl mb-2">
                                    No Videos Yet
                                </h3>
                                <p className="text-gray-500 italic">
                                    Check back soon for Mass recordings and parish events.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videos.map((video, index) => {
                                    const videoId = getYouTubeId(video.url);
                                    const thumbnail = videoId
                                        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                                        : null;

                                    return (
                                        <div
                                            key={video._id}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group"
                                            onClick={() => setSelected(video)}
                                        >
                                            {/* Thumbnail */}
                                            <div className="relative overflow-hidden h-48 bg-gray-900">
                                                {thumbnail ? (
                                                    <img
                                                        src={thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span className="text-gray-500 text-4xl">🎥</span>
                                                    </div>
                                                )}
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                                                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                                                        <span className="text-white text-xl ml-1">▶</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <div className="p-4">
                                                <h3 className="font-bold text-amber-900 text-lg">
                                                    {video.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                                    <span className="text-red-500">▶</span> Click to watch
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}

            </div>

            {/* Video Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center px-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-bold text-xl">
                                {selected.title}
                            </h3>
                            <button
                                onClick={() => setSelected(null)}
                                className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 text-sm hover:bg-yellow-400 transition"
                            >
                                CLOSE ✕
                            </button>
                        </div>
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${getYouTubeId(selected.url)}?autoplay=1`}
                                title={selected.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Videos;