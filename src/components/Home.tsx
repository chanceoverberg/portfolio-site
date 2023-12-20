import { Box, List, ListIcon, ListItem, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import ToggleColorMode from "./ToggleColorMode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Home: FC = () => {
    const {colorMode} = useColorMode();

    return (
        <Box h='100vh'>
            <ToggleColorMode />
            <Text
                bg={colorMode === "dark" ? "white" : "black"}
                bgClip='text'
                fontSize='6xl'
                textAlign={'center'}
            >
            Welcome
            </Text>
            <List spacing={3} pos='absolute' top={`40%`} pl='1rem'>
                <ListItem fontSize='2xl'>
                    Home
                </ListItem>
                <ListItem fontSize='2xl'>
                    Work
                </ListItem>
                <ListItem fontSize='2xl'>
                    Projects
                </ListItem>
                <ListItem fontSize='2xl'>
                    Github
                </ListItem>
                <ListItem fontSize='2xl'>
                    LinkedIn
                </ListItem>
            </List>
        </Box>
    )
};

export default Home;