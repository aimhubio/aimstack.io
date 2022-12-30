import { useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';
import Link from 'next/link';
import {
  HeaderStyle,
  HeaderContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial,
} from './Header.style';
import { Container } from 'styles/foundations';
import Image from 'next/image';
import { navList, socialList, INavList, ISocialList } from '../Layout/config';
import { useLockedBody } from 'hooks/useLockedBody';
import { Icon } from 'components/UIkit';

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
  const [locked, setLocked] = useLockedBody();
  const [fixedHeader, setFixedHeader] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
    setLocked(!locked);
  };
  const handleDrawerClose = () => {
    setDrawerOpened(false);
    setLocked(false);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const fixed = scrollY <= lastScrollY && scrollY > 620;
      const mouseWheel = (scrollY - lastScrollY) < -10 || (scrollY - lastScrollY) > 10
      if (fixed !== fixedHeader && mouseWheel) {
        setFixedHeader(!fixedHeader);
      }
      lastScrollY = scrollY > 10 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection, {passive: true}); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [fixedHeader]);

  return (
    <HeaderStyle
      className={`${drawerOpened ? 'open fixed' : ''} ${fixedHeader ? 'fixed animated' : ''}`}
    >
      <Container css={{ height: '100%' }}>
        <HeaderContent>
          <Logo>
            <Link href="/" className="logo">
              <Image
                src="/images/static/main/logo.svg"
                alt="AimStack"
                width="156"
                height="37"
              />
            </Link>
          </Logo>
          <HeaderNav>
            <div className="nav-inner">
              <ul className="nav-list">
                {navList.map(({ to, title, external }: INavList) => {
                  return (
                    <li key={to}>
                      <Link
                        onClick={handleDrawerClose}
                        href={to}
                        target={external ? '_blank' : '_self'}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <HeaderButton
                css={{ display: 'none', '@bp1': { display: 'block' } }}
              >
                <GitHubButton
                  href="https://github.com/aimhubio/aim"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star aimhubio/aim on GitHub"
                  data-text='Star'
                />
              </HeaderButton>
            </div>
            <MobileSocial>
              {socialList.map(({ icon, url }: ISocialList) => {
                return (
                  <li key={icon} onClick={() => {}}>
                    <a
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={icon}
                    >
                      <Icon name={icon} />
                    </a>
                  </li>
                );
              })}
            </MobileSocial>
          </HeaderNav>
          <HeaderButton
            className="desktop-btn"
            css={{ flex: '1', '@bp1': { display: 'none' } }}
          >
            <GitHubButton
              href="https://github.com/aimhubio/aim"
              data-size="large"
              data-show-count="true"
              aria-label="Star aimhubio/aim on GitHub"
              data-text='Star'
            />
          </HeaderButton>
          <ButtonMenu
            css={{ marginLeft: 'auto', padding: '$3' }}
            type="button"
            onClick={handleDrawerToggle}
            aria-label='menu'
          >
            <Icon name={drawerOpened ? 'close' : 'burger'} size={20} />
          </ButtonMenu>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
