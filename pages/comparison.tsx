import React from 'react';
import { Text, Flex } from 'styles/foundations';
import Seo from 'components/SEO/SEO';
import comparisonSeo from 'content/SeoData/comparison';
import { styled } from '@stitches/react';
import { IconCheck, IconX, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import {deploymentData, capabilitiesData, dashboardsData, flexibilityData, organizingData} from 'content/comparisonData'

// Styled components for the comparison page
const ComparisonContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $6',
  '@bp2': {
    padding: '0 $8',
  },
});

const DropdownContainer = styled('div', {
  marginBottom: '$8',
});

const DropdownHeader = styled('div', {
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '36px',
});

const DropdownContent = styled('div', {
  padding: '$4',
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

// Modify the ComparisonTable styled component to left-align all cells
const ComparisonTable = styled('table', {
  width: '100%',
  boxShadow: '$4',
  borderCollapse: 'collapse',
  borderRadius: '$2',
  tableLayout: 'fixed',
  marginBottom: '$4',

  'td': {
    padding: '20px 50px',
    textAlign: 'left',
    fontSize: '16px',
  },

  'th': {
    textAlign: 'left',
    padding: '22px 50px',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#F7F7FF', // Add this line for the background color
  },

  'td:first-child': {
    fontWeight: 'bold',
    width: '40%',
  },

  'tr:nth-child(even)': {
    backgroundColor: '#FAFAFA',
  },
});

// Dropdown component
const Dropdown = ({ title, children }) => {
  // Change initial state to true to make dropdowns open by default
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <IconChevronUp size={44} /> : <IconChevronDown size={44}/>}
      </DropdownHeader>
      <DropdownContent isOpen={isOpen}>
        {children}
      </DropdownContent>
    </DropdownContainer>
  );
};


// Comparison page component
const Comparison = () => {
  // Then modify the table cell rendering to include text with icons
  const renderComparisonTable = (data) => (
    <ComparisonTable>
      <thead>
        <tr>
          <th>Features</th>
          <th>Aimhub</th>
          <th>Neptune.ai</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.feature}</td>
            <td>
              {row.aimhub === 'Yes' ? (
                <Flex align="center" gap={2}>
                  <IconCheck color="green" size={20} />
                  <Text>Yes</Text>
                </Flex>
              ) : row.aimhub === 'No' ? (
                <Flex align="center" gap={2}>
                  <IconX color="grey" size={20} />
                  <Text>No</Text>
                </Flex>
              ) : (
                row.aimhub
              )}
            </td>
            <td>
              {row.neptune === 'Yes' ? (
                <Flex align="center" gap={2}>
                  <IconCheck color="green" size={20} />
                  <Text>Yes</Text>
                </Flex>
              ) : row.neptune === 'No' ? (
                <Flex align="center" gap={2}>
                  <IconX color="grey" size={20} />
                  <Text>No</Text>
                </Flex>
              ) : (
                row.neptune
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </ComparisonTable>
  );

  return (
    <>
      <Seo {...comparisonSeo} />
      <ComparisonContainer>
        <Flex css={{ paddingBottom: '64px', paddingTop: '64px' }} direction="column" gap={6}>
          <Text as="h1" size={6} css={{ textAlign: 'center', marginBottom: '$6' }}>
            Aimhub vs Neptune.ai Comparison
          </Text>

          <Dropdown title="Deployment & Setup">
            {renderComparisonTable(deploymentData)}
          </Dropdown>

          <Dropdown title="Flexibility, Speed and Accessibility">
            {renderComparisonTable(flexibilityData)}
          </Dropdown>

          <Dropdown title="Capabilities">
            {renderComparisonTable(capabilitiesData)}
          </Dropdown>

          <Dropdown title="Organizing & Searching Experiments">
            {renderComparisonTable(organizingData)}
          </Dropdown>

          <Dropdown title="Dashboards & Views">
            {renderComparisonTable(dashboardsData)}
          </Dropdown>
        </Flex>
      </ComparisonContainer>
    </>
  );
};

export default Comparison;