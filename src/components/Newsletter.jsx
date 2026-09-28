
import React, { useState } from 'react';

const avatars = [
  'https://i.pravatar.cc/100?img=8',
  'https://i.pravatar.cc/100?img=32',
  'https://i.pravatar.cc/100?img=45',
];

function MailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe && onSubscribe(email);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__card">
        <div className="newsletter__icon">
          <MailIcon />
        </div>

        <h2 className="newsletter__title">
          اشترك في <span className="newsletter__title-accent">نشرتنا الإخبارية</span>
        </h2>
        <p className="newsletter__desc">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <button type="submit" className="newsletter__submit">
            اشترك الآن
          </button>
          <input
            type="email"
            required
            className="newsletter__input"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <div className="newsletter__trust">
          <div className="newsletter__avatars">
            {avatars.map((src, i) => (
              <img src={src} alt="" className="newsletter__avatar" key={i} />
            ))}
          </div>
          <span>انضم لـ +10,000 مصور</span>
          <span className="newsletter__sep">•</span>
          <span>بدون إزعاج</span>
          <span className="newsletter__sep">•</span>
          <span>إلغاء الاشتراك في أي وقت</span>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
