import React from 'react';

function SlidersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h13M21 18h-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="6" r="2" fill="currentColor" />
      <circle cx="10" cy="12" r="2" fill="currentColor" />
      <circle cx="17" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 19l6-10 4 5.5L16 9l5 10H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="17" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1L5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const categories = [
  { slug: 'techniques', name: 'تقنيات', count: '5 مقالة', icon: <SlidersIcon /> },
  { slug: 'landscape', name: 'مناظر طبيعية', count: '2 مقالة', icon: <MountainIcon /> },
  { slug: 'portrait', name: 'بورتريه', count: '3 مقالة', icon: <PersonIcon /> },
  { slug: 'lighting', name: 'إضاءة', count: '3 مقالة', icon: <GearIcon /> },
  { slug: 'gear', name: 'معدات', count: '3 مقالة', icon: <GearIcon /> },
];

function Categories({ onSelectCategory }) {
  return (
    <section className="topics">
      <div className="topics__header">
        <span className="topics__badge">
          <span className="topics__badge-dot" />
          <span className="topics__badge-dot topics__badge-dot--dim" />
          التصنيفات
        </span>
        <h2 className="topics__title">استكشف حسب الموضوع</h2>
        <p className="topics__subtitle">اعثر على محتوى مصمم حسب اهتماماتك</p>
      </div>

      <div className="topics__grid">
        {categories.map((cat, i) => (
          <button
            key={cat.slug}
            className="topic-card"
            style={i === 4 ? { gridColumn: 4 } : undefined}
            onClick={() => onSelectCategory && onSelectCategory(cat)}
          >
            <span className="topic-card__icon">{cat.icon}</span>
            <span className="topic-card__name">{cat.name}</span>
            <span className="topic-card__count">{cat.count}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
