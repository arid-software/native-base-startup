import React from 'react';
import {
  Box,
  VStack,
  Button,
  Image,
  StatusBar,
  Center,
  Stack,
} from 'native-base';

export default function Splash(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box safeAreaTop bg="primary.900" />
      <Center my="auto" bg="primary.900" flex="1" p={{ md: 8 }}>
        <Stack
          flexDirection={{ base: 'column', md: 'row' }}
          w="100%"
          maxW={{ md: '1016px' }}
          flex={{ base: '1', md: undefined }}
        >
          <Center w="100%" flex={1}>
            <Box
              maxW="500"
              w="100%"
              px={{
                base: '4',
                md: '20',
              }}
              py={{
                base: '8',
                md: '32',
              }}
              rounded={{ md: 'xl' }}
              bg={{ md: 'primary.800' }}
            >
              <Box
                mb={{
                  base: '10',
                  md: '16',
                }}
                flexDirection={{
                  base: 'column',
                  md: 'row',
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  size={{ base: '24', md: '16' }}
                  resizeMode={'contain'}
                  alt="NativeBase Logo"
                  source={require('./components/logo-nb.png')}
                  mb={{
                    base: '24',
                    md: '0',
                  }}
                />
                <Image
                  h="8"
                  w={{ base: '64', md: '72' }}
                  resizeMode="contain"
                  alt="NativeBase Startup plus"
                  source={require('./components/logo-startup-plus.png')}
                />
              </Box>
              <VStack space="4">
                <Button
                  py="4"
                  onPress={() => {}}
                  _text={{
                    color: 'primary.900',
                  }}
                  _hover={{ bg: 'coolGray.200' }}
                  bg="coolGray.100"
                >
                  LOGIN
                </Button>
                <Button
                  py="4"
                  _text={{
                    // color: 'coolGray.50:alpha.80',
                    color: 'coolGray.50',
                  }}
                  onPress={() => {}}
                  variant="outline"
                  colorScheme="coolGray"
                  borderColor="coolGray.400"
                >
                  SIGN UP
                </Button>
              </VStack>
            </Box>
          </Center>
        </Stack>
      </Center>
    </>
  );
}
