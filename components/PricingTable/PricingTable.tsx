import React, { FC, useState } from 'react';
import { PricingTableStyle, PricingInfo, PriceLabel, Switch, BillingToggle, ToggleRow, SavingsBadge, ButtonContainer, HeaderContent } from './PricingTable.style';
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
  // State to track if annual billing is selected
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing data
  const pricingData = {
    free: {
      monthly: {
        price: '$0',
        period: 'month'
      },
      annual: {
        price: '$0',
        period: 'year'
      }
    },
    team: {
      monthly: {
        price: '$11',
        period: 'month'
      },
      annual: {
        price: '$120',
        period: 'year',
      }
    }
  };

  return (
    <PricingTableStyle>
      {/* headers*/}
      <tr>
        {/* Features column - now with left alignment */}
        <th>
          <HeaderContent align="left">
            <PricingInfo align="left">
              <Text as='h2' size={5} css={{ marginBottom: '$6' }}>Plans & Features</Text>
              <BillingToggle align="left">
                <ToggleRow align="left">
                  <PriceLabel active={!isAnnual}>Monthly</PriceLabel>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={isAnnual}
                      onChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className="slider"></span>
                  </Switch>
                  <PriceLabel active={isAnnual}>Yearly</PriceLabel>
                </ToggleRow>
                {isAnnual && (
                  <SavingsBadge align="left">BILLED YEARLY SAVE UP TO 10%</SavingsBadge>
                )}
              </BillingToggle>
            </PricingInfo>
            {/* Empty ButtonContainer to maintain consistent spacing */}
            <ButtonContainer />
          </HeaderContent>
        </th>

        {/* Free plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Free and Open Source
              </Text>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                {isAnnual ? pricingData.free.annual.price : pricingData.free.monthly.price} / {isAnnual ? pricingData.free.annual.period : pricingData.free.monthly.period}
              </Text>
              <Text size={1}> Per user </Text>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="outline"
                as="a"
                size={3}
                href="https://github.com/aimhubio/aim"
                css={{
                  width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Get Started
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>

        {/* Team plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Team Tier
              </Text>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                {isAnnual ? pricingData.team.annual.price : pricingData.team.monthly.price} / {isAnnual ? pricingData.team.annual.period : pricingData.team.monthly.period}
              </Text>
              <Text size={1}> Per user </Text>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="outline"
                as="a"
                size={3}
                href="https://docs.aimhub.io/quick-start/installation/docker"
                css={{
                  width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Install Now
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>

        {/* Enterprise plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Enterprise
              </Text>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Contact Us
              </Text>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="community"
                as="a"
                size={3}
                href="/contact"
                css={{
                  width: '80%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Contact Us
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>
      </tr>
      
      {/* Rest of the table */}
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