import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Divider,
  Pressable,
} from 'native-base';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Carousel } from './components/Carousel';

const upiList = [
  {
    imageUri:
      'data:image/png;base64,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',

    bankName: 'State Bank of India - 2445',
  },
  {
    imageUri:
      'data:image/jpeg;base64,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',
    bankName: 'Axis Bank of India - 2445',
  },
  {
    imageUri:
      'data:image/png;base64,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',
    bankName: 'Bank of India - 2445',
  },
];

const CarouselLayout = () => {
  return (
    <Box
      px={{ base: '4', md: 0 }}
      py={{ base: '5', md: 0 }}
      _light={{ bg: { base: 'white', md: 'transparent' } }}
      _dark={{ bg: { base: 'coolGray.800', md: 'transparent' } }}
      height={{ base: 64, md: 72 }}
    >
      <Carousel
        images={[
          require('../../assets/man.jpg'),
          require('../../assets/furniture.jpg'),
          require('../../assets/living.jpg'),
          require('../../assets/furniture.jpg'),
        ]}
        height={{ base: 64, md: 72 }}
      />
    </Box>
  );
};

export default function BalanceCheck() {
  return (
    <DashboardLayout title="Balance Check" displaySidebar={false}>
      <CarouselLayout />
      <VStack space="4" mt="4" mx={{ base: 4, md: 0 }}>
        <Box
          rounded="lg"
          _light={{ bg: 'white', borderColor: 'coolGray.200' }}
          _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
          borderRadius={{ base: 4, md: '8' }}
          borderWidth="1"
          p="5"
        >
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
            fontSize="md"
            letterSpacing="1"
          >
            UPI Bank Accounts
          </Text>
          <VStack
            mt="4"
            space="4"
            divider={
              <Divider
                _light={{ bg: 'coolGray.200' }}
                _dark={{ bg: 'coolGray.700' }}
                thickness="1"
              />
            }
          >
            {upiList.map((item, index) => {
              return (
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  key={index}
                >
                  <HStack alignItems="center" space="5">
                    <Image
                      source={{
                        uri: item.imageUri,
                      }}
                      alt="logo"
                      height="9"
                      width="9"
                      borderRadius="4"
                    />
                    <Text
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {item.bankName}
                    </Text>
                  </HStack>
                  <Pressable
                    onPress={() => {
                      console.log('hello');
                    }}
                  >
                    <Icon
                      as={Feather}
                      name="chevron-right"
                      size="6"
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.300' }}
                    />
                  </Pressable>
                </HStack>
              );
            })}
          </VStack>
        </Box>
        <Box
          rounded="lg"
          _light={{ bg: 'white', borderColor: 'coolGray.200' }}
          _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
          borderRadius={{ base: 4, md: '8' }}
          borderWidth="1"
          py={{ base: 3, md: 4 }}
          px={{ base: 4, md: 5 }}
        >
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
            fontSize="md"
          >
            Wallet
          </Text>
          <HStack justifyContent="space-between" alignItems="center" pt="1">
            <HStack alignItems="center" space="3">
              <Icon
                as={MaterialCommunityIcons}
                name="wallet"
                size="8"
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'violet.500' }}
              />

              <Text
                _light={{ color: { base: 'coolGray.500', md: 'coolGray.800' } }}
                _dark={{ color: { base: 'coolGray.50', md: 'coolGray.50' } }}
              >
                Wallet Pay
              </Text>
            </HStack>
            <Pressable
              onPress={() => {
                console.log('hello');
              }}
            >
              <Icon
                as={Feather}
                name="chevron-right"
                size="6"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.300' }}
              />
            </Pressable>
          </HStack>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
