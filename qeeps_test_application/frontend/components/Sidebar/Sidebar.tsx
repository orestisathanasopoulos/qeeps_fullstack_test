import { Avatar, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { SidebarTopMenuLinks } from "./SidebarTopMenuLinks";
import { SidebarBottomMenuLinks } from "./SidebarBottomMenuLinks";

export function Sidebar() {
  return (
    <VStack
      spacing="0.5rem"
      p="1.5rem"
      borderRight="1px solid #F2F2F2"
      maxWidth="18vw"
      minW="17vw"
      align="flex-start"
      gap="1.5rem"
      justify="space-between"
      aria-label="Main Navigation"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      height="100vh"
    >
      <VStack align="flex-start" gap="1.5rem" w={"100%"}>
        <Image
          src="/img/Logo.svg"
          alt="Qeeps logo"
          alignSelf="center"
          mb="1rem"
        />
        <Flex
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          borderRadius="14px"
          border="1px solid #F2F2F2"
          w="100%"
          padding="0.55rem 1.50rem"
          mb="1.5rem"
        >
          {" "}
          <Avatar name="Fabien Mercier" src="/img/agent_logo.png" />{" "}
          <VStack w={"100%"} gap={0}>
            <Heading as="h3" fontSize="12px" color="qeeps.main" w={"100%"}>
              Fabien Mercier
            </Heading>
            <Text color="gray" fontSize="10px" w={"100%"}>
              Ma Super Agence
            </Text>
          </VStack>
        </Flex>
        <SidebarTopMenuLinks />
      </VStack>
      <SidebarBottomMenuLinks />
    </VStack>
  );
}
