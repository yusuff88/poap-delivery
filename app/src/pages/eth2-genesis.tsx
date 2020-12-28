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

const Eth2Genesis = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | ⧫ Beacon Chain Genesis Depositor'}
      description={
        'The Beacon Chain Genesis Depositor POAP is awarded to each unique address that submitted a 32 Ether deposit in the beacon chain genesis contract before November 24.'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['eth2Genesis']} />
          <Claim event={events['eth2Genesis']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Eth2Genesis;
