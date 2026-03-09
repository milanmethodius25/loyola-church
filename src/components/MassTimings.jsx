const massData = [
    {
        day: 'Sunday',
        timings: ['4:30 AM', '8:15 AM'],
        note: 'Rosary at 4:15 AM & 8:00 AM',
    },
    {
        day: 'Weekdays',
        timings: ['7:00 PM'],
        note: 'Rosary at 6:45 PM',
    },
    {
        day: 'First Friday',
        timings: ['7:00 PM'],
        note: 'Adoration followed by Mass',
    },
    {
        day: 'Substation Week',
        timings: ['5:30 AM'],
        note: 'Rosary at 5:15 AM — First week of month',
    },
];

function MassCard(props) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={props.delay}
            className="border border-yellow-600 border-opacity-40 p-8 text-center hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 transition duration-300"
        >
            <h3 className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4">
                {props.day}
            </h3>
            {props.timings.map((time, index) => (
                <p key={index} className="text-white text-2xl font-bold mb-1">
                    {time}
                </p>
            ))}
            <p className="text-gray-400 italic mt-3 text-sm">{props.note}</p>
        </div>
    );
}

function MassTimings() {
    return (
        <section className="bg-gray-900 py-20 px-8">

            <div className="text-center mb-12" data-aos="fade-up">
                <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">
                    ✝ Holy Mass
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-bold">
                    Mass Timings
                </h2>
                <p className="text-gray-400 italic mt-2">
                    Join us for the Holy Eucharist
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="w-16 h-px bg-yellow-500" />
                    <span className="text-yellow-500">✝</span>
                    <div className="w-16 h-px bg-yellow-500" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                {massData.map((item, index) => (
                    <MassCard
                        key={index}
                        day={item.day}
                        timings={item.timings}
                        note={item.note}
                        delay={index * 150}
                    />
                ))}
            </div>

            {/* Substation Note */}
            <div className="max-w-5xl mx-auto mt-8 border border-yellow-600 border-opacity-30 p-6">
                <p className="text-yellow-400 font-bold text-center mb-4 text-sm tracking-widest uppercase">
                    📍 Substation Mass — First Week of Every Month
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        { place: 'Brother Medu', day: 'First Monday' },
                        { place: 'Anthoniyarpuram', day: 'First Tuesday' },
                        { place: 'Susaipatty', day: 'First Wednesday' },
                        { place: 'Thamarai Kulam', day: 'First Thursday' },
                    ].map((sub, i) => (
                        <div key={i} className="text-center">
                            <p className="text-white font-bold text-sm">{sub.place}</p>
                            <p className="text-gray-400 text-xs mt-1">{sub.day} · 7:00 PM</p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-gray-500 italic text-sm mt-6">
                * Timings may change on feast days. Please check with the parish office.
            </p>

        </section>
    );
}

export default MassTimings;