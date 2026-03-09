import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/notification/all';

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setNotifications(data.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load announcements. Please try again.');
                setLoading(false);
            });
    }, []);

    const activeNotifications = notifications.filter((n) => n.is_active);
    const inactiveNotifications = notifications.filter((n) => !n.is_active);

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Parish Updates
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Announcements
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-500 italic">
                        Stay updated with the latest news from our parish
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 italic">Loading announcements...</p>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg">❌ {error}</p>
                    </div>
                )}

                {/* Active Announcements */}
                {!loading && !error && (
                    <>
                        {activeNotifications.length > 0 && (
                            <div className="mb-10">
                                <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Active Announcements ({activeNotifications.length})
                                </h2>
                                <div className="space-y-4">
                                    {activeNotifications.map((item, index) => (
                                        <div
                                            key={item._id}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                            className="bg-white border-l-4 border-yellow-500 p-6 shadow-sm hover:shadow-md transition duration-300"
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="font-bold text-amber-900 text-lg leading-tight">
                                                    {item.title}
                                                </h3>
                                                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                                                    Active
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {item.message}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* No Active Announcements */}
                        {activeNotifications.length === 0 && !loading && (
                            <div
                                data-aos="fade-up"
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-12 text-center mb-10"
                            >
                                <div className="text-5xl mb-4">📢</div>
                                <h3 className="font-bold text-amber-900 text-xl mb-2">
                                    No Active Announcements
                                </h3>
                                <p className="text-gray-500 italic">
                                    Check back soon for updates from the parish.
                                </p>
                            </div>
                        )}

                        {/* Past Announcements */}
                        {inactiveNotifications.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full" />
                                    Past Announcements ({inactiveNotifications.length})
                                </h2>
                                <div className="space-y-4">
                                    {inactiveNotifications.map((item, index) => (
                                        <div
                                            key={item._id}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                            className="bg-white border-l-4 border-gray-200 p-6 opacity-70 hover:opacity-100 transition duration-300"
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="font-bold text-gray-600 text-lg leading-tight">
                                                    {item.title}
                                                </h3>
                                                <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                                                    Ended
                                                </span>
                                            </div>
                                            <p className="text-gray-500 leading-relaxed mb-4">
                                                {item.message}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Total Count */}
                        <div
                            data-aos="fade-up"
                            className="mt-10 bg-gray-900 text-white p-6 text-center border-t-4 border-yellow-500"
                        >
                            <p className="text-yellow-400 font-bold mb-1">
                                📢 Total Announcements
                            </p>
                            <p className="text-4xl font-bold text-white">
                                {notifications.length}
                            </p>
                            <p className="text-gray-400 text-sm mt-1 italic">
                                For more information please contact the parish office
                            </p>
                        </div>

                    </>
                )}

            </div>
        </div>
    );
}

export default Notifications;