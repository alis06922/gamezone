// import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// function ColorModeSwitch() {
//   const { toggleColorMode, colorMode } = useColorMode();
//   return (
//     <HStack>
//       <Switch
//         colorScheme="green"
//         isChecked={colorMode == "dark"}
//         onChange={toggleColorMode}
//       ></Switch>
//       {/* <Text whiteSpace="nowrap">Dark Mode</Text> */}
//     </HStack>
//   );
// }

// export default ColorModeSwitch;


import { useColorMode, Box, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="button"
      onClick={toggleColorMode}
      width="80px"
      height="40px"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      borderRadius="full"
      align="center"
      justify={colorMode === "light" ? "flex-start" : "flex-end"}
      p="5px"
      cursor="pointer"
      position="relative"
      transition="all 0.3s ease"
      border={colorMode === "light" ? "2px solid gray" : "2px solid white"}
    >
      <Flex
        width="30px"
        height="30px"
        borderRadius="full"
        bg={colorMode === "light" ? "white" : "black"}
        align="center"
        justify="center"
        boxShadow="md"
        transition="all 0.3s ease"
      >
        {colorMode === "light" ? (
          <Box as={FaSun} color="yellow.500" boxSize="18px" />
        ) : (
          <Box as={FaMoon} color="blue.300" boxSize="18px" />
        )}
      </Flex>
    </Flex>
  );
}

export default ColorModeSwitch;
