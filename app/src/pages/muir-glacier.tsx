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

const MiurGlacier = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | ❄️ Muir Glacier'}
      description={
        'The Ethereum network went through a scheduled upgrade at block number 9,200,000. A recognition for all participants!'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['muirGlacier']} />
          <Claim event={events['muirGlacier']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default MiurGlacier;
