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
              Build and operate distributed backend services for a high-availability patient
              monitoring and operational support platform.
            </Text>
            <UnorderedList fontSize="xl" pl="10px" pb="15px">
              <ListItem>
                Design and implement automated data lifecycle management for a Node.js/MongoDB
                application, archiving ~100K documents/day (~36.5M/year) via batched transactions
                with configurable retention policies. Reduce active dataset size by ~80%, yielding
                an estimated 40–60% improvement in query latency through smaller index footprints
                and improved RAM utilization, while keeping archived data queryable for end users
                and available for downstream data lake ingestion.
              </ListItem>
              <ListItem>
                Develop APIs in Go and Chi to discover, configure, and manage fleets of third-party
                cameras via ONVIF and HTTP, replacing a manual per-device workflow that took ~2
                engineer-days per facility with a single-click bulk provisioning pipeline that
                processes 100+ cameras concurrently in under a minute.
              </ListItem>
              <ListItem>
                Build Go-based tooling to record and replay high-volume production MQTT traffic
                (60K+ messages/min), enabling realistic load testing, early detection of race
                conditions, and improved operational reliability.
              </ListItem>
              <ListItem>
                Optimize React application rendering and data flow to eliminate unnecessary
                network-driven re-renders, improving responsiveness and reducing mobile battery
                drain rate by ~75% under high event throughput.
              </ListItem>
              <ListItem>
                Co-develop an automated visual regression testing framework, replacing manual
                screen-by-screen QA with automated screenshot-based detection of UI and state
                regressions, eliminating a class of bugs that previously reached production.
              </ListItem>
              <ListItem>Technology: React, Node.js, MongoDB, Docker, Kubernetes</ListItem>
              <ListItem>Languages: TypeScript, Go, Python</ListItem>
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
              Design, write, and implement fixes and enhancements for our videoconferencing web app
              and its services, built with .NET and React, and used for over 4 million medical video
              visits each month.
            </Text>
            <UnorderedList fontSize="xl" pl="10px" pb="15px">
              <ListItem>
                Overhauled our front and back end WebRTC API consumption code by creating an
                abstraction layer, giving us the ability to swap WebRTC SDK vendors at any point,
                increasing flexibility and reliability. Also improved the performance of our
                application by 20%.
              </ListItem>
              <ListItem>
                Fully implement WebRTC SDKs and APIs and create our own REST APIs to interact with
                them.
              </ListItem>
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
