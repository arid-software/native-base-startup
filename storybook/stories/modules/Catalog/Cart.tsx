import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  useColorMode,
  IconButton,
  Divider,
  Button,
} from 'native-base';
import { FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Platform } from 'react-native';

const productList = [
  {
    imageUri: require('../../assets/lamp.jpeg'),
    item: 'BEDLAMP',
    size: 'Size : Medium',
    delivery: 'Delivery by Mon 27',
    rupeeIcon: 'rupee',
    amount: '1635.00',
    discount: '5%off',
    deleteIcon: 'delete-outline',
  },
  {
    imageUri: require('../../assets/table.jpg'),
    item: 'SAFEGUARD',
    size: 'Size : Medium',
    delivery: 'Delivery by Mon 27',
    rupeeIcon: 'rupee',
    amount: '2635.00',
    discount: '5%off',
    deleteIcon: 'delete-outline',
  },
  {
    imageUri: require('../../assets/furniture.jpg'),
    item: 'JOHNSONS BABY',
    size: 'Size : Medium',
    delivery: 'Delivery by Mon 27',
    rupeeIcon: 'rupee',
    amount: '3535.00',
    discount: '5%off',
    deleteIcon: 'delete-outline',
  },
];
const detail = [
  {
    name: 'Total MRP',
    nameAmount: '3,561.00',
  },
  {
    name: 'Discount on MRP',
    nameAmount: '-214.00',
  },
  {
    name: 'Coupon Discount',
    nameAmount: 'Apply Coupon',
  },
];

