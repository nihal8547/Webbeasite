<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowUpRight, Clock, Tag } from 'lucide-vue-next';

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
}

const activeCategory = ref('All');

const categories = ['All', 'SEO', 'Web Development', 'Digital Marketing', 'ERP', 'App Development'];

const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'top-seo-strategies-qatar-2026',
    category: 'SEO',
    readTime: '6 min read',
    date: 'August 5, 2026',
    title: 'Top SEO Strategies in Qatar for 2026: What Actually Works',
    excerpt: 'Google\'s Helpful Content system has reshaped search rankings. Discover the exact local SEO tactics that are driving top results for Doha-based businesses right now.',
    tag: 'SEO',
  },
  {
    id: 2,
    slug: 'web-development-trends-middle-east-2026',
    category: 'Web Development',
    readTime: '5 min read',
    date: 'July 28, 2026',
    title: 'Web Development Trends Dominating the Middle East in 2026',
    excerpt: 'From AI-powered interfaces to blazing-fast PWAs, we break down the web development trends that forward-thinking businesses in Qatar are already adopting.',
    tag: 'Web Dev',
  },
  {
    id: 3,
    slug: 'digital-marketing-qatar-guide',
    category: 'Digital Marketing',
    readTime: '8 min read',
    date: 'July 20, 2026',
    title: 'The Complete Digital Marketing Guide for Qatar Businesses',
    excerpt: 'From social media in Arabic to Google Ads targeting Doha, this guide covers everything a growing Qatari business needs to dominate digital channels.',
    tag: 'Marketing',
  },
  {
    id: 4,
    slug: 'custom-erp-vs-off-shelf-qatar',
    category: 'ERP',
    readTime: '7 min read',
    date: 'July 12, 2026',
    title: 'Custom ERP vs Off-the-Shelf: What\'s Right for Your Qatar Business?',
    excerpt: 'SAP, Oracle, or a custom-built ERP? We break down the real cost, performance, and long-term ROI differences for mid-sized enterprises in Qatar.',
    tag: 'ERP',
  },
  {
    id: 5,
    slug: 'mobile-app-development-costs-doha',
    category: 'App Development',
    readTime: '5 min read',
    date: 'July 3, 2026',
    title: 'How Much Does Mobile App Development Cost in Doha? (2026 Guide)',
    excerpt: 'A transparent breakdown of iOS, Android, and cross-platform app development costs in Qatar — from MVP to enterprise-grade applications.',
    tag: 'Apps',
  },
  {
    id: 6,
    slug: 'core-web-vitals-ranking-guide',
    category: 'SEO',
    readTime: '6 min read',
    date: 'June 25, 2026',
    title: 'Core Web Vitals in 2026: The Ultimate Ranking Factor Guide',
    excerpt: 'LCP, CLS, INP — Google\'s Core Web Vitals continue to evolve. Learn exactly how to measure and optimize each metric to outrank competitors in Qatar.',
    tag: 'SEO',
  },
];

const filteredPosts = ref(posts);
const featuredPost = computed(() => filteredPosts.value[0]);

const filterByCategory = (cat: string) => {
  activeCategory.value = cat;
  filteredPosts.value = cat === 'All' ? posts : posts.filter(p => p.category === cat);
};
</script>

