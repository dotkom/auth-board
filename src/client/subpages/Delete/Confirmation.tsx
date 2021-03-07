import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  Modal,
  useDisclosure,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  deleteAndRedirect: () => void;
};

const Confirmation: React.FC<Props> = ({ deleteAndRedirect }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<WarningTwoIcon />} color="danger" onClick={onOpen}>
        Slett denne klienten, jeg vet hva jeg gjør
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Er du sikker på at du vil slette denne klienten? Dette kan ikke angres. All data slettes permanent.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button maxW={{ sm: 'full' }} onClick={deleteAndRedirect} w={{ sm: 'full' }}>
              Slett
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Confirmation;
