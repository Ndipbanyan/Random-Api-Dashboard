import React from 'react'
import { MainContainer } from '../Components.style'
import Left from '../LeftContainer/index'
import Right from '../RightContainer/index'

export default function Wrapper() {
    return (
        <MainContainer>
            <Left /> 
            <Right/>
        </MainContainer>
    )
}
