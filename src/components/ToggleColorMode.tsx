import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const ToggleColorMode: FC = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Button onClick={() => toggleColorMode()} pos="absolute" top="0" right="0" m="1rem" variant='outline'>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
};

export default ToggleColorMode;