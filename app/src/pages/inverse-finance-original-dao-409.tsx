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

const InverseFinanceOriginalDao409 = () => {
    return (
        <PageWrapper
            title={'POAP ✈️ | 💰 Inverse Finance Original DAO 409'}
            description={
                'This badge certifies that you were among the original group of 409 INVaders that helped establish the Inverse Finance DAO.'
            }
        >
            <MainLayout>
                <Container>
                    <ClaimHeader event={events['inverseFinanceOriginalDao409']} />
                    <Claim event={events['inverseFinanceOriginalDao409']} />
                </Container>
            </MainLayout>
        </PageWrapper>
    );
};

export default InverseFinanceOriginalDao409;