import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/parishInfo/all';

function ParishInfo() {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data.data[0]);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load parish information.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Our Parish
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Parish Information
                    </h1>
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
                        <p className="text-gray-500 italic">Loading parish info...</p>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg">❌ {error}</p>
                    </div>
                )}

                {/* Content */}
                {!loading && !error && info && (
                    <div className="space-y-6">

                        {/* Parish Name Card */}
                        <div
                            data-aos="fade-up"
                            className="bg-gray-900 text-white p-10 text-center border-t-4 border-yellow-500"
                        >
                            <div className="text-5xl mb-4">⛪</div>
                            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                                {info.parish_name}
                            </h2>
                            <p className="text-gray-400 italic">
                                Established in {info.established_year}
                            </p>
                        </div>

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Address */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8"
                            >
                                <div className="text-3xl mb-4">📍</div>
                                <h3 className="font-bold text-amber-900 text-lg mb-2 tracking-wide">
                                    Address
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {info.address}
                                </p>
                            </div>

                            {/* Phone */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8"
                            >
                                <div className="text-3xl mb-4">📞</div>
                                <h3 className="font-bold text-amber-900 text-lg mb-2 tracking-wide">
                                    Phone
                                </h3>
                                <a
                                    href={`tel:${info.phone}`}
                                    className="text-yellow-600 font-bold text-xl hover:text-yellow-500 transition"
                                >
                                    {info.phone}
                                </a>
                            </div>

                            {/* Email */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8"
                            >
                                <div className="text-3xl mb-4">✉️</div>
                                <h3 className="font-bold text-amber-900 text-lg mb-2 tracking-wide">
                                    Email
                                </h3>
                                <a
                                    href={`mailto:${info.email}`}
                                    className="text-yellow-600 font-bold hover:text-yellow-500 transition break-all"
                                >
                                    {info.email}
                                </a>
                            </div>

                            {/* Established */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8"
                            >
                                <div className="text-3xl mb-4">🕊️</div>
                                <h3 className="font-bold text-amber-900 text-lg mb-2 tracking-wide">
                                    Established
                                </h3>
                                <p className="text-yellow-600 font-bold text-xl">
                                    {info.established_year}
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Serving the community for{" "}
                                    {new Date().getFullYear() - parseInt(info.established_year)} years
                                </p>
                            </div>

                        </div>

                        {/* Bottom Quote */}
                        <div
                            data-aos="fade-up"
                            className="bg-white border-l-4 border-yellow-500 p-8 text-center"
                        >
                            <p className="text-gray-600 italic text-lg font-serif leading-relaxed">
                                "The handmaid of the Lord; be it unto me according to thy word."
                            </p>
                            <p className="text-yellow-600 font-bold mt-3 text-sm tracking-widest">
                                — Luke 1:38
                            </p>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default ParishInfo;