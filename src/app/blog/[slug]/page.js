import { getPostBySlug, getAllPosts } from '../lib/posts';
import BlogPost from '../components/BlogPost';
import styles from '../blog.module.css';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

// Add the calculate read time function
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content?.split(/\s+/)?.length ?? 0;
  return Math.ceil(words / wordsPerMinute);
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Your Company Name`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className={styles.blogPostContainer}>
        <article className={styles.blogPost}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postMetadata}>
            <span className={styles.author}>{post.author}</span>
            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className={styles.readTime}>
              {calculateReadTime(post.content)} min read
            </span>
          </div>
          <div className={styles.postContent}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
} 