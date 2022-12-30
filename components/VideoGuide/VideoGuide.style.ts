import { styled } from 'styles';

const VideoGuideStyle = styled('section', {
  padding: '64px 0 150px',

  '@bp1': {
    padding: '44px 0 80px',
  },
  '@bp2': {
    padding: '24px 0 60px',
  },
});
const VideoWrapper = styled('div', {
  position: 'relative',

  '.yt-lite': {
    borderRadius: '$2',

    '> .lty-playbtn': {
      width: '68px',
      height: '48px',
      border: 'none',
      borderRadius: '25%'
    }
  },

  '& iframe': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    borderRadius: '$2',
    boxShadow: '$2',
  },
});

export { VideoGuideStyle, VideoWrapper };
