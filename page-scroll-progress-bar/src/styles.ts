import styled from 'styled-components';

interface IProgress {
  scroll: string;
}

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Progress = styled.div<IProgress>`
  position:  fixed;
  top: 0;
  left: 0;
  background:  linear-gradient(
    to right,
    blue ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  5px;
  z-index:  3;
`;
