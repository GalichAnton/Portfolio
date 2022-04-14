import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
import { CardTransition } from "../Animation/PageSlideFade";
import { useLinkColor } from "../../style/colors";
import { ILink } from "../../data/IntrestingLinks";
import { FC } from "react";
import { getTagColor } from "../../style/theme";

interface IProps {
  link: ILink;
}

const LinkCard: FC<IProps> = ({ link }) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue("gray.500", "gray.200");
  return (
    <CardTransition>
      <VStack
        spacing={1}
        p={4}
        _hover={{ shadow: "md", textDecoration: "none" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        align="left"
      >
        <HStack justifyContent="space-between" isInline>
          <Heading
            fontSize="lg"
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            mt={0}
            w={"100%"}
          >
            <Link href={link.link} target={"_blank"}>
              <Text color={linkColor}>{link.title}</Text>
            </Link>
            <Tooltip hasArrow label="Published" placement="top">
              <Text fontSize="sm" fontWeight="600" color={textColor}>
                {link.addedAt.toLocaleString(navigator.language, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </Text>
            </Tooltip>
          </Heading>
        </HStack>

        <Text align="left" fontSize="md" noOfLines={1} color={textColor}>
          {link.description}
        </Text>
        <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
          {link.tag_list.map((tag) => (
            <Tag
              size="sm"
              padding="0 3px"
              key={tag}
              colorScheme={getTagColor(tag)}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </CardTransition>
  );
};

export default LinkCard;
