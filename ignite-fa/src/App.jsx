// 📁 File: src/App.jsx
import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import LandingPage from './pages/LandingPage'; import Dashboard from './pages/Dashboard';
import MentorPortal from './pages/MentorPortal'; import InvestorHub from './pages/InvestorHub';
import StartupDirectory from './pages/StartupDirectory'; import KnowledgeBase from './pages/KnowledgeBase';
import SmartApplication from './pages/SmartApplication'; import AdminPanel from './pages/AdminPanel';
import AboutUs from './pages/AboutUs'; import ContactUs from './pages/ContactUs';

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (currentPage === 'landing') return null;
  
  const navItems = [
    { id: 'dashboard', label: 'داشبورد' }, { id: 'directory', label: 'استارتاپ‌ها' },
    { id: 'mentor', label: 'منتورها' }, { id: 'investor', label: 'سرمایه‌گذاران' },
    { id: 'knowledge', label: 'مرکز دانش' }, { id: 'apply', label: 'درخواست' },
    { id: 'admin', label: 'مدیریت' }, { id: 'about', label: 'درباره ما' }, { id: 'contact', label: 'تماس با ما' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030014]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 space-x-reverse w-1/4">
          <button onClick={() => onNavigate('landing')} className="flex items-center space-x-2 space-x-reverse text-white/70 hover:text-white transition">
            <Home size={18} /><span className="text-sm font-bold hidden sm:block">خانه</span>
          </button>
          <div className="h-6 w-px bg-white/20"></div>
          <div className="text-xl font-black bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => onNavigate('landing')}>IGNITE.IO</div>
        </div>
        
        {/* منوی وسط با فاصله از چپ (pl-12) */}
        <nav className="hidden lg:flex items-center justify-center space-x-1 space-x-reverse w-3/4 pl-12">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === item.id ? 'text-purple-400 bg-purple-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>{item.label}</button>
          ))}
        </nav>
        <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#030014] border-b border-white/10 py-4 px-6 flex flex-col space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }} className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium ${currentPage === item.id ? 'text-purple-400 bg-purple-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>{item.label}</button>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = ({ onNavigate }) => (
  <footer className="border-t border-white/10 bg-[#030014] py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div><div className="text-2xl font-black bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">IGNITE.IO</div><p className="text-gray-400 text-sm leading-relaxed">شتاب‌دهنده و مرکز رشد استارتاپ‌های فناوری.</p></div>
      <div><h4 className="font-bold mb-4">دسترسی سریع</h4><ul className="space-y-2 text-sm text-gray-400"><li onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer transition">درباره ما</li><li onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer transition">تماس با ما</li><li onClick={() => onNavigate('directory')} className="hover:text-white cursor-pointer transition">استارتاپ‌ها</li></ul></div>
      <div><h4 className="font-bold mb-4">منابع</h4><ul className="space-y-2 text-sm text-gray-400"><li onClick={() => onNavigate('knowledge')} className="hover:text-white cursor-pointer transition">مرکز دانش</li><li className="hover:text-white cursor-pointer transition">وبلاگ</li></ul></div>
      <div><h4 className="font-bold mb-4">شبکه‌های اجتماعی</h4><div className="flex space-x-4 space-x-reverse"><div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 cursor-pointer text-sm">in</div><div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 cursor-pointer text-sm">tw</div></div></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center text-gray-500 text-sm">© ۲۰۲۶ شتاب‌دهنده Ignite. تمامی حقوق محفوظ است.</div>
  </footer>
);

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard': return <Dashboard />; case 'mentor': return <MentorPortal />;
      case 'investor': return <InvestorHub />; case 'directory': return <StartupDirectory />;
      case 'knowledge': return <KnowledgeBase />; case 'apply': return <SmartApplication />;
      case 'admin': return <AdminPanel />; case 'about': return <AboutUs />; case 'contact': return <ContactUs />;
      default: return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col font-sans">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className={`flex-1 ${currentPage !== 'landing' ? 'pt-16' : ''}`}>{renderPage()}</div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;