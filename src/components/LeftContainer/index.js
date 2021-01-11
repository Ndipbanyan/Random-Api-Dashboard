import React from 'react'
import { 
    Container, LeftWrapper, Label, Heading, Paragraph,InputFieldWrapper,InputField,Buttons } from '../Components.style'
import { RiSearchLine } from 'react-icons/ri'
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";






export default function LeftContainer() {
    return (
      <Container>
        <LeftWrapper>
          <Label size="1.5rem" color="#fff">
            <Heading color="#fff">Hello,</Heading>
            Emerald
          </Label>
          <Paragraph color="#fff">
            Welcome to your dashboard, kindly sort through the user base
          </Paragraph>
          <InputFieldWrapper primary>
            <RiSearchLine />
            <InputField placeholder="Find a user" primary />
          </InputFieldWrapper>
          <Label size=".9rem" space="3rem" color="#fff">
            Show Users
          </Label>
          <Container display="flex" width="10rem" height="10rem" >
            <Container
              width="6rem"
              height="4rem"
              
            >
              <Buttons size="4rem" color="#F935A9" font="1.8rem">
                <FaUsers />
              </Buttons>
              <Paragraph color="#fff" weight="400">
                All Users
              </Paragraph>
            </Container>
            <Container
              width="6rem"
              heght="4rem"
            >
              <Buttons size="4rem" color="#30BBB5" font="1.8rem">
                <FaMale />
              </Buttons>
              <Paragraph color="#fff" weight="400">
                Male Users
              </Paragraph>
            </Container>
            <Container width="6rem" height="4rem" >
              <Buttons size="4rem" color="#7946C1" font="1.8rem">
                <FaMale />
              </Buttons>
              <Paragraph color="#fff" weight="400">
                Female Users
              </Paragraph>
            </Container>
          </Container>
        </LeftWrapper>
      </Container>
    );
}
