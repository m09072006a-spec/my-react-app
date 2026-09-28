// حطي الملف ده في: src/pages/Article.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import articles from '../data/articles';

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 11l8-7 8 7M6 10v9h5v-5h2v5h5v-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 10h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 7l1.5-2.5h5L16 7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="13.5" r="3.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l8-8h6a2 2 0 012 2v6l-8 8-8-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="14" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="18" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="12" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="19" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10.7l8-4.4M8 13.3l8 4.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const slugify = (text) =>
  text
    .replace(/\s+/g, '-')
    .replace(/[^\w\u0600-\u06FF-]/g, '');

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    return (
      <div className="article-notfound">
        <p>المقال غير موجود.</p>
        <Link to="/blog" className="article-notfound__link">
          الرجوع للمدونة
        </Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const scrollToSection = (title) => {
    const el = document.getElementById(slugify(title));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article className="article-page">
      {/* الهيرو */}
      <div className="article-hero" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="article-hero__overlay" />

        <div className="article-hero__breadcrumb">
          <button onClick={() => navigate('/')} aria-label="الرئيسية" className="article-hero__crumb-icon">
            <HomeIcon />
          </button>
          <ChevronIcon />
          <Link to="/blog" className="article-hero__crumb-link">
            المدونة
          </Link>
          <ChevronIcon />
          <span className="article-hero__crumb-current">{article.category}</span>
        </div>

        <div className="article-hero__content">
          <div className="article-hero__meta">
            <span className="article-hero__category">{article.category}</span>
            <span className="article-hero__meta-item">
              <CalendarIcon />
              {article.date}
            </span>
            <span className="article-hero__meta-item">
              <ClockIcon />
              {article.readTime}
            </span>
          </div>

          <h1 className="article-hero__title">{article.title}</h1>

          <div className="article-hero__author">
            <img src={article.author.avatar} alt={article.author.name} />
            <div>
              <span className="article-hero__author-name">{article.author.name}</span>
              <span className="article-hero__author-role">{article.author.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="article-layout">
        {/* المحتوى */}
        <div className="article-body">
          <div className="article-quote">"{article.quote}"</div>

          {article.sections.map((s) => (
            <section id={slugify(s.title)} className="article-section" key={s.title}>
              <h2 className="article-section__title">
                <span className="article-section__icon">
                  <CameraIcon />
                </span>
                {s.title}
              </h2>
              <p className="article-section__text">{s.text}</p>
            </section>
          ))}

          {/* الوسوم */}
          <div className="article-box">
            <div className="article-box__heading">
              <span>الوسوم</span>
              <span className="article-box__icon">
                <TagIcon />
              </span>
            </div>
            <div className="article-tags">
              {article.tags.map((tag) => (
                <span className="article-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* المشاركة */}
          <div className="article-box">
            <div className="article-box__heading">
              <span>شارك المقال</span>
              <span className="article-box__icon">
                <ShareIcon />
              </span>
            </div>
            <div className="article-share">
              <button aria-label="نسخ الرابط" onClick={() => navigator.clipboard && navigator.clipboard.writeText(window.location.href)}>
                🔗
              </button>
              <a href={`https://wa.me/?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" aria-label="واتساب">
                💬
              </a>
              <a href="#" aria-label="لينكدإن">
                in
              </a>
              <a href="#" aria-label="إكس">
                ✕
              </a>
            </div>
          </div>

          {/* كاتب المقال */}
          <div className="article-box article-authorbox">
            <div className="article-authorbox__label">كاتب المقال</div>
            <div className="article-authorbox__content">
              <p className="article-authorbox__name">{article.author.name}</p>
              <p className="article-authorbox__role">{article.author.role}</p>
              <p className="article-authorbox__bio">{article.author.bio}</p>
            </div>
            <img src={article.author.avatar} alt={article.author.name} className="article-authorbox__avatar" />
          </div>
        </div>

        {/* السايد بار */}
        <aside className="article-sidebar">
          <div className="article-toc">
            <div className="article-toc__heading">
              <span>محتويات المقال</span>
              <span className="article-toc__icon">
                <TagIcon />
              </span>
            </div>
            <ol className="article-toc__list">
              {article.sections.map((s, i) => (
                <li key={s.title}>
                  <button onClick={() => scrollToSection(s.title)}>
                    <span>{s.title}</span>
                    <span className="article-toc__num">{i + 1}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="article-stats">
            <div className="article-stats__box">
              <CalendarIcon />
              <span className="article-stats__value">{article.date}</span>
              <span className="article-stats__label">تاريخ النشر</span>
            </div>
            <div className="article-stats__box">
              <ClockIcon />
              <span className="article-stats__value">{article.readTime.split(' ')[0]}</span>
              <span className="article-stats__label">وقت القراءة</span>
            </div>
          </div>

          <div className="article-cta">
            <div className="article-cta__icon">
              <MailIcon />
            </div>
            <p className="article-cta__title">لا تفوّت جديدنا</p>
            <p className="article-cta__desc">اشترك للحصول على أحدث المقالات</p>
            <button className="article-cta__btn" onClick={() => navigate('/blog')}>
              تصفح المزيد
            </button>
          </div>
        </aside>
      </div>

      {/* مقالات ذات صلة */}
      <section className="related">
        <div className="related__header">
          <button className="related__viewall" onClick={() => navigate('/blog')}>
            عرض الكل
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 12H6M11 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="related__heading">
            <h3>مقالات قد تعجبك</h3>
            <p>استكشفي المزيد من المحتوى المميز</p>
          </div>
        </div>

        <div className="related__grid">
          {related.map((r) => (
            <Link to={`/article/${r.id}`} className="related-card" key={r.id}>
              <div className="related-card__image-wrap">
                <img src={r.image} alt={r.title} />
                <span className="related-card__category">{r.category}</span>
              </div>
              <div className="related-card__body">
                <h4>{r.title}</h4>
                <div className="related-card__meta">
                  <img src={r.author.avatar} alt={r.author.name} />
                  <span>{r.author.name}</span>
                  <span className="related-card__dot">•</span>
                  <span>{r.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Article;
