import { styled } from 'styles';

const CardStyle = styled('div', {});

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
  color: '$grey',
  transition: '$main',
  position: 'absolute',
  top: '$6',

  '.icon': {
    marginRight: '$1',
    fill: '$grey',
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
