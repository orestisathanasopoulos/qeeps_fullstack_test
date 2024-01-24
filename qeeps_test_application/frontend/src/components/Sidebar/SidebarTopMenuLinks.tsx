import { VStack, Flex, Heading, Link } from '@chakra-ui/react';
import { AgenceIcon, BuildingIcon, HomeIcon } from '../icons/icons';

export function SidebarTopMenuLinks() {
  return (
    <VStack align="flex-start" gap="2rem" justify="center">
      <Flex gap="0.5rem" justify="flex-start">
        <HomeIcon color="qeeps.main" boxSize={4} />
        <Heading as="h3" fontSize="12px" color="qeeps.main">
          <Link href="#">Accueil</Link>
        </Heading>{' '}
      </Flex>

      <Flex gap="0.5rem" justify="flex-start">
        <BuildingIcon color="qeeps.main" boxSize={4} />
        <Heading as="h3" fontSize="12px" color="qeeps.main">
          <Link href="#">Mes Biens</Link>
        </Heading>{' '}
      </Flex>

      <Flex gap="0.5rem" justify="flex-start">
        <AgenceIcon color="qeeps.main" boxSize={4} />
        <Heading as="h3" fontSize="12px" color="qeeps.main">
          <Link href="#">Mon Agence</Link>
        </Heading>{' '}
      </Flex>
    </VStack>
  );
}
