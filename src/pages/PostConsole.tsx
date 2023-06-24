
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
  Container,
  Flex,
  Text,
  Button,
  Textarea,
  Grid,
  Image
} from '@chakra-ui/react'
import { EmailIcon, TriangleUpIcon } from '@chakra-ui/icons'



export const PostConsole = () => 
<ChakraProvider resetCSS>
    <Container minWidth={800} marginTop={150}>
      <Flex flexDirection="column" justifyContent="space-around">
        <Flex justifyContent="flex-end" mb={4}>
          <Text>World ID </Text>
        </Flex>
        <Flex justifyContent="space-between" mb={4}>
          <Flex>
            <Text mr={4}>Prompt 1: </Text>
            <Input />
          </Flex>
          <Flex>
            <Button variant="solid" size="md">
              Send
            </Button>
          </Flex>
        </Flex>
        <Flex mb={4}>
          <Flex mr={4}>
            <Text>Prompt 2:</Text>
          </Flex>
          <Textarea />
        </Flex>
        <Flex alignItems="center">
          <Grid templateColumns="1fr 5fr 1fr 1fr" gap={3}>
            <Image height={30} width={30} htmlHeight={30} htmlWidth={30} />
            <Text>
              Hello Dogma - Unexpected creation journey of a Design Lab.
            </Text>
            <Text>/Pak</Text>
            <Flex>
              <Text>897</Text>
              <TriangleUpIcon />
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Container>
  </ChakraProvider>

//   <div>
//     <h2>Hello from page A</h2>
//     <br />
//     <Link to="/pageB">Navigate to Page B</Link>
//   </div>