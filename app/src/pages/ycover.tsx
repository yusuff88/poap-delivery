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

const yCover = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🎨 A New Face For yCover'}
      description={
        "yCover NFT had no face. That's why we launched a contest to find the the best artpiece to be the face of the NFT"
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['yCover']} />
          <Claim event={events['yCover']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default yCover;
