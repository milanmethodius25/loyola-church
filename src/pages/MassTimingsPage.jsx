import MassTimings from '../components/MassTimings';

function MassTimingsPage() {
    return (
        <div className="pt-20">
            <div className="bg-gray-900 pt-16 pb-4 text-center">
                <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">
                    ✝ Holy Eucharist
                </p>
                <h1 className="text-white text-4xl font-bold">Mass Timings</h1>
            </div>
            <MassTimings />
        </div>
    );
}

export default MassTimingsPage;