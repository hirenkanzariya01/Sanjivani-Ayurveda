import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const products = [
  {
    id: 1,
    emoji: "🌿",
    name: "Triphala Churna",
    category: "Digestive Health",
    price: "₹349",
    rating: 4.8,
    reviews: 214,
    tag: "Best Seller",
  },
  {
    id: 2,
    emoji: "🌸",
    name: "Ashwagandha Gold",
    category: "Stress & Immunity",
    price: "₹499",
    rating: 4.9,
    reviews: 389,
    tag: "New",
  },
  {
    id: 3,
    emoji: "🍯",
    name: "Tulsi Honey Blend",
    category: "Respiratory Wellness",
    price: "₹279",
    rating: 4.7,
    reviews: 156,
    tag: "Popular",
  },
  {
    id: 4,
    emoji: "💧",
    name: "Brahmi Hair Oil",
    category: "Hair & Scalp Care",
    price: "₹399",
    rating: 4.6,
    reviews: 98,
    tag: "Trending",
  },
];

const benefits = [
  {
    icon: "🌱",
    title: "100% Natural Ingredients",
    desc: "Every formulation is crafted from sustainably sourced herbs, free from synthetic additives, preservatives, or artificial colours.",
  },
  {
    icon: "⚖️",
    title: "Balances Mind & Body",
    desc: "Rooted in the tridosha philosophy, our blends restore harmony between Vata, Pitta, and Kapha for whole-person wellness.",
  },
  {
    icon: "🔬",
    title: "Clinically Validated",
    desc: "All products undergo rigorous third-party lab testing and are GMP-certified, ensuring potency, purity, and safety.",
  },
  {
    icon: "♻️",
    title: "Eco-Conscious Packaging",
    desc: "We use compostable and recycled materials, because caring for your health should never come at the planet's expense.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "PS",
    quote:
      "Ashwagandha Gold transformed my sleep and energy levels within two weeks. I feel grounded, focused, and genuinely calm. Nothing from a pharmacy ever came close.",
    rating: 5,
    product: "Ashwagandha Gold",
  },
  {
    name: "Rajesh Nair",
    location: "Bengaluru",
    avatar: "RN",
    quote:
      "The Triphala Churna is a revelation. My digestion has never been this effortless. I've recommended it to everyone in my family. Pure, authentic, and effective.",
    rating: 5,
    product: "Triphala Churna",
  },
  {
    name: "Ananya Patel",
    location: "Ahmedabad",
    avatar: "AP",
    quote:
      "Brahmi Hair Oil is liquid gold! After years of hair fall, I finally see regrowth. The scent is divine and it absorbs beautifully. Sanjivani has a lifelong customer.",
    rating: 5,
    product: "Brahmi Hair Oil",
  },
];

/* ─────────────────────────────────────────────
   STAR RATING
───────────────────────────────────────────── */
const Stars = ({ rating }) => (
  <span className="stars">
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} style={{ color: s <= Math.round(rating) ? "#d4a017" : "#ccc" }}>
        ★
      </span>
    ))}
  </span>
);

