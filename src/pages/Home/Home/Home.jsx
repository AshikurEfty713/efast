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
import AboutUs from "../../AboutUs/AboutUs";
import TransportForm from "../TransportForm/TransportForm";
import BlogsSlider from "../BlogsSlider/BlogsSlider";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<TransportForm></TransportForm>
			<AboutUs></AboutUs>
			<ServiceSection></ServiceSection>
			<BrandSlider></BrandSlider>
			<Features></Features>
			<ExploreCompany></ExploreCompany>
			<WorkProcess></WorkProcess>
			<BeMerchant></BeMerchant>
			<PopularPlace></PopularPlace>
			{/* <BlogsSlider></BlogsSlider> */}
			<ReadyToStart></ReadyToStart>
		</div>
	);
};

export default Home;
