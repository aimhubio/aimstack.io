import { styled } from 'styles';

const BlogListStyle = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  gap: '40px 20px',
  '@bp1': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },
  '@bp2': {
    gap: '40px 10px',
    gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
  }
});
const BlogItem = styled('li', {});

export { BlogListStyle, BlogItem };
