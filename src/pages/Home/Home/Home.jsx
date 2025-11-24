import React from "react";
import Banner from "../Banner/Banner";
import ServiceSection from "../Services/ServiceSection";
import BrandSlider from "../Brand/BrandSlider";
import Features from "../Features/Features";
import BeMerchant from "../BeMerchant/BeMerchant";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ServiceSection></ServiceSection>
			<BrandSlider></BrandSlider>
			<Features></Features>
			<BeMerchant></BeMerchant>
		</div>
	);
};

export default Home;
