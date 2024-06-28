import * as React from 'react';
import Layout from '../components/layout';
import Section01 from '../components/section01/section01';
import Section02 from '../components/section02/Section02';
import Section03 from '../components/section03/section03';
import Section04 from '../components/section04/section04';
import Section05 from '../components/section05/section05';
import Section06 from '../components/section06/section06';


const IndexPage = () => {
    return (
      <Layout>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </Layout>
    );
  };
  
export default IndexPage;
