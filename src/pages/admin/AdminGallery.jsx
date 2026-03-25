import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const API_URL = 'https://mass-backend.onrender.com/api/v1/gallery';

function AdminGallery() {
    const { token } = useAuth();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
    });
    const [preview, setPreview] = useState(null);

    const fetchImages = () => {
        setLoading(true);
        fetch(`${API_URL}/all`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.image) {
            setErrorMsg('Please select an image.');
            setUploadStatus('error');
            return;
        }

        setUploading(true);
        setUploadStatus('idle');
        setErrorMsg('');

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('image', formData.image);

        try {
            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: { 'x-auth-token': token },
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                setUploadStatus('success');
                setFormData({ title: '', description: '', image: null });
                setPreview(null);
                fetchImages();
            } else {
                setErrorMsg(result.error || 'Upload failed.');
                setUploadStatus('error');
            }
        } catch {
            setErrorMsg('Network error. Please try again.');
            setUploadStatus('error');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this image?')) return;
        try {
            await fetch(`${API_URL}/delete/${id}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': token },
            });
            fetchImages();
        } catch {
            alert('Failed to delete.');
        }
    };

    return (
        <div className="min-h-screen bg-amber-50 px-8 py-12">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                            ✝ Admin Panel
                        </p>
                        <h1 className="text-3xl font-bold text-amber-900">
                            Manage Gallery
                        </h1>
                    </div>
                    <Link
                        to="/admin/dashboard"
                        className="text-yellow-600 text-sm hover:text-yellow-500 transition font-bold"
                    >
                        ← Dashboard
                    </Link>
                </div>

                {/* Upload Form */}
                <div className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8 mb-10">
                    <h3 className="font-bold text-amber-900 text-xl mb-6">
                        ➕ Upload New Image
                    </h3>

                    {uploadStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 mb-4 text-sm rounded">
                            ✅ Image uploaded successfully!
                        </div>
                    )}
                    {uploadStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-4 text-sm rounded">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Title *
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
                                    Description
                                </label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Short description"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                                />
                            </div>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Image * (JPG, PNG — HEIC will be converted automatically)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 bg-white"
                            />
                        </div>

                        {/* Preview */}
                        {preview && (
                            <div className="mt-2">
                                <p className="text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Preview
                                </p>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-48 h-32 object-cover border-2 border-yellow-300 rounded"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={uploading}
                            className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50"
                        >
                            {uploading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                    Uploading...
                                </span>
                            ) : (
                                '📤 Upload Image'
                            )}
                        </button>
                    </form>
                </div>

                {/* Images Grid */}
                <h3 className="font-bold text-amber-900 text-xl mb-4">
                    🖼️ All Images ({images.length})
                </h3>

                {loading && (
                    <div className="flex justify-center py-10">
                        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((item) => {
                        const isHeic = item.image_url.toLowerCase().includes('.heic');

                        return (
                            <div
                                key={item._id}
                                className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 overflow-hidden shadow-sm"
                            >
                                <div className="h-40 bg-gray-100 overflow-hidden">
                                    {isHeic ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p className="text-gray-400 text-xs text-center px-4">
                                                🖼️ HEIC format<br />not previewable
                                            </p>
                                        </div>
                                    ) : (
                                        <img
                                            src={item.image_url}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-4 flex items-start justify-between gap-2">
                                    <div>
                                        <h4 className="font-bold text-amber-900 text-sm">
                                            {item.title}
                                        </h4>
                                        {item.description && (
                                            <p className="text-gray-400 text-xs mt-1">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 hover:bg-red-400 transition flex-shrink-0"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default AdminGallery;