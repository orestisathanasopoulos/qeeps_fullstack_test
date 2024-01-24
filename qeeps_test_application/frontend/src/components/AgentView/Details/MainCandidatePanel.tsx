import React from 'react';
import {
  Box,
  Card,
  Flex,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { ICandidate } from '../../../types/candidate';
import {
  DocumentFolderIcon,
  EmailDownloadlIcon,
  EmailIcon,
  FileStaffIcon,
  IdCardVIcon,
  InfoPersoIcon,
  MoneyIcon,
  PeopleSafeIcon,
  TelephoneIcon,
  UserIcon,
} from '../../icons/icons';
import { MiniTag } from '../CandidateProfile/MiniTag';
import { DetailInformationCard } from './DetailInformationCard';

interface mainCandidatePanelProps {
  candidate: ICandidate;
  activePanel?: string;
}

export function MainCandidatePanel({ candidate }: mainCandidatePanelProps) {
  //Component example to showcase a candidate's percentage of total documents
  const allDocuments = 5.0;
  const currentDocs = 5.0;
  const documentPercentage = Math.floor((currentDocs / allDocuments) * 100);
  //

  const receivedApplication = (
    <Tag
      size="sm"
      backgroundColor={'qeeps.lightMain'}
      borderRadius="0.5rem"
      p={'0.25rem 0.75rem'}
    >
      <TagLeftIcon as={EmailDownloadlIcon} color={'qeeps.main'} />
      <TagLabel color={'qeeps.main'} fontWeight="500">
        Reçue
      </TagLabel>
    </Tag>
  );

  const completionRate = (
    <MiniTag
      icon={FileStaffIcon}
      text={`${documentPercentage}%`}
      yellow={documentPercentage < 100 ? true : false}
      green={documentPercentage === 100 ? true : false}
    ></MiniTag>
  );

  return (
    <Box w={'100%'}>
      <Flex align={'center'} gap={3} mb={5} mt={7}>
        <Heading size="md" color="qeeps.main" fontWeight={500}>
          Candidat Principal
        </Heading>
        <MiniTag
          icon={PeopleSafeIcon}
          text={
            candidate.coCandidates
              ? `${candidate.coCandidates.length} co-candidats`
              : '0 co-candidats'
          }
        />
      </Flex>
      <Card w={'100%'}>
        <DetailInformationCard
          title={'Information personnelles'}
          titleIcon={InfoPersoIcon}
          icons={[
            IdCardVIcon,
            FileStaffIcon,
            TelephoneIcon,
            EmailIcon,
            UserIcon,
          ]}
          categories={{
            Dossier: completionRate,
            Statut: receivedApplication,
            Telephone: candidate.phoneNumber,
            Mail: candidate.email,
            'Situation Actuelle': candidate.maritalStatus,
          }}
        />
      </Card>
      <Card w={'100%'} mt={3} mb={3}>
        <DetailInformationCard
          title={'Information profesionnelles'}
          titleIcon={InfoPersoIcon}
          icons={[DocumentFolderIcon, DocumentFolderIcon, MoneyIcon, MoneyIcon]}
          categories={{
            'Situation contractuelle': candidate.contractType,
            'Prise de fonction': candidate.job,
            'Revenus mensuel net(avant impot)': candidate.monthlyJobRevenues,
            'Autres revenus': candidate.otherRevenues,
          }}
        />
      </Card>
    </Box>
  );
}
