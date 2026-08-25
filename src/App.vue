<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import WhatsAppWidget from './components/WhatsAppWidget.vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// ----------------------------------------------------------------
// Helper: Build BreadcrumbList JSON-LD from route breadcrumb meta
// ----------------------------------------------------------------
const breadcrumbSchema = computed(() => {
  const crumbs = (route.meta.breadcrumb as Array<{ name: string; url: string }>) || [];
  if (crumbs.length === 0) return null;

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  });
});

// ----------------------------------------------------------------
// Helper: Build per-page schema JSON-LD
// ----------------------------------------------------------------
const pageSchema = computed(() => {
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://webbea.qa${route.path}#webpage`,
    name: route.meta.title || 'Webbea',
    description:
      route.meta.description ||
      'Webbea is the leading digital marketing and web development agency in Qatar.',
    url: `https://webbea.qa${route.path}`,
    inLanguage: 'en-QA',
    isPartOf: {
      '@id': 'https://webbea.qa/#website',
    },
    publisher: {
      '@id': 'https://webbea.qa/#organization',
    },
    dateModified: new Date().toISOString().split('T')[0],
  };
  return JSON.stringify(route.meta.schema || defaultSchema);
});

// ----------------------------------------------------------------
// Canonical URL helper (trailing-slash consistent)
// ----------------------------------------------------------------
const canonicalUrl = computed(() => {
  const path = route.path;
  return `https://webbea.qa${path === '/' ? '' : path}`;
});

// ----------------------------------------------------------------
// useHead — reactive meta per route
// ----------------------------------------------------------------
useHead({
  // Title
  title: computed(
    () =>
      (route.meta.title as string) ||
      'Best SEO & Digital Marketing Agency in Qatar | Webbea'
  ),

  meta: [
    // Core
    {
      name: 'description',
      content: computed(
        () =>
          (route.meta.description as string) ||
          'Webbea is the leading digital marketing and web development agency in Qatar.'
      ),
    },
    {
      name: 'keywords',
      content: computed(
        () =>
          (route.meta.keywords as string) ||
          'Best SEO Agency Qatar, SEO Services Doha, Top Digital Marketing Agency Qatar, Web Development Company Qatar, Webbea QA'
      ),
    },
    // Robots (per-page override supported)
    {
      name: 'robots',
      content: computed(
        () =>
          (route.meta.robots as string) ||
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      ),
    },
    {
      name: 'googlebot',
      content: computed(
        () =>
          (route.meta.robots as string) ||
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      ),
    },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Webbea' },
    { property: 'og:locale', content: 'en_QA' },
    {
      property: 'og:title',
      content: computed(
        () =>
          (route.meta.title as string) ||
          'Best SEO & Digital Marketing Agency in Qatar | Webbea'
      ),
    },
    {
      property: 'og:description',
      content: computed(
        () =>
          (route.meta.description as string) ||
          'Webbea is the leading digital marketing and web development agency in Qatar.'
      ),
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      property: 'og:image',
      content: computed(
        () => (route.meta.ogImage as string) || 'https://webbea.qa/og-image.png'
      ),
    },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    {
      property: 'og:image:alt',
      content: computed(
        () =>
          (route.meta.title as string) ||
          'Webbea - Best SEO & Digital Marketing Agency in Qatar'
      ),
    },

    // Twitter / X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@webbeaqa' },
    { name: 'twitter:creator', content: '@webbeaqa' },
    {
      name: 'twitter:title',
      content: computed(
        () =>
          (route.meta.title as string) ||
          'Best SEO & Digital Marketing Agency in Qatar | Webbea'
      ),
    },
    {
      name: 'twitter:description',
      content: computed(
        () =>
          (route.meta.description as string) ||
          'Webbea is the leading digital marketing and web development agency in Qatar.'
      ),
    },
    {
      name: 'twitter:image',
      content: computed(
        () => (route.meta.ogImage as string) || 'https://webbea.qa/og-image.png'
      ),
    },
    {
      name: 'twitter:image:alt',
      content: computed(
        () =>
          (route.meta.title as string) ||
          'Webbea - Best SEO & Digital Marketing Agency in Qatar'
      ),
    },
  ],

  link: [
    // Canonical
    { rel: 'canonical', href: canonicalUrl },
    // Hreflang alternates
    { rel: 'alternate', hreflang: 'en-QA', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl },
    // Preconnect (performance / Core Web Vitals)
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  ],

  script: [
    // Per-page WebPage schema
    {
      type: 'application/ld+json',
      children: pageSchema,
    },
    // Dynamic BreadcrumbList schema (only injected when breadcrumb meta is set)
    ...(breadcrumbSchema.value
      ? [{ type: 'application/ld+json', children: breadcrumbSchema }]
      : []),
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
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
