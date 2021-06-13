
import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div>
    
   <h3>All post</h3>
   <div className={styles.grid}>
          {posts.map(post => {
            const { title, path } = post;
            return (
              <Link key={path} href={path}>
                <a className={styles.card}>
                  <h3>{ title }</h3>
                </a>
              </Link>
            )
          })}
        </div>
    </div>
  )
}
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/posts');
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content);
    return {
      filename,
      matter
    }
  }));

  const posts = files.map(file => {
    return {
      path: `/posts/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title
    }
  });

  return {
    props: {
      posts
    }
  }

}
