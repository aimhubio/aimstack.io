import { FC, useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';
import Link from 'next/link';
import {
  HeaderStyle,
  HeaderContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial, Badge
} from './Header.style';
import { Container } from 'styles/foundations';
import Image from 'next/image';
import { navList, socialList, INavList, ISocialList } from '../Layout/config';
import { useLockedBody } from 'hooks/useLockedBody';
import { Icon } from 'components/UIkit';
import { useRouter } from 'next/router';

interface IHeader {
  dark: boolean
}
const Header: FC<IHeader> = ({dark}) => {
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
    const fixedHeader = () => {
      if (window.scrollY > 0) {
        setFixedHeader(true)
      } else {
        setFixedHeader(false)
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [fixedHeader]);


  const darkMode = dark && !drawerOpened && !fixedHeader
  return (
    <HeaderStyle
      className={`${drawerOpened ? 'open fixed' : ''} ${fixedHeader ? 'fixed' : ''} ${dark && !drawerOpened ? 'dark' : ''}`}
    >
      <Container css={{ height: '100%' }}>
        <HeaderContent>
          <Logo>
            <Link href="/" onClick={handleDrawerClose} className="logo">
              <Image
                src={`/images/static/main/${darkMode ? 'logo-white' : 'logo'}.svg`}
                alt="AimStack"
                width="156"
                height="37"
                className='logo-image'
              />
            </Link>
          </Logo>
          <HeaderNav>
            <div className="nav-inner">
              <ul className="nav-list">
                {navList.map(({ to, title, external, badge }: INavList) => {
                  return (
                    <li key={to}>
                      <Link
                        onClick={handleDrawerClose}
                        href={to}
                        target={external ? '_blank' : '_self'}
                        className={currentRoute.includes(to) ? 'active' : ''}
                      >
                        <span className='text'>
                          {title}
                        </span>
                        {!!badge && <Badge>{badge}</Badge>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <HeaderButton
                css={{ display: 'none', '@bp1': { display: 'block', padding: '$5' } }}
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
            <Icon color={darkMode ? 'white' :'black'} name={drawerOpened ? 'close' : 'burger'} size={20} />
          </ButtonMenu>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
