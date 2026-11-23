// 📁 File: src/pages/AdminPanel.jsx
import React from 'react';
import { Users, Rocket, DollarSign, AlertCircle, BarChart3, Search, MoreVertical, ArrowUpRight } from 'lucide-react';

const AdminPanel = () => {
  const stats = [
    { label: 'کل استارتاپ‌ها', val: '۱۲۸', change: '+۱۲٪', icon: Rocket, color: 'text-blue-400' },
    { label: 'سرمایه‌گذاران فعال', val: '۴۵', change: '+۳٪', icon: Users, color: 'text-purple-400' },
    { label: 'کل سرمایه‌گذاری', val: '۴۲.۵M$', change: '+۱۸٪', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'درخواست‌های در انتظار', val: '۱۴', change: '-۲', icon: AlertCircle, color: 'text-orange-400' },
  ];

  const recentApps = [
    { id: 1, company: 'اکو فلو AI', stage: 'سری A', date: '۲ ساعت پیش', status: 'بررسی' },
    { id: 2, company: 'کوانتوم لیپ', stage: 'بذری', date: '۵ ساعت پیش', status: 'تایید شده' },
    { id: 3, company: 'نورو لینکر', stage: 'پیش از بذری', date: '۱ روز پیش', status: 'در انتظار' },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <header className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">نمای کلی سیستم</h1>
          <p className="text-gray-500">خوش آمدید، مدیر سیستم</p>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input type="text" placeholder="جستجوی اکوسیستم..." className="bg-white/5 border border-white/10 rounded-xl py-2 pr-10 pl-4 focus:outline-none focus:border-purple-500 text-right" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-bl from-purple-500 to-blue-500" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${s.color}`}><s.icon size={24} /></div>
                <span className={`text-xs font-bold ${s.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{s.change}</span>
              </div>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              <h3 className="text-2xl font-bold mt-1">{s.val}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications Table */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">درخواست‌های اخیر</h3>
              <button className="text-sm text-purple-400 hover:underline font-medium">مشاهده همه</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-widest border-b border-white/5">
                    <th className="pb-4 font-bold text-right">شرکت</th>
                    <th className="pb-4 font-bold text-right">مرحله</th>
                    <th className="pb-4 font-bold text-right">تاریخ</th>
                    <th className="pb-4 font-bold text-right">وضعیت</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentApps.map((app) => (
                    <tr key={app.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 font-bold">{app.company}</td>
                      <td className="py-4 text-sm text-gray-400">{app.stage}</td>
                      <td className="py-4 text-sm text-gray-400">{app.date}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          app.status === 'تایید شده' ? 'bg-emerald-500/10 text-emerald-500' : 
                          app.status === 'بررسی' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="py-4 text-left"><MoreVertical size={16} className="text-gray-600 cursor-pointer inline-block" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Growth Chart Placeholder (Visual Card) */}
          <div className="bg-gradient-to-bl from-purple-600/20 to-blue-600/20 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">رشد اکوسیستم</h3>
              <p className="text-sm text-gray-400 mb-8">کاربران فعال ماهانه و تعامل.</p>
              <div className="h-48 flex items-end space-x-3 space-x-reverse">
                {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-purple-500/40 rounded-t-lg transition-all hover:bg-purple-500" style={{height: `${h}%`}} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-400">کل تعامل</span>
                <span className="font-bold text-emerald-400">+۲۴.۵٪</span>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold transition flex items-center justify-center space-x-2 space-x-reverse">
                <BarChart3 size={18} /> <span>گزارش تفصیلی</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;