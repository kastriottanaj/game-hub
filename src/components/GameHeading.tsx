import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

// need to fix this
//const heading = `${GameQuery.platform?.name || "" } ${GameQuery.genre?.name || ""} Game`;

const GameHeading = ( {gameQuery}: Props ) => {
    return (
        <Heading as="h1" marginY={5} fontSize="5xl" ></Heading>
    )
}

export default GameHeading;

