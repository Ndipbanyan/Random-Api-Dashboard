import React, { useState, useEffect } from "react";
import {
  RightContainer,
  Wrapper,
  Label,
  Paragraph,
  InputFieldWrapper,
  InputField,
  Download,
  Pages,
} from "../Components.style";
import { RiSearchLine } from "react-icons/ri";
import { IoIosCloudDownload } from "react-icons/io";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import Card from "./Card/index";

const url = `https://randomuser.me/api/?results=30`;

export default function Container() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex,setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [currentUsers, setCurrentUsers] = useState([]);
  const[nextButton, setNextButton]=useState(true)
  const[prevButton, setPrevButton]=useState(false)

 
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
       const {results} =data
        setUsers(results);
        setCurrentUsers(results.slice(startIndex, endIndex));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const next = () => {
   setPrevButton(true)
   if (endIndex === 30) {
     setNextButton(false);
     setStartIndex(startIndex-3);
     setEndIndex(endIndex-3);
   } else {
     setStartIndex(startIndex + 3);
     setEndIndex(endIndex + 3);
   }
   setCurrentUsers(users.slice(startIndex, endIndex));
   setLoading(false);
   console.log(startIndex);
   console.log(endIndex);

   console.log(currentUsers);
 };
  const previous = () => {
   setNextButton(true);
   if (startIndex === 0) {
     setStartIndex(startIndex+3);
     setEndIndex(endIndex+3);
     setPrevButton(false);
   } else {
     setStartIndex(startIndex - 3);
     setEndIndex(endIndex - 3);
     
   }
   setCurrentUsers(users.slice(startIndex, endIndex));
   setLoading(false);
   console.log(startIndex);
   console.log(endIndex);
 };

  return (
    <RightContainer>
      <Wrapper>
        <Label>Female Users</Label>
        <Paragraph opacity="1">Filter by</Paragraph>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <InputFieldWrapper
            width="15rem"
            height="2.3rem"
            background="#0000000D"
            color="#00000029"
          >
            <RiSearchLine />
            <InputField placeholder="Find in list" />
          </InputFieldWrapper>
          <InputFieldWrapper
            width="7rem"
            height="2.3rem"
            background="#0000000D"
            color="#00000029"
          ></InputFieldWrapper>
          <div style={{ display: "flex", alignItems: "center", width: "8rem" }}>
            <InputFieldWrapper
              width=".8rem"
              height="1rem"
              background="#30BBB5"
              color="#00000029"
            ></InputFieldWrapper>
            <Paragraph size=".8rem" weight="400" space=".5rem">
              Show country
            </Paragraph>
          </div>
        </div>

        {}
        <Card
          key={users.name}
          users={currentUsers}
          loading={loading}
          currentUsers={currentUsers}
        />

        <Download>
          <IoIosCloudDownload />
          <Paragraph
            color="fff"
            size=".8rem"
            opacity="1"
            weight="600"
            space=".8rem"
          >
            Download results
          </Paragraph>
        </Download>

        <Pages
          primary
          onClick={previous}
          style={{ display: prevButton ? "inline-block" : "none" }}
        >
          <FaLessThan />
        </Pages>
        <Pages
          onClick={next}
          style={{ display: nextButton ? "inline-block" : "none" }}
        >
          <FaGreaterThan />
        </Pages>
      </Wrapper>
    </RightContainer>
  );
}
