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

const AAVEV2Pioneers = () => {
    return (
        <PageWrapper
            title={'POAP ✈️ | 👻 AAVE V2 Pioneers'}
            description={
                'This limited NFT rewards the 100 first pioneers of Aave V2 protocol. You\'re the first users of the Seamless finance Era, we\'re proud to have y\'all on our side.'
            }
        >
            <MainLayout>
                <Container>
                    <ClaimHeader event={events['aaveV2Pioneers']} />
                    <Claim event={events['aaveV2Pioneers']} />
                </Container>
            </MainLayout>
        </PageWrapper>
    );
};

export default AAVEV2Pioneers;