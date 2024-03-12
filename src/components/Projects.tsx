import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <Box pt="3rem" pl="1rem" pr="1rem" h="100vh">
      <Wrap justify="center" pt="1rem" pb="30px">
        <Card maxW="md">
          <CardHeader>
            <Heading size="md">Groupoll</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              A group-based anonymous poll web app built with Next.js. Users can create a group and
              share the link with others. Anyone with the link can anonymously add new polls and
              vote on existing ones.
            </Text>
          </CardBody>
          <CardFooter>
            <Button as="a" href="https://github.com/chanceoverberg/groupoll" target="_blank">
              View in GitHub
              <ExternalLinkIcon ml="2px" />
            </Button>
            <Button marginLeft={"10px"} as="a" href="https://www.groupoll.net" target="_blank">
              Visit Site
              <ExternalLinkIcon ml="2px" />
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="md">
          <CardHeader>
            <Heading size="md">SpaceTraders Client</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Client app built with React and TypeScript to play SpaceTraders, an API-based
              multiplayer game.
            </Text>
          </CardBody>
          <CardFooter>
            <Button as="a" href="https://github.com/chanceoverberg/spacetraders" target="_blank">
              View in GitHub
              <ExternalLinkIcon ml="2px" />
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="md">
          <CardHeader>
            <Heading size="md">Portfolio Website</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              The website you're looking at right now! Built with React and TypeScript to showcase
              my experience, education, and personal projects.
            </Text>
          </CardBody>
          <CardFooter>
            <Button as="a" href="https://github.com/chanceoverberg/portfolio-site" target="_blank">
              View in GitHub
              <ExternalLinkIcon ml="2px" />
            </Button>
          </CardFooter>
        </Card>
      </Wrap>
    </Box>
  );
};

export default Projects;
