import React, { FC, ReactNode } from 'react';
import { LayoutStyle, Wrapper, Content } from './Layout.style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { PostHogProvider } from 'providers/posthog';

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
      {admin ? (
        children
      ) : (
        <Wrapper>
          <Header dark={subpackage} />
          <Content>
            <PostHogProvider>
              {children}
            </PostHogProvider>
          </Content>
          <Footer />
        </Wrapper>
      )}
    </LayoutStyle>
  );
};

export default Layout;
