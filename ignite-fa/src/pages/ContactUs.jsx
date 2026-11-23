// 📁 File: src/pages/ContactUs.jsx
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent">
            تماس با ما
          </h1>
          <p className="text-gray-400 text-xl">ما همیشه آماده شنیدن ایده‌های شما هستیم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:border-purple-500/50 transition">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 mx-auto flex items-center justify-center mb-4"><Mail className="text-purple-400" /></div>
            <h3 className="font-bold mb-2">ایمیل</h3>
            <p className="text-sm text-gray-400">hello@ignite.io</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:border-purple-500/50 transition">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 mx-auto flex items-center justify-center mb-4"><Phone className="text-blue-400" /></div>
            <h3 className="font-bold mb-2">تلفن</h3>
            <p className="text-sm text-gray-400">۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:border-purple-500/50 transition">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 mx-auto flex items-center justify-center mb-4"><MapPin className="text-emerald-400" /></div>
            <h3 className="font-bold mb-2">آدرس</h3>
            <p className="text-sm text-gray-400">تهران، خیابان نوآوری، پلاک ۱</p>
          </div>
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
          <h2 className="text-2xl font-bold mb-8 text-center">ارسال پیام مستقیم</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="نام و نام خانوادگی" className="bg-[#030014] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right" />
              <input type="email" placeholder="ایمیل شما" className="bg-[#030014] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right" />
            </div>
            <textarea rows="5" placeholder="متن پیام شما..." className="w-full bg-[#030014] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right"></textarea>
            <button type="button" className="w-full bg-gradient-to-l from-blue-600 to-purple-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 space-x-reverse hover:shadow-lg transition">
              <span>ارسال پیام</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
