import { ICandidate } from "../../../types/candidate";
import {
  Card,
  Flex,
  Heading,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  BriefCaseIcon,
  DocumentFolderIcon,
  FileStaffIcon,
  PeopleSafeIcon,
  QeepsSquareFullIcon,
} from "../../icons/icons";
import { MiniTag } from "./MiniTag";

interface ProfileCardProps {
  candidate: ICandidate;
  style?: React.CSSProperties;
}

export function ProfileCard({ candidate }: ProfileCardProps) {
  //Component example to showcase a candidate's percentage of total documents
  const allDocuments = 5.0;
  const currentDocs = 3.0;
  const documentPercentage = Math.floor((currentDocs / allDocuments) * 100);
  //

  return (
    <Card justify="center" p="1rem 2rem" w={"52%"}>
      <Flex gap={"2rem"}>
        <QeepsSquareFullIcon boxSize={"6rem"} color="qeeps.original" />
        <VStack align={"start"}>
          <Box>
            <Heading
              color="qeeps.main"
              fontSize={"1.125rem"}
              fontWeight={500}
              paddingLeft={"0.2rem"}
              p={0}
              m={0}
            >
              {candidate.firstName} {candidate.lastName}
            </Heading>
            <Text
              color="qeeps.main"
              paddingLeft={"0.2rem"}
              fontSize={"0.75rem"}
              m={0}
              p={0}
            >
              @{candidate.firstName.toLowerCase()}.
              {candidate.lastName.toLowerCase()}
            </Text>
          </Box>
          <Box w={"100%"}>
            <MiniTag icon={BriefCaseIcon} text={candidate.job}></MiniTag>
            <MiniTag
              icon={DocumentFolderIcon}
              text={candidate.contractType}
            ></MiniTag>
            <MiniTag icon={PeopleSafeIcon} text={"Colocation"}></MiniTag>
            {candidate.guarantorIds?.length ? (
              <MiniTag
                icon={PeopleSafeIcon}
                text={"Garants"}
                green={true}
              ></MiniTag>
            ) : (
              ""
            )}
            {/* TODO FIX ICON COLORS */}
            {currentDocs ? (
              <MiniTag
                icon={FileStaffIcon}
                text={`${documentPercentage}%`}
                yellow={documentPercentage < 100 ? true : false}
                green={documentPercentage === 100 ? true : false}
              ></MiniTag>
            ) : (
              ""
            )}
          </Box>
        </VStack>
      </Flex>
    </Card>
  );
}
