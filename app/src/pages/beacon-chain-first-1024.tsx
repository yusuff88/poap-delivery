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

const BeaconChainFirst1024 = () => {
    return (
        <PageWrapper
            title={'POAP ✈️ | ⧫ Beacon Chain First 1024 Depositors and Proposers'}
            description={
                'The Beacon Chain First 1024 POAP is awarded to each unique address that was in the first 1024 beacon chain deposits and the first 1024 block proposals on the Ethereum 2 Beacon Chain that launched December 1, 2020.'
            }
        >
            <MainLayout>
                <Container>
                    <ClaimHeader event={events['beaconChainFirst1024']} />
                    <Claim event={events['beaconChainFirst1024']} />
                </Container>
            </MainLayout>
        </PageWrapper>
    );
};

export default BeaconChainFirst1024;