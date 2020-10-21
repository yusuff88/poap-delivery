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

const ProofOfGucci = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | ✨ Proof of Gucci'}
      description={
        'Andre Cronje’s feet deserve only the finest most luxurious handcrafted Italian fashion so the community came up with a great proposal'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['gucci']} migrated />
          <Claim event={events['gucci']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default ProofOfGucci;
