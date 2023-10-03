import React, { useState } from 'react';
import { SubscribeSection, SubscribeInner, Left, Right } from './Subscribe.style';
import { Container, Text } from 'styles/foundations';
import { Button, Input } from 'components/UIkit';
import Image from 'next/image';
import { SUBSCRIBE_API } from 'config';
import { validateEmail } from 'utils';
import SubscribeImage from '../../public/images/static/subscribe/subscribe.png';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      email: email,
    }),
  };

  const handleFetch = async () => {
    if (!validateEmail(email)) {
      setError('Invalid Email');
      return;
    }
    setError('');

    try {
      // @ts-ignore
      const response = await fetch(SUBSCRIBE_API, requestOptions);
      if (response.status === 200) {
        setEmail('');
        return;
      }
      setError('Something went wrong');
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <SubscribeSection>
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
            <div>
              <Input
                onChange={handleChange}
                value={email}
                errorMessage={error}
                placeholder="Enter Your Email Address"
                className="input"
              />
            </div>
            <Button onClick={handleFetch} css={{ marginTop: '$14' }}>
              Subscribe
            </Button>
          </Left>
          <Right>
            <Image
              src={SubscribeImage}
              alt="Subscribe"
              width={1000}
              height={600}
              quality={100}
            />
          </Right>
        </SubscribeInner>
      </Container>
    </SubscribeSection>
  );
};

export default Subscribe;
