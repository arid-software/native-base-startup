import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  Center,
  Radio,
  Divider,
  Hidden,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconPaymentOne from './components/IconPaymentOne';
import IconAxis from './components/IconAxis';

function MainContent(props: any) {
  const reasonList = [
    'Other UPI IDS',
    'Add Debit/Credit/ATM Card',
    'Net Banking',
    'Wallet',
    'Gift Card',
    'Cash on Delivery',
  ];
  return (
    <>
      <Box flex={1}>
        <HStack flex={1}>
          <VStack
            flex={1}
            px={{ base: 0, md: 0 }}
            borderWidth={1}
            borderRadius={4}
            _light={{
              bg: { md: 'white', base: 'primary.50' },
              borderColor: 'coolGray.200',
            }}
            _dark={{ bg: 'coolGray.700', borderColor: 'coolGray.700' }}
          >
            <VStack
              px={{ base: 4, md: 6 }}
              pb="2"
              pt="6"
              _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
              _light={{ bg: { base: 'white', md: 'white' } }}
            >
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                Select a payment method
              </Text>
              <Radio.Group name="myRadioGroup" defaultValue="1">
                <Radio
                  mt={{ base: '3', md: 8 }}
                  _dark={{
                    bg: { base: 'coolGray.800', md: 'coolGray.900' },
                    _text: { fontSize: 'sm', color: 'coolGray.50' },
                    borderColor: 'coolGray.400',
                    colorScheme: 'coolGray',
                    value: 'Radio1',
                    // @ts-ignore
                    _checked: {
                      _icon: { color: 'primary.700' },
                      borderColor: 'primary.700',
                    },
                  }}
                  _light={{
                    _text: { fontSize: 'sm', color: 'coolGray.800' },
                    borderColor: 'coolGray.500',
                    colorScheme: 'primary',
                    value: 'Radio1',
                    // @ts-ignore
                    _checked: {
                      _icon: { color: 'primary.900' },
                      borderColor: 'primary.900',
                    },
                  }}
                  value="Radio1"
                >
                  <Text
                    ml="2"
                    mr="3"
                    _dark={{
                      fontSize: 'sm',
                      color: 'coolGray.50',
                    }}
                    _light={{
                      fontSize: 'sm',
                      color: 'coolGray.800',
                    }}
                  >
                    PhonePay UPI - Axis Bank
                  </Text>
                  <IconAxis />
                </Radio>
              </Radio.Group>
            </VStack>
            <VStack
              px={{ base: 4, md: 6 }}
              pt="3"
              _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
              _light={{ bg: { base: 'white', md: 'white' } }}
            >
              <Divider
                display={{ base: 'none', md: 'flex' }}
                _light={{ bg: 'coolGray.100' }}
                _dark={{ bg: 'coolGray.400' }}
                width="100%"
                mb={2}
              />
              <Text
                mb={{ base: '4', md: 3 }}
                fontSize="md"
                fontWeight="medium"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                More ways to Pay
              </Text>

              <Radio.Group name="myRadioGroup" defaultValue="1">
                {reasonList.map((item, index) => {
                  return (
                    <VStack w="100%" alignItems="flex-start" key={index}>
                      <Radio
                        key={index}
                        my={{ base: '2.5', md: 3 }}
                        _dark={{
                          bg: { base: 'coolGray.800', md: 'coolGray.900' },
                          _text: { fontSize: 'sm', color: 'coolGray.50' },
                          borderColor: 'coolGray.400',
                          colorScheme: 'coolGray',
                          value: 'Radio2',
                          // @ts-ignore
                          _checked: {
                            _icon: { color: 'primary.700' },
                            borderColor: 'primary.700',
                          },
                        }}
                        _light={{
                          _text: { fontSize: 'sm', color: 'coolGray.800' },
                          borderColor: 'coolGray.500',
                          colorScheme: 'primary',
                          value: 'Radio2',
                          // @ts-ignore
                          _checked: {
                            _icon: { color: 'primary.900' },
                            borderColor: 'primary.900',
                          },
                        }}
                        _text={{ fontSize: 'sm' }}
                        value={item}
                      >
                        {item}
                      </Radio>
                      {index == reasonList.length - 1 ? null : (
                        <Divider
                          _light={{ bg: 'coolGray.100' }}
                          _dark={{ bg: 'coolGray.400' }}
                          width="100%"
                        />
                      )}
                    </VStack>
                  );
                })}
              </Radio.Group>
            </VStack>
            <Hidden from="md">
              <Center
                mt="8"
                px={{ base: 4, md: 0 }}
                position="absolute"
                bottom="4"
                w="100%"
              >
                <Button
                  w="100%"
                  py="3"
                  _dark={{
                    bg: 'primary.700',
                    _pressed: { bg: 'primary.500' },
                  }}
                  _light={{
                    bg: 'primary.900',
                    _pressed: { bg: 'primary.700' },
                  }}
                  _text={{
                    fontSize: 'md',
                    fontWeight: 'medium',
                    color: 'coolGray.50',
                  }}
                  borderRadius={6}
                >
                  CONTINUE
                </Button>
              </Center>
            </Hidden>
          </VStack>
          <Hidden from="base" till="md">
            <VStack maxW="328px" ml="8" flex={1}>
              <VStack
                mb="6"
                borderWidth={1}
                borderRadius={4}
                px="6"
                py="6"
                _dark={{
                  bg: { base: 'coolGray.800', md: 'coolGray.900' },
                  borderColor: 'coolGray.700',
                }}
                _light={{
                  bg: { base: 'coolGray.50', md: 'white' },
                  borderColor: 'coolGray.200',
                }}
              >
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  mb="4"
                >
                  Price Details
                </Text>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="6"
                />
                <HStack
                  mb="6"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize="md"
                    fontWeight="normal"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Price ( 1 Item )
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="normal"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Rs 22,000
                  </Text>
                </HStack>
                <HStack
                  mb="6"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize="md"
                    fontWeight="normal"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'emerald.400' }}
                    _light={{ color: 'emerald.500' }}
                  >
                    FREE
                  </Text>
                </HStack>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="6"
                />
                <HStack alignItems="center" justifyContent="space-between">
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Amount Payable
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Rs 22,000
                  </Text>
                </HStack>
              </VStack>
              <VStack
                borderWidth={1}
                borderRadius={4}
                px="6"
                py="6"
                _dark={{
                  bg: { base: 'coolGray.800', md: 'coolGray.900' },
                  borderColor: 'coolGray.700',
                }}
                _light={{
                  bg: { base: 'coolGray.50', md: 'white' },
                  borderColor: 'coolGray.200',
                }}
              >
                <HStack mb="3" alignItems="center" space="3">
                  <IconPaymentOne />
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Offers
                  </Text>
                </HStack>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="3"
                />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  mb="3"
                >
                  10% off on Bank of Baroda Cards on First time transaction.
                </Text>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="3"
                />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  mb="3"
                >
                  10% off on Bank of Baroda Cards on First time transaction.
                </Text>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="3"
                />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  mb="3"
                >
                  10% off on Bank of Baroda Cards on First time transaction.
                </Text>
                <Divider
                  _light={{ bg: 'coolGray.100' }}
                  _dark={{ bg: 'coolGray.400' }}
                  width="100%"
                  mb="3"
                />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  10% off on Bank of Baroda Cards on First time transaction.
                </Text>
              </VStack>
            </VStack>
          </Hidden>
        </HStack>
      </Box>
    </>
  );
}

export default function (props: any) {
  return (
    <>
      <DashboardLayout title="Payments">
        <MainContent />
      </DashboardLayout>
    </>
  );
}
