import profileData from "../store/profileData";
import classes from "../style/homepage.module.css";
import Banner from "../components/Banner/Banner";

const HomePage = (props) => {
	return <Banner title={profileData.name} position={profileData.position} />;
};

export default HomePage;
