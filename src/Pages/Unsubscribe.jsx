import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import UFRPE_LOGO from '../assets/images/ufrpe_logo.png';
import api from '../services/api';
import { toasts } from '../utils/toasts';

export const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  function handleUnsubscribe() {
    const data = {
      email,
    };

    if (!email) return toast(toasts.erro.invalidEmail);
    api
      .delete('/email/delete', { data })
      .then((response) => {
        toast(toasts.success.unsubscribed);
        setEmail('');
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast(toasts.erro.error);
      });
  }

  return (
    <Flex
      h={{ base: '93vh', md: '100vh' }}
      align={'center'}
      justify={'center'}
      direction="column"
    >
      <Flex
        h={{ base: '560px', md: '800px' }}
        maxWidth="500px"
        direction="column"
        align={'center'}
        justify={'center'}
        margin={{ base: '2rem 1.75rem', md: '0rem 1.75rem' }}
        paddingBottom="0rem"
      >
        <Image
          src={UFRPE_LOGO}
          boxSize="100px"
          objectFit="contain"
          borderRadius="full"
        />
        <Heading
          margin="32px 0px"
          fontWeight="bold"
          textAlign="center"
          size="lg"
        >
          Vai ficar desinformado?
        </Heading>

        <Text textAlign="center" marginBottom="12px">
          Ok
        </Text>

        <VStack w="300px">
          <InputGroup>
            <InputLeftElement height="2.875rem" pointerEvents="none">
              <AiOutlineMail color="gray.300" />
            </InputLeftElement>
            <Input
              value={email}
              height="2.875rem"
              type="email"
              placeholder="Seu email cadastrado"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <Button
            backgroundColor="#D0342C"
            boxShadow={'rgba(208, 52, 44, 0.39) 0rem .25rem .875rem 0rem;'}
            height="2.875rem"
            w="100%"
            color={'white'}
            _hover={{
              backgroundColor: '#FF665C',
              boxShadow: 'rgba(208, 52, 44, 0.5) 0rem .375rem 1.25rem 0rem',
            }}
            onClick={handleUnsubscribe}
          >
            Desinscrever-se
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
