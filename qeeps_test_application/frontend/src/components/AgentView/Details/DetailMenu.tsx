import React from 'react';
import {
  Icon,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import {
  IdCardVIcon,
  PeopleSafeIcon,
  EveryUserIcon,
  DocumentFolderIcon,
  CheckOneIcon,
} from '../../icons/icons';
import { MainCandidatePanel } from './MainCandidatePanel';
import { GuarantorCollapse } from './DetailDropdown';
import { ICandidate } from '../../../types/candidate';
import { text } from 'express';

interface MenuButtonGroupProps {
  candidate: ICandidate;
  showDocuments?: boolean;
}

export function MenuButtonGroup({
  candidate,
  showDocuments,
}: MenuButtonGroupProps) {
  const guarantors = candidate.guarantorIds?.map((guarantor, index) => {
    return <GuarantorCollapse guarantor={guarantor} key={index} />;
  });

  const DocumentsCheckIcon = (
    <Tag size="sm">
      <TagLabel color="actions.successAccent">
        <CheckOneIcon />
      </TagLabel>
    </Tag>
  );

  const candidatePropertiesToTabs = [
    { text: 'Dossier', icon: IdCardVIcon },
    {
      text: 'Co-candidats',
      icon: EveryUserIcon,
      label: true,
      condition: candidate.coCandidates ? candidate.coCandidates.length : '',
    },
    {
      text: 'Garants',
      icon: EveryUserIcon,
      label: true,
      condition: candidate.coCandidates ? candidate.coCandidates.length : '',
    },
    {
      text: 'Documents',
      icon: DocumentFolderIcon,
      condition: showDocuments ? DocumentsCheckIcon : '',
    },
  ];

  const candidatePropertiesTabs = (
    <TabList mb={3}>
      {candidatePropertiesToTabs.map((property, key) => {
        return (
          <Tab
            key={key}
            _selected={{
              fontWeight: 600,
              borderColor: 'currentColor',
            }}
          >
            <Icon
              as={property.icon}
              margin={'2'}
              borderRadius={'0.25rem'}
              border={'1px solid'}
              borderColor={'gray.10'}
            />
            {property.text}
            {property.text === 'Documents' ? property.condition : null}
            {property.label ? (
              <Tag size="sm" backgroundColor="qeeps.lightMain" m={'2'}>
                <TagLabel color={'qeeps.alternativeSub'} fontWeight="600">
                  {property.condition}
                </TagLabel>
              </Tag>
            ) : null}
          </Tab>
        );
      })}
    </TabList>
  );

  return (
    <Tabs colorScheme="qeeps" w={'100%'} color={'qeeps.alternativeSub'}>
      {candidatePropertiesTabs}
      <TabPanels>
        <TabPanel w={'100%'} p={0}>
          <MainCandidatePanel candidate={candidate} />
        </TabPanel>
        <TabPanel>
          <p>Co-candidats</p>
        </TabPanel>
        <TabPanel w={'100%'} p={0}>
          {guarantors}
        </TabPanel>
        <TabPanel>
          <p>Documents</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