/* ─────────────────────────────────────────────
   SECTION REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export default function Home() {
  const [heroRef, heroVis] = useReveal();
  const [prodRef, prodVis] = useReveal();
  const [benRef, benVis] = useReveal();
  const [testRef, testVis] = useReveal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className={`hero ${heroVis ? "revealed" : ""}`} ref={heroRef}>
        <div className="hero__bg-pattern" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__content">
          <span className="hero__eyebrow">🌿 Rooted in Tradition · Crafted for Life</span>
          <h1 className="hero__heading">
            Heal Naturally.<br />
            <em>Live Vibrantly.</em>
          </h1>
          <p className="hero__sub">
            Discover Ayurvedic formulations passed down through generations —
            now rigorously tested, beautifully crafted, and delivered to your door.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary">Shop the Collection →</button>
            <button className="btn btn--ghost">Learn Our Story</button>
          </div>
          <div className="hero__stats">
            {[["50K+", "Happy Customers"], ["120+", "Herbal Products"], ["5000", "Years of Wisdom"]].map(
              ([num, label]) => (
                <div className="hero__stat" key={label}>
                  <strong>{num}</strong>
                  <span>{label}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__circle">
            <div className="hero__circle-inner">
              <span className="hero__plant">🌿</span>
              <span className="hero__plant-label">Sanjivani</span>
            </div>
            <div className="hero__orbit">
              {["🌸", "🍃", "🫙", "🌻"].map((e, i) => (
                <div className="hero__orbit-item" key={i} style={{ "--i": i }}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={`section products-section ${prodVis ? "revealed" : ""}`} ref={prodRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">✦ Featured Collection</span>
            <h2 className="section-title">Our Finest Formulations</h2>
            <p className="section-sub">
              Each product is a confluence of ancient recipes and modern science.
            </p>
          </div>

          <div className="products-grid">
            {products.map((p, i) => (
              <article
                className="product-card"
                key={p.id}
                style={{ "--delay": `${i * 0.1}s` }}
              >
                <div className="product-card__badge">{p.tag}</div>
                <div className="product-card__emoji">{p.emoji}</div>
                <div className="product-card__body">
                  <span className="product-card__category">{p.category}</span>
                  <h3 className="product-card__name">{p.name}</h3>
                  <div className="product-card__meta">
                    <Stars rating={p.rating} />
                    <span className="product-card__reviews">({p.reviews})</span>
                  </div>
                </div>
                <div className="product-card__footer">
                  <span className="product-card__price">{p.price}</span>
                  <button className="product-card__btn">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>

          <div className="products-cta">
            <button className="btn btn--outline">View All Products →</button>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className={`section benefits-section ${benVis ? "revealed" : ""}`} ref={benRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">✦ Why Ayurveda</span>
            <h2 className="section-title">The Sanjivani Difference</h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div
                className="benefit-card"
                key={b.title}
                style={{ "--delay": `${i * 0.12}s` }}
              >
                <div className="benefit-card__icon">{b.icon}</div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`section testimonials-section ${testVis ? "revealed" : ""}`} ref={testRef}>
        <div className="testimonials-bg" aria-hidden="true" />
        <div className="container">
          <div className="section-header section-header--light">
            <span className="section-eyebrow section-eyebrow--gold">✦ Customer Love</span>
            <h2 className="section-title section-title--light">Words From Our Community</h2>
          </div>

          <div className="testimonials-carousel">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card ${i === activeTestimonial ? "testimonial-card--active" : ""}`}
              >
                <div className="testimonial-card__quote">"{t.quote}"</div>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <strong className="testimonial-card__name">{t.name}</strong>
                    <span className="testimonial-card__location">📍 {t.location}</span>
                    <div className="testimonial-card__product">Purchased: {t.product}</div>
                  </div>
                  <Stars rating={t.rating} />
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === activeTestimonial ? "testimonial-dot--active" : ""}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER CTA ── */}
      <section className="banner-cta">
        <div className="container banner-cta__inner">
          <div>
            <h2 className="banner-cta__heading">Begin Your Wellness Journey</h2>
            <p className="banner-cta__sub">Free shipping on orders above ₹499 · Across India</p>
          </div>
          <button className="btn btn--primary btn--lg">Shop Now →</button>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   CSS
───────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

/* ── CSS VARIABLES ── */
:root {
  --c-primary:       #2d6a4f;
  --c-primary-light: #40916c;
  --c-primary-dark:  #1b4332;
  --c-accent:        #d4a017;
  --c-accent-soft:   #fef3c7;
  --c-bg:            #f9f6f0;
  --c-bg-dark:       #1b2a1e;
  --c-surface:       #ffffff;
  --c-text:          #1c2b22;
  --c-muted:         #5a7262;
  --c-border:        #d4e6d5;
  --f-display:       'Cormorant Garamond', Georgia, serif;
  --f-body:          'Jost', sans-serif;
  --radius:          16px;
  --radius-sm:       8px;
  --shadow:          0 4px 24px rgba(27,67,50,.10);
  --shadow-lg:       0 12px 48px rgba(27,67,50,.16);
  --ease:            cubic-bezier(.4,0,.2,1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--f-body); background: var(--c-bg); color: var(--c-text); }

