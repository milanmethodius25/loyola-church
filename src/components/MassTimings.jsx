const massData = [
    {
        day: 'Monday – Friday',
        times: ['6:00 AM', '8:00 AM', '12:00 PM'],
        language: 'Tamil & English',
    },
    {
        day: 'Saturday',
        times: ['6:00 AM', '8:00 AM', '5:30 PM'],
        language: 'Tamil & English',
    },
    {
        day: 'Sunday',
        times: ['6:00 AM', '7:30 AM', '9:30 AM', '11:30 AM'],
        language: 'Tamil & English',
    },
];

function MassCard(props) {
    return (
        <div className="border border-yellow-600 border-opacity-40 p-8 text-center hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 transition duration-300">
            <h3 className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4">
                {props.day}
            </h3>
            {props.times.map((time, index) => (
                <p key={index} className="text-white text-2xl font-bold mb-1">
                    {time}
                </p>
            ))}
            <p className="text-gray-400 italic mt-3 text-sm">{props.language}</p>
        </div>
    );
}

function MassTimings() {
    return (
        <section className="bg-gray-900 py-20 px-8">

            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">
                    ✝ Holy Mass
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-bold">
                    Mass Timings
                </h2>
                <p className="text-gray-400 italic mt-2">
                    Join us for daily Eucharistic celebration
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="w-16 h-px bg-yellow-500" />
                    <span className="text-yellow-500">✝</span>
                    <div className="w-16 h-px bg-yellow-500" />
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
                {massData.map((item, index) => (
                    <MassCard
                        key={index}
                        day={item.day}
                        times={item.times}
                        language={item.language}
                    />
                ))}
            </div>

            <p className="text-center text-gray-500 italic text-sm mt-8">
                * Special timings on Holy Days of Obligation. Please check with the parish office.
            </p>

        </section>
    );
}

export default MassTimings;