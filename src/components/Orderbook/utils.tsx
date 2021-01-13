import { v4 as uuidv4 } from 'uuid';

import { Flex, Box } from '@chakra-ui/react';

export function getPercentage(
  cumulative: string,
  cumulativeType: string,
  baseCumulative: number
) {
  let fillPercentage = 0;
  if (cumulativeType === 'ask')
    fillPercentage = (parseFloat(cumulative) / baseCumulative) * 100;
  else if (cumulativeType === 'bid')
    fillPercentage = (parseFloat(cumulative) / baseCumulative) * 100;
  else {
    fillPercentage = 50;
  }

  fillPercentage = Math.min(fillPercentage, 100);
  fillPercentage = Math.max(fillPercentage, 0);
  return fillPercentage * 10; //to lengthen
}

function Data(props: any) {
  return (
    <Box
      display="inline"
      fontSize="11px"
      fontWeight="400"
      lineHeight="1.5"
      textAlign="left"
      wordBreak="normal"
      {...props}
    >
      {props.children}
    </Box>
  );
}

function Row(props: any) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      height="16px"
      color="white"
      _hover={{
        backgroundColor: '#121d27',
      }}
      {...props}
    >
      {props.children}
    </Flex>
  );
}

function Sidebar(props: any) {
  return (
    <Flex
      backgroundRepeat="no-repeat"
      w="1rem"
      content=""
      minHeight="100%"
      backgroundSize="0%"
      bgGradient={
        props.ask
          ? 'linear(to left, red.700 100%, white 0%);'
          : props.bid
          ? 'linear(to left, green.700 100%, white 0%)'
          : 'linear(to left, black 100%, white 0%)'
      }
      {...props}
    >
      {props.children}
    </Flex>
  );
}

function Cell(props: any) {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      ml="1.8rem"
      backgroundRepeat="no-repeat"
      backgroundSize="0%"
      textAlign="right"
      fontSize="12px"
      whiteSpace="pre"
      pr={props.size ? '16px' : '3px'}
      flex={props.price ? '1 1 30%' : props.size ? '1 1 32%' : '1 1 38%'}
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export function getZeros(color: string) {
  let data = [];
  let length = 50;

  for (let i = 0; i < length; i++) {
    data.push(
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: '50% 100%',
          }}
        />
        <Cell>
          <Data>{'0.0000'}</Data>
        </Cell>
        <Cell price="true">
          <Data>
            {color === 'green' ? (
              <Box color="green.700" display="inline-block">
                {'0000.'}
                <Box color="green.300" display="inline-block">
                  {'00'}
                </Box>
              </Box>
            ) : (
              <Box color="red.700" display="inline-block">
                {'0000.'}
                <Box color="red.300" display="inline-block">
                  {'00'}
                </Box>
              </Box>
            )}
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  }
  return data;
}

export function getAsks(asks: number[][], baseCumulative: number) {
  const currentAsks = asks.map((ask: number[]) => {
    const decimal = ask[0].toString().split('.')[1];
    const length = decimal && decimal.length > 2 ? decimal.length : 2;
    const fixedNumber = Number(ask[0].toString()).toFixed(length);
    const price: string[] = fixedNumber.split('.');
    const percentage = getPercentage(ask[1].toString(), 'ask', baseCumulative);

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: percentage + '% 100%',
          }}
          ask="true"
        />

        <Cell>
          <Data>{ask[1].toFixed(4)}</Data>
        </Cell>

        <Cell price="true">
          <Data>
            <Box color="red.700" display="inline-block">
              {`${price[0]}.`}
              <Box color="red.300" display="inline-block">
                {price[1]}
              </Box>
            </Box>
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  });
  return currentAsks.reverse();
}

export function getBids(bids: number[][], baseCumulative: number) {
  return bids.map((bid: number[]) => {
    const decimal = bid[0].toString().split('.')[1];
    const length = decimal && decimal.length > 2 ? decimal.length : 2;
    const fixedNumber = Number(bid[0].toString()).toFixed(length);
    const price: string[] = fixedNumber.split('.');
    const percentage = getPercentage(bid[1].toString(), 'bid', baseCumulative);

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: percentage + '% 100%',
          }}
          bid="true"
        />
        <Cell>
          <Data>{bid[1].toFixed(4)}</Data>
        </Cell>

        <Cell price="true">
          <Data>
            <Box color="green.700" display="inline-block">
              {`${price[0]}.`}
              <Box color="green.300" display="inline-block">
                {price[1]}
              </Box>
            </Box>
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  });
}
