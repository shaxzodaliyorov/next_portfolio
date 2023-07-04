import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";
const About = () => {
  return (
    <Box
      id="about"
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      flexDir={"column"}
      my={10}
    >
      <SectionTitle
        title="About"
        subtitle="The project board is an exclusive resource for contract work. "
        my={6}
        textAlign="center"
      />
      <Flex
        w={{ sm: "full", md: "container.md", lg: "container.lg" }}
        m="auto"
        p={{ base: 4, md: 0 }}
        flexWrap={"wrap"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex w={{ base: "100%", md: "50%" }}>
          <Image
            rounded={"md"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "50%" }}
          pl={{ base: 0, md: 10 }}
          flexDir={"column"}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Shaxzod
            </Text>
            <Text color={"blue.400"} as={"span"}>
              Aliyorov
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            textAlign="justify"
            color={"gray.500"}
            my={6}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, perferendis? Autem sapiente ut quidem id. Consequatur
            at repellendus eum, enim sed reiciendis praesentium voluptatibus,
            nihil vero natus laboriosam exercitationem doloremque accusantium
            cumque nobis voluptates placeat et eius temporibus voluptatem qui.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              px={4}
              py={2}
              w={"full"}
            >
              Download CV
            </Button>
            <Button
              w={"full"}
              px={4}
              py={2}
              rounded={"full"}
              border={"1px"}
              borderColor="blue.500"
            >
              Contact
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
