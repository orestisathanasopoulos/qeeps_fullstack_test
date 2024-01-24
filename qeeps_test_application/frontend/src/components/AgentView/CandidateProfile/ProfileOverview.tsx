import { Flex, VStack, Text } from '@chakra-ui/react';
import {
  DocumentFolderIcon,
  EveryUserIcon,
  FormOneIcon,
  PeopleSafeIcon,
} from '../../icons/icons';
import { ICandidate } from '../../../types/candidate';
import { SmallInfoCardWithIcon } from './smallInfoCardWithIcon';
import { ProfileCard } from './ProfileCard';

export function ProfileOverview({ candidate }: { candidate: ICandidate }) {
  return (
    <VStack align={'flex-start'} marginTop={'1rem'} w={'100%'}>
      <Flex gap="0.5rem" align={'center'} flexWrap={'wrap'}>
        <FormOneIcon color="qeeps.main" boxSize={5} />
        <Text color="qeeps.main" fontWeight="500" fontSize="1.3rem">
          {"Vue d'ensemble"}
        </Text>
      </Flex>
      <Flex gap={4} align="stretch" justifyContent={'space-between'} w={'100%'}>
        <ProfileCard candidate={candidate} style={{ flexGrow: '2' }} />

        <SmallInfoCardWithIcon
          icon={EveryUserIcon}
          tagText="CO-CANDIDATS"
          candidateProperty={candidate.coCandidates?.length || 0}
          tagTextIcon={false}
          tagBackgroundColor="qeeps.lightMain"
          iconColor="qeeps.alternativeSub"
          style={{ flexGrow: '1' }}
        />
        <SmallInfoCardWithIcon
          icon={PeopleSafeIcon}
          tagText="GARANTS"
          candidateProperty={candidate.guarantorIds?.length || 0}
          tagTextIcon={false}
          tagBackgroundColor="qeeps.lightMain"
          iconColor="qeeps.alternativeSub"
          style={{ flexGrow: '1' }}
        />
        <SmallInfoCardWithIcon
          icon={DocumentFolderIcon}
          tagText="DOCUMENTS"
          tagTextIcon={true}
          tagBackgroundColor="actions.background"
          iconColor="actions.success"
          style={{ flexGrow: '1' }}
        />
      </Flex>
    </VStack>
  );
}