function NumberOfOrder() {
  const [numberOfOrder, setNumberOfOrder] = React.useState(0);

  return (
    <HStack alignItems="center" space="4">
      <Pressable
        onPress={() => {
          if (numberOfOrder == 0) {
            return numberOfOrder;
          } else {
            setNumberOfOrder(numberOfOrder - 1);
          }
        }}
      >
        <Box p="2" _light={{ bg: 'primary.300' }} _dark={{ bg: 'customGray' }}>
          <Icon
            name="minus-a"
            as={Fontisto}
            size="3"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.100' }}
          />
        </Box>
      </Pressable>

      <Text
        fontSize="sm"
        fontWeight="bold"
        _dark={{ color: 'white' }}
        _light={{ color: 'coolGray.900' }}
      >
        {numberOfOrder}
      </Text>
      <Pressable
        onPress={() => {
          setNumberOfOrder(numberOfOrder + 1);
        }}
      >
        <Box p="2" _light={{ bg: 'primary.300' }} _dark={{ bg: 'customGray' }}>
          <Icon
            name="plus-a"
            as={Fontisto}
            size="3"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.100' }}
          />
        </Box>
      </Pressable>
    </HStack>
  );
}

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout title="My Cart">
        <VStack
          px={{ base: 4, sm: 4, md: 8, lg: 24, xl: 32 }}
          py={{ base: 4, md: 8 }}
          mb="4"
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
        >
          {productList.map((item: any, index: number) => {
            return (
              <VStack key={index}>
                <HStack alignItems="center" space="3">
                  <Image
                    w="74"
                    h="102"
                    rounded="md"
                    alt="Product Image"
                    source={item.imageUri}
                  />
                  <VStack space="1">
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      _dark={{ color: 'coolGray.50' }}
                      _light={{ color: 'coolGray.800' }}
                    >
                      {item.item}
                    </Text>
                    <Text
                      fontSize="sm"
                      _dark={{ color: 'coolGray.200' }}
                      _light={{ color: 'coolGray.500' }}
                    >
                      {item.size}
                    </Text>
                    <Text
                      fontSize="sm"
                      _dark={{ color: 'coolGray.200' }}
                      _light={{ color: 'coolGray.500' }}
                    >
                      {item.delivery}
                    </Text>
                    <HStack mt="2" alignItems="center">
                      <Icon
                        size="4"
                        as={FontAwesome}
                        name={item.rupeeIcon}
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.700' }}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.700' }}
                      >
                        {item.amount}
                      </Text>
                      <Text
                        ml="2"
                        fontSize="xs"
                        color="emerald.600"
                        fontWeight="semibold"
                      >
                        {item.discount}
                      </Text>
                    </HStack>
                  </VStack>
                  <VStack ml="auto" mt="auto" alignItems="flex-end">
                    <IconButton
                      mb="12"
                      variant="unstyled"
                      icon={
                        <Icon
                          size="5"
                          as={MaterialIcons}
                          name={item.deleteIcon}
                          _dark={{ color: 'coolGray.300' }}
                          _light={{ color: 'coolGray.500' }}
                        />
                      }
                      onPress={() => {
                        console.log('hello');
                      }}
                    />
                    <NumberOfOrder />
                  </VStack>
                </HStack>
                {index < productList.length - 1 ? <Divider my="2" /> : null}
              </VStack>
            );
          })}
          <Box mt="2">
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontWeight="normal"
              fontSize="md"
            >
              Order Details ( 3 items )
            </Text>
            <Divider mt="3" />
            {detail.map((item: any, index: number) => {
              return (
                <VStack mt="2" key={index}>
                  <HStack justifyContent="space-between" alignItems="center">
                    <Text
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      {item.name}
                    </Text>
                    {item.nameAmount == 'Apply Coupon' ? (
                      <Pressable
                        onPress={() => {
                          console.log('hello');
                        }}
                      >
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          _dark={{
                            color:
                              Platform.OS === 'web'
                                ? 'coolGray.100'
                                : 'primary.700',
                          }}
                          _light={{ color: 'coolGray.800' }}
                        >
                          {item.nameAmount}
                        </Text>
                      </Pressable>
                    ) : (
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _dark={{ color: 'coolGray.300' }}
                        _light={{ color: 'coolGray.800' }}
                      >
                        {item.nameAmount}
                      </Text>
                    )}
                  </HStack>
                </VStack>
              );
            })}
            <HStack alignItems="center" justifyContent="space-between" mt="3">
              <Text
                fontSize="sm"
                _dark={{ color: 'coolGray.300' }}
                _light={{ color: 'coolGray.800' }}
              >
                Shipping
              </Text>
              <HStack alignItems="center" space="1">
                <HStack alignItems="center">
                  <Icon
                    size="2"
                    name={'rupee'}
                    as={FontAwesome}
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.400' }}
                  />
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'coolGray.400',
                    }}
                    _dark={{
                      color: 'coolGray.400',
                    }}
                    _web={{
                      _light: {
                        color: 'coolGray.600',
                      },
                      _dark: {
                        color: 'coolGray.400',
                      },
                    }}
                    textDecorationLine="line-through"
                    // TODO: Report this error to Core team.
                    // @ts-ignore
                    textDecorationColor="coolGray.300"
                  >
                    99
                  </Text>
                </HStack>
                <Text
                  fontSize="sm"
                  _dark={{ color: 'coolGray.300' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  Free
                </Text>
              </HStack>
            </HStack>
            <Divider mt="2" />
            <HStack alignItems="center" justifyContent="space-between" mt="3">
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontWeight="semibold"
                fontSize="sm"
              >
                Total Amount
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontWeight="semibold"
                fontSize="sm"
              >
                3340.00
              </Text>
            </HStack>
          </Box>
        </VStack>
        <VStack
          px={{ base: 4, sm: 4, md: 8, lg: 24, xl: 32 }}
          py={{ base: 8, md: 8 }}
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
        >
          <HStack mb="4" justifyContent="space-between">
            <VStack space="1">
              <Text
                mb="2"
                fontSize="md"
                fontWeight="normal"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                Delivery Address
              </Text>
              <Text
                fontSize="xs"
                fontWeight="semibold"
                _dark={{ color: 'coolGray.300' }}
                _light={{ color: 'coolGray.500' }}
              >
                Meagan Stith
              </Text>
              <Text
                fontSize="xs"
                fontWeight="normal"
                _dark={{ color: 'coolGray.300' }}
                _light={{ color: 'coolGray.500' }}
              >
                606-3727 Ullamcorper.
              </Text>
              <Text
                fontSize="xs"
                fontWeight="normal"
                _dark={{ color: 'coolGray.300' }}
                _light={{ color: 'coolGray.500' }}
              >
                Street Roseville NH 11523…
              </Text>
            </VStack>

            <Text
              fontSize="xs"
              fontWeight="normal"
              _dark={{ color: 'primary.700' }}
              _light={{ color: 'primary.900' }}
            >
              Change
            </Text>
          </HStack>
          <Button
            size="md"
            borderRadius="4"
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
            }}
            _light={{
              bg: 'primary.900',
            }}
            _dark={{
              bg: 'primary.700',
              _pressed: { bg: 'primary.500' },
            }}
          >
            PLACE ORDER
          </Button>
        </VStack>
      </DashboardLayout>
    </>
  );
}
