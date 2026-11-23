// 📁 File: src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Rocket, Users, TrendingUp, Calendar, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
    <Icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const BentoCard = ({ title, desc, icon: Icon, className }) => (
  <div className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 group ${className}`}>
    <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-purple-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function LandingPage({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => onNavigate('landing')}>
            IGNITE.IO
          </div>
          <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-medium text-gray-300">
            <button onClick={() => onNavigate('apply')} className="hover:text-white transition">برنامه‌ها</button>
            <button onClick={() => onNavigate('directory')} className="hover:text-white transition">استارتاپ‌ها</button>
            <button onClick={() => onNavigate('mentor')} className="hover:text-white transition">منتورها</button>
            <button onClick={() => onNavigate('knowledge')} className="hover:text-white transition">دانش‌بنیان</button>
            <button onClick={() => onNavigate('dashboard')} className="hover:text-white transition">داشبورد</button>
          <button onClick={() => onNavigate('about')} className="hover:text-white transition">درباره ما</button>
<button onClick={() => onNavigate('contact')} className="hover:text-white transition">تماس با ما</button>
          </div>
          <button onClick={() => onNavigate('apply')} className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300">
            درخواست دهید
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-purple-400 mb-8 animate-bounce">
            <Zap size={14} />
            <span>ورود به اکوسیستم سازندگان</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.2]">
  ما <span className="bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">آینده</span> رو پیش‌بینی نمی‌کنیم؛ <br className="hidden md:block" />
  ما <span className="bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">می‌سازیمش</span>.
</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
  و تو می‌تونی بخشی از این ساختن باشی. از ایده‌ات تا واقعیت، با IGNITE.
</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('apply')} className="w-full md:w-auto bg-gradient-to-l from-blue-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all">
              سفر خود را آغاز کنید
            </button>
            <button onClick={() => onNavigate('mentor')} className="w-full md:w-auto bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              ملاقات با منتورها
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon={Rocket} label="استارتاپ‌های پرتاب‌شده" value="+۱۵۰" />
          <StatCard icon={TrendingUp} label="سرمایه جذب‌شده" value="۲۵۰M$" />
          <StatCard icon={Users} label="منتورهای فعال" value="+۸۰" />
          <StatCard icon={Globe} label="دسترسی جهانی" value="+۲۴" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">چرا Ignite؟</h2>
            <p className="text-gray-400">هر آنچه برای رشد سریع‌تر نیاز دارید.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard 
              className="md:col-span-2 md:row-span-2 bg-gradient-to-bl from-purple-900/20 to-transparent"
              title="منتورشیپ بی‌رقیب" 
              desc="دسترسی مستقیم به غول‌های صنعت و کارآفرینان سریالی که غول‌های فردا را ساخته‌اند."
              icon={Users}
            />
            <BentoCard title="سرمایه خطرپذیر" desc="دسترسی مستقیم به صندوق‌های سرمایه‌گذاری برتر." icon={TrendingUp} />
            <BentoCard title="ابزارهای فنی" desc="دسترسی به ابزارها و زیرساخت‌های پریمیوم." icon={Zap} />
            <BentoCard className="md:col-span-2" title="شبکه جهانی" desc="به جامعه‌ای از بیش از ۵۰۰۰ بنیان‌گذار در ۳ قاره بپیوندید." icon={Globe} />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-l from-blue-600 to-purple-700 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">آماده‌اید چشم‌انداز خود را گسترش دهید؟</h2>
            <p className="text-blue-100 mb-10 text-lg">درخواست‌های دوره زمستان ۲۰۲۶ اکنون باز است.</p>
            <button onClick={() => onNavigate('apply')} className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              امروز به Ignite بپیوندید
            </button>
          </div>
          <div className="absolute top-[-50%] left-[-10%] w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© ۲۰۲۶ شتاب‌دهنده Ignite. ساخته‌شده برای آینده فناوری.</p>
      </footer>
    </div>
  );
}
