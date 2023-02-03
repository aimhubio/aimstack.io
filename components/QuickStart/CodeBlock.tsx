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
        <Highlight ref={firstCode} className={'bash'}>{`pip install aim`}</Highlight>
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
        <Highlight ref={secondCode} className={'python'}>
          {`import aim
import math

# Initialize a new run
run = aim.Run()

# Log hyper-parameters
run["hparams"] = {
    "learning_rate": 0.001,
    "batch_size": 32,
}

# Log metrics
for step in range(100):
    run.track(math.sin(step), name='sine')
    run.track(math.cos(step), name='cosine')`}
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
        <Highlight ref={thirdCode} className={'bash'}>{`aim up`}</Highlight>
      </HighlightWrapper>
    </CodeBlockStyle>
  );
};

export default CodeBlock;
