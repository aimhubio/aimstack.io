import React, { useRef, useState } from 'react';
import { Text, Container, Flex, InnerHTML } from 'styles/foundations';
import Markdown from 'markdown-to-jsx';
import { Icon } from 'components/UIkit';
import { allPackages } from 'contentlayer/generated';
import Link from 'next/link';
import { Subpackeges, SubpackegesHeader, MainContent, SideBar, Badges } from '../styles/pages/Subpackeges.style';
import Image from 'next/image';
import { HighlightWrapper } from '../components/QuickStart/QuickStart.style';
import Highlight from 'react-highlight';


export default function PostPage({ post }) {
  const [copied, setCopied] = useState(false);
  const highlightRef = useRef(null);

  const handleCopy = async (ref) => {
    await navigator.clipboard.writeText(ref.current.props.children);
    setCopied(true)
  };

  return (
    <Subpackeges>
      <SubpackegesHeader>
        <Container>
          <Flex justify='between' direction={{ '@bp1': 'column' }}>
            <Flex align='center'>
              <Image
                className='logo'
                src={post.logo}
                alt="AimStack"
                width="72"
                height="72"
              />
              <div className='org'>
                <div className='org-name'>
                  <Link href={post.org_link}><Text size={8} css={{ fontWeight: '$3' }}>{post.org_name}</Text></Link> <span>/</span> <Link href={post.repo_link}><Text size={8} css={{ fontWeight: '$5' }}>{post.repo_name}</Text></Link>
                </div>
                <Text size={6} css={{ fontWeight: '$3' }}>{post.version}</Text>
              </div>
            </Flex>
            <HighlightWrapper className='highlight light'>
              <button
                onClick={() => handleCopy(highlightRef)}
                aria-label="copy to clipboard"
              >
                <Icon name="copy" color="black" />
              </button>
              {copied && (
                <span className="copied" onAnimationEnd={() => setCopied(null)}>
            Copied!
          </span>
              )}
              <Highlight ref={highlightRef}>{post.installation}</Highlight>
            </HighlightWrapper>
          </Flex>
        </Container>
      </SubpackegesHeader>
      <Container>
        <Flex direction={{ '@bp1': 'columnReverse' }}>
          <MainContent>
            <InnerHTML>
              <Markdown>
                {post.body.raw}
              </Markdown>
            </InnerHTML>
          </MainContent>
          <SideBar>
            <Text as='h4' size={4} css={{ fontWeight: '$3', paddingBottom: '$3' }}>
              About
            </Text>
            <Text>{post.about}</Text>
            <Badges>
              <Markdown>
                {post.badges_body}
              </Markdown>
            </Badges>
          </SideBar>
        </Flex>

      </Container>

    </Subpackeges>
  );
}

export async function getStaticPaths() {

  // get all the post slug
  const publish = allPackages.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: publish,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {

  const post = allPackages.find((post) => {
    return post.slug === slug;
  });

  return { props: { post } };
}
