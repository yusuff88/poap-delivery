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

const MoonCatKeyVoter = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🐱 MoonCatKeyVoter'}
      description={
        'This badge certifies that you have interacted with the MoonCatRescue or Wrapped MoonCatRescue smart contract and participated in the first MoonCatRescue community vote.'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['moonCatKeyVoter']} />
          <Claim event={events['moonCatKeyVoter']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default MoonCatKeyVoter;