
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import articles from '../data/articles';

const latest = articles.slice(3, 6);

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M18 12H6M11 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LatestCard({ article }) {
  return (
    <article className="latest-card">
      <Link to={`/article/${article.id}`} className="latest-card__image-wrap">
        <img src={article.image} alt={article.title} className="latest-card__image" />
        <span className="latest-card__category">{article.category}</span>
      </Link>

      <div className="latest-card__body">
        <div className="latest-card__meta">
          <span className="latest-card__readtime">
            <ClockIcon />
            {article.readTime}
          </span>
          <span className="latest-card__dot">•</span>
          <span className="latest-card__date">{article.date}</span>
        </div>

        <h3 className="latest-card__title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="latest-card__desc">{article.desc}</p>

        <div className="latest-card__footer">
          <div className="latest-card__author">
            <img src={article.author.avatar} alt={article.author.name} className="latest-card__avatar" />
            <div className="latest-card__author-text">
              <span className="latest-card__author-name">{article.author.name}</span>
              <span className="latest-card__author-role">{article.author.role}</span>
            </div>
          </div>

          <Link to={`/article/${article.id}`} className="latest-card__read-btn" aria-label="اقرأ المقال">
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function LatestArticles() {
  const navigate = useNavigate();

  return (
    <section className="latest">
      <div className="latest__header">
        <button className="latest__viewall" onClick={() => navigate('/blog')}>
          <ArrowIcon />
          عرض جميع المقالات
        </button>

        <div className="latest__heading">
          <span className="latest__badge">
            <span className="latest__badge-dot" />
            <span className="latest__badge-dot latest__badge-dot--dim" />
            الأحدث
          </span>
          <h2 className="latest__title">أحدث المقالات</h2>
          <p className="latest__subtitle">محتوى جديد طازج من المطبعة</p>
        </div>
      </div>

      <div className="latest__grid">
        {latest.map((article) => (
          <LatestCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  );
}

export default LatestArticles;
