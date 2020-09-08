import React, { FC } from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/core';

// Types
import { AirdropEventData } from 'lib/types';
type ClaimHeaderProps = {
  event: AirdropEventData;
};

const ClaimHeader: FC<ClaimHeaderProps> = ({ event }) => {
  return (
    <Flex
      p={['50px 45px', '50px 45px', '50px 45px', '50px 100px']}
      align={'center'}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box color={'font'} fontFamily={'var(--alt-font)'} fontSize={'xl'}>
        <Heading
          as={'h1'}
          color={'primaryColor'}
          fontFamily={'body'}
          fontWeight={'bold'}
          fontSize={'40px'}
          lineHeight={'80px'}
          textAlign={'center'}
        >
          {event.pageTitle}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: event.pageText }} />
        <Box mb={'10px'} as={'p'}>
          <Link href={event.githubLink} color={'primaryColor'} isExternal>
            View elegible addresses
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default ClaimHeader;
