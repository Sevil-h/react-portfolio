const data = [
	{
		id: "p1",
		date: "",
		title: "Galata App",
		descriptionShort:
			"Galata is a mobile app built from scratch in a team of three in the final two weeks of the web development bootcamp at Le Wagon Istanbul in early 2021.",
		descriptionLong:
			"Galata is a tour guide for spontaneous travelers on a budget who are interested in enhancing their sightseeing experience. Users have access to content uploaded to the platform by other users such as articles, pictures, songs, podcasts and videos. On top of that, users can see other users who are close by on the map and have a conversation with them via a chat feature.",
		programs:
			"Ruby | Ruby on Rails | Html | Css | Geocoder | JavaScript | Cloudinary | Heroku | PostgreSQL | Devise | Mapbox API | WebSockets | Figma | Bootstrap",
		icon: "ruby",
		githubLink: "https://github.com/issamok3/galata",
		link: "https://galata-b567.herokuapp.com/",
		images: [
			{
				img: "../assets/images/galata/1root.png",
				text: "Galata allows travelers search sites near them with different options like filtering by category, address, and current location.",
			},
			{
				img: "../assets/images/galata/filter.png",
				text: "",
			},
			{
				img: "../assets/images/galata/galata.png",
				text: "Travelers can connect with other travelers via avatar on the map and can also easily access site content by clicking on a site marker.",
			},
			{
				img: "../assets/images/galata/loader.png",
				text: "When a user clicks the 'search by location' button, a rainbow loader activated by JavaScript runs untill the find current latitude and longitude of the User's location is calculated using Geocoder and show near users and sites on a Mapbox.",
			},
			{
				img: "../assets/images/galata/show.png",
				text: "Users can choose contents related to sites.",
			},
			{
				img: "../assets/images/galata/index.png",
				text: "Users can see sites near them with description and amount of the related contents. Audios, videos embedded from spotify and youtube and photos which is uploaded from Cloudinary and URLs are stored in the PostSQL database.",
			},
			{
				img: "../assets/images/galata/contents.png",
				text: "Each of the contents icon made on Figma and used on website with  `svg` tag",
			},
			{
				img: "../assets/images/galata/videos.png",
				text: "Users can see each of the embedded videos from youtube etc. and they can watch the video on the same page. And like a piece of content and save it on to their Liked Content page",
			},
			{
				img: "../assets/images/galata/articles.png",
				text: "Users can see each article with title and the avatar of the contributor. Each article is stored in the PostSQL database. And also users can like a piece of content and save it on to their Liked Content page.",
			},
			{
				img: "../assets/images/galata/article.png",
				text: "",
			},
			{
				img: "../assets/images/galata/photos.png",
				text: "Users can see site-related photos in a carousel.",
			},
			{
				img: "../assets/images/galata/audios.png",
				text: "Users can see each of the embedded audios from spotify and they can listen without leaving the page.Users can like a piece of content and save it on to their Liked Content page.",
			},
			{
				img: "../assets/images/galata/likedcontents.png",
				text: "Users can see all pieces of content that they have liked.",
			},
			{
				img: "../assets/images/galata/uploads.png",
				text: "User can see their uploads and also upload new content about specific sites. Each uploads is stored in the PostSQL database.",
			},
			{
				img: "../assets/images/galata/upload.png",
				text: "",
			},
			{
				img: "../assets/images/galata/settings.png",
				text: "Galata users can edit information.",
			},
			{
				img: "../assets/images/galata/notifications.png",
				text: "Using WebSockets, a notification appears on top the user's avatar in the top right corner of the screen each time they get a new message.",
			},

			{
				img: "../assets/images/galata/burger-navbar.png",
				text: "",
			},
			{
				img: "../assets/images/galata/messages.png",
				text: "Using WebSockets, user can start a conversation with each other from the messages tab or from the user marker on the map.",
			},
		],
	},
	{
		id: "p2",
		date: "",
		title: "BookArts",
		descriptionShort:
			"BookArts is an AirBnb-clone developed in a team of three during a web development bootcamp at Le Wagon Istanbul in early 2021. Instead of a marketplace for real estate rental, BookArts is a marketplace for artwork",
		descriptionLong:
			"BookArts is an AirBnb-clone developed in a team of three during a web development bootcamp at Le Wagon Istanbul in early 2021. Instead of a marketplace for real estate rental, BookArts is a marketplace for artwork. The idea is that it can help artists showcase their talent in people’s homes while providing them with a source of revenue. On the other hand, the app also provides users an opportunity to temporarily spruce up their interior by renting the artwork they desire. Think of renting some antique sculptures for an Ancient Roman fancy dress party for example.",
		programs:
			"Ruby | Ruby on Rails | Html | Css | Geocoder | JavaScript | Cloudinary | Heroku | PostgreSQL | Devise | Mapbox API | PG Search | Figma | Bootstrap",
		icon: "ruby",
		githubLink: "https://github.com/Sevil-h/BookArts",
		link: "https://bookarts-henniver.herokuapp.com/",
		images: [
			{
				img: "../assets/images/bookarts/1-bookarts.png",
				text: "Bookarts connects artists who wants to rent out their arts with artlovers who are looking for arts to rent.",
			},
			{
				img: "../assets/images/bookarts/bookarts-search.png",
				text: "Artlovers can search for artworks anywhere in the world by typing the keywords or a location (with PG Search).",
			},
			{
				img: "../assets/images/bookarts/bookarts-search2.png",
				text: "",
			},
			{
				img: "../assets/images/bookarts/bookarts-show.png",
				text: "Artlovers can see details about the arts.",
			},
			{
				img: "../assets/images/bookarts/bookarts-show2.png",
				text: "Artlovers can make a booking and read reviews about the artwork .",
			},
			{
				img: "../assets/images/bookarts/bookarts-booking.png",
				text: "",
			},
			{
				img: "../assets/images/bookarts/bookarts-review.png",
				text: "",
			},
			{
				img: "../assets/images/bookarts/bookarts-dashboard.png",
				text: "Artlovers can check if their booking has been approved or not and in vice-versa, an artist can see an overview of requests for their artwork, which they can approve or decline.",
			},
			{
				img: "../assets/images/bookarts/bookarts-myartwork.png",
				text: "Artists add their artwork to the website, along with a photo which is uploaded to Cloudinary. The latitude and longitude of each artwork's location is calculated using the Ruby Geocoder gem. Finally, a marker and a small information window are placed on the for each artwork using Mapbox.",
			},
		],
	},
	{
		id: "p1a",
		date: "",
		title: "React player",
		descriptionShort:
			"Small react application that fetch Spotify Api from and return small ap that you can search tracks and play and favorited or unfavorited from spotify through the react app.",
		descriptionLong: "",
		programs:
			"React | Vercel | Css | Html | React-Router-Dom | Spotify-Web-Api-Js | Spotify-Web-Api-Playback | Bootstrap",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/react-player",
		link: "https://react-player-sevil-h.vercel.app",
		images: [
			{
				img: "../assets/images/player/player5.png",
				text: "",
			},
			{
				img: "../assets/images/player/player1.png",
				text: "",
			},
			{
				img: "../assets/images/player/player2.png",
				text: "",
			},
			{
				img: "../assets/images/player/player3.png",
				text: "",
			},
			{
				img: "../assets/images/player/player4.png",
				text: "",
			},
		],
	},
	{
		id: "p11",
		date: "",
		title: "React playlist",
		descriptionShort:
			"Small react application that fetch Spotify Api from current songs name and library and playlists.",
		descriptionLong: "",
		programs:
			"React | Vercel | Css | Html | React-Router-Dom | Spotify-Web-Api-Js",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/react-playlist",
		link: "https://react-playlist.vercel.app/",
		images: [
			{
				img: "../assets/images/spotify/spotify-3.png",
				text: "",
			},
			{
				img: "../assets/images/spotify/spotify-1.png",
				text: "",
			},
			{
				img: "../assets/images/spotify/spotify-2.png",
				text: "",
			},
			{
				img: "../assets/images/spotify/spotify-4.png",
				text: "",
			},
			{
				img: "../assets/images/spotify/spotify-5.png",
				text: "",
			},
		],
	},
	{
		id: "p3",
		date: "",
		title: "Watch List",
		descriptionShort:
			"Watch list is basic MVC models web application that allows users create their own watchlist.",
		descriptionLong:
			"Watch list is basic MVC models web application that allows users create their own watchlist. It has been create while learning MVC model application during the bootcampt.It is very simple three pages website that users create own watch list. And it has been used a lot of css animation to make nicer user experience. ",
		programs:
			"Ruby | Ruby on Rails | Html | Css | JavaScript | Cloudinary | Heroku | PostgreSQL | Bootstrap",
		icon: "ruby",
		githubLink: "https://github.com/Sevil-h/rails-watch-list",
		link: "https://watchlist-b567.herokuapp.com//",
		images: [
			{
				img: "../assets/images/watchlist/a1index.png",
				text: "Watch list connect the movie lovers who wants to create own watch list and can see the their watch list.",
			},
			{
				img: "../assets/images/watchlist/index2.png",
				text: "",
			},
			{
				img: "../assets/images/watchlist/index1.png",
				text: "It has been used Css animation to change the image on home page that looks like a gif.",
			},
			{
				img: "../assets/images/watchlist/addanewlist.png",
				text: "Movie lovers can create own Movie List to the website along with a photo which is uploaded to Cloudinary.",
			},
			{
				img: "../assets/images/watchlist/mylist.png",
				text: "Movie lovers can see their movie list can click thought to see movies related to the list.",
			},
			{
				img: "../assets/images/watchlist/movies.png",
				text: "",
			},
			{
				img: "../assets/images/watchlist/bookmark.png",
				text: "",
			},
			{
				img: "../assets/images/watchlist/info2.png",
				text: "Movie lovers can see the rating, poster and overview about the movies that used APIs stored the information.",
			},
		],
	},
	{
		id: "p4",
		date: "",
		title: "Github Page",
		descriptionShort:
			"React two page website that fetch data from github api and return my github respositories.",
		descriptionLong:
			"First website of my to build by React. Two pages React website that allows user to see all public repositories from my github account with repository name, description and github link. It also allows users to favorite repository and save that repository on Starred Repo page.",
		programs:
			"React | Vercel | Html | Css | Javascript | Vertical-timeline-component",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/doggo-github-react-task",
		link: "https://doggo-github-react-task-master-git-master-sevil-h.vercel.app/",
		images: [
			{
				img: "../assets/images/gh/gh-1.png",
				text: "User see and reach github repository of me. And save chosen reposity to starred repo page to see later.",
			},
			{
				img: "../assets/images/gh/gh-2.png",
				text: "",
			},
			{
				img: "../assets/images/gh/gh-3.png",
				text: "",
			},
		],
	},
	{
		id: "p5",
		title: "Portfolio",
		descriptionShort: "My first portfolio has been build by Ruby on Rails.",
		descriptionLong:
			"My previous portfolio page that has been build by Ruby on Rails and deployed on Heroku. It shows one business card on home page and following links behind the card. Users can see my projects that has been build during the bootcamp and detailed explanation about the ech project and links.",
		programs: "Ruby on Rails | Ruby | Html | Css | Javascript | Heroku",
		icon: "ruby",
		githubLink: "https://github.com/Sevil-h/portfolio",
		link: "https://sevilhatipoglu.herokuapp.com/",
		images: [
			{
				img: "../assets/images/portfolio/p-1.png",
				text: "My first portfolio page build by ruby on rails and has been used lof of css animation for the effects.",
			},
			{
				img: "../assets/images/portfolio/p-2.png",
				text: "Home page show small business card and turn behind of the cart. Behind the cart has been write  information like a JavaScrip about me and that users react other pages by clicking the link.",
			},
			{
				img: "../assets/images/portfolio/p-3.png",
				text: "",
			},
			{
				img: "../assets/images/portfolio/p-4.png",
				text: "",
			},
			{
				img: "../assets/images/portfolio/p-5.png",
				text: "",
			},
			{
				img: "../assets/images/portfolio/p-6.png",
				text: "",
			},
		],
	},
	{
		id: "p6",
		date: "",
		title: "React Meetups",
		descriptionShort:
			"React Meetups website has been build by react and allows users to create meetups with image, date and descripton.",
		descriptionLong:
			"React Meetups website has been build by react and allows users to create meetups with image, date and descripton. Simple react website developed during the React Udemy course .And it has been used NextJS React framework and MongoDB database.",
		programs: "React | NextJS | Vercel | MangoDB | Html | Css | JavaScript",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/nextjs-project",
		link: "https://nextjs-project-sevil-h.vercel.app/6261b51be3b28ba6a685e6cf",
		images: [
			{
				img: "../assets/images/meetups/meetups-1.png",
				text: "",
			},
			{
				img: "../assets/images/meetups/meetups-2.png",
				text: "",
			},
			{
				img: "../assets/images/meetups/meetups-3.png",
				text: "",
			},
		],
	},
	{
		id: "a7",
		date: "",
		title: "React Design",
		descriptionShort:
			"One page React responsive website has been build during the React learning progress.",
		descriptionLong:
			"One page React responsive website has been build during the React learning progress to made excersive about responsive website and styled-components.",
		programs: "React | Vercel | Html | Css",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/react-sofa",
		link: "https://react-sofa.vercel.app/",
		images: [
			{
				img: "../assets/images/sofa/sofa1.png",
				text: "",
			},
			{
				img: "../assets/images/sofa/sofa2.png",
				text: "",
			},
			{
				img: "../assets/images/sofa/sofa3.png",
				text: "",
			},
			{
				img: "../assets/images/sofa/sofa4.png",
				text: "",
			},
		],
	},
	{
		id: "p7",
		date: "",
		title: "React Responsive Design",
		descriptionShort:
			"One page React responsive website has been build during the React learning progress.",
		descriptionLong:
			"One page React responsive website has been build during the React learning progress to made excersive about responsive website and styled-components.",
		programs: "React | Vercel | Html | Styled-Components",
		icon: "react",
		githubLink: "https://github.com/Sevil-h/react-responsive-design",
		link: "https://react-responsive-design.vercel.app/",
		images: [
			{
				img: "../assets/images/responsive/responsive-1.png",
				text: "",
			},
			{
				img: "../assets/images/responsive/responsive-2.png",
				text: "",
			},
			{
				img: "../assets/images/responsive/responsive-3.png",
				text: "",
			},
			{
				img: "../assets/images/responsive/responsive-4.png",
				text: "",
			},
			{
				img: "../assets/images/responsive/responsive-5.png",
				text: "",
			},
		],
	},
	// {
	// 	id: 8,
	// 	title: "React Food Order",
	// 	descriptionShort:
	// 		"React one page website has been build during the React Udemy couse.",
	// 	descriptionLong:
	// 		"React one page website has been build during the React Udemy couse. It is website that allows users add to meal from webpage and also increment or decrement meals that users choose from card.",
	// 	programs: "React | Firebase | Vercel | Html | Css | Javascript",
	// 	icon: "react",
	// 	githubLink: "https://github.com/Sevil-h/react-food-order-app",
	// 	link: "https://react-food-order-app-ten.vercel.app/",
	// 	images: [""],
	// },
];

export default data;
