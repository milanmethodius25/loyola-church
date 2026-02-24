import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import MassTimings from '../components/MassTimings';
import Services from '../components/Services';

function Home() {
    return (
        <div>
            <Hero />
            <Welcome />
            <MassTimings />
            <Services />
        </div>
    );
}

export default Home;