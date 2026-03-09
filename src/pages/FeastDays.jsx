const feastDays = [
    { month: 'January', day: '1', name: 'Solemnity of Mary', description: 'Mother of God — New Year Day Mass' },
    { month: 'February', day: '2', name: 'Presentation of the Lord', description: 'Candlemas Day' },
    { month: 'February', day: '11', name: 'Our Lady of Lourdes', description: 'World Day of the Sick' },
    { month: 'March', day: '19', name: 'Feast of St. Joseph', description: 'Patron of the Universal Church' },
    { month: 'March', day: '25', name: 'Annunciation of the Lord', description: 'Gabriel announces to Mary' },
    { month: 'April', day: '23', name: 'Easter Sunday', description: 'Resurrection of our Lord Jesus Christ' },
    { month: 'May', day: '1', name: 'St. Joseph the Worker', description: 'Labour Day Mass' },
    { month: 'May', day: '31', name: 'Visitation of Mary', description: 'Mary visits Elizabeth' },
    { month: 'June', day: '13', name: 'Feast of St. Anthony', description: 'Patron of Lost Things' },
    { month: 'June', day: '24', name: 'Birth of St. John the Baptist', description: 'Forerunner of Christ' },
    { month: 'June', day: '29', name: 'Feast of St. Peter & Paul', description: 'Princes of the Apostles' },
    { month: 'July', day: '31', name: 'Feast of St. Ignatius of Loyola', description: 'Founder of the Jesuits' },
    { month: 'August', day: '15', name: 'Assumption of Mary', description: 'Mary taken body and soul into Heaven' },
    { month: 'September', day: '8', name: 'Birth of Virgin Mary', description: 'Birthday of Our Lady' },
    { month: 'October', day: '7', name: 'Our Lady of the Rosary', description: 'Rosary Month celebration' },
    { month: 'November', day: '1', name: 'All Saints Day', description: 'Feast of all the Saints' },
    { month: 'November', day: '2', name: 'All Souls Day', description: 'Day of Prayer for the Dead' },
    { month: 'December', day: '8', name: 'Immaculate Conception', description: 'Patronal Feast of our Church' },
    { month: 'December', day: '25', name: 'Christmas Day', description: 'Birth of our Lord Jesus Christ' },
];

const monthColors = {
    January: 'bg-blue-50 border-blue-300',
    February: 'bg-pink-50 border-pink-300',
    March: 'bg-green-50 border-green-300',
    April: 'bg-yellow-50 border-yellow-300',
    May: 'bg-emerald-50 border-emerald-300',
    June: 'bg-orange-50 border-orange-300',
    July: 'bg-red-50 border-red-300',
    August: 'bg-purple-50 border-purple-300',
    September: 'bg-indigo-50 border-indigo-300',
    October: 'bg-amber-50 border-amber-300',
    November: 'bg-gray-50 border-gray-300',
    December: 'bg-rose-50 border-rose-300',
};

function FeastDays() {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentDay = new Date().getDate().toString();

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-yellow-600 text-xs tracking-widest uppercase mb-2">
                        ✝ Liturgical Calendar
                    </p>
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Feast Days
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-px bg-yellow-500" />
                        <span className="text-yellow-500">✝</span>
                        <div className="w-16 h-px bg-yellow-500" />
                    </div>
                    <p className="text-gray-500 italic">
                        Important feast days celebrated in our parish
                    </p>
                </div>

                {/* Feast Days List */}
                <div className="space-y-4">
                    {feastDays.map((feast, index) => {
                        const isToday = feast.month === currentMonth && feast.day === currentDay;

                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className={`flex items-center gap-6 p-6 border-l-4 border-yellow-500 bg-white shadow-sm hover:shadow-md transition duration-300
                  ${isToday ? 'ring-2 ring-yellow-400 ring-offset-2' : ''}`}
                            >
                                {/* Date Badge */}
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex flex-col items-center justify-center rounded">
                                    <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">
                                        {feast.month.slice(0, 3)}
                                    </span>
                                    <span className="text-2xl font-bold">{feast.day}</span>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-amber-900 text-lg">
                                            {feast.name}
                                        </h3>
                                        {isToday && (
                                            <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded tracking-widest">
                                                TODAY
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm">{feast.description}</p>
                                </div>

                                {/* Cross */}
                                <div className="text-yellow-300 text-2xl flex-shrink-0">✝</div>

                            </div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <div data-aos="fade-up" className="mt-12 bg-gray-900 text-white p-8 text-center border-t-4 border-yellow-500">
                    <p className="text-yellow-400 font-bold mb-2">📅 Special Celebrations</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Additional feast days and special Masses may be announced by the parish.
                        Please check the weekly newsletter or contact the parish office for updates.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default FeastDays;