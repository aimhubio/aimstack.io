import React, { FC, ReactNode } from 'react';
import { LayoutStyle, Wrapper, Content } from './Layout.style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Inter } from '@next/font/google';

interface ILayout {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const Layout: FC<ILayout> = ({ children }) => {
  const router = useRouter();
  const home = router?.pathname === '/';
  const admin = /\/admin/.test(router?.pathname);
  const blog = /\/blog|\/category/.test(router?.pathname);
  const currentPath = router.route;
  const subpackage = currentPath === '/[slug]';

  return (
    <LayoutStyle className={inter.className}>
      {/*{(!blog && !subpackage) && (*/}
      {/*  <Image*/}
      {/*    className='bg-top'*/}
      {/*    layout='fill'*/}
      {/*    objectFit={`${home ? 'contain' : 'fill'}`}*/}
      {/*    objectPosition='top'*/}
      {/*    src={'/images/static/main/main-bg.png'}*/}
      {/*    priority*/}
      {/*    alt={''}*/}
      {/*  />*/}
      {/*)}*/}
      {admin ? (
        children
      ) : (
        <Wrapper>
          <Header dark={subpackage} />
          <Content>{children}</Content>
          <Footer />
        </Wrapper>
      )}

      {home && (
        <Image
          className="bg-bottom"
          width={2000}
          height={3000}
          objectFit="contain"
          objectPosition="center -240px"
          src={'/images/static/main/lines-bg.png'}
          alt={''}
        />
      )}
    </LayoutStyle>
  );
};

export default Layout;
