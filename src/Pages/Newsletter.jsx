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
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';

export const Newsletter = () => {
  const UFRPE_LOGO =
    'https://upload.wikimedia.org/wikipedia/commons/8/83/Bras%C3%A3o_UFRPE.png';
  return (
    <Flex
      // h={{ base: '35rem', md: '50rem' }}
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
            8 <Text as="del">miseráveis</Text> estudantes:
          </Text>
        </Text>
        <VStack w="18.75rem">
          <InputGroup>
            <InputLeftElement height="46px" pointerEvents="none">
              <AiOutlineMail color="gray.300" />
            </InputLeftElement>
            <Input
              height="46px"
              type="email"
              placeholder="Seu email principal"
            />
          </InputGroup>
          <Button
            backgroundColor={'rgb(0, 93, 208)'}
            boxShadow={'rgba(0, 97, 219, 0.39) 0px 4px 14px 0px;'}
            height="46px"
            w="100%"
            color={'white'}
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
