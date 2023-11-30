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
import { AiOutlineMail } from 'react-icons/ai';
import api from '../services/api';
import { useEffect, useState } from 'react';
import UFRPE_LOGO from '../assets/images/ufrpe_logo.png';
import { toasts } from '../utils/toasts';

export const Newsletter = () => {
  const [subscribers, setSubscribers] = useState([]);
  const toast = useToast();
  const [email, setEmail] = useState('');

  function validateEmail(email) {
    const regexEmail =
      /^[a-zA-Z]{3,}@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|ufrpe\.br|ufpe\.br)$/;

    return regexEmail.test(email);
  }

  function handleSubscribe() {
    if (!validateEmail(email)) return toast(toasts.erro.invalidEmail);

    const data = {
      email,
    };
    if (!email) return toast(toasts.erro.invalidEmail);
    api
      .post('/email/new', data)
      .then((response) => {
        toast(toasts.success.subscribed);
        console.log(response.data.message);
        setEmail('');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;

        if (errorMessage === 'Email já cadastrado!') {
          toast(toasts.erro.alreadyExists);
        } else if (errorMessage === 'Email inválido!') {
          toast(toasts.erro.invalidEmail);
        } else toast(toasts.erro.error);
      });
  }

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await api.get('/email/count');
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
        paddingBottom="0px"
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
          Notícias da UFRPE para quem não visita aquele site.
        </Heading>

        <Text textAlign="center" marginBottom=".75rem">
          Junte-se a nossa newsletter!
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
            colorScheme="blue"
            height="46px"
            w="100%"
            color={'white'}
            onClick={handleSubscribe}
          >
            Inscrever-se
          </Button>
          <Text color="gray" textAlign="center" marginBottom=".75rem">
            <Text as="span" fontWeight="bold">
              {' '}
              {30 - subscribers} vagas
            </Text>{' '}
            restantes
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};
