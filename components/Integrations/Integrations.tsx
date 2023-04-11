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
          size="8"
          css={{ marginBottom: '$6', lineHeight: 1.3 }}
        >
          Seamless integrations with your favorite tools
        </Text>
        <Text css={{ lineHeight: '32px' }}>
          Aim is tightly integrated with the ML ecosystem. Aim comes with
          built-in callbacks for the most of ML tools and frameworks. It allows
          to track metadata (metrics, hparams, etc.) with just a few lines of
          code!
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
