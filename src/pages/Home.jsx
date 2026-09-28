// حطي الملف ده في: src/pages/Home.jsx
// الستايل بتاعه موجود جوه App.css (مفيش import هنا)
import React from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories';
import LatestArticles from '../components/LatestArticles';
import Newsletter from '../components/Newsletter';

const stats = [
  {
    value: '6',
    label: 'كاتب',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l1.2-4.2L16 5l3 3L8.2 18.8 4 20z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '4',
    label: 'تصنيفات',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '10+ألف',
    label: 'قارئ',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M15.5 14.2c2.4.4 4 1.9 4 4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'مقالة',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Home() {
  return (
    <>
    <section className="hero">
      <div className="hero__grid-bg" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span className="hero__badge-dot hero__badge-dot--dim" />
          مرحباً بك في عدسة
        </div>

        <h1 className="hero__title">
          اكتشف <span className="hero__title-accent">فن</span> التصوير الفوتوغرافي
        </h1>

        <p className="hero__desc">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        <div className="hero__buttons">
          <button className="hero__btn hero__btn--primary">
            استكشف المقالات
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 12H6M11 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="hero__btn hero__btn--ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 11v5M12 8v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            اعرف المزيد
          </button>
        </div>

        <div className="hero__sta ts">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <div className="hero__stat-icon">{stat.icon}</div>
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Card />
    <Categories />
    <LatestArticles />
    <Newsletter />
    </>
  );
}

export default Home;
