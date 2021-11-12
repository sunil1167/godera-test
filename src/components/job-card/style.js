import styled from "styled-components";

export const JobCardContainer = styled.div`
  width: 560px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: flex;
`;
export const CardImageContainer = styled.div`
  padding: 25px;
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin : 4px 0px;

  /* identical to box height */

  color: #000000;
`;

export const CardInfo = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const CardInfoName = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const CardInfoValue = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CardInformation = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  padding: 4px 0px;
  color: #7b7b7b;
`;
