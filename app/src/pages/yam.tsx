import React from 'react';

// Lib
import PageWrapper from 'lib/hoc/PageWrapper';

// Constants
import events from 'lib/constants/events';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Container from 'ui/components/Container';
import ClaimHeader from 'ui/components/ClaimHeader';
import Claim from 'ui/components/claim';

const Yam = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🍠 Yam Heroes'}
      description={
        'YAM, an experiment in fair farming, governance and elasticity, took Ethereum by storm and lived thrilling first 24 hours.'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['yam']} migrated />
          <Claim event={events['yam']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
