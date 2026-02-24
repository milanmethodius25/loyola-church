function About() {
    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">
                <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                    ✝ Our Parish
                </p>
                <h1 className="text-4xl font-bold text-amber-900 mb-6">
                    About Us
                </h1>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-px bg-yellow-500" />
                    <span className="text-yellow-500">✝</span>
                    <div className="w-16 h-px bg-yellow-500" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-serif italic mb-6">
                    Loyola Church is a Catholic church dedicated to the belief in the
                    Immaculate Conception of the Blessed Virgin Mary located in
                    Chromepet, Chennai.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Our church is committed to bringing relevant teaching to today's
                    culture and presenting the word of God in a modern and relevant way.
                    We welcome all who seek to grow in faith and community.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    The parish serves thousands of faithful Catholics in the Chromepet
                    area and surrounding neighborhoods, offering daily Mass, sacraments,
                    and a wide range of ministries and activities for all ages.
                </p>
            </div>
        </div>
    );
}

export default About;