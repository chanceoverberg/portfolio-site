import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";

const Skills: FC = () => {
  return (
    <SimpleGrid
      spacing={3}
      templateColumns="repeat(auto-fill, minmax(300px, 400px))"
      pt="4rem"
      pl="1rem"
      pr="1rem"
      pb="30px"
    >
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Programming Languages</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>TypeScript</ListItem>
            <ListItem>Go</ListItem>
            <ListItem>C#</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>HTML, CSS, SASS</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Frameworks</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>Next.js</ListItem>
            <ListItem>React</ListItem>
            <ListItem>React Native</ListItem>
            <ListItem>.NET</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">DevOps</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>Git</ListItem>
            <ListItem>Microsoft Azure</ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>Kubernetes</ListItem>
            <ListItem>Linux</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Databases</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>MongoDB (NoSQL)</ListItem>
            <ListItem>Azure CosmosDB (NoSQL)</ListItem>
            <ListItem>PlanetScale (MySQL)</ListItem>
            <ListItem>Prisma (TypeScript ORM)</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Observability</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>Prometheus</ListItem>
            <ListItem>Grafana</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Testing</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>Unit testing</ListItem>
            <ListItem>Integration testing</ListItem>
            <ListItem>Automated testing (Selenium, WebDriverIO, etc.)</ListItem>
            <ListItem>End-to-end testing</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Languages</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>English (Native)</ListItem>
            <ListItem>Japanese (Business, JLPT N2)</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      <Card minW="sm" maxW="md">
        <CardHeader pb="0px">
          <Heading size="md">Other</Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList fontSize="xl" pl="10px" pb="15px">
            <ListItem>SDLC, CI/CD, Agile Methodology</ListItem>
            <ListItem>Project management</ListItem>
            <ListItem>Quality assurance</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default Skills;
