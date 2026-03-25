const services = [
    {
        icon: '🙏',
        title: 'Sunday Catechism',
        description: "8:15 AM in Tamil followed by Children's Mass.",
    },
    {
        icon: '🕊️',
        title: 'Confession',
        description: 'Saturday 5:00 PM – 6:00 PM. Come and experience the Sacrament of Reconciliation.',
    },
    {
        icon: '🤝',
        title: 'Communion to the Sick',
        description: 'Sunday 06:00 AM – 08:15 AM. Our ministers visit the homebound and sick.',
    },
];

function ServiceCard(props) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={props.delay}
            className="border border-yellow-200 border-t-4 border-t-yellow-500 p-8 hover:shadow-xl transition duration-300 bg-white"
        >
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

            <div className="text-center mb-12" data-aos="fade-up">
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

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        delay={index * 100}
                    />
                ))}
            </div>

        </section>
    );
}

export default Services;