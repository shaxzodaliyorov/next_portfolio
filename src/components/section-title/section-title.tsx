import { Box, Heading, Text } from "@chakra-ui/react";
import { SectionTitleProps } from "./section-title.props";

const SectionTitle = ({ subtitle, title, ...props }: SectionTitleProps) => {
  return (
    <Box {...props}>
      <Heading
        fontWeight={"bold"}
        fontSize={{ base: "lg", md: "2xl" }}
        color="blue.400"
      >
        {title}
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default SectionTitle;
