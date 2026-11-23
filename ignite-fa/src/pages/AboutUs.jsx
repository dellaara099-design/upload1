// 📁 File: src/pages/AboutUs.jsx
import React from 'react';
import { Target, Eye, Users, Rocket } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-l from-blue-400 to-purple-500 bg-clip-text text-transparent">
          درباره IGNITE.IO
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          ما یک مرکز رشد و شتاب‌دهنده هستیم که با هدف حمایت از استارتاپ‌های نوپا و تبدیل ایده‌های بزرگ به کسب‌وکارهای پایدار فعالیت می‌کنیم.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-right">
            <Target className="text-purple-500 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">مأموریت ما</h3>
            <p className="text-gray-400 leading-relaxed">
              فراهم کردن زیرساخت‌های فنی، مالی و منتورشیپ برای بنیان‌گذارانی که می‌خواهند آینده فناوری را شکل دهند.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-right">
            <Eye className="text-blue-500 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">چشم‌انداز ما</h3>
            <p className="text-gray-400 leading-relaxed">
              تبدیل شدن به بزرگ‌ترین اکوسیستم فناوری در منطقه و پرورش تک‌شاخ‌های (Unicorns) جدید.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-400">+۱۵۰</p>
            <p className="text-sm text-gray-500 mt-2">استارتاپ</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-400">+۵۰۰۰</p>
            <p className="text-sm text-gray-500 mt-2">بنیان‌گذار</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-400">۲۵۰M$</p>
            <p className="text-sm text-gray-500 mt-2">سرمایه جذب‌شده</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;