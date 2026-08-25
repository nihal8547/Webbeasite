<script setup lang="ts">
import { ref, computed } from 'vue';
import { Plus, Minus, ArrowUpRight, MessageCircle, Search, LifeBuoy, Code, BarChart2, Smartphone } from 'lucide-vue-next';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  icon: unknown;
  items: FaqItem[];
}

const activeId = ref<string | null>('general-0');

const toggleAccordion = (id: string) => {
  activeId.value = activeId.value === id ? null : id;
};

const activeCategory = ref('general');

const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    label: 'General',
    icon: MessageCircle,
    items: [
      {
        question: 'What does Webbea do?',
        answer: 'Webbea is a full-service digital agency based in Doha, Qatar. We specialise in SEO, web development, mobile app development, custom ERP solutions, e-commerce, and cloud services — helping businesses in Qatar and the wider Middle East grow their digital presence and operations.',
      },
      {
        question: 'Where is Webbea located?',
        answer: 'We are based in Doha, Qatar. While our headquarters is in Doha, we work with clients across the GCC and internationally, delivering fully remote and on-site engagements.',
      },
      {
        question: 'How do I get started with Webbea?',
        answer: 'Simply visit our Contact page, fill out the enquiry form, or reach out directly via WhatsApp at +974 30954643. We offer a free initial consultation to understand your goals before proposing a solution.',
      },
      {
        question: 'Do you work with startups or only enterprises?',
        answer: 'Both! We have tailored packages for early-stage startups looking to establish their digital presence, as well as enterprise-grade solutions for larger organisations requiring custom ERP systems, mobile apps, or complex web platforms.',
      },
    ],
  },
  {
    id: 'seo',
    label: 'SEO',
    icon: Search,
    items: [
      {
        question: 'How long does SEO take to show results in Qatar?',
        answer: 'SEO is a long-term investment. Most clients begin seeing measurable improvements in organic traffic and rankings within 3–6 months. For highly competitive keywords in the Qatari market, 6–12 months is typically needed to achieve top-3 positions. We report monthly so you always know exactly where you stand.',
      },
      {
        question: 'Do you offer local SEO services for businesses in Doha?',
        answer: 'Yes. Local SEO is one of our core specialisations. We optimise your Google Business Profile, build local citations, implement structured data (LocalBusiness schema), and create location-specific content to ensure you appear in "near me" searches and the Google Maps pack for your service area in Qatar.',
      },
      {
        question: 'What is AEO and does Webbea offer it?',
        answer: 'AEO stands for Answer Engine Optimisation — the practice of structuring your content so it appears in AI-generated answers (Google AI Overviews, ChatGPT, Perplexity, etc.). Yes, Webbea offers AEO as part of our SEO packages, including FAQPage and HowTo schema implementation, conversational content structuring, and entity optimisation.',
      },
      {
        question: 'Can you recover a website from a Google penalty?',
        answer: 'Yes. We perform comprehensive penalty audits to identify whether the issue is algorithmic (Helpful Content, Spam update, etc.) or manual. We then implement a structured recovery plan including content cleanup, link disavowal, and technical fixes, followed by a reconsideration request if required.',
      },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: Code,
    items: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'Our primary stack includes Vue.js, React, and Next.js for front-end development, with Node.js, Express, and Firebase for back-end services. For e-commerce, we use custom-built solutions or Shopify depending on the client\'s needs. All projects are built with performance, accessibility, and SEO as core requirements.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'A standard business website takes 3–6 weeks from design to launch. More complex platforms such as e-commerce stores, custom web apps, or SPA/PWA builds typically take 6–16 weeks depending on features and integrations. We provide a precise timeline during the scoping phase.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely. All websites we build are mobile-first by default, fully responsive across all screen sizes, and tested on real devices before launch. Mobile-first design is also a core requirement for Google\'s indexing, which we always adhere to.',
      },
      {
        question: 'Do you provide website maintenance after launch?',
        answer: 'Yes. We offer maintenance packages ranging from 1 month (included in Starter plans) to ongoing dedicated support with 24/7 SLA for enterprise clients. Maintenance covers security patches, CMS updates, performance monitoring, and content changes.',
      },
    ],
  },
  {
    id: 'digital',
    label: 'Digital Marketing',
    icon: BarChart2,
    items: [
      {
        question: 'What digital marketing services does Webbea offer?',
        answer: 'Our digital marketing services include SEO, AEO, social media management (Instagram, LinkedIn, Facebook, TikTok), Google Ads (Search, Display, Performance Max), Meta Ads, email marketing, content creation, and comprehensive analytics reporting — all tailored to the Qatari and GCC market.',
      },
      {
        question: 'Do you create content in Arabic?',
        answer: 'Yes. We have Arabic-speaking team members and copywriters who create high-quality Arabic content for social media, blogs, and website copy. Bilingual (English + Arabic) content strategies are available for clients targeting both local and international audiences in Qatar.',
      },
      {
        question: 'How do you measure digital marketing success?',
        answer: 'We set clear KPIs at the start of every engagement — typically organic traffic, keyword rankings, lead generation, conversion rates, and ROAS for paid campaigns. You receive a detailed monthly report with full transparency on every metric, using Google Analytics 4, Search Console, and ad platform dashboards.',
      },
    ],
  },
  {
    id: 'erp',
    label: 'ERP & Apps',
    icon: Smartphone,
    items: [
      {
        question: 'What is a custom ERP system and does my business need one?',
        answer: 'A custom ERP (Enterprise Resource Planning) system is a tailor-made software platform that manages your core business processes — HR, payroll, inventory, CRM, accounting, and more — in one unified system. Off-the-shelf ERPs like SAP or Oracle are expensive and rarely fit all your workflows. A custom ERP from Webbea is built exactly around your processes, which typically reduces manual work by 60–80%.',
      },
      {
        question: 'How much does a custom ERP system cost?',
        answer: 'The cost varies based on the number of modules, integrations, and user roles required. We offer transparent scoping sessions to define your requirements and provide a detailed fixed-price proposal. Contact us for a free consultation and cost estimate tailored to your business.',
      },
      {
        question: 'What platforms do you use for mobile app development?',
        answer: 'We build native iOS (Swift/SwiftUI) and Android (Kotlin) apps, as well as cross-platform apps using React Native or Flutter. The choice of platform depends on your target audience, budget, and required device features. We advise on the best approach during our discovery call.',
      },
      {
        question: 'Can you integrate the ERP or app with our existing systems?',
        answer: 'Yes. We have extensive experience integrating with third-party services including payment gateways (QPay, Stripe, PayTabs), government APIs, accounting software (QuickBooks, Zoho), and logistics platforms. We design open, API-first architectures so your systems can communicate seamlessly.',
      },
      {
        question: 'Do you provide support after the ERP or app goes live?',
        answer: 'Absolutely. All custom software projects include a post-launch support period. Enterprise clients receive a dedicated support contract with defined SLA response times (typically 4-hour critical response). We also offer training sessions for your team during handover.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifeBuoy,
    items: [
      {
        question: 'What are Webbea\'s working hours?',
        answer: 'Our core team operates Saturday through Thursday, 9:00 AM – 6:00 PM AST (Arabia Standard Time). For enterprise clients with SLA contracts, we provide 24/7 on-call support for critical issues.',
      },
      {
        question: 'How do I report a bug or request a change?',
        answer: 'All active clients are given access to our project management portal where you can raise support tickets, track progress, and communicate with your dedicated project manager. Urgent issues can also be reported via our WhatsApp support line.',
      },
      {
        question: 'Is my data secure with Webbea?',
        answer: 'Yes. We follow industry best practices including end-to-end encryption, HTTPS everywhere, secure authentication (OAuth 2.0, MFA), and data isolation per client. All data processing agreements are available upon request for clients with compliance requirements.',
      },
    ],
  },
];

const currentCategory = computed((): FaqCategory => faqCategories.find(c => c.id === activeCategory.value) ?? faqCategories[0]!);
</script>

<template>
  <div class="faq-page">
    <!-- Hero -->
    <section class="faq-hero">
      <div class="container">
        <span class="faq-overline">HELP CENTER</span>
        <h1 class="faq-title animate-fade-in">Frequently Asked Questions</h1>
        <p class="faq-subtitle animate-fade-in">
          Everything you need to know about Webbea's services, process, and pricing. Can't find your answer?
          <router-link to="/contact" class="faq-hero-link">Contact us directly.</router-link>
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="faq-content section-padding">
      <div class="container faq-layout">

        <!-- Sidebar: Category Nav -->
        <aside class="faq-sidebar">
          <nav class="faq-cat-nav" aria-label="FAQ Categories">
            <button
              v-for="cat in faqCategories"
              :key="cat.id"
              class="faq-cat-btn"
              :class="{ active: activeCategory === cat.id }"
              @click="activeCategory = cat.id; activeId = `${cat.id}-0`"
              :aria-current="activeCategory === cat.id ? 'page' : undefined"
            >
              <component :is="cat.icon" :size="18" class="cat-icon" />
              {{ cat.label }}
            </button>
          </nav>

          <!-- Quick Contact Card -->
          <div class="faq-contact-card">
            <p class="contact-card-title">Still have questions?</p>
            <p class="contact-card-sub">Our team is ready to help.</p>
            <router-link to="/contact" class="contact-card-btn">
              Get in Touch <ArrowUpRight :size="14" />
            </router-link>
          </div>
        </aside>

        <!-- Accordion Area -->
        <main class="faq-accordion-area">
          <div class="faq-category-header">
            <component :is="currentCategory.icon" :size="28" class="cat-header-icon" />
            <h2 class="faq-category-title">{{ currentCategory.label }}</h2>
          </div>

          <div class="faq-accordion">
            <div
              v-for="(item, index) in currentCategory.items"
              :key="index"
              class="faq-item"
              :class="{ 'faq-item--open': activeId === `${activeCategory}-${index}` }"
            >
              <button
                class="faq-question"
                @click="toggleAccordion(`${activeCategory}-${index}`)"
                :aria-expanded="activeId === `${activeCategory}-${index}`"
              >
                <span>{{ item.question }}</span>
                <span class="faq-icon-wrap">
                  <Plus v-if="activeId !== `${activeCategory}-${index}`" :size="20" />
                  <Minus v-else :size="20" />
                </span>
              </button>
              <div
                class="faq-answer"
                v-show="activeId === `${activeCategory}-${index}`"
              >
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="faq-bottom-cta">
      <div class="container faq-cta-inner">
        <h2>Ready to Start Your Project?</h2>
        <p>Join the businesses in Qatar that trust Webbea for their digital growth.</p>
        <router-link to="/contact" class="faq-cta-btn">
          Book a Free Consultation <ArrowUpRight :size="16" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Page ---- */
.faq-page {
  background: #fff;
  min-height: 100vh;
}

/* ---- Hero ---- */
.faq-hero {
  background: #17181c;
  padding: 150px 0 5rem;
  text-align: center;
}

.faq-overline {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #6366f1;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.faq-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fff;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.faq-subtitle {
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.faq-hero-link {
  color: #6366f1;
  text-decoration: underline;
  font-weight: 600;
}

/* ---- Main Layout ---- */
.faq-content {
  padding: 5rem 0 6rem;
  background: #f9fafb;
}

.faq-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 900px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* ---- Sidebar ---- */
.faq-sidebar {
  position: sticky;
  top: 100px;
}

.faq-cat-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .faq-cat-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .faq-sidebar {
    position: static;
  }
}

.faq-cat-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border: 1px solid transparent;
  background: transparent;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.faq-cat-btn:hover {
  background: #fff;
  color: #111827;
  border-color: #e5e7eb;
}

.faq-cat-btn.active {
  background: #111827;
  color: #fff;
  border-color: #111827;
}

.cat-icon {
  flex-shrink: 0;
}

/* ---- Contact Card ---- */
.faq-contact-card {
  border: 1px solid #e5e7eb;
  padding: 1.75rem;
  background: #fff;
}

.contact-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.35rem;
}

