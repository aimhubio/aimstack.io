import { styled } from 'styles';

const CardStyle = styled('div', {
  'img': {
    objectFit: "cover",
    objectPosition: "top"
  }
});

const ImageWrapper = styled('div', {
  position: 'relative',
  height: '0',
  paddingBottom: '65%',
});

const CardContent = styled('div', {
  paddingTop: '50px',
  position: 'relative',
});

const Category = styled('div', {
  marginBottom: '$2',
  display: 'flex',
  alignItems: 'center',
  color: '$darkGrey',
  transition: '$main',

  '.icon': {
    marginRight: '$1',
    fill: '$darkGrey',
    transition: '$main',
  },

  '&:hover': {
    color: '$darkGray',
    '.icon': {
      fill: '$darkGray',
    },
  }
});

const CardFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '.icon': {
    marginRight: '$1',
    fill: '$grey',
  },
});

export { CardStyle, CardContent, Category, CardFooter, ImageWrapper };
