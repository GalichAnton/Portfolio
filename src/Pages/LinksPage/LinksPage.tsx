import { Fragment, useState } from "react";
import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  PageSlideFade,
  StaggerChildren,
} from "../../components/Animation/PageSlideFade";
import HeaderTitle from "../../components/Title/HeaderTitle";
import { MotionBox } from "../../components/Animation/Motion/Motion";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../Layouts/PageLayout";
import { BiSearch } from "react-icons/bi";
import LinkCard from "../../components/LinkCard/LinkCard";
import { interestingLinks } from "../../data/IntrestingLinks";
const TURQUOISE = "#06b6d4";

const LinksPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredLinks = interestingLinks.filter((data) => {
    const searchContent = data.title + data.description;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  filteredLinks?.sort((a, b) => +new Date(b.addedAt) - +new Date(a.addedAt));

  return (
    <Fragment>
      <PageLayout>
        <PageSlideFade>
          <HeaderTitle underlineColor={TURQUOISE} mt={0} mb={6}>
            Featured Articles
          </HeaderTitle>
          <InputGroup maxW="30rem">
            <Input
              placeholder="Search articles"
              onChange={(e) => setSearchValue(e.target.value)}
              background={useColorModeValue("gray.100", "#1e2533")}
            />
            <InputRightElement>
              <Icon as={BiSearch} w={6} h={6} />
            </InputRightElement>
          </InputGroup>
          <StaggerChildren>
            <Stack spacing={4} mt={6}>
              <AnimatePresence>
                {!filteredLinks.length && (
                  <Heading as="h1" pt={10} pb={10}>
                    No articles found
                  </Heading>
                )}
                {filteredLinks.map((link, i) => (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: (i) => ({
                        opacity: 0,
                        y: -30 * i,
                      }),
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.1,
                        },
                      }),
                    }}
                    custom={i}
                    key={link.id}
                  >
                    <MotionBox whileHover={{ y: -5 }} key={i}>
                      <LinkCard link={link} />
                    </MotionBox>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          </StaggerChildren>
        </PageSlideFade>
      </PageLayout>
    </Fragment>
  );
};

export default LinksPage;
