<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import WhatsAppWidget from './components/WhatsAppWidget.vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const breadcrumbSchema = computed(() => {
  const crumbs = (route.meta.breadcrumb as Array<{ name: string; url: string }>) || [];
  if (crumbs.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url })),
  });
});

const pageSchema = computed(() => {
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://webbea.qa${route.path}#webpage`,
    name: route.meta.title || 'Webbea',
    description: route.meta.description || 'Webbea is a Qatar-based digital agency delivering SEO, web development, mobile apps and business software solutions.',
    url: `https://webbea.qa${route.path}`,
    inLanguage: 'en-QA',
    isPartOf: { '@id': 'https://webbea.qa/#website' },
    publisher: { '@id': 'https://webbea.qa/#organization' },
    ...(route.meta.lastmod ? { dateModified: route.meta.lastmod } : {}),
  };
  return JSON.stringify(route.meta.schema || defaultSchema);
});

const serviceFaqSchema = computed(() => {
  const faqs = (route.meta.serviceFaqs as Array<{ question: string; answer: string }>) || [];
  if (faqs.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  });
});

const canonicalUrl = computed(() => `https://webbea.qa${route.path === '/' ? '' : route.path}`);
const pageTitle = computed(() => (route.meta.title as string) || 'SEO, Web Development & Digital Marketing Agency in Qatar | Webbea');
const pageDescription = computed(() => (route.meta.description as string) || 'Webbea provides SEO, web development, app development, ERP, e-commerce and digital marketing services in Qatar.');
const pageRobots = computed(() => (route.meta.robots as string) || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
const pageOgImage = computed(() => (route.meta.ogImage as string) || 'https://webbea.qa/og-image.png');

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: computed(() => (route.meta.keywords as string) || '') },
    { name: 'robots', content: pageRobots },
    { name: 'googlebot', content: pageRobots },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Webbea' },
    { property: 'og:locale', content: 'en_QA' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: pageOgImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:alt', content: pageTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@webbeaqa' },
    { name: 'twitter:creator', content: '@webbeaqa' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageOgImage },
    { name: 'twitter:image:alt', content: pageTitle },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'en-QA', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  ],
  script: [
    { type: 'application/ld+json', children: pageSchema },
    ...(breadcrumbSchema.value ? [{ type: 'application/ld+json', children: breadcrumbSchema }] : []),
    ...(serviceFaqSchema.value ? [{ type: 'application/ld+json', children: serviceFaqSchema }] : []),
  ],
});
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <WhatsAppWidget />
  </div>
</template>

<style>
.app-layout { display: flex; flex-direction: column; min-height: 100vh; }
.main-content { flex: 1; width: 100%; }
.page-enter-active, .page-leave-active { transition: opacity 0.4s ease; }
.page-enter-from, .page-leave-to { opacity: 0; }
</style>
