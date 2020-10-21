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

const ProofOfGucciDesign = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | ✨ Proof of Gucci - Design Competition'}
      description={
        'Right after the Proof of Gucci proposal had passed, a design competition was set up. A recognition to all participants!'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['gucciCompetition']} migrated />
          <Claim event={events['gucciCompetition']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default ProofOfGucciDesign;
