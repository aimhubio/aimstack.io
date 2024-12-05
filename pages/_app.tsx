import Layout from 'components/Layout/Layout';

import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Directly adding your script content here
    (function () {
      let reb2b = window.reb2b || [];
      window.reb2b = reb2b;
      if (reb2b.invoked) return;
      reb2b.invoked = true;
      reb2b.methods = ["identify", "collect"];
      reb2b.factory = function (method: string) {
        return function () {
          let args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          reb2b.push(args);
          return reb2b;
        };
      };
      for (let i = 0; i < reb2b.methods.length; i++) {
        let key = reb2b.methods[i];
        reb2b[key] = reb2b.factory(key);
      }
      reb2b.load = function (key: string) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
        let first = document.getElementsByTagName("script")[0];
        if (first && first.parentNode) {
          first.parentNode.insertBefore(script, first);
        }
      };
      reb2b.SNIPPET_VERSION = "1.0.1";
      reb2b.load("4N210HE2MG6Z");
    })();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
