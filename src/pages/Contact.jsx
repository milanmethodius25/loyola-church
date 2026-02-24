function Contact() {
    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-6xl mx-auto">
                <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                    ✝ Get In Touch
                </p>
                <h1 className="text-4xl font-bold text-amber-900 mb-6">Contact Us</h1>
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-16 h-px bg-yellow-500" />
                    <span className="text-yellow-500">✝</span>
                    <div className="w-16 h-px bg-yellow-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="border border-yellow-200 border-t-4 border-t-yellow-500 p-6 bg-white">
                            <div className="text-2xl mb-3">📍</div>
                            <h3 className="font-bold text-amber-900 mb-2">Address</h3>
                            <p className="text-gray-600">353, GST Road, Chromepet,<br />Chennai 600044.</p>
                        </div>
                        <div className="border border-yellow-200 border-t-4 border-t-yellow-500 p-6 bg-white">
                            <div className="text-2xl mb-3">📞</div>
                            <h3 className="font-bold text-amber-900 mb-2">Phone</h3>
                            <p className="text-gray-600">044-22410077</p>
                        </div>
                        <div className="border border-yellow-200 border-t-4 border-t-yellow-500 p-6 bg-white">
                            <div className="text-2xl mb-3">✉️</div>
                            <h3 className="font-bold text-amber-900 mb-2">Email</h3>
                            <p className="text-gray-600">loyolachurch@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="border border-yellow-200 border-t-4 border-t-yellow-500 p-8 bg-white">
                        <h3 className="font-bold text-amber-900 text-xl mb-6">Send a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Your message"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 resize-none"
                                />
                            </div>
                            <button className="w-full bg-yellow-500 text-gray-900 font-bold py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition">
                                Send Message
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;