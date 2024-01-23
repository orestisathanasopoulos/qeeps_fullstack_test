import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import theme from "./theme/index";
import AgentPageTitle from "./components/AgentView/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar />
    <Flex
      position="relative"
      left={"18.5%"}
      backgroundColor="#FFF"
      padding={"1.25rem"}
      flexWrap={"wrap"}
      w={"81%"}
      h={"100vh"}
    >
      <AgentPageTitle />
    </Flex>
  </ChakraProvider>
);
