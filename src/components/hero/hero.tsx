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

const Hero = () => {
  return (
    <Box
      id="home"
      mt={"10vh"}
      w={"full"}
      h={"90vh"}
      display="flex"
      alignItems="center"
    >
      <Flex
        w={{ sm: "full", md: "container.md", lg: "container.lg" }}
        m="auto"
        flexWrap={"wrap"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        p={{ base: 4, md: 0 }}
      >
        <Box w={{ base: "100%", md: "50%" }} h={"full"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
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
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              pr={{ base: 0, md: 4 }}
            >
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
                Create Project
              </Button>
              <Button
                w={"full"}
                px={4}
                py={2}
                rounded={"full"}
                border={"1px"}
                borderColor="blue.500"
              >
                How It Works
              </Button>
            </Stack>
          </Stack>
        </Box>
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
      </Flex>
    </Box>
  );
};

export default Hero;
