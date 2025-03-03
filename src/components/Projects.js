import { useNavigate } from 'react-router-dom';
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
} from '@chakra-ui/react';
import { Fade } from 'react-reveal';
import ProjectsArray from './ProjectsArray';

export default function Projects({ color }) {
  const projects = ProjectsArray();

  const navigate = useNavigate();

  const goDetails = (link) => {
    navigate(link);
  };

  return (
    <Container maxW="3xl" id="projects">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" p={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Projects</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {projects.map((project) => (
            <Fade bottom>
              <Card
                key={project.name}
                direction={{
                  base: 'column',
                }}
                overflow="hidden"
              >
                <Image objectFit="cover" src={project.image} />

                <Stack>
                  <CardBody align="left">
                    <Heading size="md">{project.name}</Heading>

                    <Text py={2}>{project.description}</Text>

                    <HStack py={2}>
                      {project.buttons.map((button) => (
                        <Button
                          color={`${color}.400`}
                          onClick={() => goDetails(button.href)}
                        >
                          {button.text}
                        </Button>
                      ))}
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
