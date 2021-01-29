import React from "react";
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



export  default function Right({loading,currentUsers,previous,prevButton, nextButton, next,title}) {
 

  return (
    <RightContainer>
      <Wrapper>
        <Label>{title}</Label>
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
    </RightContainer >
  );
}