<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="blog-hero">
      <div class="container">
        <span class="blog-overline">INSIGHTS & RESOURCES</span>
        <h1 class="blog-title animate-fade-in">The Webbea Blog</h1>
        <p class="blog-subtitle animate-fade-in">
          Expert insights on SEO, web development, digital marketing, and tech trends in Qatar and the Middle East.
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="blog-filter-bar">
      <div class="container">
        <div class="filter-tabs">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-tab"
            :class="{ active: activeCategory === cat }"
            @click="filterByCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="blog-grid-section section-padding">
      <div class="container">
        <!-- Featured Post -->
        <article v-if="featuredPost" class="blog-featured-card">
          <div class="featured-meta">
            <span class="blog-tag">{{ featuredPost.tag }}</span>
            <span class="blog-meta-item"><Clock :size="14" /> {{ featuredPost.readTime }}</span>
            <span class="blog-meta-item">{{ featuredPost.date }}</span>
          </div>
          <h2 class="featured-title">{{ featuredPost.title }}</h2>
          <p class="featured-excerpt">{{ featuredPost.excerpt }}</p>
          <router-link to="/contact" class="blog-read-btn">
            Read Article <ArrowUpRight :size="16" />
          </router-link>
        </article>

        <!-- Grid Posts -->
        <div class="blog-posts-grid" v-if="filteredPosts.length > 1">
          <article
            v-for="post in filteredPosts.slice(1)"
            :key="post.id"
            class="blog-post-card"
          >
            <div class="post-card-top">
              <span class="blog-tag small">{{ post.tag }}</span>
              <div class="post-meta-row">
                <span class="blog-meta-item"><Clock :size="12" /> {{ post.readTime }}</span>
                <span class="blog-meta-item">{{ post.date }}</span>
              </div>
            </div>
            <h3 class="post-card-title">{{ post.title }}</h3>
            <p class="post-card-excerpt">{{ post.excerpt }}</p>
            <router-link to="/contact" class="post-read-link">
              Read More <ArrowUpRight :size="14" />
            </router-link>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="blog-empty">
          <Tag :size="40" />
          <p>No articles in this category yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="blog-cta-section">
      <div class="container blog-cta-inner">
        <div class="blog-cta-text">
          <h2>Stay Ahead of the Curve</h2>
          <p>Get the latest SEO tips, web trends, and digital insights delivered to your inbox.</p>
        </div>
        <router-link to="/contact" class="blog-cta-btn">
          Get in Touch <ArrowUpRight :size="16" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Page ---- */
.blog-page {
  background: #fff;
  min-height: 100vh;
}

/* ---- Hero ---- */
.blog-hero {
  background: #17181c;
  padding: 150px 0 5rem;
  text-align: center;
}

.blog-overline {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #6366f1;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.blog-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #fff;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.blog-subtitle {
  font-size: 1.15rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ---- Filter Bar ---- */
.blog-filter-bar {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 0;
  position: sticky;
  top: 72px;
  z-index: 100;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.5rem 1.25rem;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.filter-tab:hover {
  border-color: #111827;
  color: #111827;
}

.filter-tab.active {
  background: #111827;
  border-color: #111827;
  color: #fff;
}

/* ---- Blog Grid Section ---- */
.blog-grid-section {
  padding-top: 4rem;
  padding-bottom: 6rem;
}

/* ---- Featured Card ---- */
.blog-featured-card {
  border: 1px solid #e5e7eb;
  padding: 3.5rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  background: #fff;
}

.blog-featured-card:hover {
  border-color: #111827;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.blog-tag {
  display: inline-block;
  background: #6366f1;
  color: #fff;
  padding: 0.25rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.blog-tag.small {
  font-size: 0.7rem;
  padding: 0.2rem 0.7rem;
}

.blog-meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #9ca3af;
  font-size: 0.85rem;
}

.featured-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #111827;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 1.25rem;
}

.featured-excerpt {
  color: #6b7280;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 720px;
  margin-bottom: 2rem;
}

.blog-read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: #111827;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.blog-read-btn:hover {
  background: #6366f1;
  transform: translateY(-2px);
}

/* ---- Posts Grid ---- */
.blog-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .blog-posts-grid {
    grid-template-columns: 1fr;
  }
}

.blog-post-card {
  border: 1px solid #e5e7eb;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background: #fff;
}

.blog-post-card:hover {
  border-color: #111827;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transform: translateY(-4px);
}

.post-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-meta-row {
  display: flex;
  gap: 0.75rem;
}

.post-card-title {
  font-size: 1.2rem;
  color: #111827;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 1rem;
  flex: 1;
}

.post-card-excerpt {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.post-read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #111827;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  margin-top: auto;
  transition: color 0.2s ease;
}

.post-read-link:hover {
  color: #6366f1;
}

/* ---- Empty State ---- */
.blog-empty {
  text-align: center;
  padding: 5rem 0;
  color: #9ca3af;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

/* ---- CTA Section ---- */
.blog-cta-section {
  background: #17181c;
  padding: 5rem 0;
}

.blog-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.blog-cta-text h2 {
  font-size: 2.25rem;
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.blog-cta-text p {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 480px;
}

.blog-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.blog-cta-btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* ---- Featured card responsive ---- */
@media (max-width: 768px) {
  .blog-featured-card {
    padding: 2rem;
  }
  .blog-cta-inner {
    flex-direction: column;
    text-align: center;
  }
  .blog-cta-text p {
    max-width: 100%;
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
