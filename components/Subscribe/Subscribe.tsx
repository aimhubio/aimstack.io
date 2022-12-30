import React from 'react';
import { SubscribeStyle, SubscribeInner, Left, Right } from './Subscribe.style';
import { Container, Text } from 'styles/foundations';
import { Button, Input } from 'components/UIkit';
import Image from 'next/image';

const Subscribe = () => {
  return (
    <SubscribeStyle>
      <Container>
        <SubscribeInner>
          <Left>
            <Text as="h2" size={9} css={{ marginBottom: '$4' }}>
              Subscribe to Our Newsletter
            </Text>
            <Text size={4} css={{ marginBottom: '$6' }}>
              Subscribe to our newsletter to receive regular updates about our
              latest releases, tutorials and blog posts!
            </Text>
            <Input placeholder="Enter Your Email Address" className="input" />
            <Button onClick={null} css={{ marginTop: '$6' }}>
              Subscribe
            </Button>
          </Left>
          <Right>
            <Image
              src="/images/static/subscribe/subscribe.png"
              alt="Subscribe"
              width={100}
              height={100}
              layout="responsive"
              quality={100}
            />
          </Right>
        </SubscribeInner>
      </Container>
    </SubscribeStyle>
  );
};

export default Subscribe;
