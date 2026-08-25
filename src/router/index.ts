import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorkView from '../views/WorkView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ServiceView from '../views/ServiceView.vue'

const BASE = 'https://webbea.qa'
const serviceMeta = (data: {
  path: string
  name: string
  title: string
  description: string
  keywords: string
  eyebrow: string
  benefits: string[]
  deliverables: string[]
  faqs: Array<{ question: string; answer: string }>
}) => ({
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  ogImage: `${BASE}/og-image.png`,
  changefreq: 'monthly',
  lastmod: '2026-08-25',
  serviceName: data.name,
  serviceEyebrow: data.eyebrow,
  serviceDescription: data.description,
  serviceBenefits: data.benefits,
  serviceDeliverables: data.deliverables,
  serviceFaqs: data.faqs,
  breadcrumb: [
    { name: 'Home', url: `${BASE}/` },
    { name: data.name, url: `${BASE}${data.path}` },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE}${data.path}#service`,
    name: data.name,
    description: data.description,
    url: `${BASE}${data.path}`,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'Country', name: 'Qatar' },
    serviceType: data.name,
  },
})

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Best SEO & Digital Marketing Agency in Qatar | Webbea',
      description: 'Webbea is Qatar\'s leading digital marketing and web development agency in Doha. We provide SEO, custom web & app development, ERP, e-commerce and cloud solutions for growing businesses.',
      keywords: 'SEO Agency Qatar, SEO Services Doha, Digital Marketing Agency Qatar, Web Development Company Qatar, App Development Qatar, ERP Solutions Qatar, E-commerce Development Qatar, Webbea',
      ogImage: `${BASE}/og-image.png`,
      changefreq: 'weekly',
      lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE}/#webpage`,
        name: 'Best SEO & Digital Marketing Agency in Qatar | Webbea',
        description: 'Webbea is a Doha-based digital agency delivering SEO, web development, app development and business software solutions in Qatar.',
        url: `${BASE}/`,
        inLanguage: 'en-QA',
        isPartOf: { '@id': `${BASE}/#website` },
        publisher: { '@id': `${BASE}/#organization` },
      },
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Webbea | Digital Agency in Qatar',
      description: 'Learn about Webbea, a Qatar-based digital agency delivering SEO, web development, mobile apps, ERP and digital marketing solutions for businesses in Doha and across Qatar.',
      keywords: 'About Webbea Qatar, Digital Agency Doha, Web Development Agency Qatar, SEO Team Qatar',
      ogImage: `${BASE}/og-image.png`,
      changefreq: 'monthly',
      lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'About', url: `${BASE}/about` }],
      schema: {
        '@context': 'https://schema.org', '@type': 'AboutPage', '@id': `${BASE}/about#webpage`,
        name: 'About Webbea', url: `${BASE}/about`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` },
      },
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact Webbea | SEO & Web Development Company in Qatar',
      description: 'Contact Webbea for SEO, web development, app development, ERP and digital marketing services in Doha, Qatar. Request a consultation for your next project.',
      keywords: 'Contact Webbea Qatar, SEO Agency Doha Contact, Web Development Qatar Contact, Digital Marketing Consultation Qatar',
      ogImage: `${BASE}/og-image.png`, changefreq: 'monthly', lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'Contact', url: `${BASE}/contact` }],
      schema: { '@context': 'https://schema.org', '@type': 'ContactPage', '@id': `${BASE}/contact#webpage`, name: 'Contact Webbea', url: `${BASE}/contact`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` } },
    },
  },
  {
    path: '/work', name: 'work', component: WorkView,
    meta: {
      title: 'Webbea Portfolio | Web, App, SEO & Digital Projects in Qatar',
      description: 'Explore Webbea projects across SEO, website development, mobile apps, ERP and digital marketing for businesses in Qatar.',
      keywords: 'Webbea Portfolio Qatar, SEO Case Studies Qatar, Web Development Projects Doha, App Development Portfolio Qatar',
      ogImage: `${BASE}/og-image.png`, changefreq: 'monthly', lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'Our Work', url: `${BASE}/work` }],
      schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${BASE}/work#webpage`, name: 'Webbea Portfolio', url: `${BASE}/work`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` } },
    },
  },
  {
    path: '/packages', name: 'packages', component: () => import('../views/PackagesView.vue'),
    meta: {
      title: 'SEO Packages & Digital Marketing Pricing in Qatar | Webbea',
      description: 'Explore Webbea SEO and digital marketing packages for startups, SMEs and growing businesses in Qatar. Request a tailored quote based on your goals.',
      keywords: 'SEO Packages Qatar, SEO Pricing Doha, Digital Marketing Packages Qatar, Affordable SEO Qatar, Webbea Pricing',
      ogImage: `${BASE}/og-image.png`, changefreq: 'monthly', lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'Packages', url: `${BASE}/packages` }],
      schema: { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${BASE}/packages#webpage`, name: 'SEO Packages & Pricing | Webbea Qatar', url: `${BASE}/packages`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` } },
    },
  },
  {
    path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Webbea Blog | SEO, Web Development & Digital Marketing in Qatar',
      description: 'Read Webbea insights on SEO, web development, mobile apps, ERP, e-commerce and digital marketing for businesses in Qatar and the Middle East.',
      keywords: 'SEO Blog Qatar, Digital Marketing Blog Doha, Web Development Tips Qatar, ERP Insights Qatar, Webbea Blog',
      ogImage: `${BASE}/og-image.png`, changefreq: 'weekly', lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'Blog', url: `${BASE}/blog` }],
      schema: { '@context': 'https://schema.org', '@type': 'Blog', '@id': `${BASE}/blog#webpage`, name: 'Webbea Blog', description: 'SEO, web development and digital marketing insights for Qatar businesses.', url: `${BASE}/blog`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` } },
    },
  },
  {
    path: '/faq', name: 'faq', component: () => import('../views/FaqView.vue'),
    meta: {
      title: 'FAQ | Webbea SEO, Web Development & Digital Services in Qatar',
      description: 'Find answers to common questions about Webbea SEO, web development, apps, ERP, e-commerce and digital marketing services in Qatar.',
      keywords: 'Webbea FAQ, SEO Questions Qatar, Web Development FAQ Doha, Digital Marketing FAQ Qatar, ERP FAQ Qatar',
      ogImage: `${BASE}/og-image.png`, changefreq: 'monthly', lastmod: '2026-08-25',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: 'FAQ', url: `${BASE}/faq` }],
      schema: { '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${BASE}/faq#webpage`, name: 'Webbea FAQ', url: `${BASE}/faq`, inLanguage: 'en-QA', isPartOf: { '@id': `${BASE}/#website` }, publisher: { '@id': `${BASE}/#organization` } },
    },
  },
  {
    path: '/services/seo-qatar', name: 'seo-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/seo-qatar', name: 'SEO Services in Qatar', title: 'SEO Services in Qatar | SEO Agency in Doha | Webbea',
      description: 'Webbea provides technical SEO, local SEO, content strategy and search optimization for businesses targeting customers in Qatar. Build sustainable visibility in Google search.',
      keywords: 'SEO Services Qatar, SEO Agency Doha, Local SEO Qatar, Technical SEO Qatar, Search Engine Optimization Qatar', eyebrow: 'SEO & Search Visibility',
      benefits: ['Qatar-focused keyword strategy', 'Technical SEO and crawl optimization', 'Local SEO for Doha visibility', 'Content-led organic growth'],
      deliverables: ['Technical SEO audit and fixes', 'Keyword mapping by search intent', 'On-page optimization and internal linking', 'Local SEO and Google Business guidance', 'Search performance reporting'],
      faqs: [{ question: 'Does Webbea provide local SEO in Qatar?', answer: 'Yes. We structure local search signals, service content and on-page relevance around Qatar and Doha search intent.' }, { question: 'Can SEO help a new Qatar business?', answer: 'Yes. A new site benefits from a clear information architecture, technically sound pages and content mapped to realistic search opportunities.' }],
    }),
  },
  {
    path: '/services/web-development-qatar', name: 'web-development-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/web-development-qatar', name: 'Web Development in Qatar', title: 'Web Development Company in Qatar | Website Development Doha | Webbea',
      description: 'Custom website and web application development for Qatar businesses, with responsive experiences, scalable architecture, performance and conversion-focused UX.',
      keywords: 'Web Development Qatar, Web Development Company Doha, Website Design Qatar, Custom Web Application Qatar, Web Agency Doha', eyebrow: 'Web Development',
      benefits: ['Responsive, mobile-first experiences', 'Performance-focused architecture', 'Business-focused UX and conversion paths', 'Scalable custom development'],
      deliverables: ['Corporate websites and landing pages', 'Custom web applications and portals', 'Responsive UI implementation', 'CMS and third-party integrations', 'Performance and technical SEO foundations'],
      faqs: [{ question: 'Does Webbea build custom websites in Qatar?', answer: 'Yes. We build custom websites and web applications around business requirements rather than forcing every project into the same template.' }, { question: 'Can Webbea optimize an existing website?', answer: 'Yes. Existing websites can be audited and improved for performance, UX, technical SEO and conversion.' }],
    }),
  },
  {
    path: '/services/app-development-qatar', name: 'app-development-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/app-development-qatar', name: 'Mobile App Development in Qatar', title: 'Mobile App Development Company in Qatar | iOS & Android | Webbea',
      description: 'Webbea builds mobile applications for businesses in Qatar with user-friendly experiences, secure integrations and scalable backend services.',
      keywords: 'Mobile App Development Qatar, App Development Doha, iOS Android App Development Qatar, Flutter App Development Qatar, Mobile App Company Doha', eyebrow: 'Mobile App Development',
      benefits: ['iOS and Android-ready experiences', 'Secure API and backend integration', 'Product-focused UX', 'Scalable architecture for growth'],
      deliverables: ['Business and customer mobile apps', 'API and backend integration', 'Authentication and notifications', 'Payment and third-party integrations', 'Release and maintenance support'],
      faqs: [{ question: 'Can Webbea build apps for both Android and iOS?', answer: 'Yes. The implementation approach is selected around product requirements, budget and long-term maintenance needs.' }, { question: 'Can an app connect to an existing business system?', answer: 'Yes. Existing APIs, databases and business systems can be integrated when the required access is available.' }],
    }),
  },
  {
    path: '/services/erp-development-qatar', name: 'erp-development-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/erp-development-qatar', name: 'ERP Software Development in Qatar', title: 'ERP Software Development in Qatar | Custom ERP Solutions Doha | Webbea',
      description: 'Custom ERP, CRM and business management software for Qatar companies, designed to connect operations, approvals, reporting and workflows in one system.',
      keywords: 'ERP Software Qatar, ERP Development Doha, Custom ERP Qatar, CRM Development Qatar, Business Management Software Qatar', eyebrow: 'ERP & Business Software',
      benefits: ['Workflows built around your operations', 'Centralized business data', 'Role-based access and approvals', 'Dashboards and reporting'],
      deliverables: ['Custom ERP modules and workflows', 'CRM and customer management', 'HR, inventory and operations modules', 'Reporting dashboards', 'Cloud deployment and ongoing improvements'],
      faqs: [{ question: 'Does Webbea build custom ERP systems?', answer: 'Yes. Custom ERP projects can combine operational modules such as HR, inventory, CRM, finance workflows and reporting based on the organization’s needs.' }, { question: 'Can an ERP be integrated with existing tools?', answer: 'Yes. Integration is planned around available APIs and the data flows required by the business.' }],
    }),
  },
  {
    path: '/services/ecommerce-development-qatar', name: 'ecommerce-development-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/ecommerce-development-qatar', name: 'E-commerce Development in Qatar', title: 'E-commerce Website Development in Qatar | Online Stores Doha | Webbea',
      description: 'High-performance e-commerce websites for Qatar businesses with mobile-first shopping experiences, payment integrations, product management and SEO foundations.',
      keywords: 'E-commerce Development Qatar, Online Store Development Doha, E-commerce Website Qatar, Shopify Development Qatar, E-commerce Company Doha', eyebrow: 'E-commerce Development',
      benefits: ['Mobile-first shopping UX', 'Search-friendly product architecture', 'Secure payment integration', 'Scalable catalog and operations'],
      deliverables: ['Online store design and development', 'Product and category architecture', 'Payment gateway integration', 'Inventory and order workflows', 'Technical SEO and analytics setup'],
      faqs: [{ question: 'Can Webbea build an online store for Qatar customers?', answer: 'Yes. Store architecture can be adapted to your catalog, target audience, payment requirements and operational workflow in Qatar.' }, { question: 'Can e-commerce SEO be included?', answer: 'Yes. Technical SEO, category structure, product metadata and analytics can be part of the implementation.' }],
    }),
  },
  {
    path: '/services/digital-marketing-qatar', name: 'digital-marketing-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/digital-marketing-qatar', name: 'Digital Marketing in Qatar', title: 'Digital Marketing Agency in Qatar | Online Marketing Doha | Webbea',
      description: 'Data-informed digital marketing for Qatar businesses across SEO, social media, paid campaigns, content and conversion-focused landing pages.',
      keywords: 'Digital Marketing Qatar, Digital Marketing Agency Doha, Online Marketing Qatar, Social Media Marketing Qatar, Performance Marketing Doha', eyebrow: 'Digital Marketing',
      benefits: ['Campaigns mapped to business goals', 'Search and social channel strategy', 'Conversion-focused landing pages', 'Performance measurement'],
      deliverables: ['Digital marketing strategy', 'SEO and content campaigns', 'Social media marketing', 'Paid search and social campaign support', 'Analytics and conversion tracking'],
      faqs: [{ question: 'Does Webbea offer digital marketing in Qatar?', answer: 'Yes. We combine organic and paid channels around the goals, audience and budget of the business.' }, { question: 'Can Webbea manage campaigns for lead generation?', answer: 'Yes. Lead-generation campaigns can be planned around landing pages, tracking and measurable conversion actions.' }],
    }),
  },
  {
    path: '/services/cloud-services-qatar', name: 'cloud-services-qatar', component: ServiceView,
    meta: serviceMeta({
      path: '/services/cloud-services-qatar', name: 'Cloud Services in Qatar', title: 'Cloud Services & Deployment in Qatar | Webbea',
      description: 'Cloud architecture, deployment and application infrastructure for Qatar businesses, with scalable environments, monitoring and modern delivery workflows.',
      keywords: 'Cloud Services Qatar, Cloud Solutions Doha, AWS Qatar, Azure Qatar, Cloud Deployment Qatar, DevOps Doha', eyebrow: 'Cloud & Infrastructure',
      benefits: ['Scalable application infrastructure', 'Deployment and environment planning', 'Monitoring and reliability', 'Modern CI/CD workflows'],
      deliverables: ['Cloud architecture guidance', 'Application deployment', 'Environment and domain configuration', 'Monitoring and operational support', 'CI/CD and release workflow planning'],
      faqs: [{ question: 'Does Webbea help with cloud deployment?', answer: 'Yes. Cloud deployment can cover architecture, application configuration, domains, environment setup and release workflows.' }, { question: 'Can cloud services support growing traffic?', answer: 'Yes. A properly designed cloud environment can scale resources and architecture as application demand changes.' }],
    }),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Page Not Found | Webbea',
      description: 'The page you are looking for does not exist on Webbea.',
      robots: 'noindex, nofollow',
      breadcrumb: [{ name: 'Home', url: `${BASE}/` }, { name: '404', url: `${BASE}/404` }],
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

export default router
