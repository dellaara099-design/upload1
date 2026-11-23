// 📁 File: src/pages/MentorPortal.jsx
import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Clock, Star, Search, CheckCircle2, ArrowUpRight, Filter } from 'lucide-react';

const MentorPortal = () => {
  const [view, setView] = useState('calendar');

  const upcomingSessions = [
    { id: 1, startup: 'اکو فلو AI', mentor: 'شما', time: 'امروز، ۱۴:۰۰', type: 'تماس استراتژی', status: 'تایید شده' },
    { id: 2, startup: 'کوانتوم لیپ', mentor: 'شما', time: 'فردا، ۱۰:۳۰', type: 'بررسی پیچ', status: 'در انتظار' },
    { id: 3, startup: 'بایو سینک', mentor: 'شما', time: '۲۵ مهر، ۱۶:۰۰', type: 'ممیزی رشد', status: 'تایید شده' },
  ];

  const startupsToMentor = [
    { name: 'اکو فلو AI', industry: 'پایداری', progress: 'فاز ۲', rating: 4.8 },
    { name: 'کوانتوم لیپ', industry: 'فناوری عمیق', progress: 'فاز ۱', rating: 4.9 },
    { name: 'بایو سینک', industry: 'زیست‌فناوری', progress: 'فاز ۳', rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-l from-white to-gray-500 bg-clip-text text-transparent">داشبورد منتور</h1>
          <p className="text-gray-400 mt-2">جلسات منتورشیپ خود را مدیریت و پیشرفت استارتاپ‌ها را دنبال کنید.</p>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input type="text" placeholder="جستجوی استارتاپ‌ها..." className="bg-white/5 border border-white/10 rounded-xl py-2 pr-10 pl-4 text-sm focus:outline-none focus:border-purple-500/50 w-64 text-right" />
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-bold transition-all">تنظیم زمان‌بندی</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'کل جلسات', value: '۱۲۸', icon: Clock, color: 'text-blue-400' },
          { label: 'استارتاپ‌های فعال', value: '۱۲', icon: Users, color: 'text-purple-400' },
          { label: 'میانگین امتیاز', value: '۴.۹', icon: Star, color: 'text-yellow-400' },
          { label: 'تکمیل‌شده', value: '۹۴', icon: CheckCircle2, color: 'text-green-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center space-x-4 space-x-reverse">
            <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}><stat.icon size={24} /></div>
            <div>
              <p className="text-gray-400 text-xs">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">جلسات پیش‌رو</h2>
              <button className="text-sm text-gray-400 flex items-center space-x-2 space-x-reverse hover:text-white transition">
                <Filter size={16} /><span>فیلتر</span>
              </button>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="flex items-center space-x-5 space-x-reverse">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-bl from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                      <Calendar className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{session.startup}</h4>
                      <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-400 mt-1">
                        <span className="flex items-center"><Clock size={14} className="ml-1" /> {session.time}</span>
                        <span>•</span>
                        <span>{session.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${session.status === 'تایید شده' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{session.status}</span>
                    <button className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition"><ArrowUpRight size={20} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-l from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MessageSquare className="text-purple-400" />
                <h2 className="text-2xl font-bold">گفتگوهای اخیر</h2>
              </div>
              <button className="text-sm text-purple-400 hover:underline">باز کردن صندوق ورودی</button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-400 italic">پیام خوانده‌نشده جدیدی از استارتاپ‌ها وجود ندارد.</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h2 className="text-2xl font-bold mb-6">استارتاپ‌های شما</h2>
            <div className="space-y-6">
              {startupsToMentor.map((startup, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-200 group-hover:text-white transition">{startup.name}</h4>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">{startup.industry}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>پیشرفت: <span className="text-purple-400">{startup.progress}</span></span>
                    <span className="flex items-center"><Star size={12} className="ml-1 text-yellow-500 fill-yellow-500" /> {startup.rating}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-l from-purple-500 to-blue-500" style={{ width: `${(i+1)*30}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-2xl border border-white/10 text-sm font-medium hover:bg-white/5 transition">مشاهده همه استارتاپ‌ها</button>
          </section>

          <section className="bg-blue-600/10 border border-blue-500/30 rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-blue-400 mb-2">دستیار هوشمند منتور</h3>
              <p className="text-xs text-gray-300 leading-relaxed">"شما امروز ۲ جلسه دارید. پیشنهاد می‌کنم قبل از ساعت ۲ بعدازظهر پیچ دک <b>اکو فلو AI</b> را بررسی کنید."</p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentorPortal;