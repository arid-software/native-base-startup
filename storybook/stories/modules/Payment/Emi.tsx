import React from 'react';
import {
  Icon,
  Text,
  HStack,
  VStack,
  Center,
  Divider,
  Box,
  Pressable,
  Hidden,
} from 'native-base';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const cardDetails = [
  {
    holderName: 'Hello John',
    supportText: 'Your account summary',
    bankName: 'Bank of India',
    accountNumber: '2345 XXXX XXXX 3423',
    creditText: 'Credit Limit',
    creditLimitAmount: '₹50,000.00',
    availableText: 'Available Limit',
    availableLimitAmount: '₹30,000.00',
  },
];

const transactions = [
  {
    dateOfTransaction: '12',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Ref# 123246456466',
    iconName: 'rupee',
    amount: '1635.00',
  },
  {
    dateOfTransaction: '13',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Ref# 123246456466',
    iconName: 'rupee',
    amount: '1635.00',
  },
  {
    dateOfTransaction: '14',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Ref# 123246456466',
    iconName: 'rupee',
    amount: '1635.00',
  },
  {
    dateOfTransaction: '15',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Ref# 123246456466',
    iconName: 'rupee',
    amount: '1635.00',
  },
  {
    dateOfTransaction: '16',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Ref# 123246456466',
    iconName: 'rupee',
    amount: '1635.00',
  },
];

const CARD_HEIGHT = 210;

