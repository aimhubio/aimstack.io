import React from 'react';
import { Text, Container, Flex } from 'styles/foundations';
import Team from 'components/Team/Team';
import teamList from 'content/teamList';
import {
  AboutHero,
  Culture,
  CultureLeft,
  CultureRight,
  CultureList,
  CultureItem,
} from 'styles/pages/About.style';
import { cultureList, ICultureList } from 'content/cultrureList';
import ExportedImage from 'next-image-export-optimizer';
import aboutSeo from 'content/SeoData/about';
import Seo from 'components/SEO/SEO';
import BgTop from 'public/images/static/about-us/bg.png';
import TeamImage from 'public/images/static/about-us/team.png';

const About = () => {
  return (
    <>
      <Seo {...aboutSeo} />
      <AboutHero style={{ paddingTop: '100px' }}>
        <Container>
          <Flex
            direction="column"
            align="center"
            css={{ py: '80px' }}
          >
            <Text as="h1" size={10} css={{ marginBottom: '$6' }}>
              What You Do Is Who You Are
            </Text>
            <Text size={4} css={{ maxWidth: '848px' }}>
              We are a group of engineers and designers deeply passionate about
              the problem of building AI Metadata Infrastructure. AI Metadata is
              A LOT, it’s multidimensional and heterogeneous. We Aim to help
              build world’s best AI Metadata systems.
            </Text>
          </Flex>
        </Container>
      </AboutHero>
      <Culture>
        <ExportedImage
          className="bg-top"
          fill={true}
          src={BgTop}
          priority
          placeholder={'blur'}
          alt="Our Cultural Values"
        />
        <Container css={{ position: 'relative', zIndex: 2 }}>
          <Text as="h3" size={8} css={{ '@bp1': { textAlign: 'center' } }}>
            Our Cultural Values
          </Text>
          <Flex align="center" direction={{ '@bp1': 'columnReverse' }}>
            <CultureLeft>
              <CultureList>
                {cultureList.map(
                  ({ image, title, description }: ICultureList, index) => (
                    <CultureItem key={index}>
                      <ExportedImage
                        src={image}
                        width={44}
                        height={44}
                        alt={title}
                      />
                      <Text
                        as="h4"
                        size={3}
                        css={{ fontWeight: '$3', padding: '$3 0 $2' }}
                      >
                        {title}
                      </Text>
                      <Text css={{ color: '$white700' }}>{description}</Text>
                    </CultureItem>
                  ),
                )}
              </CultureList>
            </CultureLeft>
            <CultureRight>
              <ExportedImage
                src={TeamImage}
                width={695}
                height={525}
                alt={'AimSack team'}
                placeholder={'blur'}
              />
            </CultureRight>
          </Flex>
        </Container>
      </Culture>
      <Team team={teamList} />
      {/*<JoinTeam>
        <Container>
          <Text as="h2" size={9} css={{ marginBottom: '$6' }}>
            Join Our Team
          </Text>
          <Text size={3} css={{ marginBottom: '$6' }}>
            We are thankful to the awesome Aim community for the constant
            feedback and the trust to build for them the most performant
            open-source experiment tracking tool. Our mission is to democratize
            the AI Dev tools.
          </Text>
          <JoinTeamButton href="#" target="_blank">
            <Icon name="notion" />
            <span>Open position on Notion</span>
          </JoinTeamButton>
        </Container>
      </JoinTeam>*/}
    </>
  );
};

export default About;
