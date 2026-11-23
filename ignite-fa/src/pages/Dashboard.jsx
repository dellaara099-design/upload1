// 📁 File: src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, TrendingUp, Calendar, Settings, Bell, Search,
  ChevronRight, Award, Target
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'هدف سرمایه‌گذاری', value: '۴۵۰k$ / ۱M$', progress: 45, icon: TrendingUp, color: 'text-blue-400' },
    { label: 'منتورهای فعال', value: '۱۲', progress: 100, icon: Award, color: 'text-purple-400' },
    { label: 'نقاط عطف', value: '۰۸/۱۲', progress: 66, icon: Target, color: 'text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white flex font-sans">
      <aside className="w-64 border-l border-white/10 bg-[#030014]/50 backdrop-blur-xl hidden lg:flex flex-col p-6">
        <div className="text-2xl font-black bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent mb-12">IGNITE.</div>
        <nav className="space-y-2 flex-1">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'نمای کلی' },
            { id: 'applications', icon: FileText, label: 'درخواست‌ها' },
            { id: 'mentors', icon: Calendar, label: 'منتورشیپ' },
            { id: 'growth', icon: TrendingUp, label: 'رشد' },
            { id: 'settings', icon: Settings, label: 'تنظیمات' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 bg-gradient-to-bl from-purple-900/40 to-blue-900/40 rounded-2xl border border-white/10">
          <p className="text-xs text-purple-300 font-bold mb-1">پلن حرفه‌ای</p>
          <p className="text-[10px] text-gray-400 mb-3">آنالیز پیشرفته و شبکه‌سازی را باز کنید.</p>
          <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg">ارتقا</button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 sticky top-0 bg-[#030014]/80 backdrop-blur-md z-40">
          <div className="relative w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="جستجوی معیارها، منتورها، مدارک..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pr-10 pl-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-right"
            />
          </div>
          <div className="flex items-center space-x-6 space-x-reverse">
            <button className="relative text-gray-400 hover:text-white transition">
              <Bell size={22} />
              <span className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#030014]"></span>
            </button>
            <div className="flex items-center space-x-3 space-x-reverse border-r border-white/10 pr-6">
              <div className="text-left">
                <p className="text-sm font-bold">نوا تک AI</p>
                <p className="text-[10px] text-green-400">استارتاپ فعال</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blue-500 to-purple-500 border border-white/20"></div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold">خوش آمدید، نوا تک! 👋</h1>
              <p className="text-gray-400">آنچه در برنامه شتاب‌دهنده شما می‌گذرد.</p>
            </div>
            <button className="flex items-center space-x-2 space-x-reverse text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition">
              <span>خروجی گزارش</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-32 h-32 bg-${stat.color.split('-')[1]}-500/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <p className="text-gray-400 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <div className="mt-4 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-l from-blue-500 to-purple-500 transition-all duration-1000" style={{ width: `${stat.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">جلسات منتورشیپ پیش‌رو</h3>
                <button className="text-sm text-purple-400 hover:underline">مشاهده تقویم</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'سارا جنکینز', role: 'شریک سرمایه‌گذاری @ سکویا', time: 'فردا، ۱۰:۰۰ صبح', type: 'تماس ویدیویی' },
                  { name: 'دکتر آرش رضایی', role: 'متخصص اخلاق هوش مصنوعی', time: 'جمعه، ۰۲:۳۰ بعدازظهر', type: 'حضوری' },
                  { name: 'مایکل چن', role: 'متخصص مقیاس‌پذیری', time: 'دوشنبه آینده، ۰۹:۰۰ صبح', type: 'تماس ویدیویی' },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-bl from-gray-700 to-gray-900 border border-white/10"></div>
                      <div>
                        <p className="font-bold text-sm">{session.name}</p>
                        <p className="text-xs text-gray-500">{session.role}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">{session.time}</p>
                      <p className="text-[10px] text-purple-400 uppercase tracking-wider">{session.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
              <h3 className="text-xl font-bold mb-6">فعالیت‌های اخیر</h3>
              <div className="space-y-6">
                {[
                  { msg: 'نقطه عطف "MVP آماده" تایید شد', time: '۲ ساعت پیش', icon: CheckIcon },
                  { msg: 'درخواست منتور جدید دریافت شد', time: '۵ ساعت پیش', icon: BellIcon },
                  { msg: 'سند سرمایه‌گذاری آپلود شد', time: '۱ روز پیش', icon: FileIcon },
                ].map((act, i) => (
                  <div key={i} className="flex space-x-4 space-x-reverse">
                    <div className="mt-1 text-purple-500"><act.icon size={16} /></div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">{act.msg}</p>
                      <p className="text-[10px] text-gray-500">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const CheckIcon = () => <div className="w-2 h-2 bg-green-500 rounded-full" />;
const BellIcon = () => <div className="w-2 h-2 bg-blue-500 rounded-full" />;
const FileIcon = () => <div className="w-2 h-2 bg-purple-500 rounded-full" />;

export default Dashboard;