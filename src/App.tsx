import React from 'react';
import logo from './logo.svg';
import { Flex, Center, Text, Box, Spacer } from "@chakra-ui/react"
import './App.css';

function App() {
  return (
    // <Flex bg="red.10" align="center">
    <Flex direction="column" justify="center" align="center"  id="outer" h="100vh" bg="white">
{/* <Spacer></Spacer> */}
      {/* <Flex direction="row" justify="center" bg="red.40" > */}
        <Center bg="blue.300" w="50%" h="50vh" color="white">
          <Text fontSize="2em"
            _hover={{
              bg: "red",
              color: "red.400",
            }}
          >
   z       This is centered
        </Text>
        </Center>
        {/* <Spacer></Spacer> */}

      {/* </Flex> */}
    </Flex>
    // </Flex>

  );
}

export default App;
