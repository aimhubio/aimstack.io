import React from 'react';
import Hero from 'components/aimos/Hero/Hero';
import TrustedCompanies from 'components/aimos/TrustedCompanies';
import Integrations from 'components/aimos/Integrations/Integrations';
import Features from 'components/aimos/Features/Features';
import QuickStart from 'components/aimos/QuickStart/QuickStart';
import Demos from 'components/aimos/Demos/Demos';
import Subscribe from 'components/aimos/Subscribe/Subscribe';

import aimOsSeo from 'content/SeoData/homepage';
import Seo from 'components/SEO/SEO';

const Index = () => {
  return (
    <>
      <Seo {...aimOsSeo} />
      <Hero />
      <TrustedCompanies />
      <Integrations />
      <Features />
      <QuickStart />
      <Demos />
      <Subscribe />
    </>
  );
};

export default Index;
