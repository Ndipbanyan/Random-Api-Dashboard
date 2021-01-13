import React from 'react'
import {
  RightContainer,
  Wrapper,
  Label,
  Paragraph,
  InputFieldWrapper,
  InputField,
} from "../Components.style";
import { RiSearchLine } from "react-icons/ri";
import Card from './Card/index'

export default function Container() {
    return (
      <RightContainer>
        <Wrapper>
          <Label>Female Users</Label>
          <Paragraph opacity="1">Filter by</Paragraph>
          <InputFieldWrapper
            width="15rem"
            height="2.3rem"
            background="#0000000D"
            color="#00000029"
          >
            <RiSearchLine />
            <InputField placeholder="Find in list" />
          </InputFieldWrapper>
          {/* <Card/> */}
        </Wrapper>
      </RightContainer>
    );
}
