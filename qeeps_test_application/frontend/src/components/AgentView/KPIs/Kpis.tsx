import { VStack, Flex, Text } from '@chakra-ui/react';
import { ICandidate } from '../../../types/candidate';
import { ListsNumbersIcon } from '../../icons/icons';
import { KpiCard } from './KpiCard';

export function Kpis({ candidate }: { candidate: ICandidate }) {
  
  const guarantorTotalSalary = candidate.guarantorIds?.reduce(
    (accumulator, guarantor) => accumulator + guarantor.monthlyJobRevenues,
    0
  );
  return (
    <VStack align={'flex-start'} marginTop={'1rem'} w={'100%'} paddingRight={3}>
      <Flex gap="0.5rem" align={'center'}>
        <ListsNumbersIcon color="qeeps.main" boxSize={5} />
        <Text color="qeeps.main" fontWeight="500" fontSize="1.3rem">
          KPI du dossier
        </Text>
      </Flex>
      <Flex gap={3} justify={'space-between'} align={'stretch'} w={'100%'}>
        <KpiCard
          mainText={`${candidate.monthlyJobRevenues} €`}
          subTitle="NET MENSUEL"
          thirdText="(avant impôts)"
          style={{ flexGrow: 1 }}
        />
        <KpiCard
          mainText={`${candidate.contractType}`}
          subTitle="PRISE DE FONCTION"
          thirdText={`le ${new Date(
            candidate.workingSince
          ).toLocaleDateString()} `}
          style={{ flexGrow: 1 }}
        />
        <KpiCard
          mainText={`${guarantorTotalSalary} €`}
          subTitle="NET MENSUEL GARANT"
          thirdText="(avant impôts)"
          style={{ flexGrow: 1 }}
        />
      </Flex>
    </VStack>
  );
}
