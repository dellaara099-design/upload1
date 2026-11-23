// 📁 File: src/pages/SmartApplication.jsx
import React, { useState } from 'react';
import { Rocket, ChevronRight, ChevronLeft, CheckCircle, Upload } from 'lucide-react';

const SmartApplication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ companyName: '', sector: '', pitch: '', funding: '', deck: null });

  const steps = ["اطلاعات پایه", "مدل کسب‌وکار", "سرمایه و پیچ", "نهایی‌سازی"];

  const next = () => setStep(s => Math.min(s + 1, 4));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-[#030014] text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 right-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 right-0 h-1 bg-purple-600 -translate-y-1/2 z-0 transition-all duration-500" style={{width: `${(step-1)*33.3}%`}} />
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step > i + 1 ? 'bg-purple-600' : step === i + 1 ? 'bg-white text-black' : 'bg-gray-800'}`}>
                {step > i + 1 ? <CheckCircle size={16} /> : i + 1}
              </div>
              <span className="text-[10px] mt-2 uppercase font-bold text-gray-500">{s}</span>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl">
          <div className="mb-8 flex items-center space-x-3 space-x-reverse">
            <Rocket className="text-purple-500" />
            <h2 className="text-2xl font-bold">درخواست برای Ignition</h2>
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">نام شرکت</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right" placeholder="مثلاً نبولا AI" onChange={e => setFormData({...formData, companyName: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">بخش</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none appearance-none text-right" onChange={e => setFormData({...formData, sector: e.target.value})}>
                  <option className="bg-[#0a0a1a]">انتخاب بخش</option>
                  <option className="bg-[#0a0a1a]">فین‌تک</option>
                  <option className="bg-[#0a0a1a]">فناوری عمیق</option>
                  <option className="bg-[#0a0a1a]">SaaS</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-left duration-500">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">چه مشکلی را حل می‌کنید؟</label>
                <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right" placeholder="ارزش پیشنهادی خود را توضیح دهید..." onChange={e => setFormData({...formData, pitch: e.target.value})} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in slide-in-from-left duration-500">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">مبلغ سرمایه‌گذاری هدف ($)</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none text-right" placeholder="مثلاً ۵۰۰,۰۰۰" onChange={e => setFormData({...formData, funding: e.target.value})} />
              </div>
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all cursor-pointer group">
                <Upload className="mx-auto mb-3 text-gray-500 group-hover:text-purple-500" />
                <p className="text-sm text-gray-400">آپلود پیچ دک (PDF، حداکثر ۱۰MB)</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-green-500" /></div>
              <h3 className="text-2xl font-bold mb-2">آماده پرتاب!</h3>
              <p className="text-gray-400 mb-8">اطلاعات خود را بررسی کنید و به کمیته سرمایه‌گذاری ما ارسال کنید.</p>
              <div className="bg-white/5 p-4 rounded-xl text-right text-sm text-gray-400 mb-8">
                <div className="flex justify-between"><span>شرکت:</span><span className="text-white">{formData.companyName}</span></div>
                <div className="flex justify-between"><span>بخش:</span><span className="text-white">{formData.sector}</span></div>
              </div>
            </div>
          )}

          {step < 4 && (
            <div className="flex justify-between mt-12">
              <button onClick={prev} className="flex items-center text-gray-400 hover:text-white transition px-4"><ChevronRight size={20} /> قبلی</button>
              <button onClick={next} className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl font-bold flex items-center transition">بعدی <ChevronLeft size={20} className="mr-2" /></button>
            </div>
          )}
          {step === 4 && (
            <button onClick={() => alert('درخواست ارسال شد!')} className="w-full bg-gradient-to-l from-purple-600 to-blue-600 py-4 rounded-xl font-bold text-lg">ارسال درخواست</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartApplication;