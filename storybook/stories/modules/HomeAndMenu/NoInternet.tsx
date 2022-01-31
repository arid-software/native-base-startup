import React from 'react';
import { Text, VStack, Button, Box } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconInternet from './components/IconInternet';

export default function (props: any) {
  return (
    <DashboardLayout title="No Internet" displaySidebar={false}>
      <VStack
        space="2"
        _dark={{
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
          borderColor: 'coolGray.800',
        }}
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
        overflow="hidden"
        px={{ base: 4, md: 10 }}
        py={{ base: 4, md: 10 }}
        flex={1}
      >
        <VStack
          alignItems="center"
          _light={{
            bg: { md: 'white' },
          }}
          _dark={{
            bg: { md: 'coolGray.900' },
          }}
        >
          <IconInternet mt={{ base: '2', md: '16' }} />
          <Text
            mt="6"
            fontSize="lg"
            fontWeight="bold"
            textAlign="center"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            You are Offline
          </Text>
          <Text
            mt="2"
            mb="7"
            fontSize="sm"
            textAlign="center"
            w={{ base: '100%', md: '50%' }}
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.300' }}
          >
            Check your internet connection. We cannot detect an internet
            connection.
          </Text>
        </VStack>
        <Box px={{ md: 40, base: 32 }} mt={{ md: 'auto' }}>
          <Button
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
            _text={{ fontSize: 'sm', fontWeight: 'medium' }}
            onPress={() => {
              console.log('hello');
            }}
          >
            REFRESH
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
