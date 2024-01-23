import { useEffect, useState } from 'react';
import { Flex, Heading, Tag, Text, VStack } from '@chakra-ui/react';
import { QeepsPassportIcon } from '../icons/icons';
import { ProfileOverview } from './AgentView/CandidateProfile/ProfileOverview';
import { Kpis } from './KPIs/Kpis';
import { MenuButtonGroup } from './AgentView/Details/DetailMenu';
import { ICandidate } from '../types/candidate';

export default function AgentPageTitle() {
  const [candidate, setCandidate] = useState<ICandidate>();

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        console.log(process.env.REACT_APP_API_BASE_URL);

        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/candidates`
        );
        const candidates = await res.json();
        setCandidate(candidates.results[0]);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchCandidateData();
  }, []);

  if (candidate) {
    return (
      <VStack align={'flex-start'} w="100%">
        <Flex gap="1rem" align="center">
          <QeepsPassportIcon color="qeeps.main" boxSize={6} />
          <Heading size="xl" color="qeeps.main">
            Passeport QEEPS
          </Heading>
          <Tag
            size="sm"
            variant="solid"
            color="qeeps.sub"
            backgroundColor="#D9DAFC"
            p="0.25rem 0.25rem 0.25rem 0.25rem"
            borderRadius="0.5rem"
          >
            BETA
          </Tag>
        </Flex>
        <Text color="qeeps.main" w={'65%'}>
          Bienvenue sur votre passeport. Retrouvez toutes les infos sur vous,
          vos co-candidats ainsi que vos garants.
        </Text>
        <ProfileOverview candidate={candidate} />
        <Kpis candidate={candidate} />
        <MenuButtonGroup candidate={candidate} documents={true} />
      </VStack>
    );
  } else return <div>Candidate not found</div>;
}
