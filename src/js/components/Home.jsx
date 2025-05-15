import React from "react";

// Componentes personalizados
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Componente principal
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />

			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique."
				buttonText="Call to action!"
				buttonUrl="#"
			/>

			<div className="container d-flex flex-wrap justify-content-center gap-4 py-5">
				<Card
					image="https://imgs.search.brave.com/XvrkFKrdw6cP-rz9aYwqxO4LyxGr5uHFqW0RhO8jl8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA"
					title="Card title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					image="https://imgs.search.brave.com/XvrkFKrdw6cP-rz9aYwqxO4LyxGr5uHFqW0RhO8jl8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA"
					title="Card title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					image="https://imgs.search.brave.com/XvrkFKrdw6cP-rz9aYwqxO4LyxGr5uHFqW0RhO8jl8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA"
					title="Card title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					image="https://imgs.search.brave.com/XvrkFKrdw6cP-rz9aYwqxO4LyxGr5uHFqW0RhO8jl8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA"
					title="Card title"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
			</div>
						<Footer />
		</div>
	);
};

export default Home;