import * as React from "react";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "../Animation/Motion/Motion";
import HeaderTitle from "../Title/HeaderTitle";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IProject } from "../../data/projects";

interface ProjectsProps {
  projects: IProject[];
}

const ORANGE = "#ff9400";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8}>
      <HeaderTitle underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </HeaderTitle>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.desc}
                logo={project.logo}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
