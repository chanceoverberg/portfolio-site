import {
  Box,
  Card,
  CardBody,
  CardHeader,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

const Work: FC = () => {
  const bg = useColorModeValue("gray.300", "gray.700");

  return (
    <Box fontSize="3xl" pt="3rem" pl="1rem" h="100vh">
      <Stack fontSize="3xl" pr="1rem" pt="1rem" pb="30px">
        <Card variant="outline">
          <CardHeader bg={bg} borderRadius="5px 5px 0px 0px">
            EMC Healthcare - Tokyo, Japan
          </CardHeader>
          <CardBody pt="10px">
            <Text fontSize="2xl">Full Stack Engineer | Nov 2024 - Present</Text>
            <Text fontSize="xl">
              Build and improve our monitoring and call center system for nursing care facilities.
              Create microservices with Go to expand functionality and increase our application's
              performance.
            </Text>
            <UnorderedList fontSize="xl" pl="10px" pb="15px">
              <ListItem>
                Reduced implementation costs and maintenance hours by creating a Go microservice to
                process and proxy all camera.
              </ListItem>
              <ListItem>
                Created a Go microservice to seamlessly record and play back MQTT messages in any
                environment, enabling us to simulate production environments while developing and
                testing so we can catch bugs sooner.
              </ListItem>
              <ListItem>
                Add an auto-archive system to our Node.js application, reducing the size and
                increasing the performance of our database and preserving data for future use.
              </ListItem>
              <ListItem>
                Drastically improve our React app's performance, reducing resource usage and
                increasing mobile battery life.
              </ListItem>
              <ListItem>Technology: React, Node.js, MongoDB, Docker, Kubernetes</ListItem>
              <ListItem>Languages: TypeScript, Go</ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader bg={bg} borderRadius="5px 5px 0px 0px">
            Epic Systems - Madison, WI, USA
          </CardHeader>
          <CardBody pt="10px">
            <Text fontSize="2xl">Full Stack Engineer | Aug 2022 - Oct 2024</Text>
            <Text fontSize="xl">
              Full stack engineer on the Telehealth team with a focus on our teleconferencing web
              app, built with React and .NET and used for over 1.3 million medical video visits each
              month.
            </Text>
            <UnorderedList fontSize="xl" pl="10px" pb="15px">
              <ListItem>
                Lead developer on current project to put our WebRTC vendor implementation behind an
                abstraction layer, reducing our reliance on any given vendor's specific APIs.
              </ListItem>
              <ListItem>Create new microservices and enhance existing ones.</ListItem>
              <ListItem>Develop fixes and enhancements for the front and back end.</ListItem>
              <ListItem>
                Technology: React, Redux, .NET, Azure, CosmosDB, Docker, Kubernetes
              </ListItem>
              <ListItem>Languages: TypeScript, C#, JavaScript</ListItem>
            </UnorderedList>
            <Text pt="10px" fontSize="2xl">
              Quality Manager | July 2019 - Aug 2022
            </Text>
            <Text fontSize="xl">
              Quality Manager on the Telehealth team with a focus on testing our teleconferencing
              and patient portal web apps, both built with React and .NET. Our patient portal is
              used by over 160 million patients worldwide.
            </Text>
            <UnorderedList fontSize="xl" pl="10px">
              <ListItem>
                Test, design, and assist in the implementation of the most used healthcare software
                in the US.
              </ListItem>
              <ListItem>Perform automated (C# Selenium scripts) and manual testing.</ListItem>
              <ListItem>
                Manage projects throughout the entire lifecycle, including design, development,
                usability studies, testing, and release.
              </ListItem>
              <ListItem>
                Write test plans to efficiently and effectively test as many areas as possible and
                reduce the risk of bugs and regressions.
              </ListItem>
              <ListItem>
                Investigate released issues and lead root cause analysis (RCA) meetings and
                processes.
              </ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader bg={bg} borderRadius="5px 5px 0px 0px">
            Miami University - Oxford, OH, USA
          </CardHeader>
          <CardBody pt="10px" fontSize="2xl">
            <Text>Assistive Technology Student Associate | Sept 2018 - Jan 2019</Text>
            <Text fontSize="xl">
              Provide technical assistance functions, perform administrative duties, and train
              others in the use of assistive technology.
            </Text>
            <UnorderedList fontSize="xl" pl="10px">
              <ListItem>Write, record, and analyze technical documents.</ListItem>
              <ListItem>
                Create alternative text files and closed captioning files for videos.
              </ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default Work;
