// 📁 File: src/pages/StartupDirectory.jsx
import React, { useState } from 'react';
import { Search, Filter, MapPin, Globe, TrendingUp, Star, ExternalLink, Briefcase, Layers, ArrowLeft } from 'lucide-react';

const StartupDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const startups = [
    { id: 1, name: 'اکو فلو AI', category: 'فناوری سبز', location: 'برلین، آلمان', valuation: '۵.۲M$', funding: 'سری A', rating: 4.9, logo: '🌱', description: 'بهینه‌سازی انرژی مبتنی بر هوش مصنوعی برای شهرهای هوشمند.' },
    { id: 2, name: 'کوانتوم لیپ', category: 'فناوری عمیق', location: 'سانفرانسیسکو، آمریکا', valuation: '۱۲M$', funding: 'بذری', rating: 4.7, logo: '⚛️', description: 'اجزای سخت‌افزاری کامپیوتر کوانتومی نسل بعدی.' },
    { id: 3, name: 'نورو لینکر', category: 'سلامت دیجیتال', location: 'لندن، انگلستان', valuation: '۸.۵M$', funding: 'سری B', rating: 4.8, logo: '🧠', description: 'رابط مغز و کامپیوتر برای توانبخشی.' },
    { id: 4, name: 'سایبر شیلد', category: 'امنیت سایبری', location: 'تل‌آویو، اسرائیل', valuation: '۲۲M$', funding: 'سری C', rating: 4.9, logo: '🛡️', description: 'تشخیص تهدید خودکار با استفاده از شبکه‌های عصبی.' },
    { id: 5, name: 'آکوا پیور', category: 'فناوری پاک', location: 'سنگاپور', valuation: '۳.۱M$', funding: 'بذری', rating: 4.5, logo: '💧', description: 'تصفیه آب کم‌هزینه برای کشورهای در حال توسعه.' },
    { id: 6, name: 'اسکای درون', category: 'هوافضا', location: 'پاریس، فرانسه', valuation: '۱۵M$', funding: 'سری A', rating: 4.6, logo: '🚁', description: 'پهپادهای لجستیکی برای تحویل آخرین مایل.' },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <header className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">آینده را کاوش کنید</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">با نوآورترین استارتاپ‌های اکوسیستم IGNITE.IO ارتباط برقرار کنید.</p>
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-l from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-[#0a0a1a] border border-white/10 rounded-2xl p-2">
            <Search className="mr-4 text-gray-500" size={24} />
            <input type="text" placeholder="جستجو بر اساس نام، صنعت یا کلمه کلیدی..." className="w-full bg-transparent border-none focus:ring-0 text-lg py-4 pr-4 placeholder:text-gray-600 text-right" onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 space-x-reverse"><span>جستجو</span></button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-72 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center"><Filter size={16} className="ml-2" /> فیلترها</h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-300">صنعت</label>
                <div className="flex flex-wrap gap-2">
                  {['همه', 'هوش مصنوعی', 'فین‌تک', 'سلامت', 'سبز', 'فناوری عمیق'].map((cat) => (
                    <button key={cat} className="px-4 py-1.5 rounded-full border border-white/10 text-xs hover:border-purple-500 hover:bg-purple-500/10 transition">{cat}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-300">مرحله سرمایه‌گذاری</label>
                <div className="space-y-3">
                  {['پیش از بذری', 'بذری', 'سری A', 'سری B', 'سری C'].map((stage) => (
                    <div key={stage} className="flex items-center space-x-3 space-x-reverse text-sm text-gray-400 hover:text-white cursor-pointer">
                      <div className="w-4 h-4 rounded border border-white/20"></div><span>{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-300">محدوده ارزش‌گذاری</label>
                <input type="range" className="w-full accent-purple-500" />
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold"><span>۰$</span><span>+۵۰M$</span></div>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div className="text-gray-400 text-sm">نمایش <span className="text-white font-bold">{startups.length}</span> استارتاپ</div>
            <div className="flex items-center space-x-4 space-x-reverse text-sm">
              <span className="text-gray-500">مرتب‌سازی:</span>
              <select className="bg-transparent border-none focus:ring-0 font-bold text-white cursor-pointer">
                <option className="bg-[#030014]">جدیدترین</option>
                <option className="bg-[#030014]">بالاترین رشد</option>
                <option className="bg-[#030014]">بالاترین ارزش</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {startups.map((startup) => (
              <div key={startup.id} className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-7 hover:bg-white/[0.08] hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-600/10 blur-3xl group-hover:bg-purple-600/20 transition-all"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-bl from-white/10 to-white/5 flex items-center justify-center text-3xl shadow-inner">{startup.logo}</div>
                  <div className="flex items-center space-x-1 space-x-reverse bg-yellow-500/10 px-3 py-1 rounded-full">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" /><span className="text-xs font-bold text-yellow-500">{startup.rating}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{startup.name}</h3>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{startup.category}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{startup.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="space-y-1"><p className="text-[10px] text-gray-500 uppercase font-bold">ارزش‌گذاری</p><p className="text-sm font-bold">{startup.valuation}</p></div>
                  <div className="space-y-1"><p className="text-[10px] text-gray-500 uppercase font-bold">مرحله</p><p className="text-sm font-bold">{startup.funding}</p></div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center text-xs text-gray-500"><MapPin size={14} className="ml-1" />{startup.location}</div>
                  <button className="p-2 bg-white/5 rounded-xl group-hover:bg-purple-600 transition-all"><ArrowLeft size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StartupDirectory;