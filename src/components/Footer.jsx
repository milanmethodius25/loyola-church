import { Link } from 'react-router-dom';

const footerLinks = [
    {
        group: 'About',
        links: [
            { label: 'About Us', path: '/about' },
            { label: 'Parish Info', path: '/parish-info' },
        ],
    },
    {
        group: 'Parish Life',
        links: [
            { label: 'Mass Timings', path: '/mass-timings' },
            { label: 'Feast Days', path: '/feast-days' },
            { label: 'Announcements', path: '/announcements' },
        ],
    },
    {
        group: 'Media',
        links: [
            { label: 'Gallery', path: '/gallery' },
            { label: 'Videos', path: '/videos' },
        ],
    },
    {
        group: 'Connect',
        links: [
            { label: 'Prayer Request', path: '/prayer-request' },
            { label: 'Contact Us', path: '/contact' },
        ],
    },
];

function Footer() {
    return (<footer className="bg-gray-950 border-t-2 border-yellow-500">

        ```
        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* About */}
            <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-lg">
                        LC
                    </div>
                    <div>
                        <h3 className="text-yellow-400 font-bold text-sm">
                            Loyola Church
                        </h3>
                        <p className="text-gray-500 text-xs">
                            Hanumantharayan Kottai, Dindigul
                        </p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                    St. Ignatius of Loyola Church is located in Hanumantharayankottai,
                    Dindigul. A vibrant community dedicated to spreading God's love.
                </p>

                {/* Contact */}
                <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-400">
                        <span className="text-yellow-500">📍</span>
                        <p>Hanumantharayan Kottai,<br />Dindigul – 624002.</p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-yellow-500">📞</span>
                        <a href="tel:8072802711" className="hover:text-yellow-400">
                            8072802711
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-yellow-500">✉️</span>
                        <a
                            href="mailto:milanmethodius@gmail.com"
                            className="hover:text-yellow-400 text-xs"
                        >
                            milanmethodius@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
                <div key={section.group}>
                    <h4 className="text-yellow-400 text-xs font-bold mb-5 border-b border-yellow-900 pb-2">
                        {section.group}
                    </h4>

                    <ul className="space-y-3">
                        {section.links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="text-gray-400 text-sm hover:text-yellow-400 flex gap-2"
                                >
                                    <span className="text-yellow-700">→</span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-5 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex gap-3 flex-wrap justify-center">

                    <a
                        href="https://www.vaticannews.va/en.html"
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-500 text-xs border border-yellow-800 px-3 py-1.5 hover:bg-yellow-500 hover:text-gray-900"
                    >
                        Vatican News ↗
                    </a>

                    <a
                        href="http://chengaidiocese.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-500 text-xs border border-yellow-800 px-3 py-1.5 hover:bg-yellow-500 hover:text-gray-900"
                    >
                        Chengai Diocese ↗
                    </a>

                    <Link
                        to="/admin/login"
                        className="text-gray-600 text-xs border border-gray-800 px-3 py-1.5 hover:text-yellow-400"
                    >
                        🔐 Admin
                    </Link>

                </div>

                <p className="text-gray-600 text-xs text-center">
                    Copyright © {new Date().getFullYear()} Loyola Church, Dindigul.
                </p>

            </div>
        </div>

    </footer>

    );
}

export default Footer;
