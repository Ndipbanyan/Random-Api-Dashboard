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

export const Container = styled.div.attrs((props) => ({
  width: props.width || "50%",
  height: props.height || "100%",
  background: props.background || "none",
  display: props.display ,
  size:props.size||"none"
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display:${props => props.display};
  margin-right:${props=>props.size};
  /* border: 1px solid; */
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
  /* background: blue; */
  width: 80%;
  height: 90%;
  margin: 3rem auto;
  color: #262A41;
`;
export const LeftWrapper = styled(Wrapper)`
  margin: 12rem 0 0 6rem;
  height: 50%;
  color:#fff;
`;
export const Label = styled.h1.attrs((props) => ({
  size: props.size || "2rem",
  color: props.color || "#262A41",
  space: props.space || "0rem"
}))`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.space};
`;
export const Heading = styled.span.attrs((props) => ({
  size: props.size || "2rem",
  weight:props.weight||"100",
  color: props.color || "#262A41",
}))`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color}
`;
export const Paragraph = styled.p.attrs((props) => ({
  size: props.size || "2rem",
  weight: props.weight || "100",
  color: props.color || "#262A41",
}))`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: 0.8rem;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background: #3c3f54;
  width: ${(props) => (props.primary ? "30rem" : "50px")};
  height: ${(props) => (props.primary ? "3.5rem" : "50px")};
  margin-top: ${(props) => (props.primary ? "2rem" : "1rem")};
  font-size: ${(props) => (props.primary ? "1.2rem" : ".5rem")};
  border-radius: ${(props) => (props.primary ? "1rem" : "20px")};
  color: #fff;
`;
export const InputField = styled.input`
  margin-left: 1.4rem;
  height: ${(props) => (props.primary ? "3rem" : "1rem")};
  width: ${(props) => (props.primary ? "26rem" : "50px")};
  font-size: ${(props) => (props.primary ? "1rem" : ".5rem")};
  background: #3c3f54;
  outline: none;
  border: none;
  color: #fff;
`;
export const Buttons = styled.button.attrs((props) => ({
  size: props.size || "2rem",
  weight: props.weight || "100",
  color: props.color || "#262A41",
  font:props.font||"16px"
}))`
width:${(props) => props.size};
height:${(props) => props.size};
margin-top:2rem;
margin-right:3rem;
background:${(props) => props.color};
font-size:${props=>props.font};
border-radius:1rem;
border:none;
color:#fff;
text-align:center;
`;

