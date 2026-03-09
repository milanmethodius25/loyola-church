import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MassTimingsPage from './pages/MassTimingsPage';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ParishInfo from './pages/ParishInfo';
import FeastDays from './pages/FeastDays';
import Notifications from './pages/Notifications';
import PrayerRequest from './pages/PrayerRequest';
import AdminPrayerRequests from './pages/AdminPrayerRequests';
import Videos from './pages/Videos';
import AdminVideos from './pages/AdminVideos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mass-timings" element={<MassTimingsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/parish-info" element={<ParishInfo />} />
        <Route path="/feast-days" element={<FeastDays />} />
        <Route path="/announcements" element={<Notifications />} />
        <Route path="/prayer-request" element={<PrayerRequest />} />
        <Route path="/admin/prayer-requests" element={<AdminPrayerRequests />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/admin/videos" element={<AdminVideos />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;