/* ── UTILITIES ── */
.container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--f-body); font-size: .85rem; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase;
  padding: 13px 28px; border-radius: 100px;
  border: none; cursor: pointer;
  transition: transform .22s var(--ease), box-shadow .22s var(--ease), background .22s;
}
.btn--primary {
  background: var(--c-primary); color: #fff;
  box-shadow: 0 4px 16px rgba(45,106,79,.30);
}
.btn--primary:hover {
  background: var(--c-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(45,106,79,.38);
}
.btn--ghost {
  background: transparent; color: var(--c-primary-dark);
  border: 1.5px solid var(--c-border);
}
.btn--ghost:hover {
  background: rgba(45,106,79,.06);
  transform: translateY(-1px);
}
.btn--outline {
  background: transparent; color: var(--c-primary);
  border: 1.5px solid var(--c-primary);
}
.btn--outline:hover { background: var(--c-primary); color: #fff; transform: translateY(-1px); }
.btn--lg { padding: 16px 36px; font-size: .9rem; }

.stars { font-size: .9rem; letter-spacing: 2px; }

/* ── SECTION REVEAL ── */
.section, .hero { opacity: 0; transform: translateY(36px); transition: opacity .7s var(--ease), transform .7s var(--ease); }
.section.revealed, .hero.revealed { opacity: 1; transform: none; }

/* ── SECTION HEADERS ── */
.section { padding: 96px 0; }
.section-header { text-align: center; margin-bottom: 56px; }
.section-eyebrow {
  display: inline-block; font-size: .72rem; font-weight: 600;
  letter-spacing: .18em; text-transform: uppercase;
  color: var(--c-primary-light);
  background: rgba(45,106,79,.09);
  padding: 5px 16px; border-radius: 100px; margin-bottom: 16px;
}
.section-eyebrow--gold { color: var(--c-accent); background: rgba(212,160,23,.12); }
.section-title {
  font-family: var(--f-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600; color: var(--c-primary-dark);
  line-height: 1.2; margin-bottom: 14px;
}
.section-title--light { color: #fff; }
.section-sub { font-size: 1.05rem; color: var(--c-muted); font-weight: 300; max-width: 520px; margin: 0 auto; }
.section-header--light .section-sub { color: rgba(255,255,255,.65); }

/* ═══════════════════════════
   HERO
═══════════════════════════ */
.hero {
  min-height: 100svh; position: relative; overflow: hidden;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 48px;
  padding: 120px 190px 80px; margin: 0 auto;
}

.hero__bg-pattern {
  position: fixed; inset: 0; z-index: -2; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 60% at 70% 40%, rgba(64,145,108,.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 50% at 20% 80%, rgba(212,160,23,.05) 0%, transparent 60%);
}
.hero__orb {
  position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: -1;
}
.hero__orb--1 {
  width: 420px; height: 420px; right: -80px; top: -80px;
  background: radial-gradient(circle, rgba(64,145,108,.18), transparent 70%);
  animation: float 8s ease-in-out infinite;
}
.hero__orb--2 {
  width: 300px; height: 300px; left: -60px; bottom: 40px;
  background: radial-gradient(circle, rgba(212,160,23,.12), transparent 70%);
  animation: float 11s ease-in-out infinite reverse;
}
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-24px)} }

.hero__eyebrow {
  display: inline-block; font-size: .78rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--c-primary-light); background: rgba(45,106,79,.08);
  padding: 7px 18px; border-radius: 100px; margin-bottom: 24px;
  border: 1px solid var(--c-border);
}

.hero__heading {
  font-family: var(--f-display);
  font-size: clamp(3rem, 5.5vw, 5rem);
  font-weight: 600; line-height: 1.1;
  color: var(--c-primary-dark);
  margin-bottom: 20px;
}
.hero__heading em { font-style: italic; color: var(--c-primary-light); display: block; }

.hero__sub {
  font-size: 1.08rem; font-weight: 300;
  color: var(--c-muted); line-height: 1.7;
  max-width: 460px; margin-bottom: 36px;
}

.hero__ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }

.hero__stats { display: flex; gap: 36px; flex-wrap: wrap; }
.hero__stat { display: flex; flex-direction: column; }
.hero__stat strong {
  font-family: var(--f-display); font-size: 2rem; font-weight: 600;
  color: var(--c-primary-dark); line-height: 1;
}
.hero__stat span { font-size: .78rem; font-weight: 500; color: var(--c-muted); letter-spacing: .05em; margin-top: 4px; }

