import Link from 'next/link';
import styles from './blog.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Post Not Found</h1>
      <p>Sorry, the blog post you're looking for doesn't exist.</p>
      <Link href="/blog">
        Return to Blog
      </Link>
    </div>
  );
} 