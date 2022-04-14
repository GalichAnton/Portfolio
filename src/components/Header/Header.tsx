import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import UserIcon from "../../assets/images/ava.jpg";

import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { LocalPaths } from "../../Paths/LocalPath";

const webLinks = [
  { name: "About", path: LocalPaths.about },
  { name: "Projects", path: LocalPaths.projects },
];

const mobileLinks = [
  { name: "About", path: LocalPaths.about },
  { name: "Projects", path: LocalPaths.projects },
  { name: "Tech Stack", path: LocalPaths.techStack },
  { name: "Interesting links", path: LocalPaths.interesting },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
  children?: JSX.Element;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      as={RouterNavLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.900"),
      }}
      _activeLink={{
        color: useColorModeValue("blue.500", "blue.200"),
      }}
      onClick={() => props.onClose()}
      to={props.path}
    >
      {props.name}
      {props?.children}
    </Link>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <RouterNavLink to={"/"}>
                <Avatar size={"sm"} src={UserIcon} />
              </RouterNavLink>
            </Box>
            <Box as={"nav"} display={{ base: "none", md: "flex" }}>
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px={2}
                  py={1.5}
                  fontSize={"1em"}
                  rounded={"md"}
                  height={"auto "}
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: "outline" }}
                  rightIcon={<BiChevronDown size={18} />}
                >
                  Links
                </MenuButton>
                <MenuList zIndex={5}>
                  <Link
                    as={RouterNavLink}
                    to={LocalPaths.techStack}
                    style={{ margin: 0 }}
                  >
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={AiTwotoneThunderbolt}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Tech Stack</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to={LocalPaths.interesting}>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={MdTimeline}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Interesting links</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to={LocalPaths.achievements}>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsCheckCircle}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Achievements</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Tooltip label={"Github account"} aria-label="A tooltip">
              <IconButton
                as={Link}
                href={"https://github.com/GalichAnton"}
                size={"md"}
                icon={<FaGithub />}
                aria-label={"Github account"}
                bg={useColorModeValue("white", "gray.700")}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
            </Tooltip>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
