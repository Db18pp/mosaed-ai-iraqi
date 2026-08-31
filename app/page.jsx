'use client';

import { useState } from 'react';

const sections = [
  ['🤖', 'مساعد AI', 'اسأل أي سؤال واحصل على جواب بسيط باللهجة العراقية.'],
  ['📚', 'السادس الإعدادي', 'شرح، تلخيص، حل أسئلة ومساعدة دراسية.'],
  ['📝', 'الأسئلة الوزارية', 'تدرب على الأسئلة حسب المادة والسنة والدور.'],
  ['🧠', 'اختبرني', 'خلّي الذكاء الاصطناعي ينشئ لك اختبار ويحسب درجتك.'],
  ['✍️', 'الكتابة', 'بحوث، تقارير، تلخيص وإعادة صياغة.'],
  ['🌐', 'الترجمة', 'ترجمة سهلة وسريعة للنصوص.'],
  ['💡', 'أفكار ومشاريع', 'ساعدك بأفكار للمشاريع والدراسة والعمل.'],
  ['🎙️', 'المساعد الصوتي', 'تحدث مع مساعدك بطريقة طبيعية.']
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main dir="rtl" className="min-h-screen bg-[#090806] text-[#f5e8c8]">
      <header className="border-b border-[#c99a35]/20 bg-[#090806]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4aa4c] text-2xl">
              🇮🇶
            </div>

            <div>
              <h1 className="font-bold text-white">مساعد AI العراقي</h1>
              <p className="text-xs text-[#bda66e]">
                ذكاء يفهمك باللهجة العراقية
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelected('مساعد AI')}
            className="rounded-xl bg-[#d4aa4c] px-5 py-2 font-bold text-black"
          >
            ابدأ الآن
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 text-center">
        <div className="mb-6 inline-block rounded-full border border-[#c99a35]/30 px-4 py-2 text-sm text-[#d4aa4c]">
          ✨ مساعدك الذكي العراقي
        </div>

        <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl">
          الذكاء الاصطناعي
          <br />
          <span className="text-[#d4aa4c]">بطابع عراقي 🇮🇶</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#aaa08d]">
          ادرس، اسأل، اختبر نفسك، اكتب، ترجم وخلي مساعدك الذكي وياك بكل خطوة.
        </p>

        <button
          onClick={() => setSelected('مساعد AI')}
          className="mt-8 rounded-2xl bg-gradient-to-r from-[#d9b45c] to-[#9b7121] px-8 py-4 font-bold text-black"
        >
          ابدأ المساعدة ✨
        </button>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map(([icon, title, description]) => (
          <button
            key={title}
            onClick={() => setSelected(title)}
            className="rounded-3xl border border-[#c99a35]/20 bg-[#11100d] p-6 text-right transition hover:-translate-y-1 hover:border-[#d4aa4c]/60"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4aa4c]/10 text-2xl">
              {icon}
            </div>

            <h3 className="text-lg font-bold text-white">{title}</h3>

            <p className="mt-2 text-sm leading-7 text-[#a9a08d]">
              {description}
            </p>

            <div className="mt-5 text-sm font-bold text-[#d4aa4c]">
              فتح القسم ←
            </div>
          </button>
        ))}
      </section>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-[#d4aa4c]/30 bg-[#11100d] p-7 text-center"
          >
            <div className="mb-4 text-4xl">🤖</div>

            <h3 className="text-2xl font-black text-white">
              {selected}
            </h3>

            <p className="mt-4 leading-7 text-[#aaa08d]">
              القسم جاهز بالواجهة، والخطوة التالية نربطه بالذكاء الاصطناعي
              والبيانات الحقيقية.
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full rounded-2xl bg-[#d4aa4c] py-3 font-bold text-black"
            >
              رجوع
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
