import React from 'react';
import { BlogListStyle, BlogItem } from './BlogList.style';
import Card from 'components/Card/Card';

interface IBlog {
  categories: string[];
  date: Date;
  description: string;
  draft: boolean;
  image: string;
  slug: string;
  title: string;
  views: number;
  author: string;
}

interface IBlogList {
  blogList: IBlog[];
}
const BlogList = ({ blogList }: IBlogList) => {
  return (
    <BlogListStyle>
      {blogList.map((blog: IBlog) => (
        <BlogItem key={blog.slug}>
          <Card key={blog.slug} {...blog} />
        </BlogItem>
      ))}
    </BlogListStyle>
  );
};

export default BlogList;
