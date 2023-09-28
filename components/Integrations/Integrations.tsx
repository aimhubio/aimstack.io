import Image from 'next/image';
import {
  IntegrationsContainer,
  IntegrationsList,
  IntegrationsContainerLeft,
} from './Integrations.style';
import { Button } from 'components/UIkit';
import { Text } from 'styles/foundations';

const Integrations = () => {
  return (
    <IntegrationsContainer>
      <IntegrationsContainerLeft>
        <Text
          as="h3"
          className="title"
          size={9}
          css={{ marginBottom: '$6', lineHeight: 1.3, fontWeight: 800 }}
        >
          Aim connects and integrates with your favorite tools
        </Text>
        <Text size={3} css={{ lineHeight: '30px' }}>
          The Aim standard package comes with all integrations. If you'd like to modify the integration and make it custom, create a new integration package and share with others.
        </Text>
        <Button
          css={{ marginTop: '$8' }}
          as="a"
          href="https://github.com/aimhubio/aim"
          target="_blank"
        >
          Learn more
        </Button>
      </IntegrationsContainerLeft>
      <IntegrationsList>
        <Image
          src={`/images/static/integrations/integrations.png`}
          alt="integrations image"
          width={200}
          height={150}
          layout="responsive"
        />
      </IntegrationsList>
    </IntegrationsContainer>
  );
};

export default Integrations;
