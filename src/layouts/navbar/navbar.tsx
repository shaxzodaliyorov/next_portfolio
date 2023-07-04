import { navigation } from "@/config/constants";
import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box
      w={"full"}
      h={"10vh"}
      backgroundColor={useColorModeValue("gray.50", "gray.900")}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      pos="fixed"
      zIndex={90}
      top={0}
    >
      <Flex
        w={{ sm: "full", md: "container.md", lg: "container.lg" }}
        m="auto"
        justify="space-between"
        h={"full"}
      >
        <HStack>
          <Image
            cursor={"pointer"}
            src="/logo.svg"
            onClick={() => router.push("/")}
            w={55}
            h={55}
          />
        </HStack>
        <HStack
          spacing={8}
          pos={{ base: "fixed", md: "relative" }}
          top={{ base: "11vh", md: 0 }}
          w={{ base: "full", md: "fit-content" }}
          p={4}
          bg={{ base: useColorModeValue("gray.50", "gray.900") }}
        >
          {navigation.map((item) => (
            <Box
              as="span"
              _hover={{ textDecoration: "underline", color: "blue.400" }}
            >
              <Link href={item.path}>{item.label}</Link>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
