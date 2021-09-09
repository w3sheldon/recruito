import BlogCards from '../../components/BlogCards/BlogCards';
import { useTitle } from '../../hooks/changePageTitle';

function Blog() {
  useTitle('Blog');

  return (
    <div className="full-height">
      <BlogCards blogsToShow={8} />
    </div>
  );
}

export default Blog;
