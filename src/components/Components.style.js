import styled from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 20px 20px 14px 0px;
  background: #262a41;
  opacity: 1;
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  background: yellowgreen;
  border:1px solid;
  opacity: 1;
`;
export const RightContainer = styled(Container)`
  display: flex;
  width: 50%;
  height: 100%;
  background: #f7f7ff;
  border: 1px solid #707070;
  border-radius: 28px;
  opacity: 1;
`;

export const Wrapper = styled.div`
/* background:blue; */
width:80%;
height:90%;
margin:3rem auto;
`
export const Label = styled.label.attrs((props) => ({
  size: props.size || "2rem",
  color: props.color || "#262A41",
}))`
  font-size: ${(props) => props.size};
  
`;
export const Heading = styled.span.attrs((props) => ({
  size: props.size || "2rem",
  weight:props.weight||"100",
  color: props.color || "#262A41",
}))`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;