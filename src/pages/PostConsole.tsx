import React, { useState } from 'react';
import { ChakraProvider, Container, Flex, Text, Input, Button, Textarea, Grid, Image } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import axios from 'axios';

export const PostConsole = () => {
  const [prompt1, setPrompt1] = useState<string>('');
  const [prompt2, setPrompt2] = useState<string>('');
  const [codeSnippet, setCodeSnippet] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const generatedCode = await generateCode(prompt1);
      setCodeSnippet(generatedCode);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateCode = async (prompt: string): Promise<string> => {
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const apiKey = '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';

    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    const codeSnippet = response.data.choices[0].text.trim();
    return codeSnippet;
  };

  return (
    <ChakraProvider>
      <Container minWidth={800} marginTop={150}>
        <Flex flexDirection="column" justifyContent="space-around">
          <Flex justifyContent="flex-end" mb={4}>
            <Text>World ID </Text>
          </Flex>
          <Flex justifyContent="space-between" mb={4}>
            <Flex>
              <Text mr={4}>Prompt: </Text>
              <Input value={prompt1} onChange={(e) => setPrompt1(e.target.value)} />
            </Flex>
            <Flex>
              <Button variant="solid" size="md" onClick={handleSubmit}>
                Send
              </Button>
            </Flex>
          </Flex>
          <Flex mb={4}>
            <Flex mr={4}>
              <Text>Body:</Text>
            </Flex>
            <Textarea value={prompt2} onChange={(e) => setPrompt2(e.target.value)} placeholder={codeSnippet ?? ""} />
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
  );
};
