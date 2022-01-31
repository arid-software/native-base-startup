import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Avatar,
  Center,
  Button,
  Input,
  Select,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function () {
  return (
    <DashboardLayout title="UPI Payment" displaySidebar={false}>
      <VStack
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        borderRadius={{ md: '8' }}
        borderWidth="1"
        height={{ base: '100%', md: '95%' }}
        justifyContent="space-between"
        space="8"
      >
        <Center mt={{ base: 5, md: 9 }}>
          <VStack width="100%" alignItems="center" space="5">
            <Avatar
              size="120"
              source={{
                uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
              }}
            />
            <VStack space="2" alignItems="center">
              <HStack alignItems="center" space="1">
                <Text
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="md"
                  fontWeight="medium"
                >
                  Paying to
                </Text>
                <Text
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Kevin John
                </Text>
              </HStack>
              <HStack alignItems="center" space="1">
                <Text
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Kevinjohn21@okaxis
                </Text>
              </HStack>
            </VStack>
            <VStack
              space="4"
              width="100%"
              px={{ base: 4, md: '80px', lg: '140px' }}
            >
              <Input
                placeholder="Enter Amount"
                h="12"
                p="4"
                fontSize="sm"
                _dark={{ borderColor: 'coolGray.600' }}
              />
              <Select
                placeholder="Select Bank"
                height="12"
                p="4"
                _dark={{ borderColor: 'coolGray.600' }}
              >
                <Select.Item label="SBI" value="sbi" />
              </Select>
            </VStack>
          </VStack>
        </Center>
        <Box
          width="100%"
          px={{ base: 4, md: '80px', lg: '140px' }}
          mb={{ base: 4, md: 8 }}
        >
          <Button
            borderRadius="4"
            width="100%"
            py="13px"
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
            onPress={() => console.log('Send')}
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              letterSpacing: '0.6',
              color: 'coolGray.50',
            }}
          >
            SEND
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
