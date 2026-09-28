
import React, { useState } from 'react';

function YoutubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.2" cy="8" r="1.1" fill="currentColor" />
      <path d="M7.2 11v6M11 11v6M11 13.3c0-1.5 1-2.3 2.3-2.3 1.4 0 2.2.9 2.2 2.4V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.9 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.5.2 2.6.1 2.9.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const exploreLinks = ['الرئيسية', 'المدونة', 'من نحن'];
const categoryLinks = ['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات'];

function FooterHeading({ children }) {
  return (
    <h4 className="footer__heading">
      {children}
      <span className="footer__heading-line" />
    </h4>
  );
}

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        {/* بيانات الاشتراك */}
        <div className="footer__col">
          <FooterHeading>ابقَ على اطلاع</FooterHeading>
          <p className="footer__text">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form className="footer__subscribe" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              className="footer__input"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="footer__subscribe-btn">
              اشترك
            </button>
          </form>
        </div>

        {/* استكشف */}
        <div className="footer__col">
          <FooterHeading>استكشف</FooterHeading>
          <ul className="footer__links">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* التصنيفات */}
        <div className="footer__col">
          <FooterHeading>التصنيفات</FooterHeading>
          <ul className="footer__links">
            {categoryLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* اللوجو والوصف */}
        <div className="footer__col">
          <div className="footer__logo">
            <span className="footer__logo-text">عدسة</span>
            <span className="footer__logo-mark">٤</span>
          </div>
          <p className="footer__text">مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
          <div className="footer__social">
            <a href="#" aria-label="يوتيوب" className="footer__social-btn">
              <YoutubeIcon />
            </a>
            <a href="#" aria-label="لينكدإن" className="footer__social-btn">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="جيتهاب" className="footer__social-btn">
              <GithubIcon />
            </a>
            <a href="#" aria-label="إكس" className="footer__social-btn">
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal">
          <a href="#">سياسة الخصوصية</a>
          <a href="#">شروط الخدمة</a>
        </div>
        <p className="footer__copyright">
          صنع بكل <span className="footer__heart">♥</span> — © 2026 عدسة. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
