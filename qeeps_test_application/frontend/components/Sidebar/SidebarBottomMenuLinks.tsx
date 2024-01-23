import { VStack, Flex, Heading, Link, Spacer } from "@chakra-ui/react";

import { SettingsIcon, UserPlusOneIcon } from "../icons/icons";


export function SidebarBottomMenuLinks() {
    return (
        <VStack align='flex-start' gap='1rem'>
            <Flex gap='0.5rem' justify='flex-start'><UserPlusOneIcon color='qeeps.main' boxSize={4} /><Heading as="h3" fontSize='12px' color="qeeps.main"><Link href="#">
                Inviter un collaborateur</Link>
            </Heading> </Flex>

            <Spacer border='1px solid #F2F2F2'></Spacer>

            <Flex gap='0.5rem' justify='flex-start'><SettingsIcon color='qeeps.main' boxSize={4} /><Heading as="h3" fontSize='12px' color="qeeps.main">
                <Link href="#">
                    Mes réglages</Link>
            </Heading> </Flex>

        </VStack>

    )
}