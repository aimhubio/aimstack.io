import React, { FC, ReactNode } from 'react';
import { LayoutStyle, Wrapper, Content } from './Layout.style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const router = useRouter();
  const admin = router?.pathname.includes('/admin');
  const home = router?.pathname === '/';
  const blog = router?.pathname.includes('/blog');
  const currentPath = router.route;
  const subpackage = currentPath === '/[slug]'

  return (
    <LayoutStyle>
      {(!blog && !subpackage) && (
        <Image
          className='bg-top'
          layout='fill'
          objectFit={`${home ? 'contain' : 'fill'}`}
          objectPosition='top'
          src={'/images/static/main/main-bg.png'}
          priority
          alt={''}
        />
      )}

      {
        admin ?
          children :
          <Wrapper>
            <Header dark={subpackage} />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
      }


      {home && (
        <Image
          className='bg-bottom'
          width={2000}
          height={3000}
          objectFit='contain'
          objectPosition='center -240px'
          src={'/images/static/main/lines-bg.png'}
          alt={''}
        />
      )}
    </LayoutStyle>
  );
};

export default Layout;
