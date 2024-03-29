import React from 'react';
import Hero from 'components/Hero/Hero';
import Integrations from 'components/Integrations/Integrations';
import Features from 'components/Features/Features';
import Demos from 'components/Demos/Demos';
import QuickStart from 'components/QuickStart/QuickStart';
import Subscribe from 'components/Subscribe/Subscribe';
import homeSeo from 'content/SeoData/homepage';
import Seo from 'components/SEO/SEO';
import TrustedCompanies from 'components/TrustedCompanies';
import VideoGuide from 'components/VideoGuide/VideoGuide';

const Index = () => {
  return (
    <>
      <Seo {...homeSeo} />
      <Hero />
      <TrustedCompanies />
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
