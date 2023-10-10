import React from 'react';
import { Flex, Text } from 'styles/foundations';
import Logging from 'public/images/static/why-use-aim/logging.png';
import LowCode from 'public/images/static/why-use-aim/low-code.png';
import Ecosystem from 'public/images/static/why-use-aim/ecosystem.png';
import {
  IconChartDots3,
  IconCode,
  IconPackages,
  TablerIconsProps,
} from '@tabler/icons-react';

interface Step {
  key: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  list: Array<string>;
  explorationLink: string;
  bannerImgSrc: any;
  IconComponent: React.FC<TablerIconsProps>;
}

export const steps: Step[] = [
  {
    key: 'log-anything',
    title: 'Log anything from everywhere',
    description: 'Declare any python object as a loggable type',
    list: ['Metrics', 'Images', 'Text', 'Custom Objects', 'Remote logging'],
    explorationLink:
      'https://aimstack.readthedocs.io/en/latest/getting_started/quick_start.html',
    bannerImgSrc: Logging,
    IconComponent: (props) => (
      <div
        style={{
          background: '#DBEEFE',
          padding: 12,
          display: 'inline-flex',
          borderRadius: 8,
          marginBottom: 24,
        }}
      >
        <IconChartDots3 size={36} {...props} />
      </div>
    ),
  },
  {
    key: 'low-code-ui',
    title: 'Pythonic low-code UI',
    description:
      'Create custom UI for your logs using Aim’s low-code pythonic UI-builder',
    list: [
      'Full UI Kit',
      'Full Data type compatibility',
      'Extensible and customizable',
    ],
    explorationLink:
      'https://aimstack.readthedocs.io/en/latest/getting_started/quick_start.html',
    bannerImgSrc: LowCode,
    IconComponent: (props) => (
      <div
        style={{
          background: '#E1DCFE',
          padding: 12,
          display: 'inline-flex',
          borderRadius: 8,
          marginBottom: 24,
        }}
      >
        <IconCode size={36} {...props} />
      </div>
    ),
  },
  {
    key: 'modular-ecosystem',
    title: 'Modular ecosystem of packages',
    description: 'Create an end-to-end custom logging app and run by Aim.',
    list: [
      'Distributed as python packages',
      'Composable',
      'UI + Automations + Logging',
    ],
    explorationLink:
      'https://aimstack.readthedocs.io/en/latest/getting_started/quick_start.html',
    bannerImgSrc: Ecosystem,
    IconComponent: (props) => (
      <div
        style={{
          background: '#FADAFE',
          padding: 12,
          display: 'inline-flex',
          borderRadius: 8,
          marginBottom: 24,
        }}
      >
        <IconPackages size={36} {...props} />
      </div>
    ),
  },
];

interface ComingSoonStep {
  key: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  list: Array<string>;
}

export const comingSoonSteps: ComingSoonStep[] = [
  {
    key: 'log-automations',
    title: (
      <>
        Log Automations
        <Text as="span" className="badge">
          coming soon
        </Text>
      </>
    ),
    description:
      'Automate over your logs and connect observability to the rest of your toolstack.',
    list: ['Actions', 'Callbacks', 'Beats'],
  },
  {
    key: 'connect-artifacts',
    title: (
      <>
        Connect Artifacts
        <Text as="span" className="badge">
          coming soon
        </Text>
      </>
    ),
    description: 'Connect Artifacts to your logs.',
    list: ['Versioning', 'Retrieval'],
  },
];
