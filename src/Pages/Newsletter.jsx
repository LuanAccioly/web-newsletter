import {
  Box,
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
import { AiOutlineMail } from 'react-icons/ai';
import api from '../services/api';
import { useEffect, useState } from 'react';
import UFRPE_LOGO from '../assets/images/ufrpe_logo.png';

export const Newsletter = () => {
  const toasts = {
    erro: {
      invalidEmail: {
        title: 'Email inválido',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      },
      alreadyExists: {
        title: 'Email já cadastrado',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      },
      error: {
        title: 'Erro ao cadastrar email',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      },
    },
    success: {
      title: 'Email cadastrado com sucesso :D',
      position: 'top-right',
      status: 'success',
      isClosable: true,
    },
  };
  const [subscribers, setSubscribers] = useState([]);
  const toast = useToast();
  const [email, setEmail] = useState('');

  function handleSubscribe() {
    const data = {
      email,
    };
    if (!email) return toast(toasts.erro.invalidEmail);
    api
      .post('/setemail', data)
      .then((response) => {
        console.log(response);
        toast(toasts.success);
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;

        if (errorMessage === 'Email já cadastrado!') {
          toast(toasts.erro.alreadyExists);
        } else if (errorMessage === 'Email inválido!') {
          toast(toasts.erro.invalidEmail);
        } else toast(toasts.erro.error);
      });

    setEmail('');
  }

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await api.get('/getemails');
        setSubscribers(response.data.countEmails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubscribers();
  }, []);

  return (
    <Flex
      h={{ base: '93vh', md: '100vh' }}
      align={'center'}
      justify={'center'}
      direction="column"
    >
      <Flex
        h={{ base: '35rem', md: '50rem' }}
        maxWidth="31.25rem"
        direction="column"
        align={'center'}
        justify={'center'}
        margin={{ base: '32px 28px', md: '0px 28px' }}
      >
        <Image
          src={UFRPE_LOGO}
          boxSize="6.25rem"
          objectFit="contain"
          borderRadius="full"
        />
        <Heading
          margin="2rem 0rem"
          fontWeight="bold"
          textAlign="center"
          size="lg"
        >
          Notícias da UFRPE para quem não gosta daquele site.
        </Heading>

        <Text textAlign="center" marginBottom=".75rem">
          {' '}
          Junte-se a nossa turma de
          <Text as="span" fontWeight="bold">
            {' '}
            {subscribers} <Text as="del">miseráveis</Text> estudantes:
          </Text>
        </Text>
        <VStack w="18.75rem">
          <InputGroup>
            <InputLeftElement height="46px" pointerEvents="none">
              <AiOutlineMail color="gray.300" />
            </InputLeftElement>
            <Input
              value={email}
              height="46px"
              type="email"
              placeholder="Seu email principal"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <Button
            backgroundColor={'rgb(0, 93, 208)'}
            boxShadow={'rgba(0, 97, 219, 0.39) 0px 4px 14px 0px;'}
            height="46px"
            w="100%"
            color={'white'}
            onClick={handleSubscribe}
          >
            Inscrever-se (É grátis, pobre kk)
          </Button>
        </VStack>
      </Flex>
      <Box padding="10px" display="flex" alignItems="end" flex="1">
        <Text textAlign="center" color="gray">
          Qualquer semelhança com o site do teló é mera coincidência
        </Text>
      </Box>
    </Flex>
  );
};
