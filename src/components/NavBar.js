import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Link,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import ProfileArray from './ProfileArray';

const TbIcons = require('react-icons/tb');

export default function Nav() {
  const profile = ProfileArray();
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const showLinks = useMemo(
    () => !(location.pathname && location.pathname.includes('detail')),
    [location.pathname],
  );

  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('#experience');
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  const goHome = () => {
    navigate('/');
  };

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      h={16}
      boxShadow={scroll ? 'base' : 'none'}
      zIndex="sticky"
      position="fixed"
      as="header"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
    >
      <Link>
        <Button variant="plain" onClick={goHome}>
          <Image
            height="40px"
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
          />
        </Button>
      </Link>

      <Flex alignItems="center">
        <Stack direction="row" spacing={7}>
          {isLargerThanMD && showLinks && (
            <>
              <Button variant="ghost" onClick={scrollToAbout}>
                About
              </Button>
              <Button variant="ghost" onClick={scrollToExperience}>
                Experience
              </Button>
              <Button variant="ghost" onClick={scrollToProjects}>
                Projects
              </Button>
              <Button variant="ghost" onClick={scrollToContact}>
                Contact
              </Button>
            </>
          )}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          {isLargerThanMD ? (
            <></>
          ) : (
            <>
              <Button
                as={IconButton}
                icon={<HamburgerIcon />}
                onClick={onOpen}
              />
              <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody>
                    <Button variant="ghost" onClick={scrollToAbout}>
                      About
                    </Button>
                    <Button variant="ghost" onClick={scrollToExperience}>
                      Experience
                    </Button>
                    <Button variant="ghost" onClick={scrollToProjects}>
                      Projects
                    </Button>
                    <Button variant="ghost" onClick={scrollToContact}>
                      Contact
                    </Button>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}
