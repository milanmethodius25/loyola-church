import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const navItems = [
    { label: 'Home', path: '/' },
    {
        label: 'About',
        children: [
            { label: 'About Us', path: '/about' },
            { label: 'Parish Info', path: '/parish-info' },
        ],
    },
    {
        label: 'Parish Life',
        children: [
            { label: 'Mass Timings', path: '/mass-timings' },
            { label: 'Feast Days', path: '/feast-days' },
            { label: 'Announcements', path: '/announcements' },
        ],
    },
    {
        label: 'Media',
        children: [
            { label: 'Gallery', path: '/gallery' },
            { label: 'Videos', path: '/videos' },
        ],
    },
    {
        label: 'Connect',
        children: [
            { label: 'Prayer Request', path: '/prayer-request' },
            { label: 'Contact Us', path: '/contact' },
        ],
    },
];

function DropdownItem({ item }) {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const isActive = item.children
        ? item.children.some((c) => c.path === location.pathname)
        : location.pathname === item.path;

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!item.children) {
        return (
            <Link
                to={item.path}
                className={`text-sm px-4 py-2 transition font-medium tracking-wide
          ${isActive
                        ? 'text-yellow-400 border-b-2 border-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className={`text-sm px-4 py-2 transition font-medium tracking-wide flex items-center gap-1
          ${isActive
                        ? 'text-yellow-400 border-b-2 border-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
            >
                {item.label}
                <span className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                    ▾
                </span>
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute top-full left-0 mt-1 bg-gray-900 border border-yellow-900 border-t-2 border-t-yellow-500 min-w-48 shadow-xl z-50">
                    {item.children.map((child) => (
                        <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className={`block px-5 py-3 text-sm transition border-b border-gray-800 last:border-0
                ${location.pathname === child.path
                                    ? 'text-yellow-400 bg-yellow-400 bg-opacity-10'
                                    : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                                }`}
                        >
                            {child.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">

            {/* Top Banner */}
            <div className="bg-yellow-500 text-gray-900 text-center py-1 text-xs font-semibold tracking-widest">
                ✝ Welcome to St. Ignatius of Loyola Church,Hanumantharayan Kottai, Dindigul. ✝
            </div>

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-lg flex-shrink-0">
                        LC
                    </div>
                    <div>
                        <h1 className="text-yellow-400 font-bold text-sm tracking-wide leading-tight">
                            St. Ignatius of Loyola Church
                        </h1>
                        <p className="text-gray-400 text-xs">Hanumantharayan Kottai, Dindigul.</p>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <DropdownItem key={item.label} item={item} />
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-yellow-400 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-yellow-900 px-4 py-4">
                    {navItems.map((item) => (
                        <div key={item.label} className="mb-2">
                            {!item.children ? (
                                <Link
                                    to={item.path}
                                    className={`block py-3 px-4 text-sm font-medium border-b border-gray-700 transition
                    ${location.pathname === item.path
                                            ? 'text-yellow-400'
                                            : 'text-gray-300 hover:text-yellow-400'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div>
                                    <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase px-4 py-2">
                                        {item.label}
                                    </p>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.path}
                                            to={child.path}
                                            className={`block py-2 px-6 text-sm border-b border-gray-700 transition
                        ${location.pathname === child.path
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300 hover:text-yellow-400'
                                                }`}
                                        >
                                            → {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </nav>
    );
}

export default Navbar;