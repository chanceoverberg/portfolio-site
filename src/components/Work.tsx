import { Box, Card, CardBody, CardHeader, Center, Container, Divider, Heading, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Work: FC = () => {
    const bg = useColorModeValue('gray.400', 'blue.800')
    
    return (
        <Box fontSize='5xl' pt='3rem' pl='1rem' h='100vh'>
            Work
            <Stack fontSize='3xl' pr='1rem'>
                <Card variant='outline'>
                <CardHeader bg={bg}>Epic</CardHeader>
                    <CardBody pt='10px'>
                        <Text fontSize='2xl'>Software Developer | May 2023 - Present</Text>
                        <Text fontSize='xl'>
                            Full-stack developer on the Telehealth team with a focus on
                            our teleconferencing solution, built with React and ASP.Net, which allows
                            patients and providers to perform over 1 million monthly video visits.
                        </Text>
                        <UnorderedList fontSize='xl' pl='10px' pb="15px">
                            <ListItem>Create new microservices and enhance existing ones</ListItem>
                            <ListItem>Develop fixes and enhancements for the front and back end</ListItem>
                            <ListItem>Technology: React, Redux, ASP.NET, Azure, CosmosDB, Kubernetes, Docker</ListItem>
                            <ListItem>Languages: TypeScript, C#, JavaScript</ListItem>
                        </UnorderedList>
                        <Text pt='10px' fontSize='2xl'>Quality Manager | July 2019 - May 2023</Text>
                        <Text fontSize='xl'>
                            Quality Manager on the Telehealth team.
                        </Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Test, design, and assist in the implementation of the most used healthcare software in the US</ListItem>
                            <ListItem>Perform automated (C# Selenium scripts) and manual testing</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
                <Card variant='outline'>
                    <CardHeader bg={bg}>Miami University</CardHeader>
                    <CardBody pt='10px' fontSize='2xl'>
                        <Text>Assistive Technology Student Associate | 2018-2019</Text>
                        <Text fontSize='xl'>
                            Provide technical assistance functions, perform administrative duties,
                            and train others in the use of assistive technology.
                        </Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Write, record, and analyze technical documents</ListItem>
                            <ListItem>Create alternative text files and closed captioning files for videos</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
            </Stack>
        </Box>
    )
};

export default Work;