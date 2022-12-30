import React, { FC } from 'react';
import { PricingCardStyle, PricingCardList } from './PricingCard.style';
import { Text, Flex } from 'styles/foundations';
import { Button } from 'components/UIkit';
import Image from 'next/image';

interface IPricingCard {
  title: string;
  image: string;
  description: string;
  list: string[];
  buttonVariant: string;
  buttonText: string;
  buttonURL: string;
  plan: string;
}

const PricingCard: FC<IPricingCard> = ({
  title,
  buttonURL,
  buttonText,
  buttonVariant,
  image,
  list,
  description,
  plan,
}) => {
  return (
    <PricingCardStyle>
      <Flex direction="column" justify="between">
        <div>
          <Flex align="center" css={{ marginBottom: '$4' }}>
            <Image src={image} alt={title} height={44} width={44} />
            <Text as="h2" css={{ fontWeight: '$4', marginLeft: '$4' }} size={6}>
              {title}
            </Text>
          </Flex>
          <Text size={2} css={{ marginBottom: '$5', color: '$black700' }}>
            {description}
          </Text>
          <PricingCardList>
            {list.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </PricingCardList>
        </div>
        <div>
          <Text size={3} css={{ marginBottom: '$6', fontWeight: '$3' }}>
            {plan}
          </Text>
          <Button
            as="a"
            variant={buttonVariant}
            href={buttonURL}
            target="_blank"
            css={{fontSize: '$2'}}
          >
            {buttonText}
          </Button>
        </div>
      </Flex>
    </PricingCardStyle>
  );
};

export default PricingCard;
