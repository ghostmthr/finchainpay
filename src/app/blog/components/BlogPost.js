import styles from '../blog.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function BlogPost({ post }) {
  console.log('Full post data:', JSON.stringify(post, null, 2));
  
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.metadata}>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            <span>{post.author}</span>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <article className={styles.blogPost}>
        <div style={{background: '#f0f0f0', padding: '10px', margin: '10px 0'}}>
          Image path: {post.image || 'No image path found'}
        </div>
        
        {post.image && (
          <div className={styles.featuredImage}>
            <img 
              src={post.image} 
              alt={post.title}
              onError={(e) => {
                console.error('Image failed to load:', post.image);
              }}
            />
          </div>
        )}
        <div className={styles.blogText}>
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
} 