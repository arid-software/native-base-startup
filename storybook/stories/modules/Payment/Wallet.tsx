import React from 'react';
import {
  Icon,
  Text,
  HStack,
  VStack,
  Center,
  Button,
  Divider,
  Input,
  Box,
  Pressable,
  Hidden,
} from 'native-base';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const cardDetails = [
  {
    holderName: 'Hey John ',
    supportText: 'Your wallet details',
    accountNumber: '2345 XXXX XXXX 3423',
    balanceText: 'Balance',
    balanceAmount: '2,000.00',
    spentText: 'Spent',
    spentAmount: '4,000.00',
    receivedText: 'Received',
    receivedAmount: '15,000.00',
  },
];

const transactions = [
  {
    iconName: 'car',
    color: 'rose.400',
    iconText: 'OLA Ride',
    dateAndTime: '2:30pm | Jun 22nd',
    secondIcon: 'rupee',
    amount: '1335.00',
  },
  {
    iconName: 'cart-outline',
    color: 'blue.400',
    iconText: 'Amazon shopping',
    dateAndTime: '2:30pm | Jun 22nd',
    secondIcon: 'rupee',
    amount: '9000.00',
  },
  {
    iconName: 'ios-fast-food-outline',
    color: 'emerald.400',
    iconText: 'Zomato payments India',
    dateAndTime: '2:30pm | Jun 22nd',
    secondIcon: 'rupee',
    amount: '6356.00',
  },
  {
    iconName: 'person-outline',
    color: 'blue.600',
    iconText: 'Rent to owner',
    dateAndTime: '2:30pm | Jun 22nd',
    secondIcon: 'rupee',
    amount: '1357.00',
  },

  {
    iconName: 'ios-pulse',
    color: '#FDE047',
    iconText: 'Yearly Health checkup',
    dateAndTime: '2:30pm | Jun 22nd',
    secondIcon: 'rupee',
    amount: '1630.00',
  },
];

const CARD_HEIGHT = 200;

const CreditCard = ({ item }: { item: typeof cardDetails[0] }) => {
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
          start: [0, 0],
          end: [1, 1],
          colors: ['emerald.400', 'primary.900'],
        },
      }}
    >
      <VStack>
        <Text fontSize="md" color="coolGray.50" fontWeight="bold" mb="4">
          {item.holderName}
        </Text>
        <VStack>
          <Text fontSize="xs" color="coolGray.50" fontWeight="normal" mb="1">
            {item.supportText}
          </Text>
          <Text fontSize="xl" fontWeight="medium" color="coolGray.50" mb="5">
            {item.accountNumber}
          </Text>
          <Divider my="1" bg="coolGray.50" mb="4" />
          <HStack justifyContent="space-between">
            <VStack>
              <Text fontSize="xs" color="coolGray.50" fontWeight="normal">
                {item.balanceText}
              </Text>
              <Text fontWeight="bold" color="coolGray.50">
                ₹{item.balanceAmount}
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xs" color="coolGray.50" fontWeight="normal">
                {item.spentText}
              </Text>
              <Text fontWeight="bold" color="coolGray.50">
                ₹{item.spentAmount}
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xs" color="coolGray.50" fontWeight="normal">
                {item.receivedText}
              </Text>
              <Text fontWeight="bold" color="coolGray.50">
                ₹{item.receivedAmount}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

