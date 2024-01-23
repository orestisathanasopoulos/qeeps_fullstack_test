import {
  Card,
  CardBody,
  VStack,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

interface KpiCardProps {
  mainText: string;
  subTitle: string;
  thirdText: string;
  style?: React.CSSProperties;
}

export function KpiCard({ mainText, subTitle, thirdText }: KpiCardProps) {
  return (
    //TODO fix text alignment
    <Card p={"0 auto"} minW={"33%"}>
      <CardBody>
        <VStack>
          <Heading
            color="qeeps.main"
            fontWeight={600}
            paddingLeft={"0.2rem"}
            p={0}
          >
            {mainText}
          </Heading>
          <Box>
            <Text
              color="qeeps.main"
              fontSize="0.625rem"
              fontWeight="300"
              textAlign={"center"}
            >
              {subTitle}
            </Text>
            <Text
              color="qeeps.main"
              fontSize="0.625rem"
              fontWeight="300"
              textAlign={"center"}
            >
              {thirdText}
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
}
