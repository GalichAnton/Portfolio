import { Fragment } from "react";
import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import PageLayout from "../Layouts/PageLayout";
import { PageSlideFade } from "../../components/Animation/PageSlideFade";
import HeaderTitle from "../../components/Title/HeaderTitle";
import {
  LeftProjectLayoutLarge,
  ProjectLayoutMed,
  RightProjectLayoutLarge,
} from "./ProjectsLayout";
import { projectsList } from "../../data/projects";

const TURQUOISE = "#06b6d4";

const ProjectsPage = () => {
  return (
    <Fragment>
      <PageLayout>
        <PageSlideFade>
          <VStack align="start">
            <HeaderTitle underlineColor={TURQUOISE} mt={0} mb={2}>
              Projects
            </HeaderTitle>
            <Text
              color={useColorModeValue("gray.500", "gray.200")}
              textAlign="left"
            >
              My projects
            </Text>
          </VStack>
          <VStack spacing={8} mt={["7", "7", "0"]}>
            {projectsList.map((project, index) => (
              <Fragment key={index}>
                <ProjectLayoutMed project={project} />
                {index % 2 === 0 ? (
                  <LeftProjectLayoutLarge project={project} />
                ) : (
                  <RightProjectLayoutLarge project={project} />
                )}
              </Fragment>
            ))}
          </VStack>
        </PageSlideFade>
      </PageLayout>
    </Fragment>
  );
};

export default ProjectsPage;
