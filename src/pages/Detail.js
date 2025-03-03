import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IMAGE_ARRAY } from '../utils/constant';

function Detail({ color }) {
  const { project } = useParams();
  const navigate = useNavigate();

  const imageArray = useMemo(() => {
    return (IMAGE_ARRAY[project] && IMAGE_ARRAY[project].imgArray) || [];
  }, [project]);

  const buttonArray = useMemo(() => {
    return (IMAGE_ARRAY[project] && IMAGE_ARRAY[project].buttons) || [];
  }, [project]);

  const techArray = useMemo(() => {
    return (IMAGE_ARRAY[project] && IMAGE_ARRAY[project].techArray) || [];
  }, [project]);

  const aboutArray = useMemo(() => {
    return (IMAGE_ARRAY[project] && IMAGE_ARRAY[project].about) || [];
  }, [project]);

  const goProject = (link) => {
    // eslint-disable-next-line no-undef
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container maxW="6xl" id="detail">
      <Stack direction="column" pt={20}>
        <Stack direction="row" mt={10} alignItems="center">
          <Button variant="plain" width={10} onClick={goHome}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Text fontSize="3xl" align="center" width="100%">
            {IMAGE_ARRAY[project] && IMAGE_ARRAY[project].projectName}
          </Text>
        </Stack>

        <Stack direction="row" mt={10}>
          <Stack direction="column" width="75%" mr={4}>
            {imageArray.map((image, index) => (
              <Stack direction="column" pb={30}>
                <Text fontSize="xl" textAlign="center">
                  {image.imageName}
                </Text>
                <LazyLoadImage
                  key={index}
                  src={`${process.env.PUBLIC_URL}/assets/${project}/${image.imageFileName}.webp`}
                  alt="Lazy Loaded"
                  effect="blur"
                  width="2356"
                  height="1538"
                />
              </Stack>
            ))}
          </Stack>

          <Stack width="25%">
            <Box position="sticky" top={100}>
              <Text fontSize="xl">What I did</Text>
              {aboutArray.map((text) => (
                <Text>{text}</Text>
              ))}

              <Stack direction="row" my={3}>
                {buttonArray.map((item, index) => (
                  <Button
                    key={index}
                    colorScheme={color}
                    bg={`${color}.400`}
                    _hover={{
                      bg: `${color}.500`,
                    }}
                    rounded="full"
                    onClick={() => goProject(item.link)}
                  >
                    {item.name}
                  </Button>
                ))}
              </Stack>

              <Text fontSize="xl" mb={2}>
                Technologies
              </Text>

              <Wrap>
                {techArray.map((tech, index) => (
                  <Badge key={index} colorScheme="blue">
                    {tech}
                  </Badge>
                ))}
              </Wrap>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Detail;
