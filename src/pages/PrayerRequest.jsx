import { useState } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/prayerRequest/create';

function PrayerRequest() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        intention: '',
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', mobile: '', intention: '' });
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
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ We Pray Together
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Prayer Request
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-500 italic leading-relaxed">
                        Share your intentions with us. Our parish community and priests
                        will remember you in their prayers during Holy Mass.
                    </p>
                </div>

                {/* Bible Quote */}
                <div data-aos="fade-up"
                    className="bg-gray-900 text-white p-6 text-center border-t-4 border-yellow-500 mb-8">
                    <p className="text-gray-300 italic font-serif leading-relaxed">
                        "Ask and it will be given to you; seek and you will find;
                        knock and the door will be opened to you."
                    </p>
                    <p className="text-yellow-400 font-bold mt-3 text-sm tracking-widest">
                        — Matthew 7:7
                    </p>
                </div>

                {/* Form */}
                <div data-aos="fade-up"
                    className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8">

                    <h3 className="font-bold text-amber-900 text-xl mb-6">
                        Submit Your Prayer Intention
                    </h3>

                    {/* Success */}
                    {status === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 mb-6 text-sm rounded">
                            🙏 Your prayer request has been submitted. We will remember
                            you in our prayers during Holy Mass.
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
                                Full Name *
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
                                Mobile Number *
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                placeholder="Your mobile number"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Prayer Intention *
                            </label>
                            <textarea
                                name="intention"
                                value={formData.intention}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Share your prayer intention here..."
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition resize-none"
                            />
                        </div>

                        <div className="bg-amber-50 border border-yellow-200 p-4 text-xs text-gray-500 rounded">
                            🔒 Your prayer intention is private and will only be seen
                            by the parish priests. It will not be shared publicly.
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-yellow-500 text-gray-900 font-bold py-4 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                    Submitting...
                                </span>
                            ) : (
                                '🙏 Submit Prayer Request'
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default PrayerRequest;