const services = [
    {
        icon: '🙏',
        title: 'Sunday Catechism',
        description:
            '7:30 AM in Tamil followed by Children\'s Mass. 8:45 AM in English followed by common Mass at 9:30 AM.',
    },
    {
        icon: '🕊️',
        title: 'Confession',
        description:
            'Saturday 5:00 PM – 6:00 PM. Come and experience the Sacrament of Reconciliation.',
    },
    {
        icon: '🤝',
        title: 'Communion to the Sick',
        description:
            'Sunday 11:00 AM – 12:00 PM. Our ministers visit the homebound and sick.',
    },
    {
        icon: '💒',
        title: 'Marriage Banns',
        description:
            'Wednesday 10:00 AM. Register at the Immaculate Matrimonial Centre.',
    },
    {
        icon: '🍱',
        title: 'Annadhanam',
        description:
            'Everyday after 12:00 PM Mass. Your donation can provide meals to someone in need.',
    },
    {
        icon: '🌟',
        title: 'Prayer Meetings',
        description:
            'Sunday 3:00 PM by Gospel Workers. Monday 7:00 PM by Good Samaritan Prayer Group.',
    },
];

function ServiceCard(props) {
    return (
        <div className="border border-yellow-200 border-t-4 border-t-yellow-500 p-8 hover:shadow-xl transition duration-300 bg-white">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-2xl mb-4">
                {props.icon}
            </div>
            <h3 className="font-bold text-amber-900 text-lg mb-3 tracking-wide">
                {props.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {props.description}
            </p>
        </div>
    );
}

function Services() {
    return (
        <section className="bg-white py-20 px-8">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                    ✝ Parish Life
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
                    Services & Activities
                </h2>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="w-16 h-px bg-yellow-500" />
                    <span className="text-yellow-500">✝</span>
                    <div className="w-16 h-px bg-yellow-500" />
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>

        </section>
    );
}

export default Services;