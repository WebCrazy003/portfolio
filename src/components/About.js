import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ProfileArray from './ProfileArray';

export default function About({ color }) {
  const profile = ProfileArray();
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const strongColor = useColorModeValue('gray.900', 'white');

  return (
    <Container maxW="5xl" id="about">
      <Stack spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }}>
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              01
            </Text>
            <Text fontWeight={800}>About</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 12 }}
          align={{ base: 'center', md: 'flex-start' }}
          px={4}
        >
          <Box
            bg={cardBg}
            p={4}
            rounded="md"
            boxShadow="xl"
            flexShrink={0}
            w={{ base: '260px', md: '320px' }}
          >
            <Image
              src="/assets/profile.jpg"
              alt="Richard Wang"
              w="full"
              aspectRatio={1}
              objectFit="cover"
            />
          </Box>
          <Box
            color={textColor}
            fontSize={{ base: 'md', md: 'lg' }}
            sx={{
              '& > * + *': { mt: 4 },
              ul: { listStyle: 'none', pl: 0 },
              'li::before': { content: '"- "' },
              strong: { fontWeight: 700, color: strongColor },
            }}
          >
            <ReactMarkdown>{profile.about}</ReactMarkdown>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
