import React, { FC, useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';
import Link from 'next/link';
import {
  HeaderStyle,
  HeaderContent,
  ButtonContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial,
  Badge,
} from './Header.style';
import { Container } from 'styles/foundations';
import ExportedImage from 'next-image-export-optimizer';
import { navList, socialList, INavList, Social } from '../Layout/config';
import { useLockedBody } from 'hooks/useLockedBody';
import { Icon, Button } from 'components/UIkit';
import { useRouter } from 'next/router';
import DiscordIcon from 'public/images/static/social/discord.svg';


interface IHeader {
  dark: boolean;
}
const Header: FC<IHeader> = ({ dark }) => {
  const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [locked, setLocked] = useLockedBody();
  const [fixedHeader, setFixedHeader] = useState(false);
  const router = useRouter();
  const currentRoute = router.asPath;

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
    setLocked(!locked);
  };
  const handleDrawerClose = () => {
    setDrawerOpened(false);
    setLocked(false);
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  }, []);

  useEffect(() => {
    const fixHeader = () => {
      if (window.scrollY > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener('scroll', fixHeader);
    return () => {
      window.removeEventListener('scroll', fixHeader);
    };
  }, [fixedHeader]);

  const darkMode = dark && !drawerOpened && !fixedHeader;
  return (
    <HeaderStyle
      className={`${drawerOpened ? 'open fixed' : ''} ${
        fixedHeader ? 'fixed' : ''
      } ${dark && !drawerOpened ? 'dark' : ''}`}
    >
      <Container css={{ height: '100%' }}>
        <HeaderContent>
          <Logo>
            <Link href="/" onClick={handleDrawerClose} className="logo">
              <ExportedImage
                src={`/images/static/main/${
                  darkMode ? 'logo-white' : 'logo'
                }.svg`}
                alt="AimStack"
                width="156"
                height="37"
                className="logo-image"
              />
            </Link>
          </Logo>
          <HeaderNav>
            <div className="nav-inner">
              <ul className="nav-list">
                {navList.map(({ to, title, external, badge }: INavList) => (
                  <li key={to}>
                    <Link
                      onClick={handleDrawerClose}
                      href={to}
                      target={external ? '_blank' : '_self'}
                      className={currentRoute.includes(to) ? 'active' : ''}
                    >
                      <span className="text">{title}</span>
                      {!!badge && <Badge>{badge}</Badge>}
                    </Link>
                  </li>
                ))}
              </ul>
              <HeaderButton
                css={{
                  display: 'none',
                  '@bp1': { display: 'block', padding: '$5' },
                }}
              >
                <Button
                  className="community-btn"
                  variant="community"
                  as="a"
                  size={2}
                  href="https://community.aimstack.io"
                >
                  <ButtonContent>
                    <ExportedImage
                      src={DiscordIcon}
                      alt={'Discord'}
                      width={24}
                      height={24}
                    />
                    Join Community
                  </ButtonContent>
                </Button>
              </HeaderButton>
              <HeaderButton
                css={{
                  display: 'none',
                  '@bp1': { display: 'block', padding: '$5' },
                }}
              >
                <GitHubButton
                  href="https://github.com/aimhubio/aim"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star aimhubio/aim on GitHub"
                  data-text="Star"
                />
              </HeaderButton>
            </div>
            <MobileSocial>
              {socialList.map(({ name, icon, url }: Social) => (
                <li key={name} onClick={() => {}}>
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
            </MobileSocial>
          </HeaderNav>
          <HeaderButton
            className="desktop-btn"
            css={{ flex: '1', '@bp1': { display: 'none' } }}
          >
            <Button
              css={{ float: 'right'}}
              className="community-btn"
              variant="community"
              as="a"
              size={2}
              href="https://community.aimstack.io"
            >
              <ButtonContent>
                <ExportedImage
                  src={DiscordIcon}
                  alt={'Discord'}
                  width={24}
                  height={24}
                />
                Join Community
              </ButtonContent>
            </Button>
          </HeaderButton>
          <HeaderButton
            className="desktop-btn"
            css={{ flex: '1', '@bp1': { display: 'none' } }}
          >
            <GitHubButton
              href="https://github.com/aimhubio/aim"
              data-size="large"
              data-show-count="true"
              aria-label="Star aimhubio/aim on GitHub"
              data-text="Star"
            />
          </HeaderButton>
          <ButtonMenu
            css={{ marginLeft: 'auto', padding: '$3' }}
            type="button"
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <Icon
              color={darkMode ? 'white' : 'black'}
              name={drawerOpened ? 'close' : 'burger'}
              size={20}
            />
          </ButtonMenu>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
