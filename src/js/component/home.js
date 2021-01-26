import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { MyCard } from "./mycard.jsx";
import { propTypes } from "react-bootstrap/esm/Image";

const cardDeckStyle = {
	background: "#343a40",
	border: "3px solid #FF0000",
	marginLeft: "0"
};

const clockStyle = {
	color: "white",
	display: "flex",
	justifyContent: "center",
	fontSize: "2rem",
	marginTop: "1rem"
};

export function Home() {
	return (
		<CardDeck
			className="p-4 m-auto w-75 d-flex justify-content-center"
			style={cardDeckStyle}>
			<Card className="offset-3 col-1 bg-dark">
				{" "}
				<i style={clockStyle} className="far fa-clock" />
			</Card>
			<MyCard mytime={1000000} />
			<MyCard mytime={100000} />
			<MyCard mytime={10000} />
			<MyCard mytime={1000} />
		</CardDeck>
	);
}
