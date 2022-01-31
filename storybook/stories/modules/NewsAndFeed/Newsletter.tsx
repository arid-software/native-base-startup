import React from 'react';
import {
  Box,
  Text,
  VStack,
  useColorMode,
  FormControl,
  Stack,
  Input,
  Button,
} from 'native-base';
import IconLetterLight from './components/IconLetterLight';
import DashboardLayout from '../../layouts/DashboardLayout';
export default function NewsLetter(props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout
        displayScreenTitle
        title="Newsletter"
        displaySidebar={false}
      >
        <VStack
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={1}
          px={{ base: 4, md: 40 }}
          py={{ base: 4 }}
          pb={{ md: 8 }}
          pt={{ md: 10 }}
          flex={1}
        >
          <Box alignItems="center" mt={{ base: 12, md: 8 }}>
            {colorMode === 'dark' ? <IconLetterLight /> : <IconLetterLight />}
          </Box>
          <Text
            fontSize="2xl"
            fontWeight={{ md: 'bold', base: 'semibold' }}
            textAlign="center"
            letterSpacing="0.6"
            borderColor="coolGray.400"
            mt={{ base: 12, md: 16 }}
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            Subscribe to our Newsletter
          </Text>
          <Text
            letterSpacing="0.4"
            fontSize="sm"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.300' }}
            mt="3"
            lineHeight="xl"
            textAlign="center"
            fontWeight="normal"
          >
            Sign up for our weekly newsletters. To get latest news, updates and
            amazing Offers delivered directly to your inbox.
          </Text>
          <FormControl isRequired>
            <Stack mt={{ base: 5, md: 20 }}>
              <Input
                type="text"
                fontSize="md"
                fontWeight="normal"
                p={{ base: 4, md: 4 }}
                placeholder="Enter your mail ID"
                _dark={{ borderColor: 'coolGray.400', color: 'coolGray.400' }}
                _light={{ borderColor: 'coolGray.400', color: 'coolGray.500' }}
              />
            </Stack>
          </FormControl>
          <Button
            borderRadius={4}
            size="lg"
            p={{ base: 0, md: 3 }}
            height={12}
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700' }}
            mt={{ base: 5 }}
            mb={{ base: 8 }}
            onPress={() => console.log('button pressed')}
            _text={{
              fontSize: 'sm',
              fontWeight: 'semibold',
              color: 'coolGray.50',
            }}
          >
            SUBSCRIBE NOW
          </Button>
        </VStack>
      </DashboardLayout>
    </>
  );
}
