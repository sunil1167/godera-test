import {
  MapButtonContainer,
  MapButtonLabel,
  MapContainer,
  SearchButton,
  SearchButtonLabel,
  SearchContainer,
  TextSearchContainer,
  TextSearchField,
} from "./style";

export default function Search() {
  return (
    <SearchContainer>
      <TextSearchContainer>
        <img src={"/icons/search.png"} width={27} height={27} alt={"search"} />
        <TextSearchField placeholder={"Job title or keyword"} />
      </TextSearchContainer>
      <MapButtonContainer>
        <img
          src={"/icons/location.png"}
          width={27}
          height={24}
          alt={"location"}
        />
        <MapButtonLabel>Select location</MapButtonLabel>
      </MapButtonContainer>
      <SearchButton>
        <SearchButtonLabel>Search</SearchButtonLabel>
      </SearchButton>
    </SearchContainer>
  );
}