/* Hero visual */
.hero__visual { display: flex; align-items: center; justify-content: center; }
.hero__circle {
  position: relative; width: 340px; height: 340px;
  display: flex; align-items: center; justify-content: center;
}
.hero__circle-inner {
  width: 180px; height: 180px; border-radius: 50%;
  background: linear-gradient(135deg, var(--c-primary), var(--c-primary-light));
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 20px 60px rgba(45,106,79,.35);
  z-index: 2;
}
.hero__plant { font-size: 4rem; line-height: 1; }
.hero__plant-label {
  font-family: var(--f-display); font-size: .9rem; font-style: italic;
  color: rgba(255,255,255,.85); margin-top: 4px;
}

.hero__orbit {
  position: absolute; inset: 0;
  animation: spin 20s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.hero__orbit-item {
  position: absolute; width: 52px; height: 52px;
  background: var(--c-surface); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; box-shadow: var(--shadow);
  border: 1px solid var(--c-border);
  top: 50%; left: 50%;
  transform:
    translate(-50%, -50%)
    rotate(calc(var(--i) * 90deg))
    translateY(-160px)
    rotate(calc(var(--i) * -90deg));
  animation: counter-spin 20s linear infinite;
}
@keyframes counter-spin { to { transform:
    translate(-50%, -50%)
    rotate(calc(var(--i) * 90deg + 360deg))
    translateY(-160px)
    rotate(calc(-1 * (var(--i) * 90deg + 360deg)));
} }

/* ═══════════════════════════
   PRODUCTS
═══════════════════════════ */
.products-section { background: var(--c-surface); }

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px; margin-bottom: 48px;
}

.product-card {
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius);
  padding: 28px 22px 22px;
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
  transition: transform .28s var(--ease), box-shadow .28s var(--ease), border-color .28s;
  animation: fadeUp .6s var(--ease) both;
  animation-delay: var(--delay, 0s);
}
@keyframes fadeUp { from { opacity:0; transform: translateY(24px); } to { opacity:1; transform: none; } }

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--c-primary-light);
}
.product-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--c-primary), var(--c-primary-light));
  opacity: 0; transition: opacity .28s;
}
.product-card:hover::before { opacity: 1; }

.product-card__badge {
  position: absolute; top: 16px; right: 16px;
  background: var(--c-accent); color: #fff;
  font-size: .65rem; font-weight: 700; letter-spacing: .08em;
  text-transform: uppercase; padding: 3px 10px; border-radius: 100px;
}

.product-card__emoji {
  font-size: 3rem; margin-bottom: 18px; line-height: 1;
  transition: transform .28s var(--ease);
}
.product-card:hover .product-card__emoji { transform: scale(1.12) rotate(-4deg); }

.product-card__body { flex: 1; }
.product-card__category {
  font-size: .7rem; font-weight: 600; letter-spacing: .1em;
  text-transform: uppercase; color: var(--c-primary-light);
  display: block; margin-bottom: 6px;
}
.product-card__name {
  font-family: var(--f-display); font-size: 1.25rem; font-weight: 600;
  color: var(--c-primary-dark); margin-bottom: 10px;
}
.product-card__meta { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
.product-card__reviews { font-size: .78rem; color: var(--c-muted); }

.product-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: auto; }
.product-card__price { font-family: var(--f-display); font-size: 1.5rem; font-weight: 600; color: var(--c-primary-dark); }

.product-card__btn {
  font-family: var(--f-body); font-size: .75rem; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase;
  background: var(--c-primary); color: #fff;
  border: none; cursor: pointer; padding: 9px 16px; border-radius: 100px;
  transition: background .22s, transform .22s;
  white-space: nowrap;
}
.product-card__btn:hover { background: var(--c-primary-dark); transform: scale(1.04); }

.products-cta { text-align: center; }

/* ═══════════════════════════
   BENEFITS
═══════════════════════════ */
.benefits-section {
  background: linear-gradient(160deg, rgba(45,106,79,.04) 0%, var(--c-bg) 50%, rgba(212,160,23,.04) 100%);
}

.benefits-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
}

.benefit-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius);
  padding: 36px 28px;
  text-align: center;
  transition: transform .28s var(--ease), box-shadow .28s var(--ease), border-color .28s;
  position: relative; overflow: hidden;
  animation: fadeUp .6s var(--ease) both;
  animation-delay: var(--delay, 0s);
}
.benefit-card::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--c-primary-light), var(--c-accent));
  opacity: 0; transition: opacity .28s;
}
.benefit-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--c-border); }
.benefit-card:hover::after { opacity: 1; }

