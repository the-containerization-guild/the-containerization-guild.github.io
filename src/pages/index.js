import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Welcome from '@site/src/components/Welcome'
import WhatHappens from '@site/src/components/WhatHappens'
import About from '@site/src/components/About'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the Guild`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Welcome />
        <WhatHappens />
        <About />
      </main>
    </Layout>
  );
}
