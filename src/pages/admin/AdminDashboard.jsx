import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const adminSections = [
    {
        title: 'YouTube Videos',
        description: 'Add and delete church videos',
        icon: '📺',
        path: '/admin/videos',
        color: 'border-red-400',
    },
    {
        title: 'Prayer Requests',
        description: 'View all prayer intentions',
        icon: '🙏',
        path: '/admin/prayer-requests',
        color: 'border-yellow-400',
    },
    {
        title: 'Gallery',
        description: 'Upload and manage photos',
        icon: '🖼️',
        path: '/admin/gallery',
        color: 'border-green-400',
    },
    {
        title: 'Announcements',
        description: 'Add and manage announcements',
        icon: '📢',
        path: '/admin/announcements',
        color: 'border-blue-400',
    },
    {
        title: 'Contact Messages',
        description: 'View messages from parishioners',
        icon: '✉️',
        path: '/admin/contacts',
        color: 'border-purple-400',
    },
];

function AdminDashboard() {
    const { admin, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-950">

            {/* Admin Navbar */}
            <div className="bg-gray-900 border-b border-yellow-900 px-6 py-4 flex items-center justify-between">

                {/* Logo + Title */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900">
                        LC
                    </div>

                    <div>
                        <h1 className="text-yellow-400 font-bold text-sm">
                            St. Ignatius of Loyola Church — Admin Panel
                        </h1>
                        <p className="text-gray-500 text-xs">
                            Welcome, {admin?.admin_name || admin?.adminName || 'Admin'}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="text-gray-400 text-xs hover:text-yellow-400 transition"
                    >
                        ← View Website
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white text-xs font-bold px-4 py-2 hover:bg-red-400 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                        ✝ Admin Panel
                    </p>

                    <h2 className="text-white text-3xl font-bold">
                        Dashboard
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm">
                        Manage all church content from here
                    </p>
                </div>

                {/* Section Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {adminSections.map((section, index) => (
                        <Link
                            key={index}
                            to={section.path}
                            className={`bg-gray-900 border border-gray-800 border-t-4 ${section.color} p-6 hover:bg-gray-800 transition duration-300 group`}
                        >
                            <div className="text-4xl mb-4">{section.icon}</div>

                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition">
                                {section.title}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                {section.description}
                            </p>

                            <p className="text-yellow-600 text-xs mt-4 font-bold tracking-widest">
                                MANAGE →
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;