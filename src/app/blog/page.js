import { getAllPosts } from './lib/posts';
import BlogList from './components/BlogList';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | LocalPay',
  description: 'Latest insights about fintech, payments, and banking innovation',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className={styles.blogPage}>
      <Navigation />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Blog</h1>
            <p className={styles.heroText}>Latest insights about fintech, payments, and banking innovation</p>
          </div>
        </section>
        <BlogList posts={posts} />
      </main>
      <Footer />
    </div>
  );
} 