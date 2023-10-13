interface ISteps {
  title: string;
  list: string[];
  name: string;
}
const stepsConfig: ISteps[] = [
  {
    name: 'build',
    title: 'Compare runs easily to <strong> build models faster</strong>',
    list: [
      'Group and aggregate 100s of metrics',
      'Analyze and learn correlations',
      'Query with easy pythonic search',
    ],
  },
  {
    name: 'debugging',
    title:
      'Deep dive into details of each run for <strong>easy debugging</strong>',
    list: [
      'Explore hparams, metrics, images, distributions, audio, text, ...',
      'Track plotly and matplotlib plots',
      'Analyze system resource usage',
    ],
  },
  {
    name: 'governance',
    title:
      'Have all relevant information centralized for <strong>easy governance</strong>',
    list: [
      'Centralized dashboard to view all your runs',
      'Use SDK to query/access tracked runs',
      'You own your data - Aim is open source and self hosted.',
    ],
  },
];

export default stepsConfig;
