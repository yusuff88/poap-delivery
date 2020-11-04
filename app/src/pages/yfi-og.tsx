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

const YFIOG = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🏓 I Played 4 YFI'}
      description={
        'This badge certifies that you were among the original elite that helped launch the yearn.finance protocol'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['yfiOGs']} />
          <Claim event={events['yfiOGs']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default YFIOG;
