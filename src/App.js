import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GlobalStyle from './GlobalStyle';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArchaeologicalPlacesPage from './components/ArchaeologicalPlacesPage';
import AboutMedhal from './components/AboutMedhal';
import Contact from './components/Contact';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';

function App() {
  const { i18n } = useTranslation();

  // Update document direction when language changes
  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
    document.body.dir = direction;
  }, [i18n.language]);

  // Define the handleLogin function
  const handleLogin = (role) => {
    // future login handling can be extended here
    return role;
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
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
          <Route path="/" element={<Home />} />
          <Route path="/acplaces" element={<ArchaeologicalPlacesPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutMedhal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
