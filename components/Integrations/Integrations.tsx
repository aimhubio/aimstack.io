import React from 'react';
import Image from 'next/image';
import {
  IntegrationsContainer,
  IntegrationsList,
  IntegrationsContainerLeft,
  IntegrationsSection,
} from './Integrations.style';
import { Button } from 'components/UIkit';
import { Text } from 'styles/foundations';

import IntegrationsImg from '../../public/images/static/integrations/integrations.png';

const Integrations = () => {
  return (
    <IntegrationsSection>
      <IntegrationsContainer>
        <IntegrationsContainerLeft>
          <Text as="h2" className="integrations-title" size={9}>
            Aim connects and integrates with your favorite tools
          </Text>
          <Text size={3} className={'integrations-subtitle'}>
            The Aim standard package comes with all integrations. If you&apos;d
            like to modify the integration and make it custom, create a new
            integration package and share with others.
          </Text>
          <Button
            as="a"
            href="https://aimstack.readthedocs.io/en/latest/apps/overview.html#out-of-the-box-aim-apps"
            target="_blank"
          >
            Learn more
          </Button>
        </IntegrationsContainerLeft>
        <IntegrationsList>
          <Image
            src={IntegrationsImg}
            alt="integrations image"
            width={1000}
            height={600}
            quality={100}
          />
        </IntegrationsList>
      </IntegrationsContainer>
    </IntegrationsSection>
  );
};

export default Integrations;
