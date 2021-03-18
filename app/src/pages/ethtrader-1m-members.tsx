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

// TODO: ADD icon
const Ethtrader1MMembers = () => {
    return (
        <PageWrapper
            title={'POAP ✈️ | 📰 r/ethtrader 1 Million Members'}
            description={
                'A community-created badge celebrating the 1 million member milestone for r/ethtrader, awarded to users that had previously registered their address for the subreddit’s community token $DONUT'
            }
        >
            <MainLayout>
                <Container>
                    <ClaimHeader event={events['ethtrader1MMembers']} />
                    <Claim event={events['ethtrader1MMembers']} />
                </Container>
            </MainLayout>
        </PageWrapper>
    );
};

export default Ethtrader1MMembers;