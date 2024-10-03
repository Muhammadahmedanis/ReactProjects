import React from "react";
import styled from "styled-components";
function Section({title, description, backgroundImage, leftBtnText, rightBtnText}){
    return(
        <Warp $bgimage={backgroundImage}>
            <ItemText>
                <h1 className="font-extrabold text-4xl">{title}</h1>
                <p className="font-semibold text-xl">{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {
                        rightBtnText &&  
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Warp>
    )
}
export default Section

const Warp = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${ ({$bgimage}) => `url('/images/${$bgimage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center !important;
`
const ItemText = styled.div`
    padding-top: 15vh !important;
    text-align: center !important;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px !important;
    @media(max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: upperCase;
    font-size: 14px;
    font-weight: 550;
    cursor: pointer;
    margin: 7px !important;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    margin-top: 20px !important;
    height: 40px;
    width: 100%;
    overflow: hidden;
    animation: animateDown infinite 1s;
`
const Buttons = styled.div`
`