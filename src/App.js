import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import AdminDashboard from './pages/admin/AdminDashboard';

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
  const showHeaderFooter = !location.pathname.startsWith('/admin') && !location.pathname.startsWith('/visitor-dashboard') && !authRoutes.includes(location.pathname);

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
            <Route path="/visitor-dashboard/*" element={<PrivateRoute />}>
              <Route element={<VisitorDashboard />}>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<Profile />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<PrivateRoute requiredRole="admin" />}>
                <Route index element={<AdminDashboard />} />
            </Route>
          </Routes>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
