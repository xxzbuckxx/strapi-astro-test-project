import type { FunctionalComponent } from "preact";
import BlogGridItem from "./BlogGridItem";

interface BlogGridProps {
  posts: any;
}

const BlogGrid: FunctionalComponent<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {posts && posts.data.length > 0
        ? posts.data.map((post: any) => <BlogGridItem post={post} />)
        : "No posts found"}
    </div>
  );
};

export default BlogGrid;
