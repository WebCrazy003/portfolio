import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ProfileArray from './ProfileArray';

export default function Header({ color }) {
  const profile = ProfileArray();
  const introColor = useColorModeValue('gray.700', 'gray.200');

  const scrollToProject = () => {
    const projectSection = document.querySelector('#projects');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxW="5xl" id="hero">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align="center"
        spacing={{ base: 12, md: 10 }}
        pt={{ base: 28, md: 40 }}
        pb={{ base: 20, md: 32 }}
        px={4}
      >
        <Stack flex={1} spacing={{ base: 6, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', md: '5xl' }}
            lineHeight="110%"
          >
            {profile.headerName}
          </Heading>
          <Text
            as="div"
            color={introColor}
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            lineHeight="1.5"
            sx={{ strong: { fontWeight: 800, color: `${color}.400` } }}
          >
            <ReactMarkdown>{profile.headerRole}</ReactMarkdown>
          </Text>
          {profile.headerDesc && (
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              {profile.headerDesc}{' '}
              <Box as="span" role="img" aria-label="pointing right" mx={1}>
                👉
              </Box>{' '}
              <Link
                as="button"
                onClick={scrollToProject}
                color={`${color}.400`}
                fontWeight={600}
                borderBottom="2px solid"
                _hover={{ textDecoration: 'none', color: `${color}.300` }}
              >
                projects
              </Link>
            </Text>
          )}
        </Stack>
        <Box flex={1} maxW={{ base: '320px', md: '460px' }} w="full">
          <Image
            src="/assets/setup.png"
            alt="Isometric illustration of a desk setup"
            w="full"
          />
        </Box>
      </Stack>
    </Container>
  );
}
