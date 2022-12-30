import React from 'react';
import Hero from 'components/Hero/Hero';
import Integrations from 'components/Integrations/Integrations';
import VideoGuide from 'components/VideoGuide/VideoGuide';
import Features from 'components/Features/Features';
import Demos from 'components/Demos/Demos';
import QuickStart from 'components/QuickStart/QuickStart';
import Subscribe from 'components/Subscribe/Subscribe';
import homeSeo from 'content/SeoData/homepage';
import Seo from '../components/SEO/SEO';

const Index = () => {
  return (
    <>
      <Seo {...homeSeo} />
      <Hero />
      <Integrations />
      <VideoGuide />
      <QuickStart />
      <Features />
      <Demos />
      <Subscribe />
    </>
  );
};

export default Index;