.benefit-card__icon {
  font-size: 2.8rem; margin-bottom: 20px; display: block;
  filter: drop-shadow(0 4px 8px rgba(45,106,79,.2));
  transition: transform .28s var(--ease);
}
.benefit-card:hover .benefit-card__icon { transform: scale(1.15) rotate(-5deg); }

.benefit-card__title {
  font-family: var(--f-display); font-size: 1.2rem; font-weight: 600;
  color: var(--c-primary-dark); margin-bottom: 12px;
}
.benefit-card__desc { font-size: .88rem; color: var(--c-muted); font-weight: 300; line-height: 1.7; }

/* ═══════════════════════════
   TESTIMONIALS
═══════════════════════════ */
.testimonials-section { position: relative; padding: 96px 0; overflow: hidden; }
.testimonials-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--c-primary-dark) 0%, #1b3a2a 50%, #0f2016 100%);
  z-index: -1;
}
.testimonials-bg::after {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(64,145,108,.18) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(212,160,23,.1) 0%, transparent 40%);
}

.testimonials-carousel { position: relative; min-height: 200px; }

.testimonial-card {
  position: absolute; inset: 0;
  background: rgba(255,255,255,.06); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--radius); padding: 40px 44px;
  opacity: 0; transform: translateY(16px) scale(.98);
  transition: opacity .5s var(--ease), transform .5s var(--ease);
  pointer-events: none;
}
.testimonial-card--active {
  opacity: 1; transform: none; pointer-events: auto;
  position: relative;
}

.testimonial-card__quote {
  font-family: var(--f-display); font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-style: italic; color: rgba(255,255,255,.92);
  line-height: 1.6; margin-bottom: 28px;
}

.testimonial-card__footer { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }

.testimonial-card__avatar {
  width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, var(--c-primary-light), var(--c-primary));
  color: #fff; font-size: .85rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.testimonial-card__name { display: block; color: #fff; font-weight: 600; font-size: 1rem; }
.testimonial-card__location { display: block; font-size: .8rem; color: rgba(255,255,255,.5); margin-top: 2px; }
.testimonial-card__product { font-size: .72rem; color: var(--c-accent); margin-top: 4px; font-weight: 500; letter-spacing: .06em; }

.testimonial-dots { display: flex; justify-content: center; gap: 10px; margin-top: 36px; }
.testimonial-dot {
  width: 10px; height: 10px; border-radius: 5px;
  background: rgba(255,255,255,.25); border: none; cursor: pointer;
  transition: background .3s, width .3s;
}
.testimonial-dot--active { background: var(--c-accent); width: 28px; }

/* ═══════════════════════════
   BANNER CTA
═══════════════════════════ */
.banner-cta {
  background: linear-gradient(90deg, var(--c-primary) 0%, var(--c-primary-light) 100%);
  padding: 60px 24px;
}
.banner-cta__inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 32px; flex-wrap: wrap;
}
.banner-cta__heading {
  font-family: var(--f-display); font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 600; color: #fff; margin-bottom: 8px;
}
.banner-cta__sub { color: rgba(255,255,255,.75); font-size: .95rem; font-weight: 300; }
.banner-cta .btn--primary {
  background: #fff; color: var(--c-primary-dark);
  flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,.15);
}
.banner-cta .btn--primary:hover { background: var(--c-accent-soft); transform: translateY(-2px); }

/* ═══════════════════════════
   RESPONSIVE
═══════════════════════════ */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr; text-align: center;
    padding: 100px 24px 60px; gap: 56px;
  }
  .hero__sub { max-width: 100%; margin-left: auto; margin-right: auto; }
  .hero__ctas { justify-content: center; }
  .hero__stats { justify-content: center; }
  .hero__visual { order: -1; }
  .hero__circle { width: 260px; height: 260px; }
  .hero__circle-inner { width: 140px; height: 140px; }
  .hero__orbit-item { transform: translate(-50%,-50%) rotate(calc(var(--i)*90deg)) translateY(-120px) rotate(calc(var(--i)*-90deg)); }

  .section { padding: 72px 0; }
  .testimonial-card { padding: 28px 24px; }
}

@media (max-width: 560px) {
  .products-grid { grid-template-columns: 1fr; }
  .benefits-grid { grid-template-columns: 1fr; }
  .hero__ctas { flex-direction: column; align-items: center; }
  .banner-cta__inner { flex-direction: column; text-align: center; }
}
`;
