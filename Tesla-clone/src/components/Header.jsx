import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";

function Header(){
    const[burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    
  return(
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
          {cars && cars.map((car, index) =>
              <a key={index} href="#">{car}</a>
          )}

        </Menu>
        <RightMenu>
          <a href="">Shop</a>
          <a href="">Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav $show={burgerStatus}>
            <CloseWrapper> 
                <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            {cars && cars.map((car, index) => 
                <li key={index}><a href="">{car}</a></li>
            )}
            <li><a href="">Existing Inventory</a></li>
            <li><a href="">Used Inventory</a></li>
            <li><a href="">Trade-in</a></li>
            <li><a href="">Cybertruck</a></li>
            <li><a href="">Roadaster</a></li>

        </BurgerNav>
      </Container>
    </div>
  )
}
export default Header;

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px !important;
    top: 0;
    left: 0 !important;
    right: 0 !important;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    a{
      font-weight: 650;
      font-size: 18px;
      text-transform: uppercase;
      padding: 0 10px !important;
    }
    @media(max-width: 768px){
      display: none;
    }
`
const RightMenu = styled.div`
      display: flex;
      align-items: center;
      a{
      font-weight: 650;
      font-size: 18px;
      text-transform: uppercase;
      margin-right: 10px !important;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px !important;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.$show ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.2s ease-in;

    li {
        padding: 15px 0 !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 650;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`