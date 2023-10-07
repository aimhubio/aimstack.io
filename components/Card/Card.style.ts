import { styled } from 'styles';
import Image from 'next/image';

const CardStyle = styled('div', {
  padding: '10px',
  border: '1px solid #E2D7EB',
  borderRadius: '6px',
  transition: '$main',
  '&:hover': {
    backgroundColor: '$bigStoneHover',
    color: '$white',
  }
});

const ImageWrapper = styled('div', {
  position: 'relative',
});

const CardImage = styled(Image, {
  width: '100%',
  objectFit: 'cover',
  height: '200px',
});

const CardContent = styled('div', {
  padding: '20px 10px 0px 10px',
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
  },
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

export {
  CardStyle,
  CardContent,
  Category,
  CardFooter,
  ImageWrapper,
  CardImage,
};
