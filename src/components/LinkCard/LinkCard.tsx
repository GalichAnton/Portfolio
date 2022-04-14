import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { CardTransition } from "../Animation/PageSlideFade";
import { useLinkColor } from "../../style/colors";
import { Tags } from "../Tags/Tags";
import { ILink } from "../../data/IntrestingLinks";
import { FC } from "react";

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
          <Heading fontSize="lg" alignSelf="left" mt={0}>
            <Link href={link.link} target={"_blank"}>
              <Text as={Link} color={linkColor}>
                {link.title}
              </Text>
            </Link>
          </Heading>
        </HStack>
        <HStack
          spacing={2}
          isInline
          justifyContent={["space-between", "flex-start"]}
        >
          <Tooltip hasArrow label="Published" placement="top">
            <Text fontSize="sm" fontWeight="600" color={textColor}>
              {link.addedAt.toLocaleString()}
            </Text>
          </Tooltip>

          <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
            <Tags
              tags={link.tag_list}
              interactive={false}
              tagProps={{
                padding: "0 3px",
                size: "sm",
              }}
            />
          </HStack>
        </HStack>
        <HStack spacing={1} alignItems="center" d={["flex", "flex", "none"]}>
          <Tags
            tags={link.tag_list}
            interactive={false}
            tagProps={{
              padding: "0 3px",
              size: "sm",
            }}
          />
        </HStack>
        <Text align="left" fontSize="md" noOfLines={1} color={textColor}>
          {link.description}
        </Text>
      </VStack>
    </CardTransition>
  );
};

export default LinkCard;
