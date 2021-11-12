import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0px;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderLogoLabel = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-left: 8px;
`;

export const HeaderNavLinks = styled.nav`
    flex : 1 1 0;
    margin-left : 50px;
`

export const NavLink = styled.a`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    margin-right: 30px;
    color: #FFFFFF;
`