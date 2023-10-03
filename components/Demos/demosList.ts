interface Demo {
  name: string;
  title: string;
  description: string;
  url: string;
  imageSrc: string;
}
const demosList: Demo[] = [
  {
    name: 'LangChain-based-chatbot',
    title: 'LangChain-based chatbot ',
    description: "Tracing LangChain-based chatbot executions",
    url: 'https://play-v4.aimstack.io/langchain-chatbot-ui/apps/langchain_debugger/traces.py',
    imageSrc: '/images/static/demos/LangChain-based-chatbot.png',
  },
  {
    name: 'LlamaIndex-query',
    title: 'LlamaIndex-query',
    description: "Tracing LlamaIndex query executions",
    url: 'https://play-v4.aimstack.io/llamaindex-retriever-ui/apps/llamaindex_observer/traces.py',
    imageSrc: '/images/static/demos/LlamaIndex-query.png',
  },
  {
    name: 'CNN-Training',
    title: 'CNN Training',
    description: 'Tracking PyTorch-based CNN trainings',
    url: 'https://play-v4.aimstack.io/mnist-training-ui/apps/experiment_tracker/runs.py',
    imageSrc: '/images/static/demos/CNN-Training.png',
  },
];

export default demosList;
