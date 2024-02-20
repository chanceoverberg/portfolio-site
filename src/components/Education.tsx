import { Box, Card, CardBody, CardHeader, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Education: FC = () => {
    const bg = useColorModeValue('gray.300', 'gray.700')
    
    return (
        <Box fontSize='3xl' pt='3rem' pl='1rem' h='100vh'>
            <Stack fontSize='3xl' pr='1rem' pt='1rem' pb='30px'>
                <Card variant='outline'>
                    <CardHeader bg={bg} borderRadius='5px 5px 0px 0px'>University of Wisconsin - Madison</CardHeader>
                    <CardBody pt='10px'>
                        <Text fontSize='2xl'>Computer Sciences - Professional Capstone Certificate Program | May 2021 - May 2023</Text>
                        <Text fontSize='xl'>
                            Computer science program for working professionals to learn the fundamentals of computer science
                                needed to transition toward a developer job.
                        </Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Capstone Certificate</ListItem>
                            <ListItem>4.0 GPA</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
                <Card variant='outline'>
                    <CardHeader bg={bg} borderRadius='5px 5px 0px 0px'>Miami University - Ohio</CardHeader>
                    <CardBody pt='10px' fontSize='2xl'>
                        <Text fontSize='2xl'>Undergraduate studies | Aug 2015 - May 2019 </Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Bachelor of Arts in International Studies</ListItem>
                            <ListItem>Bachelor of Arts in East Asian Language & Culture (Japanese)</ListItem>
                            <ListItem>Minor in International Business</ListItem>
                            <ListItem>3.95 GPA | Summa cum laude | Dean's List</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
                <Card variant='outline'>
                    <CardHeader bg={bg} borderRadius='5px 5px 0px 0px'>Ritsumeikan University - Kyoto, Japan</CardHeader>
                    <CardBody pt='10px' fontSize='2xl'>
                        <Text>One semester of study abroad | March 2018 - July 2018</Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Bachelor's degree credits</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
                <Card variant='outline'>
                    <CardHeader bg={bg} borderRadius='5px 5px 0px 0px'>Sophia University - Tokyo, Japan</CardHeader>
                    <CardBody pt='10px' fontSize='2xl'>
                        <Text>One semester of study abroad | Sept 2017 - Jan 2018</Text>
                        <UnorderedList fontSize='xl' pl='10px'>
                            <ListItem>Bachelor's degree credits</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
            </Stack>
        </Box>
    )
};

export default Education;