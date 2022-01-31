import React from 'react';
import {
  HStack,
  Text,
  VStack,
  Image,
  useColorMode,
  Divider,
  Box,
  Pressable,
} from 'native-base';

import DashboardLayout from '../../layouts/DashboardLayout';

const mutualFundList = [
  {
    imageUrl: require('../../assets/abmf.png'),
    name: 'Aditya Birla Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
  {
    imageUrl: require('../../assets/abmf.png'),

    name: 'Aditya Birla Blue Chip- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
  {
    imageUrl: require('../../assets/uti-mutual.jpeg'),
    name: 'UTI Flexi Cap Mutual Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
  {
    imageUrl: require('../../assets/axis-mutual.jpg'),

    name: 'Axis Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
  {
    imageUrl: require('../../assets/birla.jpg'),

    name: 'Axis Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
  {
    imageUrl: require('../../assets/mutualfund.jpeg'),

    name: 'Axis Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '₹12,000.00',
    current: 'Current Value',
    currentValue: '₹15,000.00',
    return: 'Returns',
    returnvalue: '25%',
  },
];

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout title="Mutual Fund Portfolio" displaySidebar={false}>
        <HStack
          mt={{ base: 4, md: 1 }}
          py="3"
          borderRadius="4"
          space={{ md: 3 }}
          mx={{ base: 4, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.700' } }}
          _light={{ bg: { base: 'white', md: 'primary.50' } }}
        >
          <VStack
            flex={1}
            px={{ md: 8 }}
            py={{ md: 6 }}
            borderRadius={{ md: 8 }}
            alignItems="center"
            ml={{ base: 0, md: 0 }}
            mr={{ base: 5, md: 0 }}
            space={{ base: 1, md: 0 }}
            flexDirection={{ md: 'row' }}
            justifyContent="space-between"
            _light={{ bg: { md: 'white' } }}
            _dark={{ bg: { md: 'coolGray.900' } }}
          >
            <Text
              fontSize="xs"
              mr={{ base: 5 }}
              _dark={{ color: 'coolGray.300' }}
              _light={{ color: 'coolGray.800' }}
            >
              Investment
            </Text>
            <Text
              fontSize="sm"
              fontWeight="bold"
              _dark={{ color: 'coolGray.100' }}
              _light={{ color: 'coolGray.700' }}
            >
              ₹ 12,000.00
            </Text>
          </VStack>
          <Divider
            orientation="vertical"
            display={{ md: 'none' }}
            _light={{ bg: 'coolGray.500' }}
            _dark={{ bg: 'coolGray.300' }}
          />
          <VStack
            flex={1}
            px={{ md: 8 }}
            py={{ md: 6 }}
            alignItems="center"
            space={{ base: 1 }}
            borderRadius={{ md: 8 }}
            flexDirection={{ md: 'row' }}
            justifyContent="space-between"
            _light={{ bg: { md: 'white' } }}
            _dark={{ bg: { md: 'coolGray.900' } }}
          >
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.300' }}
              mr={{ base: 12 }}
              fontSize="xs"
            >
              Return
            </Text>
            <Text color="emerald.500" fontSize="sm" fontWeight="bold">
              ₹ 20,000.00
            </Text>
          </VStack>
        </HStack>
        <Text
          mt="5"
          fontSize="md"
          fontWeight="medium"
          display={{ md: 'none' }}
          px={{ base: 4 }}
          _dark={{ color: 'white' }}
          _light={{ color: 'coolGray.800' }}
        >
          Portfolio Details
        </Text>
        <HStack
          mt="1"
          px="8"
          py={{ md: 5 }}
          _light={{ bg: 'white' }}
          borderRadius={{ md: 8 }}
          _dark={{ bg: { md: 'coolGray.900' } }}
          display={{ base: 'none', md: 'flex' }}
        >
          <Text
            w="40%"
            fontSize="md"
            _light={{
              color: 'coolGray.500',
            }}
            _dark={{
              color: 'coolGray.400',
            }}
          >
            Company Name
          </Text>
          <Text
            w="20%"
            fontSize="md"
            textAlign="center"
            _light={{
              color: 'coolGray.500',
            }}
            _dark={{
              color: 'coolGray.400',
            }}
          >
            Investment
          </Text>
          <Text
            w="20%"
            fontSize="md"
            textAlign="center"
            _light={{
              color: 'coolGray.500',
            }}
            _dark={{
              color: 'coolGray.400',
            }}
          >
            Current Value
          </Text>
          <Text
            w="20%"
            fontSize="md"
            textAlign="center"
            _light={{
              color: 'coolGray.500',
            }}
            _dark={{
              color: 'coolGray.400',
            }}
          >
            Returns
          </Text>
        </HStack>
        <VStack mt="1" space="1">
          {mutualFundList.map((item: any, idx: number) => {
            return (
              <VStack
                py="2"
                px="4"
                mt={{ base: 2, md: 0 }}
                key={idx}
                _light={{ bg: 'white' }}
                _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
                flexDirection={{ md: 'row' }}
                borderRadius={{ md: 8 }}
              >
                <HStack space="2" w={{ md: '40%' }}>
                  <Image
                    source={item.imageUrl}
                    size="xs"
                    width="12"
                    height="12"
                    borderRadius="4"
                    alt="Alternate Text"
                  />
                  <VStack maxW="70%" space={{ md: 2, base: 0 }}>
                    <Text
                      fontSize="sm"
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.100' }}
                      fontWeight="medium"
                    >
                      {item.name}
                    </Text>
                    <Box
                      w="12"
                      alignItems="center"
                      _light={{ bg: 'emerald.400' }}
                      _dark={{ bg: 'emerald.600' }}
                      _text={{ fontSize: 'xs', color: 'white' }}
                    >
                      {item.sip}
                    </Box>
                  </VStack>
                </HStack>
                <HStack
                  mb={{ md: 6, base: 2 }}
                  mt="3"
                  w={{ md: '60%' }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <VStack w={{ md: '33%' }}>
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      mb={{ base: 1, md: 0 }}
                      display={{ md: 'none' }}
                      _dark={{ color: 'coolGray.400' }}
                      _light={{ color: 'coolGray.500' }}
                    >
                      {item.investment}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      textAlign={{ md: 'center' }}
                      _dark={{ color: 'white' }}
                      _light={{ color: 'coolGray.800' }}
                    >
                      {item.investmentValue}
                    </Text>
                  </VStack>
                  <VStack w={{ md: '33%' }}>
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      mb={{ base: 1, md: 0 }}
                      display={{ md: 'none' }}
                      _dark={{ color: 'coolGray.400' }}
                      _light={{ color: 'coolGray.500' }}
                    >
                      {item.current}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      textAlign={{ md: 'center' }}
                      _dark={{ color: 'white' }}
                      _light={{ color: 'coolGray.800' }}
                    >
                      {item.currentValue}
                    </Text>
                  </VStack>
                  <VStack w={{ md: '33%' }}>
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      mb={{ base: 1, md: 0 }}
                      display={{ md: 'none' }}
                      _dark={{ color: 'coolGray.400' }}
                      _light={{ color: 'coolGray.500' }}
                    >
                      {item.return}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="emerald.500"
                      fontWeight="semibold"
                      pr={{ md: 6 }}
                      textAlign={{ md: 'center' }}
                    >
                      {item.returnvalue}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
        <HStack
          display={{ base: 'none', md: 'flex' }}
          space="2"
          alignItems="center"
          mt="2"
          justifyContent="flex-end"
        >
          <Pressable
            height={8}
            width={8}
            borderRadius={4}
            _light={{
              bg: 'white',
              color: 'coolGray.500',
              borderColor: 'primary.700',
            }}
            _dark={{
              bg: 'customGray',
              color: 'coolGray.500',
              borderColor: 'coolGray.500',
            }}
            textAlign="center"
            justifyContent="center"
            borderWidth={1}
          >
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="sm"
            >
              1
            </Text>
          </Pressable>
          <Pressable
            height={8}
            width={8}
            borderRadius={4}
            _light={{ bg: 'white' }}
            _dark={{ bg: 'customGray' }}
            textAlign="center"
            justifyContent="center"
            fontSize="sm"
          >
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              2
            </Text>
          </Pressable>
        </HStack>
      </DashboardLayout>
    </>
  );
}
