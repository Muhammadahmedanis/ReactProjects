import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
function Header(){
  return(
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            <a href="">Modal S</a>
            <a href="">Modal 3</a>
            <a href="">Modal X</a>
            <a href="">Modal Y</a>

        </Menu>
        <RightMenu>
          <a href="">Shop</a>
          <a href="">Tesla Account</a>
          <CustomMenu />
        </RightMenu>
      </Container>
    </div>
  )
}
export default Header;

const Container = styled.div`
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