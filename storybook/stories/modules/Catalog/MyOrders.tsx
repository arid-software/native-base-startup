import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  useColorMode,
  Button,
  Center,
  IconButton,
  Box,
  Stack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
const orders = [
  {
    firstIcon: 'shopping-bag',
    order: 'Order: #9726895435345',
    dateTime: '28-May-2021, 5:38 pm',
    imageUri:
      'data:image/jpeg;base64,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',
    itemName: 'BEDLAMP',
    itemType: 'Automatic sensor,Multi color',
    size: 'Size : Medium',
    secondIcon: 'chevron-right',
    exchangeAndReturn: 'Exchange and Return policy valid till 5th June.',
    rate: true,
    rateText: 'Rate Product',
    rateIcon: 'ios-star-outline',
    delivery: 'Delivered',
    deliveryColor: '#059669',
  },
  {
    firstIcon: 'shopping-bag',
    order: 'Order: #9726895435345',
    dateTime: '28-May-2021, 5:38 pm',
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNoyatrZNZZvoVv9HFRThm2XxT81Cfa-gcw&usqp=CAU',

    itemName: 'SAFEGUARD',
    itemType: 'Automatic sensor,Multi color',
    size: 'Size : Medium',
    secondIcon: 'chevron-right',

    delivery: 'Arriving',
    deliveryColor: '#9CA3AF',
    arrivingBy: 'Arriving by 7 September, Wednesday',
    orderDetails: 'View order details',
  },

  {
    firstIcon: 'shopping-bag',
    order: 'Order: #9726895435345',
    dateTime: '28-May-2021, 5:38 pm',
    imageUri: 'https://wallpaperaccess.com/full/317501.jpg',
    itemName: 'Johnsons Baby pack',
    itemType: 'Automatic sensor,Multi color',
    size: 'Size : Medium',
    secondIcon: 'chevron-right',
    delivery: 'Arriving',
    deliveryColor: '#9CA3AF',
    arrivingBy: 'Arriving by 7 September, Wednesday',
    orderDetails: 'View order details',
  },
];
export default function MyOrders(props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout title="My Orders">
        <VStack
          px={{ md: 8 }}
          py={{ base: 4, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          // space="4"
          my={{ base: 2 }}
        >
          {orders.map((item, index) => {
            return (
              <Stack
                key={index}
                _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
              >
                {item.itemName == 'BEDLAMP' ? null : (
                  <Box
                    height={4}
                    mb={1}
                    _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.700' } }}
                    _light={{ bg: 'primary.50' }}
                  />
                )}

                <VStack
                  mx={{ base: 4 }}
                  key={index}
                  _light={{ bg: 'coolGray.50' }}
                  _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
                  px="3"
                  py="3"
                  borderRadius="4"
                >
                  <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center" space="2">
                      <Text
                        fontSize="xs"
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.200' }}
                        fontWeight="normal"
                      >
                        {item.order}
                      </Text>
                    </HStack>
                    <Text
                      fontSize="xs"
                      _light={{ color: item.deliveryColor }}
                      _dark={{ color: item.deliveryColor }}
                    >
                      {item.delivery}
                    </Text>
                  </HStack>
                  <HStack
                    alignItems="center"
                    justifyContent="space-between"
                    mt="3"
                  >
                    <HStack alignItems="center" space="3" mb="3">
                      <Image
                        source={{ uri: item.imageUri }}
                        alt="Alternate Text"
                        rounded="lg"
                        height="24"
                        width="20"
                      />
                      <VStack>
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.200' }}
                        >
                          {item.itemName}
                        </Text>
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.500' }}
                          _dark={{ color: 'coolGray.400' }}
                        >
                          {item.itemType}
                        </Text>
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.500' }}
                          _dark={{ color: 'coolGray.400' }}
                        >
                          {item.size}
                        </Text>
                      </VStack>
                    </HStack>
                  </HStack>
                  {item.delivery === 'Delivered' ? (
                    <HStack space="4">
                      <Button
                        onPress={() => {
                          console.log('hello');
                        }}
                        variant="outline"
                        size="xs"
                        h="9"
                        w="48%"
                        _light={{
                          borderColor: 'primary.900',
                          _text: {
                            color: 'primary.900',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          borderColor: 'coolGray.500',
                          _text: {
                            color: 'coolGray.400',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        EXCHANGE
                      </Button>

                      <Button
                        onPress={() => {
                          console.log('hello');
                        }}
                        variant="outline"
                        colorScheme="primary"
                        size="xs"
                        h="9"
                        w="48%"
                        _light={{
                          borderColor: 'primary.900',
                          _text: {
                            color: 'primary.900',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          borderColor: 'coolGray.500',
                          _text: {
                            color: 'coolGray.400',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        RETURN
                      </Button>
                    </HStack>
                  ) : null}
                  {item.delivery === 'Arriving' ? (
                    <HStack space="4">
                      <Button
                        onPress={() => {
                          console.log('hello');
                        }}
                        variant="outline"
                        colorScheme="primary"
                        size="xs"
                        h="9"
                        w="48%"
                        _light={{
                          borderColor: 'primary.900',
                          _text: {
                            color: 'primary.900',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          borderColor: 'coolGray.500',
                          _text: {
                            color: 'coolGray.400',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        TRACK
                      </Button>

                      <Button
                        onPress={() => {
                          console.log('hello');
                        }}
                        variant="outline"
                        colorScheme="primary"
                        size="xs"
                        h="9"
                        w="48%"
                        _light={{
                          borderColor: 'primary.900',
                          _text: {
                            color: 'primary.900',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          borderColor: 'coolGray.500',
                          _text: {
                            color: 'coolGray.400',
                            fontSize: 'xs',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        CANCEL
                      </Button>
                    </HStack>
                  ) : null}
                  {item.arrivingBy ? (
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      mt="3"
                    >
                      <HStack alignItems="center" space="2">
                        <Center
                          _light={{ bg: 'primary.900' }}
                          _dark={{ bg: 'primary.700' }}
                          p="1"
                          rounded="full"
                        />
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.200' }}
                        >
                          {item.arrivingBy}
                        </Text>
                      </HStack>
                    </HStack>
                  ) : null}
                  {item.exchangeAndReturn ? (
                    <HStack alignItems="center" justifyContent="space-between">
                      <HStack alignItems="center" mt="3" space="2">
                        <Center
                          _light={{ bg: 'primary.900' }}
                          _dark={{ bg: 'primary.700' }}
                          p="1"
                          rounded="full"
                        />
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.200' }}
                        >
                          {item.exchangeAndReturn}
                        </Text>
                      </HStack>
                    </HStack>
                  ) : null}
                  {item.orderDetails ? (
                    <HStack alignItems="center" justifyContent="space-between">
                      <HStack alignItems="center" mt="3" space="2">
                        <Center
                          _light={{ bg: 'primary.900' }}
                          _dark={{ bg: 'primary.700' }}
                          p="1"
                          rounded="full"
                        />
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.200' }}
                        >
                          {item.orderDetails}
                        </Text>
                      </HStack>
                    </HStack>
                  ) : null}
                  {item.rate ? (
                    <HStack space="1" mt="1">
                      <HStack alignItems="center" space="2">
                        <Center
                          _light={{ bg: 'primary.900' }}
                          _dark={{ bg: 'primary.700' }}
                          p="1"
                          rounded="full"
                        />
                        <Text
                          fontSize="sm"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.200' }}
                        >
                          {item.rateText}
                        </Text>
                      </HStack>
                      <HStack>
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              size="4"
                              as={Ionicons}
                              name={item.rateIcon}
                              _light={{ color: 'coolGray.400' }}
                              _dark={{ color: 'coolGray.400' }}
                            />
                          }
                          onPress={() => {
                            console.log('hello');
                          }}
                        />
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              size="4"
                              as={Ionicons}
                              name={item.rateIcon}
                              _light={{ color: 'coolGray.400' }}
                              _dark={{ color: 'coolGray.400' }}
                            />
                          }
                          onPress={() => {
                            console.log('hello');
                          }}
                        />
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              size="4"
                              as={Ionicons}
                              name={item.rateIcon}
                              _light={{ color: 'coolGray.400' }}
                              _dark={{ color: 'coolGray.400' }}
                            />
                          }
                          onPress={() => {
                            console.log('hello');
                          }}
                        />
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              size="4"
                              as={Ionicons}
                              name={item.rateIcon}
                              _light={{ color: 'coolGray.400' }}
                              _dark={{ color: 'coolGray.400' }}
                            />
                          }
                          onPress={() => {
                            console.log('hello');
                          }}
                        />
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              size="4"
                              as={Ionicons}
                              name={item.rateIcon}
                              _light={{ color: 'coolGray.400' }}
                              _dark={{ color: 'coolGray.400' }}
                            />
                          }
                          onPress={() => {
                            console.log('hello');
                          }}
                        />
                      </HStack>
                    </HStack>
                  ) : null}
                </VStack>
              </Stack>
            );
          })}
        </VStack>
      </DashboardLayout>
    </>
  );
}
