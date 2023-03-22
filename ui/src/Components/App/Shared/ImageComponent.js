export const ImageComponent = ({ title }) => {
	const imagesByTitle = {
		cascade: [
			{ src: "/assets/paper.png", alt: "Paper pad" },
			{ src: "/assets/post_it.png", alt: "Post It" },
			{ src: "/assets/kraft_box.png", alt: "Take out Paper Box" },
			{ src: "/assets/coffee-sleeve.png", alt: "Coffee Sleeve" },
			{ src: "/assets/tinfoil.png", alt: "Tinfoil Bowl" },
			{ src: "/assets/takeout_box.png", alt: "White take out box" },
		],

		refund: [
			{ src: "/assets/perrier.png", alt: "Bottle of perrier" },
			{ src: "/assets/snapple.png", alt: "Bottle of snapple" },
			{ src: "/assets/coke.png", alt: "A can of coke" },
			{ src: "/assets/nestlewater.png", alt: "A can of coke" },
		],

		waste: [
			{ src: "/assets/styrofoam.png", alt: "styrofoam box" },
			{ src: "/assets/takeout_box.png", alt: "Takeout Box" },
			{ src: "/assets/chips.png", alt: "Bag of chips" },
			{ src: "/assets/candy_wrappers.png", alt: "Candy wrappers" },
			{ src: "/assets/plastic_teabag.png", alt: "Plastic tea bag" },
			{ src: "/assets/utensils.png", alt: "Plastic utensils" },
		],

		ecoAction: [
			{ src: "/assets/paper_plate.png", alt: "Paper plate" },
			{ src: "/assets/apple_core.png", alt: "Core of an apple" },
			{ src: "/assets/banana_peel.png", alt: "Banana peel" },
			{ src: "/assets/chopsticks.png", alt: "Chopsticks" },
			{ src: "/assets/teabag.png", alt: "Tea bag" },
			{ src: "/assets/soiled-paper.png", alt: "Brown paper bag" },
		],
	};

	const imagesToDisplay = imagesByTitle[title] || [];

	return (
		<>
			{imagesToDisplay &&
				imagesToDisplay.map((image, index) => (
					<img
						title={title}
						key={index}
						className="image"
						src={image.src}
						alt={image.alt}
					/>
				))}
		</>
	);
};
