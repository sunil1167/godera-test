import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  padding: 10px;
  margin: 0px 143px;
    position: relative;
    top: -45px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);

  /* position: absolute; */
`;

export const TextSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const TextSearchField = styled.input`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #7b7b7b;
  border: none;
  outline: none;
  margin-left: 15px;
`;

export const MapButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
`;
export const MapButtonLabel = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #7b7b7b;
  margin-left: 16px;
`;

export const SearchButton = styled.button`
  outline: none;
  border: none;
  width: 280px;
  height: 60px;

  background: #f07987;
  border-radius: 8px;
`;

export const SearchButtonLabel = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
`