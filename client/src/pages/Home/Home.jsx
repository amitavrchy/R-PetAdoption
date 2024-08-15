import React from 'react'
import Hero from '../../components/Hero/Hero'
import PetBox from '../../components/PetBox/PetBox'
import HomePagePets from '../../components/HomePagePets/HomePagePets'
import DonationMotivation from '../../components/DonationMotivation/DonationMotivation'
import CampaignOverview from '../../components/CampaignOverview/CampaignOverview'
import FeaturedSuccessStories from '../../components/FeaturedSuccessStories/FeaturedSuccessStories'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <PetBox></PetBox>
      <HomePagePets></HomePagePets>
      <DonationMotivation></DonationMotivation>
      <FeaturedSuccessStories></FeaturedSuccessStories>
      <CampaignOverview></CampaignOverview>
    </>
  )
}

export default Home