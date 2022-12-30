import React, { FC } from 'react';
import { BlogListStyle, BlogItem } from './BlogList.style';
import Card from 'components/Card/Card';

interface IBlog {
  categories: string[]; //TODO change to string
  date: Date;
  description: string;
  draft: boolean;
  image: string;
  slug: string;
  title: string;
  tags: string[]; //TODO remove tag
}

interface IBlogList {
  blogList: IBlog[];
}
const BlogList = ({ blogList }: IBlogList) => {
  return (
    <BlogListStyle>
      {blogList.map((blog: IBlog) => {
        return (
          <BlogItem key={blog.slug}>
            <Card key={blog.slug} {...blog} />
          </BlogItem>
        );
      })}
    </BlogListStyle>
  );
};

export default BlogList;
