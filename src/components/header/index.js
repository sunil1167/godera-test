import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogoLabel,
  HeaderNavLinks,
  NavLink,
} from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <img src={"/icons/job.png"} width={18} height={18} alt={"logo"} />
        <HeaderLogoLabel>JobHunt</HeaderLogoLabel>
      </HeaderLogoContainer>
      <HeaderNavLinks>
        <NavLink>Find a Jobs</NavLink>
        <NavLink>Post a Job</NavLink>
      </HeaderNavLinks>
      <NavLink>Log out</NavLink>
    </HeaderContainer>
  );
}
