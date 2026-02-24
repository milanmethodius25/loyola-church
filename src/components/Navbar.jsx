import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Mass Timings', path: '/mass-timings' },
    { label: 'Contact', path: '/contact' },
];

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">

            {/* Top Bar */}
            <div className="bg-yellow-500 text-gray-900 text-center py-1 text-xs font-semibold tracking-widest">
                ✝ Welcome to Loyola Church, Chromepet, Chennai ✝
            </div>

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-lg">
                        LC
                    </div>
                    <div>
                        <h1 className="text-yellow-400 font-bold text-sm tracking-wide leading-tight">
                            Loyola Church
                        </h1>
                        <p className="text-gray-400 text-xs">Chromepet, Chennai</p>
                    </div>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-2 list-none">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`text-sm px-4 py-2 rounded transition font-medium tracking-wide
                  ${location.pathname === link.path
                                        ? 'text-yellow-400 bg-yellow-400 bg-opacity-10 border-b-2 border-yellow-400'
                                        : 'text-gray-300 hover:text-yellow-400'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button - mobile only */}
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
                <div className="md:hidden bg-gray-800 border-t border-yellow-900 px-6 py-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm py-3 px-4 border-b border-gray-700 transition font-medium
                ${location.pathname === link.path
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 hover:text-yellow-400'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

        </nav>
    );
}

export default Navbar;