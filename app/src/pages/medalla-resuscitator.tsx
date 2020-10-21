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
      title={'POAP ✈️ | 🚑️ Medalla Resuscitators'}
      description={'An unexpected bug on the Medalla testnet kept the network at peril.'}
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['resuscitator']} migrated />
          <Claim event={events['resuscitator']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
