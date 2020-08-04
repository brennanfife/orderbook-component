import styled from '@emotion/styled';

export const OrderbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 40vh;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background-color: #121d27;
  border: 1px solid #262d34;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  height: 46px;
  padding: 0 14px;
`;

export const Title = styled.span`
  margin-left: 16px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #262d34;
  background-color: #070e13;
`;

export const Box = styled.div<{ price?: string; size?: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: ${(props) =>
    props.price ? '1 1 30%' : props.size ? '1 1 32%' : '1 1 38%'};
  padding-right: ${(props) => (props.size ? '16px' : '3px')};
  white-space: pre;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Text = styled.span`
  color: #8a939f;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  word-break: normal;
`;

export const ScrollContainer = styled.div`
  overflow: scroll;
  background-color: #070e13;
  height: 100vh;
`;

export const MiddleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0.01rem;
  bottom: 0.01rem;
  border-top: 1px solid #262d34;
  border-bottom: 1px solid #262d34;
  background-color: #070e13;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #070e13;
  border-top: 1px solid #262d34;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: white;
  background-color: black;
`;

export const DarkRed = styled.span`
  color: #924a33;
`;

export const LightRed = styled.span`
  color: #d76843;
`;

export const DarkGreen = styled.span`
  color: #5b8a4b;
`;

export const LightGreen = styled.span`
  color: #89cf69;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 16px;
  color: white;
  &:hover {
    background-color: #121d27;
  }
`;

export const Cell = styled.div<{ price?: string; size?: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 1.8rem;
  background-repeat: no-repeat;
  background-size: 0%;
  text-align: right;
  font-size: 12px;
  white-space: pre;
  padding-right: ${(props) => (props.size ? '16px' : '3px')};
  flex: ${(props) =>
    props.price ? '1 1 30%' : props.size ? '1 1 32%' : '1 1 38%'};
`;

export const Data = styled.div`
  display: inline;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  word-break: normal;
`;

export const Sidebar = styled.div<{ ask?: string; bid?: string }>`
  background-repeat: no-repeat;
  width: 1rem;
  content: '';
  min-height: 100%;
  background-image: ${(props) =>
    props.ask
      ? 'linear-gradient(to left, #924a33 100%, white 0%);'
      : props.bid
      ? 'linear-gradient(to left, #5b8a4b 100%, white 0%)'
      : 'linear-gradient(to left, #121d27 100%, white 0%)'};
  background-size: 0%;
`;
