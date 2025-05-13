import Link from 'next/link';
import styles from '../blog.module.css';

function calculateReadTime(text) {
  // Average reading speed is about 200-250 words per minute
  // Assuming average word length of 5 characters
  const wordsPerMinute = 200;
  const wordLength = 5;
  
  // Calculate words based on character count
  const words = text.length / wordLength;
  
  // Calculate reading time in minutes, round up to nearest minute
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return Math.max(1, minutes); // Ensure at least 1 minute read time
}

export default function BlogList({ posts }) {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContent}>
        <h2 className={styles.blogHeader}>Latest Articles</h2>
        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
              {post.image && (
                <div className={styles.blogCardImage}>
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className={styles.blogCardContent}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <div className={styles.metadata}>
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span>{calculateReadTime(post.content || post.excerpt)} min read</span>
                </div>
                <p>{post.excerpt}</p>
                <span className={styles.learnMore}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 