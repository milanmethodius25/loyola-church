import React from 'react';

function Footer() {
    const links = ['Home', 'About Us', 'Mass Timings', 'Prayers', 'Newsletter', 'Gallery', 'Contact Us'];

    return (
        <footer className="bg-gray-950 border-t-2 border-yellow-500">
            <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1 - About */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-lg">
                            IC
                        </div>
                        <div>
                            <h3 className="text-yellow-400 font-bold text-sm tracking-wide uppercase">
                                Immaculate Conception
                            </h3>
                            <p className="text-gray-500 text-xs">Hanumantharayan Kottai, Dindigul.</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A Catholic church dedicated to the St.Ignatius of Loyola, serving the community
                        of Hanumantharayan Kottai, Dindigul.
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h4 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6 pb-2 border-b border-yellow-900">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {links.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 text-sm hover:text-yellow-400 transition flex items-center gap-2">
                                    <span className="text-yellow-600">→</span>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Contact */}
                <div>
                    <h4 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6 pb-2 border-b border-yellow-900">
                        Contact Us
                    </h4>
                    <div className="space-y-4 text-gray-400 text-sm">
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-500 mt-1">📍</span>
                            <p>Hanumantharayan Kottai, Dindigul.,<br />Dindigul 624002.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-500">📞</span>
                            <p>044-22410077</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-500">✉️</span>
                            <p>milanmethodius@gmail.com</p>
                        </div>

                        {/* External Links - FIXED SYNTAX HERE */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://www.vaticannews.va/en.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-yellow-500 text-xs border border-yellow-700 px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 transition"
                            >
                                Vatican News
                            </a>
                            <a
                                href="http://chengaidiocese.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-yellow-500 text-xs border border-yellow-700 px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 transition"
                            >
                                Chengai Diocese
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-5 text-center">
                <p className="text-gray-500 text-xs">
                    Copyright © {new Date().getFullYear()} St.ignatius of Loyola Chruch, Hanumantharayan Kottai, Dindigul. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;