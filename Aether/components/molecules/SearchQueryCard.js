import TextContainer from "../atoms/text-container/TextContainer";
import Title3 from "../atoms/text/Title3";
import Body2 from "../atoms/text/Body2";

const SearchQueryCard = ({ query }) => {
	const searchQueryTitle = (
		<Title3>
			{query.startingLocation} - {query.destination} | {query.departureDate}
		</Title3>
	);

	const searchQueryContent = (
		<Body2>
			{query.noOfPassengers} | {query.flightClass}
		</Body2>
	);
	return (
		<TextContainer title={searchQueryTitle} content={searchQueryContent} />
	);
};

export default SearchQueryCard;
