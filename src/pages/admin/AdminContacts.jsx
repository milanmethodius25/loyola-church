import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const API_URL = 'https://mass-backend.onrender.com/api/v1/contact/all';

function AdminContacts() {
    const { token } = useAuth();
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL, {
            headers: { 'x-auth-token': token },
        })
            .then((res) => res.json())
            .then((data) => {
                setContacts(data?.data || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [token]);

    return (<div className="min-h-screen bg-amber-50 px-8 py-12"> <div className="max-w-4xl mx-auto">

        ```
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                    ✝ Admin Panel
                </p>

                <h1 className="text-3xl font-bold text-amber-900">
                    Contact Messages
                </h1>
            </div>

            <Link
                to="/admin/dashboard"
                className="text-yellow-600 text-sm hover:text-yellow-500 transition font-bold"
            >
                ← Dashboard
            </Link>
        </div>

        {/* Loading Spinner */}
        {loading && (
            <div className="flex justify-center py-20">
                <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            </div>
        )}

        {/* Contact List */}
        <div className="space-y-4">
            {contacts.map((item, index) => (
                <div
                    key={item._id}
                    className="bg-white border-l-4 border-yellow-500 p-6 shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                            {item?.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <h3 className="font-bold text-amber-900">
                                {item?.name}
                            </h3>

                            <p className="text-gray-400 text-xs">
                                ✉️ {item?.email}
                            </p>
                        </div>

                        <span className="ml-auto text-gray-400 text-xs bg-gray-100 px-2 py-1 rounded">
                            #{index + 1}
                        </span>
                    </div>

                    <div className="bg-amber-50 border border-yellow-100 p-4 rounded">
                        <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-2">
                            Message
                        </p>

                        <p className="text-gray-700 leading-relaxed italic">
                            "{item?.description}"
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>
    </div>

    );
}

export default AdminContacts;
