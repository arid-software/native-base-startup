import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  Center,
  Divider,
  ScrollView,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconCheckmark from './components/IconCheckmark';

function Item(props: any) {
  const list = [
    {
      feature: 'Invest in Direct “Commission Zero ” fund',
      prime: true,
      basic: true,
    },
    {
      feature: 'Get Risk free portfolio & Asset Allocations',
      prime: true,
      basic: true,
    },
    {
      feature: 'Portfolio investment from another platform',
      prime: true,
      basic: true,
    },
    {
      feature: 'Income tax return filing inn Capital Gaining',
      prime: true,
      basic: false,
    },
    {
      feature: 'Unlimited risk free, SIP, Goals management',
      prime: true,
      basic: false,
    },
    {
      feature: 'Get Risk free portfolio & Asset Allocations',
      prime: true,
      basic: false,
    },
    {
      feature: 'Portfolio investment from another platform',
      prime: true,
      basic: false,
    },
    {
      feature: 'Unlimited risk free, SIP, Goals management',
      prime: true,
      basic: false,
    },
    {
      feature: 'Get Risk free portfolio & Asset Allocations',
      prime: true,
      basic: false,
    },
    {
      feature: 'Portfolio investment from another platform',
      prime: true,
      basic: false,
    },
    {
      feature: 'Get Risk free portfolio & Asset Allocations',
      prime: true,
      basic: false,
    },
    {
      feature: 'Portfolio investment from another platform',
      prime: true,
      basic: false,
    },
    {
      feature: 'Get Risk free portfolio & Asset Allocations',
      prime: true,
      basic: false,
    },
    {
      feature: 'Portfolio investment from another platform',
      prime: true,
      basic: false,
    },
  ];
  const textColor = useColorModeValue('coolGray.800', 'white');
  return (
    <>
      {list.map((item, index) => {
        return (
          <Box key={index}>
            <HStack
              _light={{ bg: 'coolGray.50' }}
              _dark={{
                bg: { base: 'coolGray.700', md: 'coolGray.900' },
              }}
              py="2"
            >
              <Box
                flex={1}
                py="3"
                px="2"
                _text={{ color: textColor, fontSize: 'sm' }}
              >
                {item.feature}
              </Box>
              <Center w="20">
                {item.prime ? (
                  <Box mr={{ md: 16 }}>
                    <IconCheckmark />
                  </Box>
                ) : null}
              </Center>
              <Center w="20">{item.basic ? <IconCheckmark /> : null}</Center>
            </HStack>
            {index == list.length - 1 ? null : (
              <Divider
                _light={{ bg: 'coolGray.300' }}
                _dark={{ bg: 'coolGray.500' }}
                width="100%"
              />
            )}
          </Box>
        );
      })}
    </>
  );
}

function FeaturesHeading(props: any) {
  return (
    <>
      <HStack alignItems="center" space={{ md: 10 }} mt="7" mb="4">
        <Text
          flex={1}
          ml={{ base: 1, md: 2 }}
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
          fontWeight="medium"
          fontSize={{ base: 'md', md: 'xl' }}
        >
          Features
        </Text>
        <Center
          w="74"
          px="3"
          py="1"
          bg="red.400"
          _text={{
            fontSize: 'xs',
            color: 'white',
            fontWeight: 'semibold',
          }}
        >
          PRIME
        </Center>
        <Center
          w="74"
          px="3"
          py="1"
          bg="coolGray.600"
          ml="2"
          _text={{
            fontSize: 'xs',
            color: 'white',
            fontWeight: 'semibold',
          }}
        >
          BASIC
        </Center>
      </HStack>
    </>
  );
}
export default function (props: any) {
  return (
    <DashboardLayout title={'Subscription Features'}>
      <VStack
        safeAreaBottom
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        borderRadius={{ md: '8' }}
        px={{
          md: 10,
        }}
      >
        <VStack mx="4">
          <ScrollView>
            <FeaturesHeading />
            <Item />
          </ScrollView>
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
