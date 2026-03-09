import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/youtubeLink';
const ADMIN_PASSWORD = 'loyola2024';

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

function AdminVideos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);
    const [formData, setFormData] = useState({ title: '', url: '' });
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [deleteId, setDeleteId] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setWrongPassword(false);
        } else {
            setWrongPassword(true);
        }
    };

    const fetchVideos = () => {
        setLoading(true);
        fetch(`${API_URL}/all`)
            .then((res) => res.json())
            .then((data) => {
                setVideos(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        if (isAuthenticated) fetchVideos();
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('sending');
        setErrorMsg('');

        try {
            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ title: '', url: '' });
                fetchVideos();
            } else {
                const messages = data.errors
                    ? data.errors.map((e) => e.msg).join(', ')
                    : data.error || 'Something went wrong.';
                setErrorMsg(messages);
                setSubmitStatus('error');
            }
        } catch {
            setErrorMsg('Network error.');
            setSubmitStatus('error');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this video?')) return;
        try {
            await fetch(`${API_URL}/delete/${id}`, { method: 'DELETE' });
            fetchVideos();
        } catch {
            alert('Failed to delete.');
        }
    };

    // Password Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-900 pt-28 pb-20 px-8 flex items-center justify-center">
                <div className="bg-white border-t-4 border-yellow-500 p-10 w-full max-w-sm">
                    <div className="text-center mb-8">
                        <div className="text-4xl mb-3">🔐</div>
                        <h2 className="font-bold text-amber-900 text-2xl">Admin Access</h2>
                        <p className="text-gray-500 text-sm mt-2">Manage YouTube Videos</p>
                    </div>
                    {wrongPassword && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 mb-4 rounded">
                            ❌ Wrong password.
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter admin password"
                            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                            ✝ Admin Panel
                        </p>
                        <h1 className="text-3xl font-bold text-amber-900">
                            Manage Videos
                        </h1>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-red-500 text-white text-xs font-bold px-4 py-2 hover:bg-red-400 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Add Video Form */}
                <div className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8 mb-10">
                    <h3 className="font-bold text-amber-900 text-xl mb-6">
                        ➕ Add New Video
                    </h3>

                    {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 mb-4 text-sm rounded">
                            ✅ Video added successfully!
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-4 text-sm rounded">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Video Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                                placeholder="e.g. Christmas Mass 2024"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                YouTube URL *
                            </label>
                            <input
                                type="url"
                                value={formData.url}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                required
                                placeholder="https://youtu.be/... or https://youtube.com/watch?v=..."
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitStatus === 'sending'}
                            className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50"
                        >
                            {submitStatus === 'sending' ? 'Adding...' : 'Add Video'}
                        </button>
                    </form>
                </div>

                {/* Videos List */}
                <h3 className="font-bold text-amber-900 text-xl mb-4">
                    📺 All Videos ({videos.length})
                </h3>

                {loading && (
                    <div className="flex justify-center py-10">
                        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <div className="space-y-4">
                    {videos.map((video) => {
                        const videoId = getYouTubeId(video.url);
                        const thumbnail = videoId
                            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                            : null;

                        return (
                            <div
                                key={video._id}
                                className="bg-white border-l-4 border-yellow-500 p-4 flex items-center gap-4 shadow-sm"
                            >
                                {thumbnail && (
                                    <img
                                        src={thumbnail}
                                        alt={video.title}
                                        className="w-24 h-16 object-cover flex-shrink-0 rounded"
                                    />
                                )}
                                <div className="flex-1">
                                    <h4 className="font-bold text-amber-900">{video.title}</h4>
                                    <p className="text-gray-400 text-xs mt-1 truncate">{video.url}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(video._id)}
                                    className="bg-red-500 text-white text-xs font-bold px-4 py-2 hover:bg-red-400 transition flex-shrink-0"
                                >
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default AdminVideos;