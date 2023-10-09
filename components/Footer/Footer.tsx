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
  FooterBgImg,
} from './Footer.style';
import { Badge } from 'components/Header/Header.style';
import { Text } from 'styles/foundations';
import Link from 'next/link';
import { navList, socialList, INavList, Social } from '../Layout/config';
import ExportedImage from 'next-image-export-optimizer';
import FooterBg from 'public/images/static/footer/bg.svg';
import AimLogo from 'public/images/static/main/aim-logo.svg';
import AimLogoResp from 'public/images/static/main/aim-logo-resp.svg';

const Footer = () => {
  return (
    <FooterSection>
      <FooterBgImg src={FooterBg} alt={'footer'} priority={true} />
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
                    srcSet={AimLogoResp}
                  />
                  <ExportedImage
                    height={26}
                    width={26}
                    src={AimLogo}
                    alt="Aimstack"
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
                    aria-label={name}
                  >
                    <ExportedImage
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
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
