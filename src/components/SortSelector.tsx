import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >Order by Relevance</MenuButton>
            <MenuList>Relvance</MenuList>
            <MenuList>Date added</MenuList>
            <MenuList>Name</MenuList>
            <MenuList>Release date</MenuList>
            <MenuList>Popularity</MenuList>
            <MenuList>Average rating</MenuList>
        </Menu>
    )
}

export default SortSelector;