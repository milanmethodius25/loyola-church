import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

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
import Videos from './pages/Videos';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminVideos from './pages/AdminVideos';
import AdminPrayerRequests from './pages/AdminPrayerRequests';
import AdminContacts from './pages/admin/AdminContacts';
import AdminAnnouncements from './pages/admin/AdminAnnouncements';
import AdminGallery from './pages/admin/AdminGallery';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Admin Routes - No Navbar/Footer */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="/admin/videos" element={
            <ProtectedRoute><AdminVideos /></ProtectedRoute>
          } />
          <Route path="/admin/prayer-requests" element={
            <ProtectedRoute><AdminPrayerRequests /></ProtectedRoute>
          } />
          <Route path="/admin/contacts" element={
            <ProtectedRoute><AdminContacts /></ProtectedRoute>
          } />
          <Route path="/admin/announcements" element={
            <ProtectedRoute><AdminAnnouncements /></ProtectedRoute>
          } />

          {/* Public Routes - With Navbar/Footer */}
          <Route path="/*" element={
            <>
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
                <Route path="/videos" element={<Videos />} />
                <Route path="/admin/gallery" element={
                  <ProtectedRoute><AdminGallery /></ProtectedRoute>
                } />
              </Routes>
              <Footer />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;