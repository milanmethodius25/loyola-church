import { useState } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/contact/create';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', description: '' });
            } else {
                const messages = data.errors
                    ? data.errors.map((e) => e.msg).join(', ')
                    : data.error || 'Something went wrong.';
                setErrorMsg(messages);
                setStatus('error');
            }
        } catch (err) {
            setErrorMsg('Network error. Please check your connection.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Get In Touch
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Contact Us
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left - Contact Info */}
                    <div className="space-y-6">

                        {/* Address */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-6"
                        >
                            <div className="text-2xl mb-3">📍</div>
                            <h3 className="font-bold text-amber-900 mb-2">Address</h3>
                            <p className="text-gray-600">
                                Hanumantharayan Kottai<br />
                                Dindigul 624002.
                            </p>
                        </div>

                        {/* Phone */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-6"
                        >
                            <div className="text-2xl mb-3">📞</div>
                            <h3 className="font-bold text-amber-900 mb-2">Phone</h3>
                            <a
                                href="tel:04422410077"
                                className="text-yellow-600 font-bold hover:text-yellow-500 transition"
                            >
                                044-22410077
                            </a>
                        </div>

                        {/* Email */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-6"
                        >
                            <div className="text-2xl mb-3">✉️</div>
                            <h3 className="font-bold text-amber-900 mb-2">Email</h3>
                            <a
                                href="mailto:loyolachurch@gmail.com"
                                className="text-yellow-600 font-bold hover:text-yellow-500 transition"
                            >
                                loyolachurch@gmail.com
                            </a>
                        </div>

                        {/* Office Hours */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-6"
                        >
                            <div className="text-2xl mb-3">🕐</div>
                            <h3 className="font-bold text-amber-900 mb-2">Office Hours</h3>
                            <p className="text-gray-600">
                                Monday – Saturday<br />
                                9:00 AM – 5:00 PM
                            </p>
                        </div>

                    </div>

                    {/* Right - Contact Form */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8"
                    >
                        <h3 className="font-bold text-amber-900 text-xl mb-6">
                            Send a Message
                        </h3>

                        {/* Success */}
                        {status === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 mb-6 text-sm rounded">
                                ✅ Message sent successfully! We will get back to you soon.
                            </div>
                        )}

                        {/* Error */}
                        {status === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-4 mb-6 text-sm rounded">
                                ❌ {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your email address"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="How can we help you?"
                                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-yellow-500 text-gray-900 font-bold py-4 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;