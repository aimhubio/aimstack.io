import dynamic from 'next/dynamic';
import config from 'cms/config';
import { Flex } from 'styles/foundations';

const Loading = () => {
  return (
    <Flex css={{height: '100vh'}} direction='column' justify='center' align='center'>
      <p>Loading...</p>
    </Flex>
  )
}

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      // @ts-ignore
      cms.init({ config });
    }) as any,
  { ssr: false, loading: () => <Loading /> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
