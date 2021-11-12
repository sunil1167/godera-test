import {
  CardContent,
  CardImageContainer,
  CardInfo,
  CardInfoContainer,
  CardInfoName,
  CardInformation,
  CardInfoValue,
  CardTitle,
  JobCardContainer,
} from "./style";

export default function JobCard() {
  return (
    <JobCardContainer>
      <CardImageContainer>
        <img src={"/images/card.png"} width={150} height={150} alt={"card-img"} />
      </CardImageContainer>
      <CardContent>
        <CardTitle>Executive Producer</CardTitle>
        <CardInfoContainer>
          <CardInfo>
            <CardInfoName>Location:</CardInfoName>
            <CardInfoValue>Flexible / remote</CardInfoValue>
          </CardInfo>
          <CardInfo>
            <CardInfoName>Company:</CardInfoName>
            <CardInfoValue>Amazon</CardInfoValue>
          </CardInfo>
        </CardInfoContainer>
        <CardInformation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor...
        </CardInformation>
      </CardContent>
    </JobCardContainer>
  );
}
