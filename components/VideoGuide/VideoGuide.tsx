import React from 'react';
import { VideoGuideStyle, VideoWrapper } from './VideoGuide.style';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Container } from 'styles/foundations';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

/*EC2j2sudxOc*/
/*An easy-to-use & supercharged open-source experiment tracker*/
const VideoGuide = () => {
  return (
    <VideoGuideStyle>
      <Container>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="EC2j2sudxOc"
            title="An easy-to-use & supercharged open-source experiment tracker"
            aspectHeight = {9}
            aspectWidth = {16}
            thumbnail='/images/static/main/video-thumbnail.webp'
            webp={true}
          />
          {/*<iframe*/}
          {/*  loading="lazy"*/}
          {/*  src="https://www.youtube.com/embed/EC2j2sudxOc"*/}
          {/*  title="YouTube video player"*/}
          {/*  frameBorder="0"*/}
          {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
          {/*  allowFullScreen*/}
          {/*/>*/}
        </VideoWrapper>
      </Container>
    </VideoGuideStyle>
  );
};

export default VideoGuide;