.contact-card-sub {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.contact-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 1.25rem;
  background: #111827;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-card-btn:hover {
  background: #6366f1;
}

/* ---- Accordion ---- */
.faq-accordion-area {
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 2.5rem;
}

.faq-category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}

.cat-header-icon {
  color: #6366f1;
}

.faq-category-title {
  font-size: 1.75rem;
  color: #111827;
  font-weight: 600;
  margin: 0;
}

.faq-item {
  border-bottom: 1px solid #f3f4f6;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 0;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #6366f1;
}

.faq-item--open .faq-question {
  color: #6366f1;
}

.faq-icon-wrap {
  flex-shrink: 0;
  color: #6366f1;
  display: flex;
}

.faq-answer {
  padding-bottom: 1.5rem;
}

.faq-answer p {
  color: #6b7280;
  font-size: 0.975rem;
  line-height: 1.8;
  margin: 0;
}

/* ---- Bottom CTA ---- */
.faq-bottom-cta {
  background: #17181c;
  padding: 6rem 0;
  text-align: center;
}

.faq-cta-inner h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
}

.faq-cta-inner p {
  color: #9ca3af;
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

.faq-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 2.5rem;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.faq-cta-btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* ---- Accordion responsive ---- */
@media (max-width: 768px) {
  .faq-accordion-area {
    padding: 1.5rem;
  }
}

/* ---- Animations ---- */
.animate-fade-in {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
