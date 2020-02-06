import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  height: 5vh;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
`;

function Footer() {
  return (
    <FooterDiv>
      <p>Copyright 2020</p>
    </FooterDiv>
  );
}

export default Footer;
