function Welcome() {
    return (
        <section className="bg-amber-50 py-20 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left - Text */}
                <div>
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ About Our Parish
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                        Welcome to Loyola Church
                    </h2>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic font-serif mb-4">
                        Our Church is a Catholic church dedicated to the belief in the
                        Immaculate Conception of the Blessed Virgin Mary. We are committed
                        to bringing relevant teaching to today's culture and presenting
                        the word of God in a modern and relevant way.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        This website provides an easy way to connect with the church and
                        get updates on worship services, activities, and events happening
                        in our parish community.
                    </p>
                    <button className="border-2 border-yellow-600 text-yellow-700 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-600 hover:text-white transition duration-300">
                        Learn More About Us
                    </button>
                </div>

                {/* Right - Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1601136250153-e8e76cc09b2a?w=600&q=80"
                        alt="Loyola Church"
                        className="w-full shadow-xl"
                    />
                    {/* Gold accent box */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-yellow-400 -z-10" />
                    {/* Badge */}
                    <div className="absolute -top-4 -left-4 bg-yellow-500 text-gray-900 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center font-bold text-xs p-2">
                        <span className="text-lg">✝</span>
                        Hanumantharayan kottai Dindigul
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Welcome;