import React,{useState,useEffect} from 'react'
import { MainContainer } from '../Components.style'
import Left from '../LeftContainer/index'
import Right from '../RightContainer/index'



export default function Dashboard() {
     const [query, setQuery] = useState("");
     const [title, setTitle] = useState("All Users");
     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);
     const [startIndex, setStartIndex] = useState(0);
     const [endIndex, setEndIndex] = useState(3);
     const [currentUsers, setCurrentUsers] = useState([]);
     const [nextButton, setNextButton] = useState(true);
     const [prevButton, setPrevButton] = useState(false);

     const fetchData = async (query) => {
       await fetch(`https://randomuser.me/api/?results=50&gender=${query}`)
         .then((response) => response.json())
         .then((data) => {
           const { results } = data;
           setUsers(results);
           setCurrentUsers(results.slice(startIndex, endIndex));
           setLoading(false);
         })
         .catch((err) => {
           console.log(err);
         });
     };
     useEffect(() => {
       fetchData(query);
     }, [query]);
     const next = () => {
       setPrevButton(true);
       if (endIndex === users.length) {
         setNextButton(false);
         setStartIndex(startIndex - 3);
         setEndIndex(endIndex - 3);
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
         setStartIndex(startIndex + 3);
         setEndIndex(endIndex + 3);
         setPrevButton(false);
       } else {
         setStartIndex(startIndex - 3);
         setEndIndex(endIndex - 3);
       }
       setCurrentUsers(users.slice(startIndex, endIndex));
       setLoading(false);
     };
    return (
        <MainContainer>
            <Left
            setTitle={setTitle}
            setQuery={setQuery}
            /> 
            <Right
            loading={loading}
            currentUsers={currentUsers}
            previous={previous}
            next={next}
            nextButton={nextButton}
            prevButton={prevButton}
            title={title}
            />
        </MainContainer>
    )
}
