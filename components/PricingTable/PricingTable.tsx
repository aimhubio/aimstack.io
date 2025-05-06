import React, { FC } from 'react';
import { PricingTableStyle } from './PricingTable.style';
import PricingTableRows from 'content/pricingList';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { Text } from 'styles/foundations';
import { Button } from 'components/UIkit';

interface IPricingTable {
}

const PricingTable: FC<IPricingTable> = ({
}) => {
  return (
    <PricingTableStyle>
      {/* headers*/}
      <tr>
        {/**/}
        <th>
          <Text as='h2' size={5} css={{ marginBottom: '$6' }}>Plans & Features</Text>
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
            variant="outline"
            as="a"
            size={3}
            href="https://github.com/aimhubio/aim"
            css={{marginTop: '$4',
                  width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',}}
          >
            Get Started
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
            variant="outline"
            as="a"
            size={3}
            href="https://docs.aimhub.io/quick-start/installation/docker"
            css={{marginTop: '$4',
                  width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',}}
          >
            Install Now
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
              variant="community"
              as="a"
              size={3}
              href="/contact"
              css={{width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',}}
            >
              Contact Us
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
              <td><IconCheck color={'white'}/></td>:
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
    </PricingTableStyle>
  );
};

export default PricingTable;
