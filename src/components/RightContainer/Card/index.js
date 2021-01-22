import React from 'react'
import { ProfileCard, ImageHolder,Container,Label,Paragraph, NextButton,Loader} from '../../Components.style'
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Profile from "../../Profile"

export default function Card({ users, loading, currentUsers }) {
  if (loading || currentUsers.length===0) {
    return (
      <div style={{ margin: "10rem auto", justifyItems:"center", width:"10%" }}>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      {users.map((user) => {
        const { name, location, email, phone, picture } = user;
        return (
          <ProfileCard key={email}>
            <ImageHolder src={picture.large} alt={name.first} />
            <Container height="60%" width="65%" align="center">
              <Label size="1.2rem">{name.first + " " + name.last}</Label>
              <Label size=".9rem" color="#262A41" opacity="0.69">
                <i>{location.street.number + ", " + location.street.name}</i>
                <Container
                  display="flex"
                  width="100%"
                  align="center"
                  opacity="0.6"
                >
                  <AiOutlineMail />
                  <Paragraph size=".9rem" weight="250" space=".3rem">
                    {email}
                  </Paragraph>
                  <BiPhoneCall />
                  <Paragraph
                    size=".9rem"
                    weight="300"
                    opacity="1"
                    space=".3rem"
                    background="ye"
                  >
                    {phone}
                  </Paragraph>
                </Container>
              </Label>
            </Container>

            <NextButton className="users-button" primary onClick={<Profile/>}>
              <FaArrowRight />
            </NextButton>
          </ProfileCard>
        );
      })}
    </div>
  );
}
