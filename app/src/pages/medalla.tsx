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

const Medalla = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🎖 Medalla Validators'}
      description={'Celebrate validators of the Eth2.0 multiclient testnet Medalla'}
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['medalla']} />
          <Claim event={events['medalla']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Medalla;
