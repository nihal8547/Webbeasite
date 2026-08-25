import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorkView from '../views/WorkView.vue'
// Blog and FAQ are lazy-loaded for better code splitting

const BASE = 'https://webbea.qa'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // -------------------------------------------------------
    // HOME
    // -------------------------------------------------------
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Best SEO & Digital Marketing Agency in Qatar | Webbea',
        description:
          'Webbea is Qatar\'s leading digital marketing and web development agency in Doha. We provide top-tier SEO, custom web & app development, and ERP solutions. Get a free consultation today!',
        keywords:
          'Best SEO Agency Qatar, SEO Services Doha, Top Digital Marketing Agency Qatar, Web Development Company Qatar, Digital Agency Doha, Webbea QA',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'weekly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${BASE}/#webpage`,
          name: 'Best SEO & Digital Marketing Agency in Qatar | Webbea',
          description:
            'Webbea is Qatar\'s leading digital marketing and web development agency in Doha.',
          url: `${BASE}/`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // ABOUT
    // -------------------------------------------------------
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About Us | Webbea - Expert SEO & Digital Marketing in Qatar',
        description:
          'Learn how Webbea became the best SEO and digital marketing agency in Qatar. Our mission is to transform ambitious ideas into premium digital experiences for businesses in Doha.',
        keywords:
          'About Webbea, Digital Marketing Experts Doha, Best SEO Team Qatar, Web Development Agency History, Webbea About Us',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'monthly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'About', url: `${BASE}/about` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${BASE}/about#webpage`,
          name: 'About Webbea',
          description:
            'Learn how Webbea became the best SEO agency in Qatar.',
          url: `${BASE}/about`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE}/about` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // CONTACT
    // -------------------------------------------------------
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact Webbea | Get a Free SEO & Digital Marketing Consultation in Qatar',
        description:
          'Ready to grow? Contact Webbea for the best SEO and digital marketing services in Qatar. Send us a message on WhatsApp or fill out our consultation form — we\'re based in Doha.',
        keywords:
          'Contact Webbea, SEO Agency Doha Contact, Hire Web Developers Qatar, Webbea Phone Number, Digital Marketing Consultation Qatar, Free SEO Audit Qatar',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'monthly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'Contact', url: `${BASE}/contact` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': `${BASE}/contact#webpage`,
          name: 'Contact Webbea',
          description:
            'Contact Webbea for the best SEO and digital marketing services in Qatar.',
          url: `${BASE}/contact`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE}/contact` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // WORK / PORTFOLIO
    // -------------------------------------------------------
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      meta: {
        title: 'Our Portfolio | Webbea Digital Projects & Success Stories in Qatar',
        description:
          'Explore Webbea\'s portfolio of successful SEO campaigns, web development, and app development projects across Qatar. See how we help businesses grow digitally in Doha.',
        keywords:
          'Webbea Portfolio, SEO Success Stories Qatar, Web Design Examples Doha, App Development Projects Qatar, Digital Marketing Case Studies',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'monthly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'Our Work', url: `${BASE}/work` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${BASE}/work#webpage`,
          name: 'Webbea Portfolio',
          description:
            'Explore our portfolio of successful SEO, web development, and app development projects in Qatar.',
          url: `${BASE}/work`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'Our Work', item: `${BASE}/work` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // PACKAGES / PRICING
    // -------------------------------------------------------
    {
      path: '/packages',
      name: 'packages',
      component: () => import('../views/PackagesView.vue'),
      meta: {
        title: 'SEO Packages & Pricing | Affordable Digital Marketing Plans in Qatar | Webbea',
        description:
          'Choose from Webbea\'s tailored SEO and digital marketing packages. Affordable solutions designed for startups and enterprises in Qatar. Request a custom quote today.',
        keywords:
          'SEO Packages Qatar, Digital Marketing Pricing Doha, Affordable SEO Qatar, Web Development Cost Doha, Webbea Pricing Plans, Digital Agency Packages Qatar',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'monthly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'Packages', url: `${BASE}/packages` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${BASE}/packages#webpage`,
          name: 'SEO Packages & Pricing | Webbea Qatar',
          description:
            'Choose from our tailored SEO and digital marketing packages.',
          url: `${BASE}/packages`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'Packages', item: `${BASE}/packages` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // BLOG
    // -------------------------------------------------------
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Blog | SEO, Web Dev & Digital Marketing Insights for Qatar | Webbea',
        description:
          'Read Webbea\'s expert blog on SEO strategies, web development trends, digital marketing tips, and ERP insights for businesses in Qatar and the Middle East.',
        keywords:
          'SEO Blog Qatar, Digital Marketing Blog Doha, Web Development Tips Qatar, Webbea Blog, ERP Insights Qatar, App Development Articles',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'weekly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'Blog', url: `${BASE}/blog` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': `${BASE}/blog#webpage`,
          name: 'Webbea Blog — SEO & Digital Marketing Insights for Qatar',
          description:
            'Expert articles on SEO, web development, digital marketing, and ERP for Qatar businesses.',
          url: `${BASE}/blog`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // FAQ
    // -------------------------------------------------------
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
      meta: {
        title: 'FAQ | Frequently Asked Questions About Webbea Services in Qatar',
        description:
          'Find answers to the most common questions about Webbea\'s SEO, web development, digital marketing, ERP, and app development services in Qatar.',
        keywords:
          'Webbea FAQ, SEO Questions Qatar, Web Development FAQ Doha, Digital Marketing Help Qatar, ERP FAQ Qatar, App Development Questions',
        ogImage: `${BASE}/og-image.png`,
        changefreq: 'monthly',
        lastmod: '2026-08-05',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: 'FAQ', url: `${BASE}/faq` },
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${BASE}/faq#webpage`,
          name: 'FAQ | Webbea Qatar',
          description:
            'Frequently asked questions about Webbea digital agency services in Qatar.',
          url: `${BASE}/faq`,
          inLanguage: 'en-QA',
          isPartOf: { '@id': `${BASE}/#website` },
          publisher: { '@id': `${BASE}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` },
            ],
          },
        },
      },
    },

    // -------------------------------------------------------
    // 404 — Not Found (noindex to prevent soft-404 penalty)
    // -------------------------------------------------------
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '404 – Page Not Found | Webbea',
        description: 'The page you are looking for does not exist. Return to Webbea\'s homepage.',
        robots: 'noindex, nofollow',
        breadcrumb: [
          { name: 'Home', url: `${BASE}/` },
          { name: '404 Not Found', url: `${BASE}/404` },
        ],
      },
    },
  ],

  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// ----------------------------------------------------------------
// Guard: update page title & meta per route navigation
// (useHead in App.vue handles reactive updates via route.meta)
// ----------------------------------------------------------------
router.beforeEach((_to, _from, next) => {
  next()
})

export default router
