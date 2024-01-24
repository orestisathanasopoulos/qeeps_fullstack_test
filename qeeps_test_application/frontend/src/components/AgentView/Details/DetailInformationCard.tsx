import {
  Box,
  ComponentWithAs,
  Flex,
  Icon,
  IconProps,
  Text,
} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export interface DetailInformationCardProps {
  title: string;
  titleIcon: ComponentWithAs<'svg', IconProps>;
  icons: ComponentWithAs<'svg', IconProps>[];
  categories: object;
}

export function DetailInformationCard({
  title,
  titleIcon,
  icons,
  categories,
}: DetailInformationCardProps) {
  const renderCategories = Object.entries(categories).map(
    ([property, value], index) => (
      <React.Fragment key={index}>
        <Flex gap={2} align={'center'}>
          <Icon as={icons[index]} stroke={'gray.80'} />
          <Text color={'gray.80'}>{property}</Text>
        </Flex>
        <Text color={'qeeps.main'}>{value}</Text>
      </React.Fragment>
    )
  );

  return (
    <Box width={'100%'} p={'2%'} h={'100%'}>
      <Flex
        gap="0.5rem"
        align={'center'}
        borderBottom={'1px solid'}
        borderColor={'gray.10'}
        mb={'1%'}
        paddingBottom={'1%'}
      >
        <Icon as={titleIcon} color="qeeps.main" boxSize={5} />
        <Text color="qeeps.main" fontWeight="500" fontSize="1.3rem">
          {title}
        </Text>
      </Flex>
      <SimpleGrid columns={2} spacing={12} w={'100%'} pt={2}>
        {renderCategories}
      </SimpleGrid>
    </Box>
  );
}
