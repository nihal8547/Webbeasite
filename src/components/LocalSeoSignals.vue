<template>
  <section class="local-seo-signals" aria-labelledby="local-seo-title">
    <div class="container">
      <div class="local-seo-grid">
        <div>
          <p class="local-eyebrow">LOCAL DIGITAL PARTNER</p>
          <h2 id="local-seo-title">SEO, Web & Digital Solutions for Businesses in Doha, Qatar</h2>
          <p class="local-copy">
            Webbea works with businesses in Doha and across Qatar on search optimization, websites, mobile apps, ERP systems, e-commerce and digital growth. Our service pages and contact information are designed to make it clear what we do and where we operate.
          </p>
        </div>
        <div class="local-list">
          <span>Doha, Qatar</span>
          <span>Qatar-wide business support</span>
          <span>SEO & Local SEO</span>
          <span>Web & App Development</span>
          <span>ERP & Business Software</span>
          <span>E-commerce & Digital Marketing</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.local-seo-signals {
  padding: 72px 0;
  background: #f4f4f5;
  border-top: 1px solid #d1d5db;
}
.local-seo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 1fr);
  gap: 48px;
  align-items: start;
}
.local-eyebrow {
  margin: 0 0 12px;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #6b7280;
}
.local-seo-grid h2 {
  margin: 0 0 16px;
  max-width: 820px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  color: #111827;
}
.local-copy {
  margin: 0;
  max-width: 780px;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.8;
}
.local-list {
  display: grid;
  gap: 10px;
}
.local-list span {
  padding: 14px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  color: #374151;
  font-weight: 600;
}
@media (max-width: 860px) {
  .local-seo-grid { grid-template-columns: 1fr; gap: 28px; }
}
</style>
