import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Text,
  Badge,
  Button
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={4}
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        mb={10}
        mt={10}
      >
        <Text fontSize="3xl" fontWeight="bold">
          ⚡️Welcome to Sprompt
        </Text>
        <Badge variant="subtle" colorScheme="pink" ml={1}>
          BETA
        </Badge>
      </Flex>
      <Text color="gray.500" mb={10}>
        The future social app of web3
      </Text>
      <Button variant="solid" size="md">
        Connect to WorldCoin Wallet
      </Button>
    </Flex>
  </ChakraProvider>
)

export default App
