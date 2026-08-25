<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const service = computed(() => ({
  name: String(route.meta.serviceName || 'Digital Services'),
  eyebrow: String(route.meta.serviceEyebrow || 'Webbea Services in Qatar'),
  description: String(route.meta.serviceDescription || route.meta.description || ''),
  benefits: (route.meta.serviceBenefits as string[]) || [],
  deliverables: (route.meta.serviceDeliverables as string[]) || [],
  faqs: (route.meta.serviceFaqs as Array<{ question: string; answer: string }>) || [],
}))
</script>

<template>
  <main class="service-page">
    <section class="service-hero section-padding">
      <div class="container">
        <p class="service-eyebrow">{{ service.eyebrow }}</p>
        <h1>{{ service.name }}</h1>
        <p class="service-intro">{{ service.description }}</p>
        <div class="service-actions">
          <RouterLink to="/contact" class="btn btn-primary">Get a Free Consultation</RouterLink>
          <RouterLink to="/work" class="btn btn-outline-primary">View Our Work</RouterLink>
        </div>
      </div>
    </section>

    <section v-if="service.benefits.length" class="section-padding">
      <div class="container">
        <div class="section-heading">
          <p class="service-eyebrow">Why Webbea</p>
          <h2>Built for businesses in Qatar</h2>
        </div>
        <div class="service-grid">
          <article v-for="benefit in service.benefits" :key="benefit" class="service-card">
            <h3>{{ benefit }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section v-if="service.deliverables.length" class="section-padding service-alt">
      <div class="container">
        <div class="section-heading">
          <p class="service-eyebrow">What We Deliver</p>
          <h2>A practical service built around your goals</h2>
        </div>
        <ul class="service-list">
          <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section v-if="service.faqs.length" class="section-padding">
      <div class="container">
        <div class="section-heading">
          <p class="service-eyebrow">FAQ</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div class="faq-list">
          <details v-for="faq in service.faqs" :key="faq.question" class="faq-item">
            <summary>{{ faq.question }}</summary>
            <p>{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="section-padding service-cta">
      <div class="container">
        <h2>Ready to grow your business in Qatar?</h2>
        <p>Tell us what you are building, where you want to grow, and what success looks like. We will map the right digital solution around it.</p>
        <RouterLink to="/contact" class="btn btn-primary">Start a Conversation</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.section-padding { padding: 88px 0; }
.service-hero { background: linear-gradient(180deg, rgba(99,102,241,.08), transparent); }
.service-eyebrow { margin: 0 0 12px; font-size: .85rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.service-hero h1 { max-width: 900px; margin: 0 0 20px; font-size: clamp(2.4rem, 5vw, 4.8rem); line-height: 1.02; }
.service-intro { max-width: 820px; margin: 0; font-size: 1.15rem; line-height: 1.8; }
.service-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.section-heading { max-width: 760px; margin-bottom: 32px; }
.section-heading h2 { margin: 0; font-size: clamp(2rem, 3.5vw, 3.2rem); }
.service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.service-card { padding: 24px; border: 1px solid rgba(0,0,0,.08); border-radius: 18px; background: #fff; box-shadow: 0 8px 30px rgba(0,0,0,.04); }
.service-card h3 { margin: 0; font-size: 1.05rem; }
.service-alt { background: rgba(0,0,0,.025); }
.service-list { max-width: 820px; margin: 0; padding-left: 1.2rem; }
.service-list li { margin: 0 0 14px; line-height: 1.7; }
.faq-list { max-width: 860px; }
.faq-item { padding: 18px 0; border-bottom: 1px solid rgba(0,0,0,.1); }
.faq-item summary { cursor: pointer; font-weight: 700; }
.faq-item p { margin: 12px 0 0; line-height: 1.7; }
.service-cta { text-align: center; background: rgba(99,102,241,.06); }
.service-cta h2 { margin: 0 0 12px; font-size: clamp(2rem, 3.5vw, 3rem); }
.service-cta p { max-width: 760px; margin: 0 auto 24px; line-height: 1.7; }
@media (max-width: 640px) { .section-padding { padding: 64px 0; } .service-actions .btn { width: 100%; } }
</style>
