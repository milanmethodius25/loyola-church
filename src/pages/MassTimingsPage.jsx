const churchMass = [
    {
        day: 'Sunday',
        timings: [
            { time: '4:30 AM', note: 'Rosary at 4:15 AM' },
            { time: '8:15 AM', note: 'Rosary at 8:00 AM' },
        ],
    },
    {
        day: 'Monday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
        firstWeekNote: 'First Monday — Substation Mass at Brother Medu. Church Mass at 5:30 AM (Rosary 5:15 AM)',
    },
    {
        day: 'Tuesday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
        firstWeekNote: 'First Tuesday — Substation Mass at Anthoniyarpuram. Church Mass at 5:30 AM (Rosary 5:15 AM)',
    },
    {
        day: 'Wednesday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
        firstWeekNote: 'First Wednesday — Substation Mass at Susaipatty. Church Mass at 5:30 AM (Rosary 5:15 AM)',
    },
    {
        day: 'Thursday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
        firstWeekNote: 'First Thursday — Substation Mass at Thamarai Kulam. Church Mass at 5:30 AM (Rosary 5:15 AM)',
    },
    {
        day: 'Friday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
        firstFridayNote: 'First Friday — Adoration followed by Mass at 7:00 PM',
    },
    {
        day: 'Saturday',
        timings: [
            { time: '7:00 PM', note: 'Rosary at 6:45 PM' },
        ],
    },
];

const substations = [
    {
        name: 'Brother Medu',
        time: '7:00 PM',
        week: 'First Monday',
        icon: '⛪',
    },
    {
        name: 'Anthoniyarpuram',
        time: '7:00 PM',
        week: 'First Tuesday',
        icon: '⛪',
    },
    {
        name: 'Susaipatty',
        time: '7:00 PM',
        week: 'First Wednesday',
        icon: '⛪',
    },
    {
        name: 'Thamarai Kulam',
        time: '7:00 PM',
        week: 'First Thursday',
        icon: '⛪',
    },
];

function MassTimingsPage() {
    const today = new Date().toLocaleString('default', { weekday: 'long' });

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Holy Eucharist
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Mass Timings
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-500 italic">
                        Join us for the Holy Eucharist — the source and summit of our faith
                    </p>
                </div>

                {/* Church Mass Timings */}
                <div data-aos="fade-up" className="mb-4">
                    <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <span>⛪</span> Church Mass Timings
                    </h2>
                </div>

                <div className="space-y-4 mb-12">
                    {churchMass.map((item, index) => {
                        const isToday = item.day === today;

                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 60}
                                className={`bg-white border-l-4 p-6 shadow-sm hover:shadow-md transition duration-300
                  ${isToday ? 'border-yellow-500 ring-2 ring-yellow-400 ring-offset-2' : 'border-yellow-200'}`}
                            >
                                <div className="flex items-start justify-between flex-wrap gap-4">

                                    {/* Day */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-gray-900 text-white flex flex-col items-center justify-center rounded flex-shrink-0">
                                            <span className="text-yellow-400 text-xs font-bold">
                                                {item.day.slice(0, 3).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900 text-lg">
                                                {item.day}
                                                {isToday && (
                                                    <span className="ml-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded tracking-widest">
                                                        TODAY
                                                    </span>
                                                )}
                                            </h3>

                                            {/* Timings */}
                                            <div className="flex flex-wrap gap-3 mt-2">
                                                {item.timings.map((t, i) => (
                                                    <div key={i} className="flex flex-col">
                                                        <span className="text-yellow-600 font-bold text-lg">
                                                            {t.time}
                                                        </span>
                                                        {t.note && (
                                                            <span className="text-gray-400 text-xs italic">
                                                                {t.note}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Special Notes */}
                                    <div className="flex flex-col gap-2">
                                        {item.firstFridayNote && (
                                            <div className="bg-yellow-50 border border-yellow-200 px-3 py-2 text-xs text-yellow-700 font-semibold rounded max-w-xs">
                                                🕯️ {item.firstFridayNote}
                                            </div>
                                        )}
                                        {item.firstWeekNote && (
                                            <div className="bg-blue-50 border border-blue-200 px-3 py-2 text-xs text-blue-700 font-semibold rounded max-w-xs">
                                                📍 {item.firstWeekNote}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Substation Section */}
                <div data-aos="fade-up" className="mb-6">
                    <h2 className="text-xl font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span>📍</span> Substation Mass — First Week of Every Month
                    </h2>
                    <p className="text-gray-500 text-sm italic mb-6">
                        During substation week, church Mass moves to 5:30 AM (Rosary at 5:15 AM)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {substations.map((sub, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-gray-900 text-white p-6 border-t-4 border-yellow-500 hover:border-yellow-400 transition duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{sub.icon}</div>
                                <div>
                                    <h3 className="font-bold text-yellow-400 text-lg">
                                        {sub.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm">{sub.week}</p>
                                    <p className="text-white font-bold text-xl mt-1">
                                        {sub.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Notice */}
                <div data-aos="fade-up"
                    className="bg-yellow-500 text-gray-900 p-6 text-center">
                    <p className="font-bold text-lg mb-1">📢 Special Occasions</p>
                    <p className="text-sm leading-relaxed">
                        Mass timings may change during Christmas, Easter, and other major feasts.
                        Please check with the parish office or follow our announcements.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default MassTimingsPage;