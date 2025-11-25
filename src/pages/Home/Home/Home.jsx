import React from "react";
import Banner from "../Banner/Banner";
import ServiceSection from "../Services/ServiceSection";
import BrandSlider from "../Brand/BrandSlider";
import Features from "../Features/Features";
import BeMerchant from "../BeMerchant/BeMerchant";
import WorkProcess from "../WorkProcess/WorkProcess";
import { PopularPlace } from "../PopularPlace/PopularPlace";
import ReadyToStart from "../ReadyToStart/ReadyToStart";
import ExploreCompany from "../ExploreCompany/ExploreCompany";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ServiceSection></ServiceSection>
			<BrandSlider></BrandSlider>
			<Features></Features>
			<ExploreCompany></ExploreCompany>
			<WorkProcess></WorkProcess>
			<BeMerchant></BeMerchant>
			<PopularPlace></PopularPlace>
			<ReadyToStart></ReadyToStart>
		</div>
	);
};

export default Home;
