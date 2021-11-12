import Header from "../../components/header";
import Search from "../../components/searchContainer";
import {
  HeroSection,
  HeroTitle,
  HeroSubTitle,
  JobExploreContainer,
  JobCardContainer,
} from "./style";
import JobCard from "../../components/job-card";

export default function JobExplore() {
  return (
    <JobExploreContainer>
      <HeroSection>
        <Header />
        <HeroTitle>Find Your Dream Job</HeroTitle>
        <HeroSubTitle>
          Browse through thousands of full-time or part-time jobs near you
        </HeroSubTitle>
      </HeroSection>
      <Search />
      <JobCardContainer>
        <JobCard />

        <JobCard />

        <JobCard />

        <JobCard />

        <JobCard />

        <JobCard />
      </JobCardContainer>
    </JobExploreContainer>
  );
}