const RecentTransactions = () => {
  const [tabName, setTabName] = React.useState('All');

  return (
    <Box
      flex={1}
      rounded="lg"
      shadow="2"
      px="4"
      pt="5"
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{
        bg: { base: 'coolGray.800', md: 'coolGray.900' },
        borderColor: 'coolGray.800',
      }}
      borderRadius="6"
      borderWidth="1"
    >
      <VStack space="3">
        <Text
          fontSize="sm"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
          fontWeight="semibold"
        >
          Recent Transactions
        </Text>
        <Box
          shadow="5"
          rounded="sm"
          _light={{ bg: 'coolGray.50' }}
          _dark={{ bg: 'coolGray.800' }}
        >
          <HStack justifyContent="center">
            <Pressable
              flex={1}
              p="2"
              alignItems="center"
              onPress={() => {
                setTabName('All');
              }}
              maxWidth="30%"
              borderBottomWidth={'3px'}
              borderBottomColor={
                tabName == 'All' ? 'primary.900' : 'coolGray.50'
              }
            >
              <Text
                textTransform="uppercase"
                fontWeight="medium"
                _light={{
                  color: tabName == 'All' ? 'coolGray.800' : 'coolGray.400',
                }}
                _dark={{
                  color: tabName == 'All' ? 'coolGray.50' : 'coolGray.400',
                }}
              >
                All
              </Text>
            </Pressable>
            <Pressable
              flex={1}
              p="2"
              alignItems="center"
              onPress={() => {
                setTabName('Spent');
              }}
              maxWidth="30%"
              borderBottomWidth={'3px'}
              borderBottomColor={
                tabName == 'Spent' ? 'primary.900' : 'coolGray.50'
              }
            >
              <Text
                textTransform="uppercase"
                fontWeight="medium"
                _light={{
                  color: tabName == 'Spent' ? 'coolGray.800' : 'coolGray.400',
                }}
                _dark={{
                  color: tabName == 'Spent' ? 'coolGray.50' : 'coolGray.400',
                }}
              >
                Spent
              </Text>
            </Pressable>
            <Pressable
              flex={1}
              alignItems="center"
              p="2"
              onPress={() => {
                setTabName('Received');
              }}
              maxWidth="30%"
              borderBottomWidth={'3px'}
              borderBottomColor={
                tabName == 'Received' ? 'primary.900' : 'coolGray.50'
              }
            >
              <Text
                fontWeight="medium"
                textTransform="uppercase"
                _light={{
                  color:
                    tabName == 'Received' ? 'coolGray.800' : 'coolGray.400',
                }}
                _dark={{
                  color: tabName == 'Received' ? 'coolGray.50' : 'coolGray.400',
                }}
              >
                Received
              </Text>
            </Pressable>
          </HStack>
        </Box>
      </VStack>
      {tabName == 'All' ? (
        <VStack px="4" my="0">
          {transactions.map((item, index) => {
            return (
              <VStack key={index}>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center" space="3" my="3">
                    <Center bg={item.color} p="2" rounded="full">
                      <Icon
                        as={Ionicons}
                        name={item.iconName}
                        color="coolGray.50"
                        size="4"
                      />
                    </Center>
                    <VStack space="1">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        {item.iconText}
                      </Text>
                      <Text
                        fontSize="xs"
                        fontWeight="normal"
                        _light={{ color: 'coolGray.500' }}
                        _dark={{ color: 'coolGray.400' }}
                      >
                        {item.dateAndTime}
                      </Text>
                    </VStack>
                  </HStack>

                  <Text
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.400' }}
                    fontSize="sm"
                  >
                    ₹{item.amount}
                  </Text>
                </HStack>
                {index == transactions.length - 1 ? null : (
                  <Divider
                    _dark={{ bg: 'coolGray.500' }}
                    _light={{ bg: 'coolGray.400' }}
                  />
                )}
              </VStack>
            );
          })}
        </VStack>
      ) : null}
    </Box>
  );
};

const AddMoney = () => {
  return (
    <VStack
      px="4"
      py="3"
      space="2"
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
      borderRadius={{ md: '8' }}
      borderWidth="1"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text
          fontWeight="semibold"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Add Money
        </Text>
        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <HStack alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="normal"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              T&C
            </Text>
            <Icon
              as={Feather}
              name="chevron-right"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.200' }}
              size="6"
            />
          </HStack>
        </Pressable>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between" space="6">
        <Input
          flex={3}
          InputLeftElement={
            <Icon
              pl="2"
              size="5"
              name={'rupee'}
              as={FontAwesome}
              _light={{ color: 'coolGray.400' }}
              _dark={{ color: 'coolGray.50' }}
            />
          }
        />
        <Button
          size="md"
          borderRadius="4"
          flex={1}
          _text={{
            fontSize: 'sm',
            fontWeight: 'medium',
          }}
        >
          ADD
        </Button>
      </HStack>
    </VStack>
  );
};

const RewardPoints = () => {
  return (
    <HStack
      px="4"
      py="3"
      alignItems="center"
      justifyContent="space-between"
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{
        bg: { base: 'coolGray.800', md: 'coolGray.900' },
        borderColor: 'coolGray.800',
      }}
      borderRadius="6"
      borderWidth="1"
    >
      <VStack>
        <Text
          fontSize="md"
          fontWeight="normal"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.300' }}
        >
          Reward Points
        </Text>
        <Text
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
          fontSize="md"
          fontWeight="bold"
        >
          689.767
        </Text>
      </VStack>
      <Pressable
        onPress={() => {
          console.log('hello');
        }}
      >
        <HStack alignItems="center" space="2">
          <Text
            fontSize="sm"
            fontWeight="normal"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Redeem Details
          </Text>

          <Icon
            as={Feather}
            name="chevron-right"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.200' }}
            size="6"
          />
        </HStack>
      </Pressable>
    </HStack>
  );
};

export default function Wallet() {
  return (
    <>
      <DashboardLayout displaySidebar={false} title="Wallet">
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
            <RewardPoints />
            <AddMoney />
            <RecentTransactions />
          </VStack>
        </Hidden>
        {/* Tablet Layout */}

        <Hidden only={['base', 'sm', 'lg', 'xl', '2xl']}>
          <VStack flex={1} space="4">
            <CreditCard item={cardDetails[0]} />
            <RewardPoints />
            <AddMoney />
            <RecentTransactions />
          </VStack>
        </Hidden>
        {/* Desktop Layout */}
        <Hidden from="base" till="lg">
          <HStack flex={1} space="4">
            <VStack flex={2} space="4">
              <CreditCard item={cardDetails[0]} />
              <RewardPoints />
              <AddMoney />
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
