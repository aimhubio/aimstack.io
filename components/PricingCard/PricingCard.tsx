import React, { FC } from 'react';
import { PricingTable } from './PricingCard.style';
import PricingTableRows from 'content/pricingList';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { Text } from 'styles/foundations';
import { Button } from 'components/UIkit';

interface IPricingCard {
}

const PricingCard: FC<IPricingCard> = ({
}) => {
  return (
    <PricingTable>
      {/* headers*/}
      <tr>
        {/**/}
        <th>
          <Text as='h2' size={5} css={{ marginBottom: '$6' }}>Plans & Features</Text>
          <img referrerPolicy="no-referrer-when-downgrade"
           src="https://static.scarf.sh/a.png?x-pxid=8b1927ba-96ec-4c48-9ee9-6037a9b3dbe5"/>
        </th>
        {/*free plan*/}
        <th>
          <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
            Free and Open Source
          </Text>
          <Text as='h2' size={5} css={{ marginBottom: '$9'}}>
            $0 / month
          </Text>
          <Text size={1}> Per user </Text>
          <Button
            variant="secondary_outline"
            as="a"
            size={2}
            href="https://github.com/aimhubio/aim"
            css={{marginTop: '$4'}}
          >
            Start for free
          </Button>
        </th>
        {/*team plan*/}
        <th>
          <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
            Team Tier
          </Text>
          <Text as='h2' size={5} >
            $11 / month
          </Text>
          <Text as='h1' size={1} css={{ marginBottom: '$4'}}>
            $120 / year
          </Text>
          <Text size={1}> Per user </Text>
          <Button
            variant="primary"
            as="a"
            size={2}
            href="https://docs.aimhub.io/quick-start/installation/docker"
            css={{marginTop: '$4'}}
          >
            Install now
          </Button>
        </th>
        {/*enterprise plan*/}
        <th>
            <Text as='h2' size={5} css={{ marginBottom: '$12'}}>
              Enterprise
            </Text>
            <Text as='h2' size={5} css={{ marginBottom: '$12'}}>
              Contact Us
            </Text>
            <Button
              variant="primary"
              as="a"
              size={2}
              href="mailto:hello@aimstack.io"
            >
              Request for demo
            </Button>
        </th>
      </tr>
      {/*rest of the table*/}
      {PricingTableRows.map((item, index) => (
        <tr key={index}>
          <td>{item[0]}</td>
          {
            item[1] === 'Yes' ?
              <td><IconCheck color={'green'}/></td>:
            item[1] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[1]}</td>
          }
          {
            item[2] === 'Yes' ?
              <td><IconCheck color={'green'}/></td>:
            item[2] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[2]}</td>
          }
          {
            item[3] === 'Yes' ?
              <td><IconCheck color={'green'}/></td>:
            item[3] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[3]}</td>
          }
        </tr>
      ))}
    </PricingTable>
  );
};

export default PricingCard;
