import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-lg">

            <Link to="/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-lg">
                    LC
                </div>
                <div>
                    <h1 className="text-yellow-400 font-bold text-sm tracking-wide">
                        Loyola Church
                    </h1>
                    <p className="text-gray-400 text-xs">Chromepet, Chennai</p>
                </div>
            </Link>

            <ul className="flex gap-6 list-none">
                <li><Link to="/" className="text-sm hover:text-yellow-400 transition">Home</Link></li>
                <li><Link to="/about" className="text-sm hover:text-yellow-400 transition">About</Link></li>
                <li><Link to="/mass-timings" className="text-sm hover:text-yellow-400 transition">Mass Timings</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-yellow-400 transition">Contact</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;