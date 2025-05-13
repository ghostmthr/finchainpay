import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

export async function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const post = await getPostBySlug(slug);
      return post;
    })
  );

  return posts.filter(Boolean).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Ensure all required fields have default values
    const post = {
      slug,
      title: data.title || '',
      date: data.date || new Date(),
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      content: content || '',
      excerpt: data.excerpt || content.slice(0, 150) + '...',
      image: data.image || null,
      ...data, // Include any other frontmatter data
    };

    return post;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
} 