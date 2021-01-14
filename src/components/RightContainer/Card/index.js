import React from 'react'
import { ProfileCard, ImageHolder,Container,Label,Paragraph, NextButton } from '../../Components.style'
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

export default function Card() {
    return (
      <ProfileCard>
        <ImageHolder />
        <Container height="60%" width="60%" align="center">
          <Label size="1.2rem">Shalom Chioma</Label>
          <Label size=".9rem" color="#262A41" opacity="0.69">
            <i>9278 new road, kilcoole, waterford</i>
            <Container
              display="flex"
              width="100%"
              align="center"
              opacity="0.6"
            >
              <AiOutlineMail />
              <Paragraph size=".9rem" weight="250" space=".3rem">
                brad.gibson@example.com
              </Paragraph>
              <BiPhoneCall />
              <Paragraph size=".9rem" weight="300" opacity="1" space=".3rem">
                011-962-7516
              </Paragraph>
            </Container>
          </Label>
        </Container>

        <NextButton className="users-button" primary>
          <FaArrowRight />
        </NextButton>
      </ProfileCard>
    );
}
