interface IIntegration {
  name: string;
  url: string;
}
const integrationsList: IIntegration[] = [
  {
    name: 'pytorch',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#any-python-script',
  },
  {
    name: 'pytorch-lightning',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-pytorch-lightning',
  },
  {
    name: 'huggingface',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-hugging-face',
  },
  {
    name: 'tensorflow',
    url: 'https://github.com/aimhubio/aim/blob/main/examples/tensorflow_1_keras_track.py',
  },
  {
    name: 'keras',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/integrations.html#integration-with-keras-tf-keras',
  },
  {
    name: 'xgboost',
    url: 'https://aimstack.readthedocs.io/en/latest/using/integration_guides.html#xgboost',
  },
  {
    name: 'amazon',
    url: 'https://aimstack.readthedocs.io/en/latest/using/sagemaker_notebook_ui.html#run-aim-ui-on-sagemaker-notebook-instance',
  },
  {
    name: 'mlflow',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/convert_data.html#show-mlflow-logs-in-aim',
  },
  {
    name: 'tensorboard',
    url: 'https://aimstack.readthedocs.io/en/latest/quick_start/convert_data.html#show-tensorboard-logs-in-aim',
  },
];

export default integrationsList;
