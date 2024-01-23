import React from 'react';
import { IGuarantor } from '../../../types/guarantor';
import { ChevronDownIcon, ChevronUpIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Card,
  Flex,
  Heading,
  VStack,
  useBoolean,
  Collapse,
  IconButton,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import {
  PeopleSafeIcon,
  InfoPersoIcon,
  FileStaffIcon,
  TelephoneIcon,
  UserIcon,
  DocumentFolderIcon,
  MoneyIcon,
  QeepsSquareFullIcon,
} from '../../icons/icons';
import { MiniTag } from '../CandidateProfile/MiniTag';
import { DetailInformationCard } from './DetailInformationCard';

interface GuarantorCollapseProps {
  guarantor: IGuarantor;
}

export function GuarantorCollapse({ guarantor }: GuarantorCollapseProps) {
  const [show, setShow] = useBoolean(false);
  //Component example based on a candidate's percentage of documents
  const allDocuments = 5.0;
  const currentDocs = 3.0;
  const documentPercentage = Math.floor((currentDocs / allDocuments) * 100);
  const guarantorPersonalInfo = (
    <DetailInformationCard
      title={'Information personnelles'}
      titleIcon={InfoPersoIcon}
      icons={[TelephoneIcon, EmailIcon, UserIcon]}
      categories={{
        Telephone: guarantor.phoneNumber,
        Mail: guarantor.email,
        'Situation Actuelle': guarantor.maritalStatus,
      }}
    />
  );

  const guarantorProfesionnalInfo = (
    <DetailInformationCard
      title={'Information profesionnelles'}
      titleIcon={InfoPersoIcon}
      icons={[DocumentFolderIcon, DocumentFolderIcon, MoneyIcon, MoneyIcon]}
      categories={{
        'Situation contractuelle': guarantor.contractType,
        'Prise de fonction': guarantor.job,
        'Revenus mensuel net(avant impot)': guarantor.monthlyJobRevenues,
        'Autres revenus': guarantor.otherRevenues,
      }}
    />
  );

  return (
    <>
      <Card justify="flex-start" p="0" w={'100%'} mb={5}>
        <CardHeader>
          <Flex justify={'space-between'} align={'flex-start'} p={'1.5%'}>
            <Flex gap={'2rem'} align={'center'}>
              <QeepsSquareFullIcon boxSize={'4rem'} color="qeeps.original" />
              <VStack align={'start'}>
                <Heading fontWeight="500" fontSize="1.3rem">
                  {guarantor?.firstName} {guarantor?.lastName}
                </Heading>
                <Box w={'100%'}>
                  <MiniTag
                    icon={DocumentFolderIcon}
                    text={guarantor?.contractType}
                  ></MiniTag>
                  {guarantor.livingArrangements ===
                  'Colocation'.toLowerCase() ? (
                    <MiniTag
                      icon={PeopleSafeIcon}
                      text={'Colocation'}
                    ></MiniTag>
                  ) : (
                    <MiniTag icon={PeopleSafeIcon} text={'Seul.e'}></MiniTag>
                  )}
                  {currentDocs ? (
                    <MiniTag
                      icon={FileStaffIcon}
                      text={'Documents'}
                      yellow={documentPercentage < 100 ? true : false}
                      green={documentPercentage === 100 ? true : false}
                    ></MiniTag>
                  ) : (
                    ''
                  )}
                </Box>
              </VStack>
            </Flex>
            <IconButton
              size={'lg'}
              icon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
              color={'qeeps.main'}
              onClick={() => setShow.toggle()}
              aria-label={'Drop-down menu button'}
            ></IconButton>
          </Flex>
        </CardHeader>
        <CardBody
          p={0}
          borderTop="1px solid"
          borderColor={'gray.10'}
          w={'100%'}
        >
          <Collapse
            in={show}
            transition={{ exit: { duration: 0.75 }, enter: { duration: 0.75 } }}
          >
            {guarantorPersonalInfo}
            {guarantorProfesionnalInfo}
          </Collapse>
        </CardBody>
      </Card>
    </>
  );
}
