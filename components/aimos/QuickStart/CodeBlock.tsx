import React, { useRef, useState } from 'react';
import { HighlightWrapper, CodeBlockStyle } from './QuickStart.style';
import Highlight from 'react-highlight';
import { Icon } from 'components/UIkit';
import { Text } from 'styles/foundations';

const CodeBlock = () => {
  const [copied, setCopied] = useState(null);
  const firstCode = useRef(null);
  const secondCode = useRef(null);
  const thirdCode = useRef(null);
  const forthCode = useRef(null);

  const handleCopy = async (ref, number) => {
    // @ts-ignore
    await navigator.clipboard.writeText(ref.current.props.children);
    setCopied(number);
  };

  return (
    <CodeBlockStyle>
      <Text size={3} css={{ color: '$white' }}>
        1. Install Aim in your environment
      </Text>
      <HighlightWrapper>
        <button
          onClick={() => handleCopy(firstCode, 1)}
          aria-label="copy to clipboard"
        >
          <Icon name="copy" color="white" />
        </button>
        {copied === 1 && (
          <span className="copied" onAnimationEnd={() => setCopied(null)}>
            Copied!
          </span>
        )}
        <Highlight
          ref={firstCode}
          className={'bash'}
        >{`pip install aim`}</Highlight>
      </HighlightWrapper>

      <Text size={3} css={{ color: '$white' }}>
        2. Integrate Aim with your code
      </Text>
      <HighlightWrapper>
        <button
          onClick={() => handleCopy(secondCode, 2)}
          aria-label="copy to clipboard"
        >
          <Icon name="copy" color="white" />
        </button>
        {copied === 2 && (
          <span className="copied" onAnimationEnd={() => setCopied(null)}>
            Copied!
          </span>
        )}
        <Highlight ref={secondCode} className={'python'}>
          {`
from aimstack.base import Run, Metric

# Create a run
run = Run()

run['hparams'] = {
    'lr': 0.001,
    'batch_size': 32
}

# Create a metric
metric = Metric(run, name='loss', context={'epoch': 1})

for i in range(1000):
      metric.track(i, epoch=1)
`}
        </Highlight>
      </HighlightWrapper>

      <Text size={3} css={{ color: '$white' }}>
        3. Start Aim server and Aim UI
      </Text>
      <HighlightWrapper>
        <button
          onClick={() => handleCopy(thirdCode, 3)}
          aria-label="copy to clipboard"
        >
          <Icon name="copy" color="white" />
        </button>
        {copied == 3 && (
          <span className="copied" onAnimationEnd={() => setCopied(null)}>
            Copied!
          </span>
        )}
        <Highlight ref={thirdCode} className={'bash'}>{`aim server`}</Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <button
          onClick={() => handleCopy(forthCode, 4)}
          aria-label="copy to clipboard"
        >
          <Icon name="copy" color="white" />
        </button>
        {copied == 4 && (
          <span className="copied" onAnimationEnd={() => setCopied(null)}>
            Copied!
          </span>
        )}
        <Highlight ref={forthCode} className={'bash'}>{`aim ui`}</Highlight>
      </HighlightWrapper>
    </CodeBlockStyle>
  );
};

export default CodeBlock;
