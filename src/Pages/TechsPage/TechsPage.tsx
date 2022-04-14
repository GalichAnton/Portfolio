import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Section from "../../components/Skills/Section";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import SkillCard from "../../components/Skills/SkillCard";
import { ISkill, skillsArray } from "../../data/carrer";
import HeaderTitle from "../../components/Title/HeaderTitle";
import { MotionBox } from "../../components/Animation/Motion/Motion";
import {
  container,
  PageSlideFade,
} from "../../components/Animation/PageSlideFade";
import PageLayout from "../Layouts/PageLayout";
import { useLinkColor } from "../../style/colors";
import { IconType } from "react-icons";
interface ITab {
  name: string;
  filterName: "" | "development" | "design" | "devops";
  icon: IconType;
}
const tabList: ITab[] = [
  {
    name: "All",
    filterName: "",
    icon: AiTwotoneThunderbolt,
  },
  {
    name: "Web Development",
    filterName: "development",
    icon: BiDesktop,
  },
  {
    name: "Web Design",
    filterName: "design",
    icon: GiSpiderWeb,
  },
  {
    name: "Devops",
    filterName: "devops",
    icon: AiOutlineCloudServer,
  },
];

const TechStack = () => {
  const bgColor = useLinkColor();
  const [skillsList, setSkillsList] = useState<ISkill[]>([]);

  React.useEffect(() => {
    setSkillsList(skillsArray);
  }, []);

  const filterSkills = (filter: typeof tabList[0]["filterName"]) => {
    if (filter)
      setSkillsList(skillsArray.filter((skill) => skill.type === filter));
    else setSkillsList(skillsArray);
  };

  return (
    <PageLayout>
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <HeaderTitle underlineColor={"#000"}>Tech Stack</HeaderTitle>
              <Text
                fontSize={"xl"}
                color={useColorModeValue("gray.500", "gray.200")}
                maxW="lg"
                textAlign="center"
              >
                A list of my favorite tools and technologies that I use on a
                regular basis.
              </Text>
            </VStack>
          </Section>
          <Section zIndex={5}>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              w="100%"
            >
              <TabList display="flex" flexWrap="wrap">
                {tabList.map((tab, index) => (
                  <Tab
                    bg={useColorModeValue("gray.100", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "white",
                      bg: bgColor,
                    }}
                    mr={2}
                    mt={2}
                    onClick={() => filterSkills(tab.filterName)}
                    key={index}
                  >
                    <HStack spacing={1}>
                      <Icon as={tab.icon} />
                      <Text>{tab.name}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight={"45vh"}>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export default TechStack;
