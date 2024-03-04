import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwtich";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px" />
            <h1>Kastriot a.k.a Toti</h1>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar