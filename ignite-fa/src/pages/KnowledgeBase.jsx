// 📁 File: src/pages/KnowledgeBase.jsx
import React from 'react';
import { BookOpen, PlayCircle, FileText, Search, TrendingUp, Clock, ChevronRight, Award, Lightbulb } from 'lucide-react';

const KnowledgeBase = () => {
  const categories = [
    { name: 'جذب سرمایه', icon: '💰', count: 24, color: 'from-emerald-500/20 to-emerald-500/5' },
    { name: 'رشد محصول', icon: '📈', count: 18, color: 'from-blue-500/20 to-blue-500/5' },
    { name: 'حقوقی و مالکیت', icon: '⚖️', count: 12, color: 'from-purple-500/20 to-purple-500/5' },
    { name: 'پشته فناوری', icon: '💻', count: 30, color: 'from-orange-500/20 to-orange-500/5' },
  ];

  const featuredModules = [
    { id: 1, title: 'تسلط بر دور بذری', type: 'دوره ویدیویی', duration: '۴۵ دقیقه', level: 'متوسط', instructor: 'سارا جنکینز' },
    { id: 2, title: 'مقیاس‌پذیری تیم مهندسی', type: 'کتاب الکترونیکی', duration: '۱۲ صفحه', level: 'پیشرفته', instructor: 'دیوید چن' },
    { id: 3, title: 'چارچوب تناسب محصول-بازار', type: 'کارگاه', duration: '۲ ساعت', level: 'مقدماتی', instructor: 'الکس ریورا' },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center space-x-2 space-x-reverse bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
          <Lightbulb size={16} className="text-purple-400" />
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">آکادمی Ignite</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">استارتاپ خود را ارتقا دهید</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">به منابع انحصاری، دوره‌های تخصصی و چارچوب‌های استراتژیک طراحی‌شده برای بنیان‌گذاران دسترسی پیدا کنید.</p>
      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input type="text" placeholder="امروز چه چیزی می‌خواهید یاد بگیرید؟" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:border-purple-500/50 transition-all text-right" />
          </div>
          <div className="flex space-x-2 space-x-reverse overflow-x-auto pb-2 w-full md:w-auto">
            {['همه', 'محبوب', 'جدیدترین', 'پربازدیدترین'].map((t) => (
              <button key={t} className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition whitespace-nowrap">{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`p-6 rounded-[2rem] bg-gradient-to-bl ${cat.color} border border-white/10 hover:scale-105 transition-transform cursor-pointer group`}>
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-lg">{cat.name}</h3>
              <p className="text-gray-400 text-xs mt-1">{cat.count} منبع</p>
              <div className="mt-4 flex items-center text-xs text-white/50 group-hover:text-white transition-colors">مرور <ChevronRight size={14} className="mr-1" /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">مسیرهای یادگیری ویژه</h2>
          <button className="text-purple-400 font-bold flex items-center hover:underline">مشاهده همه <ChevronRight size={18} className="mr-2" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredModules.map((module) => (
            <div key={module.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all group">
              <div className="relative h-48 w-full bg-gradient-to-bl from-purple-900/40 to-blue-900/40 flex items-center justify-center">
                <BookOpen size={48} className="text-white/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{module.type}</div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 space-x-reverse text-xs text-gray-400 mb-3">
                  <span className="flex items-center"><Clock size={14} className="ml-1" /> {module.duration}</span>
                  <span className="flex items-center"><Award size={14} className="ml-1" /> {module.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors leading-tight">{module.title}</h3>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-bold">{module.instructor.split(' ').map(n => n[0]).join('')}</div>
                    <span className="text-sm text-gray-400">{module.instructor}</span>
                  </div>
                  <button className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition"><PlayCircle size={20} className="text-purple-400" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-l from-blue-600/20 to-transparent border border-blue-500/30 rounded-[2.5rem] p-10 flex items-center space-x-8 space-x-reverse">
          <div className="p-6 bg-blue-500/20 rounded-3xl"><FileText size={40} className="text-blue-400" /></div>
          <div>
            <h3 className="text-2xl font-bold mb-2">کتابخانه منابع</h3>
            <p className="text-gray-400 mb-6">قالب‌های قابل دانلود، چک‌لیست‌های حقوقی و راهنمای پیچ دک.</p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-bold transition-all">دسترسی به کتابخانه</button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-transparent border border-purple-500/30 rounded-[2.5rem] p-10 flex items-center space-x-8 space-x-reverse">
          <div className="p-6 bg-purple-500/20 rounded-3xl"><TrendingUp size={40} className="text-purple-400" /></div>
          <div>
            <h3 className="text-2xl font-bold mb-2">بینش‌های بازار</h3>
            <p className="text-gray-400 mb-6">گزارش‌های هفتگی در مورد روندهای جذب سرمایه و تغییرات صنعت.</p>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-bold transition-all">خواندن گزارش‌ها</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;