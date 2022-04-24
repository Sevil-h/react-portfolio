import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import classes from "./Contacts.module.css";

const Contacts = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>Contacts</h1>
			<div className={classes.verticalLinks}>
				<p>
					<a
						href="https://www.linkedin.com/in/sabriyesevilhatipoglu/"
						target="_blank"
					>
						<SiLinkedin className={classes.icon} />
					</a>
				</p>
				<p>
					<a href="https://github.com/Sevil-h" target="_blank">
						<BsGithub className={classes.icon} />
					</a>
				</p>
			</div>
			<div className={classes.horizontalLinks}>
				<p>
					<AiFillMail className={classes.smallIcon} />
					<span>sevilhatipogluu93@gmail.com</span>
				</p>
				<p>
					<BsFillTelephoneFill className={classes.smallIcon} />
					<span>+44 7503 994024</span>
				</p>
			</div>
		</div>
	);
};

export default Contacts;
