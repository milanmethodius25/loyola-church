const parishData = {
    parish_name: 'St.Ignatius of Loyola Church',
    address: 'Hanumantharayan Kottai, Dindigul 624002',
    phone: '8072802711',
    email: 'milanmethodius@gmail.com',
    established_year: '31 July 1822',
};

function ParishInfo() {
    const info = parishData;
    const yearsOfService = new Date().getFullYear() - parseInt(info.established_year);

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Our Parish
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Parish Information
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                </div>

                <div className="space-y-6">

                    {/* Parish Name Card */}
                    <div
                        data-aos="fade-up"
                        className="bg-gray-900 text-white p-10 text-center border-t-4 border-yellow-500"
                    >
                        <div className="text-5xl mb-4">⛪</div>
                        <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                            {info.parish_name}
                        </h2>
                        <p className="text-gray-400 italic">
                            Established in {info.established_year}
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div data-aos="fade-up" data-aos-delay="100"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8">
                            <div className="text-3xl mb-4">📍</div>
                            <h3 className="font-bold text-amber-900 text-lg mb-2">Address</h3>
                            <p className="text-gray-600 leading-relaxed">{info.address}</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8">
                            <div className="text-3xl mb-4">📞</div>
                            <h3 className="font-bold text-amber-900 text-lg mb-2">Phone</h3>
                            <a href={`tel:${info.phone}`}
                                className="text-yellow-600 font-bold text-xl hover:text-yellow-500 transition">
                                {info.phone}
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8">
                            <div className="text-3xl mb-4">✉️</div>
                            <h3 className="font-bold text-amber-900 text-lg mb-2">Email</h3>
                            <a href={`mailto:${info.email}`}
                                className="text-yellow-600 font-bold hover:text-yellow-500 transition break-all">
                                {info.email}
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400"
                            className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8">
                            <div className="text-3xl mb-4">🕊️</div>
                            <h3 className="font-bold text-amber-900 text-lg mb-2">Established</h3>
                            <p className="text-yellow-600 font-bold text-xl">{info.established_year}</p>
                            <p className="text-gray-400 text-sm mt-1">
                                Serving the community for {yearsOfService} years
                            </p>
                        </div>

                    </div>

                    {/* Bible Quote */}
                    <div data-aos="fade-up"
                        className="bg-white border-l-4 border-yellow-500 p-8 text-center">
                        <p className="text-gray-600 italic text-lg font-serif leading-relaxed">
                            "The handmaid of the Lord; be it unto me according to thy word."
                        </p>
                        <p className="text-yellow-600 font-bold mt-3 text-sm tracking-widest">
                            — Luke 1:38
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ParishInfo;