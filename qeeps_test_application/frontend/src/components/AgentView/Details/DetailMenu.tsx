import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { IdCardVIcon, PeopleSafeIcon } from "../../icons/icons";
import { MainCandidatePanel } from "./MainCandidatePanel";
import { GuarantorCollapse } from "./DetailDropdown";
import { ICandidate } from "../../../types/candidate";

interface MenuButtonGroupProps {
  candidate: ICandidate;
  documents?: boolean;
}

export function MenuButtonGroup({
  candidate,

}: MenuButtonGroupProps) {
  const guarantors = candidate.guarantorIds?.map((guarantor, index) => {
    return <GuarantorCollapse guarantor={guarantor} key={index} />;
  });

  return (
    <Tabs colorScheme="qeeps" w={"100%"}>
      <TabList mb={3}>
        <Tab>
          <IdCardVIcon margin={"2"} />
          Dossier
        </Tab>
        <Tab>
          <PeopleSafeIcon margin={"2"} />
          Co-candidats{" "}
          <Tag size="sm" backgroundColor="qeeps.lightMain" m={"2"}>
            <TagLabel color={"qeeps.main"} fontWeight="600">
              {candidate.coCandidates ? candidate.coCandidates.length : ""}
            </TagLabel>
          </Tag>
        </Tab>
        <Tab>
          <PeopleSafeIcon margin={"2"} />
          Garants{" "}
          <Tag size="sm" backgroundColor="qeeps.lightMain" m={"2"}>
            <TagLabel color={"qeeps.main"} fontWeight="600">
              {candidate.guarantorIds ? candidate.guarantorIds.length : ""}
            </TagLabel>
          </Tag>
        </Tab>
        <Tab>Documents</Tab>
      </TabList>

      <TabPanels>
        <TabPanel w={"100%"} p={0}>
          <MainCandidatePanel candidate={candidate} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel w={"100%"} p={0}>
          {guarantors}
        </TabPanel>
        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

