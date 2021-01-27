import React, { useState, useEffect } from 'react'
import {
  RightContainer,
  Wrapper,
  Label,
  Paragraph,
  InputFieldWrapper,
  InputField,
  Download,
  Pages
} from "../Components.style";
import { RiSearchLine } from "react-icons/ri";
import { IoIosCloudDownload } from "react-icons/io";
import { FaLessThan,FaGreaterThan} from "react-icons/fa";
import Card from './Card/index'

const url = `https://randomuser.me/api/?results=30`;

export default function Container() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [startIndex] = useState(0)
  const [endIndex] = useState(3)
  const [currentUsers, setCurrentUsers]=useState([])
  
  const   fetchUsers = async () => {
    try {
      const response = await fetch(url);
      setLoading(false)
      const data = await response.json();
      const {results}=data
      setUsers(results)
      setCurrentUsers(results.slice(startIndex, endIndex));
      // console.log(users);
      // console.log(currentUsers);
    } catch(error){
      console.log(error)
    }
    
  }
  
  const next = () => {
    // setStartIndex(endIndex);
    // setEndIndex(startIndex + 3);
    // setCurrentPage(currentPage + 1);
    // setCurrentUsers(users.slice(startIndex, endIndex));
  };
  useEffect(() => {
    fetchUsers()
  }, [])

  
  
  console.log(users);
  // console.log(currentUsers);
    
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
            <div
              style={{ display: "flex", alignItems: "center", width: "8rem" }}
            >
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
            {console.log(currentUsers)}
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
          <Pages primary>
            <FaLessThan />
          </Pages>
          <Pages onClick={next}>
            <FaGreaterThan />
          </Pages>
        </Wrapper>
      </RightContainer>
    );
}
