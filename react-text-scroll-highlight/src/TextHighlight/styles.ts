import styled, { css } from 'styled-components';

interface IContainterHighlight {
  isVisible: boolean;
  alreadySeen: boolean;
}

export const Container = styled.span<IContainterHighlight>`
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  
  span {
    background-image: linear-gradient(#ffd900, #ffd900);
    background-repeat: no-repeat;
    background-position: 0% 100%;
    transition: background-size .5s ;
    background-size: 0%;
  }

  ${props => (props.isVisible || props.alreadySeen) && css`
    span {
      background-size: 100%;
    }
  `}
`;

// const highlight = keyframes`
//   0% {
//     background-size:0%;
//   }

//   50% {
//     background-size: 100%;
//   }
// `


// export const Container = styled.div<IContainterHighlight>`
//   background-color: green;
//   display: inline-block;
//   font-size: inherit;
//   font-weight: inherit;
//   letter-spacing: inherit;

//   span {
//     background-image: linear-gradient(#ffd900, #ffd900);
//     background-repeat: no-repeat;
//     background-position: 0% 100%;
//     transition: background-size .5s ;
//     animation: ${highlight} 2s ease;
//   }
// `;

/* .highlight {

  background-image: linear-gradient(90deg,rgba(255,255,255,0) 50%,var(--text-highlight-color,#fe9) 0);
  background-size: 200%;
  background-position: 0;
  transition: background-position .8s;
}  

span .highlight.highlighted {
    background-position: -100%;
} */