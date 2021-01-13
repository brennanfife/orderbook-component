import React from 'react';

import { IOrderbook } from './types';
import { getZeros, getAsks, getBids } from './utils';
import styled from '@emotion/styled';
import {
  Flex,
  Box as CBox,
  Button,
  Text as CText,
  ButtonGroup,
} from '@chakra-ui/react';

const Box = styled(Flex)<{ price?: string; size?: string }>`
  justify-content: flex-end;
  align-items: center;
  flex: ${(props) =>
    props.price ? '1 1 30%' : props.size ? '1 1 32%' : '1 1 38%'};
  padding-right: ${(props) => (props.size ? '16px' : '3px')};
  white-space: pre;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Text = styled(CText)`
  color: #8a939f;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  word-break: normal;
`;

export default function Orderbook({
  asks,
  bids,
  spread,
  aggregation,
  askCumulative,
  bidCumulative,
  incrementAggregation,
  decrementAggregation,
}: IOrderbook) {
  return (
    <Flex flexDirection="column" maxW="300px" h="40h">
      <Flex
        alignItems="center"
        color="white"
        backgroundColor="#121d27"
        border="1px solid #262d34"
        flexShrink={0}
        fontSize="12px"
        fontWeight="700"
        h="46px"
        p="0 14px"
      >
        <CText ml="1rem">Order Book</CText>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="#070e13"
        borderBottom="1px solid #262d34"
      >
        <Box>
          <Text>Market Size</Text>
        </Box>
        <Box price="true">
          <Text>Price (USD)</Text>
        </Box>
        <Box size="true">
          <Text>My Size</Text>
        </Box>
      </Flex>
      <CBox overflow="scroll" backgroundColor="#070e13" h="100vh">
        <>{asks ? getAsks(asks, askCumulative) : getZeros('red')}</>
        <Flex
          justifyContent="center"
          alignItems="center"
          position="sticky"
          top="0.01rem"
          bottom="0.01rem"
          borderTop="1px solid #262d34"
          borderBottom="1px solid #262d34"
          backgroundColor="#070e13"
        >
          <Box>
            <Text>USD Spread</Text>
          </Box>
          <Box price="true">
            <Text>{spread ? spread.toFixed(2) : '-'}</Text>
          </Box>
          <Box size="true">
            <Text />
          </Box>
        </Flex>
        <>{bids ? getBids(bids, bidCumulative) : getZeros('green')}</>
      </CBox>
      <Flex
        justifyContent="center"
        alignItems="center"
        color="white"
        backgroundColor="#070e13"
        borderTop="1px solid #262d34"
      >
        <Box>
          <Text>Aggregation</Text>
        </Box>
        <Box price="true">
          <Text>{aggregation ? aggregation : '-'}</Text>
        </Box>
        <Box size="true">
          <ButtonGroup size="xs">
            <Button
              isDisabled={aggregation === '0.01'}
              onClick={decrementAggregation}
            >
              -
            </Button>
            <Button
              isDisabled={aggregation === '1.00'}
              onClick={incrementAggregation}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Flex>
  );
}
