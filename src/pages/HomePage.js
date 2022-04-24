import profileData from "../store/profileData";
import Banner from "../components/Banner/Banner";

const HomePage = () => {
	return <Banner title={profileData.name} position={profileData.position} />;
};

export default HomePage;
