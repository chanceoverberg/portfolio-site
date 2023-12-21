import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";

interface ILinksProps {
    changePage: (page: string) => void;
}

const Links: FC<ILinksProps> = (props: ILinksProps) => {
    const { changePage } = props;
    const [isLargerThan800] = useMediaQuery('(min-width: 900px)');

    return (
        <>
            {
                isLargerThan800 ? 
                    <Breadcrumb separator='' fontSize='20px' pos="absolute" top="0" left="0" m="1rem">
                        <BreadcrumbItem>
                            <BreadcrumbLink onClick={() => changePage("HOME")}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink onClick={() => changePage("WORK")}>Work</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink onClick={() => changePage("PROJECTS")}>Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='https://github.com/chanceoverberg/' target='_blank'>GitHub</BreadcrumbLink>
                            <ExternalLinkIcon ml='2px' />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='https://www.linkedin.com/in/chanceoverberg/' target='_blank'>LinkedIn</BreadcrumbLink>
                            <ExternalLinkIcon ml='2px' />
                        </BreadcrumbItem>
                    </Breadcrumb>
                : 
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' pos="absolute" top="0" left="0" m="1rem" />
                        <MenuList>
                            <MenuItem onClick={() => changePage("HOME")}>Home</MenuItem>
                            <MenuItem onClick={() => changePage("WORK")}>Work</MenuItem>
                            <MenuItem onClick={() => changePage("PROJECTS")}>Projects</MenuItem>
                            <MenuItem as='a' href='https://github.com/chanceoverberg/' target='_blank'>GitHub<ExternalLinkIcon ml='2px' /></MenuItem>
                            <MenuItem as='a' href='https://www.linkedin.com/in/chanceoverberg/' target='_blank'>LinkedIn<ExternalLinkIcon ml='2px' /></MenuItem>
                        </MenuList>
                    </Menu>
            }
        </>
    )
};

export default Links;