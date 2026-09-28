
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import articles from '../data/articles';

const featured = articles.slice(0, 3);

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M18 12H6M11 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className="article-card__content">
        <div className="article-card__meta">
          <span className="article-card__readtime">
            <ClockIcon />
            {article.readTime}
          </span>
          <span className="article-card__category">{article.category}</span>
        </div>

        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__desc">{article.desc}</p>

        <div className="article-card__footer">
          <Link to={`/article/${article.id}`} className="article-card__link">
            <ArrowIcon />
            اقرأ المقال
          </Link>

          <div className="article-card__author">
            <div className="article-card__author-text">
              <span className="article-card__author-name">{article.author.name}</span>
              <span className="article-card__author-date">{article.date}</span>
            </div>
            <div className="article-card__avatar-wrap">
              <img src={article.author.avatar} alt={article.author.name} className="article-card__avatar" />
              <span className="article-card__status-dot" />
            </div>
          </div>
        </div>
      </div>

      <Link to={`/article/${article.id}`} className="article-card__image-wrap">
        <img src={article.image} alt={article.title} className="article-card__image" />
        <span className="article-card__badge">
          <StarIcon />
          مميز
        </span>
      </Link>
    </article>
  );
}

function Card() {
  const navigate = useNavigate();

  return (
    <section className="featured">
      <div className="featured__header">
        <button className="featured__viewall" onClick={() => navigate('/blog')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          عرض الكل
        </button>

        <div className="featured__heading">
          <span className="featured__badge">
            <span className="featured__badge-dot" />
            <span className="featured__badge-dot featured__badge-dot--dim" />
            مميز
          </span>
          <h2 className="featured__title">مقالات مختارة</h2>
          <p className="featured__subtitle">محتوى منتقى لبدء رحلة تعلمك</p>
        </div>
      </div>

      <div className="featured__list">
        {featured.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  );
}

export default Card;
