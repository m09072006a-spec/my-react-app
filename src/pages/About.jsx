
import React from 'react';

const stats = [
  { value: '15+', label: 'تصنيف', icon: 'layers' },
  { value: '50+', label: 'كاتب خبير', icon: 'pen' },
  { value: '500+', label: 'مقالة منشورة', icon: 'doc' },
  { value: '+2مليون', label: 'قارئ شهرياً', icon: 'people' },
];

const values = [
  { title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات', icon: 'refresh' },
  { title: 'المجتمع', desc: 'نتعلم مع أفضل المصورين', icon: 'handshake' },
  { title: 'تركيز عملي', desc: 'أمثلة واقعية يمكنك تطبيقها اليوم', icon: 'bolt' },
  { title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتوب بخبرة', icon: 'target' },
];

const team = [
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', img: 51 },
  { name: 'محمد علي', role: 'مصور بورتريه', img: 33 },
  { name: 'سالم أحمد', role: 'مصور محترف', img: 12 },
  { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', img: 15 },
  { name: 'ليث محمود', role: 'فنان بصري', img: 52 },
  { name: 'داود خالد', role: 'مدرب تصوير', img: 60 },
  { name: 'هاني الشمري', role: 'مصور طعام', img: 65 },
  { name: 'نادر سعيد', role: 'مصور شوارع', img: 59 },
  { name: 'خالد الفيصل', role: 'مصور فني', img: 62 },
  { name: 'سامي الحربي', role: 'خبير تعديل صور', img: 13 },
  { name: 'فارس العلي', role: 'فنان فوتوغرافي', img: 14 },
  { name: 'عمر الراشد', role: 'مصور حياة برية', img: 67 },
  { name: 'منصور الزهراني', role: 'مصور زفاف', img: 68 },
  { name: 'باسم المصري', role: 'مصور فني', img: 22 },
  { name: 'رامي الخطيب', role: 'مصور ماكرو', img: 23 },
  { name: 'طارق النعيمي', role: 'مصور معماري', img: 24 },
  { name: 'لؤي الصالح', role: 'مصور تجاري', img: 25 },
  { name: 'فيصل الدوسري', role: 'مصور جوي', img: 26 },
  { name: 'ياسر العتيبي', role: 'مصور رحلات', img: 27 },
  { name: 'ماجد القحطاني', role: 'مصور استوديو', img: 28 },
  { name: 'أحمد الشهري', role: 'مصور رياضي', img: 14 },
  { name: 'عبدالله الغامدي', role: 'مصور عقارات', img: 31 },
  { name: 'نايف المطيري', role: 'مصور مواليد', img: 34 },
  { name: 'دحام الحسيني', role: 'فنان بصري', img: 35 },
  { name: 'فهد السبيعي', role: 'مراجع معدات', img: 36 },
  { name: 'سلطان الراجحي', role: 'فنان تصوير', img: 37 },
  { name: 'كريم الفهد', role: 'خبير نقدي', img: 38 },
  { name: 'راشد الجاسر', role: 'فنان بصري', img: 39 },
];

function StatIcon({ type }) {
  const icons = {
    layers: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    pen: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l1.2-4.2L16 5l3 3L8.2 18.8 4 20z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    doc: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    people: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M15.5 14.2c2.4.4 4 1.9 4 4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[type];
}

function ValueIcon({ type }) {
  const icons = {
    refresh: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 4v4h-4M6 20v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    handshake: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12l4-4 4 3 3-3 3 2 4-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8l3 7M17 7l-3 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    bolt: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    target: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
      </svg>
    ),
  };
  return icons[type];
}

function CheckBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.2 1.4 2.6-.3 1 2.4 2.4 1-.3 2.6L21 12l-1.1 2.3.3 2.6-2.4 1-1 2.4-2.6-.3L12 22l-2.2-1.4-2.6.3-1-2.4-2.4-1 .3-2.6L3 12l1.1-2.3-.3-2.6 2.4-1 1-2.4 2.6.3L12 2z" />
      <path d="M9 12l2 2 4-4" stroke="#0b0a09" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.2" cy="8" r="1.1" fill="currentColor" />
      <path d="M7.2 11v6M11 11v6M11 13.3c0-1.5 1-2.3 2.3-2.3 1.4 0 2.2.9 2.2 2.4V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__grid-bg" />
        <div className="about-hero__content">
          <span className="about-hero__badge">
            <span className="about-hero__badge-dot" />
            <span className="about-hero__badge-dot about-hero__badge-dot--dim" />
            من نحن
          </span>
          <h1 className="about-hero__title">
            مهمتنا هي <span className="about-hero__title-accent">الإعلام والإلهام</span>
          </h1>
          <p className="about-hero__desc">
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون
            بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="about-hero__stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat__icon">
                  <StatIcon type={s.icon} />
                </span>
                <span className="about-stat__value">{s.value}</span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__header">
          <h2>
            <span className="about-values__bar" />
            قيمنا
          </h2>
          <p>المبادئ التي توجهنا في كل ما نقوم بإنشائه</p>
        </div>

        <div className="about-values__grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <span className="value-card__icon">
                <ValueIcon type={v.icon} />
              </span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <div className="about-team__header">
          <span className="about-team__badge">
            <span className="about-team__badge-dot" />
            <span className="about-team__badge-dot about-team__badge-dot--dim" />
            فريقنا
          </span>
          <h2>تعرف على كتابنا</h2>
          <p>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
        </div>

        <div className="about-team__grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-card__avatar-wrap">
                <img src={`https://i.pravatar.cc/120?img=${m.img}`} alt={m.name} />
                <span className="team-card__badge">
                  <CheckBadge />
                </span>
              </div>
              <h4>{m.name}</h4>
              <p>{m.role}</p>
              <div className="team-card__social">
                <a href="#" aria-label="لينكدإن">
                  <LinkedinIcon />
                </a>
                <a href="#" aria-label="الموقع الشخصي">
                  <GlobeIcon />
                </a>
                <a href="#" aria-label="إكس">
                  <XIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
        <p>نحب أن نسمع منك، سواء كان لديك سؤال حول مدوناتنا، أو تريد المساهمة، أو تريد فقط إلقاء التحية لا تتردد في التواصل.</p>
      </section>
    </>
  );
}

export default About;
