// حطي الملف ده في: src/pages/Blog.jsx
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

const filters = ['جميع المقالات', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

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

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ListViewIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GridViewIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BlogCard({ article }) {
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

function Blog() {
  const [activeFilter, setActiveFilter] = useState('جميع المقالات');
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesFilter = activeFilter === 'جميع المقالات' || a.category === activeFilter;
      const matchesSearch = a.title.includes(search) || a.desc.includes(search);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero__grid-bg" />
        <div className="blog-hero__content">
          <span className="blog-hero__badge">
            <span className="blog-hero__badge-icon">▤</span>
            مدونتنا
          </span>
          <h1 className="blog-hero__title">
            استكشف <span className="blog-hero__title-accent">مقالاتنا</span>
          </h1>
          <p className="blog-hero__subtitle">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>

      <section className="blog-toolbar">
        <div className="blog-toolbar__row">
          <div className="blog-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`blog-filters__btn ${activeFilter === f ? 'blog-filters__btn--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="blog-search">
            <SearchIcon />
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="blog-toolbar__row blog-toolbar__row--meta">
          <div className="blog-view-toggle">
            <button
              className={view === 'list' ? 'blog-view-toggle__btn blog-view-toggle__btn--active' : 'blog-view-toggle__btn'}
              onClick={() => setView('list')}
              aria-label="عرض قائمة"
            >
              <ListViewIcon />
            </button>
            <button
              className={view === 'grid' ? 'blog-view-toggle__btn blog-view-toggle__btn--active' : 'blog-view-toggle__btn'}
              onClick={() => setView('grid')}
              aria-label="عرض شبكي"
            >
              <GridViewIcon />
            </button>
          </div>
          <span className="blog-count">عرض {filtered.length} مقالة</span>
        </div>
      </section>

      <section className="blog-list">
        <div className={view === 'grid' ? 'blog-grid' : 'blog-grid blog-grid--list'}>
          {filtered.map((article) => (
            <BlogCard article={article} key={article.id} />
          ))}
        </div>

        {/* ترقيم الصفحات — شكلي دلوقتي، وصّليه بمنطق التقسيم الحقيقي بتاعك لما يكون عندك أكتر من صفحة بيانات */}
        <div className="pagination">
          <button className="pagination__arrow" aria-label="السابق">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {[5, 4, 3, 2, 1].map((n) => (
            <button key={n} className={n === 1 ? 'pagination__num pagination__num--active' : 'pagination__num'}>
              {n}
            </button>
          ))}
          <button className="pagination__arrow" aria-label="التالي">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="pagination__label">صفحة 1 من 5</p>
      </section>
    </>
  );
}

export default Blog;
