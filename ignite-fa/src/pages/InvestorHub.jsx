// 📁 File: src/pages/InvestorHub.jsx
import React from 'react';
import { TrendingUp, Search, Filter, DollarSign, Globe, Zap, ChevronRight, ArrowUpRight, PieChart, Layers } from 'lucide-react';

const InvestorHub = () => {
  const deals = [
    { id: 1, name: 'اکو فلو AI', sector: 'فناوری سبز', valuation: '۵.۲M$', stage: 'سری A', growth: '+۲۴٪', icon: '🌱' },
    { id: 2, name: 'کوانتوم لیپ', sector: 'فناوری عمیق', valuation: '۱۲M$', stage: 'بذری', growth: '+۱۸٪', icon: '⚛️' },
    { id: 3, name: 'نورو لینکر', sector: 'سلامت دیجیتال', valuation: '۸.۵M$', stage: 'سری B', growth: '+۴۰٪', icon: '🧠' },
    { id: 4, name: 'سایبر شیلد', sector: 'امنیت سایبری', valuation: '۲۲M$', stage: 'سری C', growth: '+۱۲٪', icon: '🛡️' },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">جریان معاملات سرمایه‌گذار</h1>
          <p className="text-gray-400 mt-2 text-lg">فرصت‌های با رشد بالا را در اکوسیستم ما کشف کنید.</p>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="flex -space-x-3 space-x-reverse">
            {[1,2,3,4].map(i => (<div key={i} className="w-10 h-10 rounded-full border-2 border-[#030014] bg-gray-800 flex items-center justify-center text-[10px]">U{i}</div>))}
            <div className="w-10 h-10 rounded-full border-2 border-[#030014] bg-purple-600 flex items-center justify-center text-[10px]">+۱۲</div>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all">دعوت از هم‌سرمایه‌گذاران</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'ارزش کل اکوسیستم', value: '۱.۲B$', growth: '+۱۲٪', icon: DollarSign, color: 'text-emerald-400' },
          { label: 'معاملات فعال', value: '۴۲', growth: '+۵٪', icon: Zap, color: 'text-yellow-400' },
          { label: 'دسترسی جهانی', value: '۱۴ کشور', growth: '+۲', icon: Globe, color: 'text-blue-400' },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-24 h-24 ${item.color.replace('text', 'bg')}/10 blur-3xl rounded-full group-hover:scale-150 transition-transform`}></div>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}><item.icon size={24} /></div>
              <span className="text-emerald-400 text-sm font-bold">{item.growth}</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">{item.label}</p>
            <h3 className="text-3xl font-bold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <aside className="xl:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Filter size={20} className="ml-2 text-purple-400" /> فیلترهای هوشمند
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 block">بخش</label>
                <div className="space-y-2">
                  {['همه بخش‌ها', 'فین‌تک', 'هوش مصنوعی', 'زیست‌فناوری', 'SaaS'].map((s, i) => (
                    <div key={i} className="flex items-center justify-between text-sm hover:text-purple-400 cursor-pointer group">
                      <span>{s}</span>
                      <div className="w-4 h-4 rounded border border-white/10 group-hover:border-purple-500 transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 block">مرحله سرمایه‌گذاری</label>
                <div className="space-y-2">
                  {['بذری', 'سری A', 'سری B', 'پیش از عرضه اولیه'].map((s, i) => (
                    <div key={i} className="flex items-center justify-between text-sm hover:text-purple-400 cursor-pointer group">
                      <span>{s}</span>
                      <div className="w-4 h-4 rounded border border-white/10 group-hover:border-purple-500 transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full py-3 bg-gradient-to-l from-purple-600 to-blue-600 rounded-2xl font-bold text-sm shadow-lg shadow-purple-500/20">اعمال فیلترها</button>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
            <h3 className="text-sm font-bold text-gray-400 mb-4">تخصیص سبد</h3>
            <div className="h-32 flex items-end justify-between space-x-2 space-x-reverse">
              {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-full bg-purple-500/40 rounded-t-md hover:bg-purple-500 transition-all cursor-pointer"></div>
              ))}
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-tighter">حجم معاملات ماهانه</p>
          </div>
        </aside>

        <div className="xl:col-span-3 space-y-6">
          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
            <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-400">
              <span className="flex items-center text-white"><Layers size={16} className="ml-2"/> ۴۲ معامله فعال</span>
              <span>|</span>
              <span>مرتب‌سازی بر اساس: <span className="text-white font-bold">بالاترین رشد</span></span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-purple-400">
              <span className="cursor-pointer">مشاهده شبکه‌ای</span>
              <span className="text-gray-600">/</span>
              <span className="font-bold">مشاهده لیستی</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:border-white/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{deal.icon}</div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full uppercase">{deal.stage}</span>
                    <p className="text-2xl font-bold mt-2">{deal.valuation}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{deal.name}</h3>
                  <p className="text-sm text-gray-500">{deal.sector}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center text-emerald-400 font-bold"><TrendingUp size={18} className="ml-1" />{deal.growth}</div>
                  <button className="flex items-center space-x-2 space-x-reverse text-sm font-bold bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition-all">
                    <span>مشاهده فایل</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHub;