import { Box } from "@chakra-ui/react";
import { FC } from "react";
import ToggleColorMode from "./ToggleColorMode";
import Links from "./Links";

const Home: FC = () => {
    
    
    return (
        <Box h='100vh'>
            <Links />
            <ToggleColorMode />
            <Box textAlign='center' fontSize='5xl' pt='3rem'>
                Welcome
            </Box>
        </Box>
    )
};

export default Home;