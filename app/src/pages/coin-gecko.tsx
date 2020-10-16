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

const CoinGecko = () => {
  return (
    <PageWrapper
      title={'POAP ✈️ | 🚜 Coin Gecko - Yield Farming'}
      description={
        'Limited edition NFT CoinGecko is releasing together with POAP to commemorate you and your involvement in many of the yield farming projects in the space!'
      }
    >
      <MainLayout>
        <Container>
          <ClaimHeader event={events['coinGecko']} />
          <Claim event={events['coinGecko']} />
        </Container>
      </MainLayout>
    </PageWrapper>
  );
};

export default CoinGecko;
