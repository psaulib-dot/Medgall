import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';

// Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';
import PrivateRoute from './components/PrivateRoute';

// Auth
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';

// Pages
import ArchaeologicalPlacesPage from './pages/ArchaeologicalPlacesPage';
import AboutMedhal from './pages/AboutMedhal';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import VisitorDashboard from './pages/VisitorDashboard';
import Favorites from './pages/Favorites';
import Feedback from './pages/Feedback';
import Settings from './pages/Settings';

// Admin
import AdminDashboard from './admin/AdminDashboard';
import CategoryManagement from './admin/CategoryManagement';
import CityManagement from './admin/CityManagement';
import PlaceManagement from './admin/PlaceManagement';
import MessageManagement from './admin/MessageManagement';
import FeedbackManagement from './admin/FeedbackManagement';

// Context
import { AuthProvider } from './hooks/useAuth';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
    document.body.dir = direction;
  }, [i18n.language]);

  const authRoutes = ['/login', '/signup', '/forgot'];
  const showHeaderFooter = !location.pathname.startsWith('/admin-dashboard') && !location.pathname.startsWith('/visitor-dashboard') && !authRoutes.includes(location.pathname);


  return (
    <AuthProvider>
      <div className="App">
        <GlobalStyle />
        {showHeaderFooter && <Header />}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={i18n.language === 'ar'}
          pauseOnHover
          draggable
          theme="colored"
        />
        <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/acplaces" element={<ArchaeologicalPlacesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/about" element={<AboutMedhal />} />
            <Route path="/contact" element={<Contact />} />

            {/* User Routes */}
            <Route path="/visitor-dashboard" element={<PrivateRoute />}>
              <Route path="" element={<VisitorDashboard />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<PrivateRoute />}>
              <Route path="" element={<AdminDashboard />}>
                <Route path="categories" element={<CategoryManagement />} />
                <Route path="cities" element={<CityManagement />} />
                <Route path="places" element={<PlaceManagement />} />
                <Route path="messages" element={<MessageManagement />} />
                <Route path="feedback" element={<FeedbackManagement />} />
              </Route>
            </Route>
          </Routes>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
