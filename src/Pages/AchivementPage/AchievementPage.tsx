import React, { Suspense } from "react";
import { PageSlideFade } from "../../components/Animation/PageSlideFade";

import PageLayout from "../Layouts/PageLayout";
import HeaderTitle from "../../components/Title/HeaderTitle";
import { Box, Image, VStack } from "@chakra-ui/react";
import Preloader from "../../components/Preloader/Preloader";

const AchievementPage = () => {
  return (
    <PageLayout>
      <PageSlideFade>
        <HeaderTitle underlineColor={"#000"}>Achievements</HeaderTitle>
        <VStack alignItems={"center"}>
          <Suspense fallback={<Preloader customText={"Loading"} />}>
            <Box>
              <Image
                w={"500px"}
                src="https://github-readme-stats.vercel.app/api?username=GalichAnton&show_icons=true&theme=light&line_height=27"
                alt="Anton's github stats"
              />
            </Box>

            <Box>
              <Image
                w={"500px"}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=GalichAnton&theme=light&hide_langs_below=1"
              />
            </Box>
          </Suspense>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export default AchievementPage;
