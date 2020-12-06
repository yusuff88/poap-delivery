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
      title={'POAP ✈️ | 🌳 False Start Lumberjackers'}
      description={
        'WhalerDAO released tree.finance twice on Friday November 20, 2020. This POAP is to commemorate the valiant lumberjacks who deposited assets into the contracts and harvested the first $TREE token.'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['lumberjackers']} />
          <Claim event={events['lumberjackers']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default Yam;