const CreditCard = ({ item }: any) => {
  return (
    <Box
      w={'100%'}
      h={CARD_HEIGHT}
      shadow="2"
      px="7"
      py="4"
      borderRadius="12"
      bg={{
        linearGradient: {
          colors: ['red.400', 'violet.900'],
          start: [0, 0],
          end: [1, 1],
        },
      }}
    >
      <VStack space="1">
        <Text fontSize="md" fontWeight="bold" color="coolGray.50">
          {item.holderName}
        </Text>
        <Text fontSize="xs" color="coolGray.50" fontWeight="normal" mt="1">
          {item.supportText}
        </Text>
        <VStack>
          <Text fontSize="md" fontWeight="bold" color="coolGray.50">
            {item.bankName}
          </Text>
          <Text fontSize="xl" color="coolGray.50" fontWeight="medium">
            {item.accountNumber}
          </Text>
        </VStack>
        <Divider my="3" _dark={{ bg: 'coolGray.50' }} />
        <HStack justifyContent="space-between">
          <VStack>
            <Text color="coolGray.50" fontSize="xs">
              {item.creditText}
            </Text>
            <Text fontWeight="bold" color="coolGray.50" fontSize="sm">
              {item.creditLimitAmount}
            </Text>
          </VStack>
          <VStack>
            <Text color="coolGray.50" fontSize="xs">
              {item.availableText}
            </Text>
            <Text fontWeight="bold" color="coolGray.50" fontSize="sm">
              {item.availableLimitAmount}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

const RecentTransactions = () => {
  return (
    <Box
      rounded="lg"
      px="4"
      py="5"
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
      borderRadius="6"
      borderWidth="1"
      flex={{ md: 1 }}
    >
      <Text
        fontSize="sm"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
        fontWeight="semibold"
      >
        Recent Transactions
      </Text>
      {transactions.map((item, index) => {
        return (
          <VStack key={index} mt={1}>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center" space="3" mt={{ base: 1 }}>
                <Center
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.800' }}
                  p="2"
                  borderRadius="4"
                >
                  <Text
                    fontSize="10"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                    fontWeight="semibold"
                  >
                    {item.dateOfTransaction}
                  </Text>
                  <Text
                    fontSize="8"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.300' }}
                  >
                    {item.monthOfTransaction}
                  </Text>
                </Center>
                <VStack>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    {item.companyName}
                  </Text>
                  <Text
                    fontSize="xs"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  >
                    {item.refNumber}
                  </Text>
                </VStack>
              </HStack>
              <HStack alignItems="center">
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  ₹{item.amount}
                </Text>
              </HStack>
            </HStack>
            {index == transactions.length - 1 ? null : (
              <Divider
                my="3"
                _dark={{ bg: 'coolGray.500' }}
                _light={{ bg: 'coolGray.300' }}
              />
            )}
          </VStack>
        );
      })}
    </Box>
  );
};

const CurrentStatement = () => {
  return (
    <Box
      _light={{ bg: 'coolGray.50', borderColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
      borderWidth="1"
      rounded="lg"
    >
      <Pressable>
        <HStack justifyContent="space-between" alignItems="center" py="3">
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="semibold"
            letterSpacing="0.2"
            px="4"
          >
            Current Statement
          </Text>
          <Pressable
            onPress={() => {
              console.log('hello');
            }}
          >
            <Icon
              as={Feather}
              name="chevron-right"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.200' }}
              size="6"
              mr="6"
            />
          </Pressable>
        </HStack>
      </Pressable>
      <Divider _dark={{ bg: 'coolGray.500' }} _light={{ bg: 'coolGray.300' }} />
      <HStack alignItems="center" py={'3'}>
        <VStack flex={1} alignItems="center">
          <Text
            fontSize="xs"
            fontWeight="normal"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Total Due
          </Text>
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ₹1635.00
            </Text>
          </HStack>
        </VStack>
        <Divider
          my="3"
          _dark={{ bg: 'coolGray.500' }}
          _light={{ bg: 'coolGray.300' }}
          orientation="vertical"
        />
        <VStack flex={1} alignItems="center">
          <Text
            fontSize="xs"
            fontWeight="normal"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Last Month Due
          </Text>
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ₹4540.00
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

const UnbilledAndLastPaid = () => {
  return (
    <HStack space="4">
      <HStack
        space="2"
        flex={1}
        py={'5'}
        px="4"
        maxW="100%"
        _light={{ bg: 'coolGray.50', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        borderWidth="1"
        rounded="lg"
      >
        <Center
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: 'coolGray.700' }}
          p="2"
          width="9"
          height="9"
          rounded="full"
        >
          <Icon
            as={MaterialCommunityIcons}
            name="cash-multiple"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'coolGray.50' }}
            size="5"
          />
        </Center>
        <VStack>
          <Text
            fontSize="xs"
            fontWeight="normal"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            letterSpacing="0.2"
          >
            Unbilled Spents
          </Text>
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ₹990.00
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <HStack
        space="2"
        flex={1}
        py={'5'}
        px={'5'}
        _light={{ bg: 'coolGray.50', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        borderWidth="1"
        rounded="lg"
      >
        <Center
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: 'coolGray.700' }}
          p="2"
          width="9"
          height="9"
          rounded="full"
        >
          <Icon
            as={MaterialCommunityIcons}
            name="bank-outline"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'coolGray.50' }}
            size="5"
          />
        </Center>
        <VStack>
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            letterSpacing="0.5"
          >
            Last Paid
          </Text>
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ₹4990.00
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default function () {
  return (
    <>
      <DashboardLayout
        displayScreenTitle={false}
        displaySidebar={false}
        title="EMI Details"
      >
        <Hidden from="md">
          <Box
            position="absolute"
            height="32"
            top="0"
            left="0"
            width="100%"
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'coolGray.900' }}
          ></Box>
          <VStack flex={1} space="4" px="4">
            <CreditCard item={cardDetails[0]} />
            <UnbilledAndLastPaid />
            <CurrentStatement />
            <RecentTransactions />
          </VStack>
        </Hidden>

        {/* Tablet Layout */}
        <Hidden only={['base', 'sm', 'lg', 'xl', '2xl']}>
          <VStack flex={1} space="4">
            <CreditCard item={cardDetails[0]} />
            <UnbilledAndLastPaid />
            <CurrentStatement />
            <RecentTransactions />
          </VStack>
        </Hidden>

        {/* Desktop Layout */}
        <Hidden from="base" till="lg">
          <HStack flex={1} space="4">
            <VStack flex={2} space="4">
              <CreditCard item={cardDetails[0]} />
              <UnbilledAndLastPaid />
              <CurrentStatement />
            </VStack>
            <Box flex={3}>
              <RecentTransactions />
            </Box>
          </HStack>
        </Hidden>
      </DashboardLayout>
    </>
  );
}
