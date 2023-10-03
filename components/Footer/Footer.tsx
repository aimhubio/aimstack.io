import React from 'react';
import {
  FooterSection,
  FooterSectionContainer,
  FooterSectionInner,
  FooterTop,
  FooterBottom,
  FooterList,
  Logo,
  FooterSocial,
} from './Footer.style';
import { Badge } from 'components/Header/Header.style';
import { Text } from 'styles/foundations';
import Link from 'next/link';
import { navList, socialList, INavList, Social } from '../Layout/config';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterSection>
      <Image
        className={'footer-bg'}
        src={'/images/static/footer/bg.png'}
        alt={'footer'}
        width={1000}
        height={600}
        quality={100}
      />
      <FooterSectionInner>
        <FooterSectionContainer>
          <FooterTop>
            <Logo>
              <Link href="/" className="logo">
                <picture>
                  <source
                    height={26}
                    width={109}
                    media="(max-width: 1199px)"
                    srcSet="/images/static/main/aim-logo-resp.svg"
                  />
                  <Image
                    height={26}
                    width={26}
                    src="/images/static/main/aim-logo.svg"
                    alt="Aimstack"
                    quality={100}
                  />
                </picture>
              </Link>
            </Logo>
            <FooterList>
              {navList.map(({ to, title, external, badge }: INavList) => {
                return (
                  <li key={to}>
                    <Link href={to} target={external ? '_blank' : '_self'}>
                      <span className="text">{title}</span>
                      {!!badge && <Badge>{badge}</Badge>}
                    </Link>
                  </li>
                );
              })}
            </FooterList>
            <FooterSocial>
              {socialList.map(({ icon, url, name }: Social) => (
                <li key={name}>
                  <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={icon}
                  >
                    <Image
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
                      quality={100}
                    />
                  </a>
                </li>
              ))}
            </FooterSocial>
          </FooterTop>
          <FooterBottom>
            <Text size={1}>
              Copyright © {new Date().getFullYear()} Aimstack
            </Text>
          </FooterBottom>
        </FooterSectionContainer>
      </FooterSectionInner>
    </FooterSection>
  );
};

export default Footer;
