import React, { useRef, useState } from 'react';
import { HighlightWrapper, CodeBlockStyle } from './QuickStart.style';
import Highlight from 'react-highlight';
import { Icon } from 'components/UIkit';

const CodeBlock = () => {
  const [copied, setCopied] = useState(null);
  const firstCode = useRef(null);
  const secondCode = useRef(null);
  const thirdCode = useRef(null);

  const handleCopy = async (ref, number) => {
    await navigator.clipboard.writeText(ref.current.props.children);
    setCopied(number);
  };

  return (
    <CodeBlockStyle>
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
        <Highlight ref={firstCode}>{`pip install aim`}</Highlight>
      </HighlightWrapper>

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
        <Highlight ref={secondCode}>
          {`from aim import Run

run = Run()

# Save inputs, hparams or any other 'key: value' pairs
run['hparams'] = hyperparam_dict

for step in range(10):
# Log metrics to visualize performance
    run.track(metric_value, name='metric_name',
    epoch=epoch_number)`}
        </Highlight>
      </HighlightWrapper>

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
        <Highlight ref={thirdCode}>{`aim up`}</Highlight>
      </HighlightWrapper>
    </CodeBlockStyle>
  );
};

export default CodeBlock;
