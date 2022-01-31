import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  Radio,
  Divider,
  Hidden,
  Input,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconPaymentOne from './components/IconPaymentOne';
import IconAxis from './components/IconAxis';

const upiPaymentMethod = ['Phone Pe', 'Paytm', 'Google Pay', 'Other UPI ID'];

function MainContent(props: any) {
  const [cardVisible, setCardVisible] = React.useState(true);

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
          <Hidden from="lg">
            <VStack
              flex={1}
              px={{ base: 0, md: 8 }}
              borderWidth={1}
              borderRadius={{ base: 0, md: 4 }}
              _light={{
                bg: { md: 'white', base: 'primary.50' },
                borderColor: 'coolGray.200',
              }}
              _dark={{ bg: 'coolGray.900', borderColor: 'coolGray.900' }}
            >
              <VStack
                px={{ base: 4, md: 0 }}
                pb="5"
                _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
                _light={{ bg: { base: 'white', md: 'white' } }}
              >
                <VStack mt="6">
                  <Text
                    mb="2"
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Select your UPI Payments
                  </Text>
                  <Radio.Group
                    name="myRadioGroup"
                    defaultValue="1"
                    alignItems="flex-start"
                  >
                    {/* RADIO FOR MOBILE */}
                    {upiPaymentMethod.map((item, index) => {
                      return (
                        <VStack w="100%" key={index} alignItems="flex-start">
                          <HStack mt="4" mb="4" alignItems="center">
                            <Radio
                              mr="2"
                              size="md"
                              _light={{
                                // @ts-ignore
                                _checked: {
                                  _icon: { color: 'primary.900' },
                                  borderColor: 'primary.900',
                                },
                                borderColor: 'coolGray.500',
                                _text: { color: 'coolGray.500' },
                              }}
                              _dark={{
                                // @ts-ignore
                                _checked: {
                                  _icon: { color: 'primary.700' },
                                  borderColor: 'primary.700',
                                },
                                borderColor: 'coolGray.400',
                                background: {
                                  base: 'coolGray.800',
                                  md: 'coolGray.800',
                                },
                                _text: { color: 'coolGray.300' },
                              }}
                              _text={{ fontSize: 'sm' }}
                              value={item}
                            ></Radio>
                            <Text
                              fontSize="sm"
                              _light={{ color: 'coolGray.800' }}
                              _dark={{ color: 'coolGray.50' }}
                            >
                              {item}
                            </Text>
                          </HStack>
                          {index == upiPaymentMethod.length - 1 ? null : (
                            <Divider
                              _light={{ bg: 'coolGray.100' }}
                              _dark={{ bg: 'coolGray.700' }}
                              width="100%"
                            />
                          )}
                        </VStack>
                      );
                    })}
                  </Radio.Group>
                </VStack>
                <HStack mt="1" space="3">
                  <Input
                    px="4"
                    py="12.5px"
                    w="64%"
                    placeholder="Ex: Mobilenumber@upi"
                    _dark={{
                      fontSize: 'sm',
                      color: 'coolGray.50',
                      borderColor: 'coolGray.500',
                    }}
                    _light={{
                      fontSize: 'sm',
                      color: 'coolGray.800',
                      borderColor: '#D1D5DB',
                    }}
                    _focus={{
                      _dark: {
                        borderColor: 'coolGray.500',
                      },
                      _light: {
                        borderColor: '#D1D5DB',
                      },
                    }}
                  />
                  <Button
                    w="36%"
                    py="3"
                    _dark={{ bg: 'primary.700' }}
                    _light={{ bg: 'primary.900' }}
                    _text={{
                      fontSize: 'md',
                      fontWeight: 'medium',
                      color: 'coolGray.50',
                    }}
                    borderRadius={4}
                    _pressed={{
                      _dark: { bg: 'primary.500' },
                      _light: { bg: 'primary.700' },
                    }}
                  >
                    VERIFY
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Hidden>
          {/* Main container Web */}
          <Hidden from="base" till="lg">
            <VStack
              flex={1}
              px={{ base: 0, md: 8 }}
              pt="8"
              pb="4"
              borderWidth={1}
              borderRadius={4}
              _light={{
                bg: { md: 'white', base: 'primary.50' },
                borderColor: 'coolGray.200',
              }}
              _dark={{ bg: 'coolGray.900', borderColor: 'coolGray.700' }}
            >
              <VStack
                px={{ base: 4, md: 0 }}
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
                    mt="3"
                    size="md"
                    _light={{
                      // @ts-ignore
                      _checked: {
                        _icon: { color: 'primary.900' },
                        borderColor: 'primary.900',
                      },
                      borderColor: 'coolGray.500',

                      _text: { color: 'coolGray.800' },
                    }}
                    _dark={{
                      // @ts-ignore
                      _checked: {
                        _icon: { color: 'primary.700' },
                        borderColor: 'primary.700',
                      },
                      borderColor: 'coolGray.400',
                      background: {
                        base: 'coolGray.800',
                        md: 'coolGray.900',
                      },
                      _text: { color: 'coolGray.50' },
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
              <Divider
                _light={{ bg: 'coolGray.100' }}
                _dark={{ bg: 'coolGray.700' }}
                width="100%"
                mt="4"
                mb="19px"
              />
              <VStack
                px={{ base: 4, md: 0 }}
                _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
                _light={{ bg: { base: 'white', md: 'white' } }}
              >
                <Text
                  mb="4"
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  More ways to Pay
                </Text>
                <Radio.Group
                  name="myRadioGroup"
                  defaultValue="1"
                  onChange={(serialNum) => {
                    serialNum == '1'
                      ? setCardVisible(true)
                      : setCardVisible(false);
                  }}
                >
                  {reasonList.map((item, index) => {
                    var serialNum = (index + 1).toString();
                    return (
                      <VStack w="100%" key={index}>
                        <Radio
                          key={index}
                          mt="4"
                          mb="4"
                          size="md"
                          _light={{
                            // @ts-ignore
                            _checked: {
                              _icon: { color: 'primary.900' },
                              borderColor: 'primary.900',
                            },
                            borderColor: 'coolGray.500',

                            _text: { color: 'coolGray.800' },
                          }}
                          _dark={{
                            // @ts-ignore
                            _checked: {
                              _icon: { color: 'primary.700' },
                              borderColor: 'primary.700',
                            },
                            borderColor: 'coolGray.400',
                            background: {
                              base: 'coolGray.800',
                              md: 'coolGray.900',
                            },
                            _text: { color: 'coolGray.50' },
                          }}
                          _text={{ fontSize: 'sm' }}
                          value={serialNum}
                        >
                          {item}
                        </Radio>
                        {cardVisible && serialNum == '1' ? (
                          <VStack
                            flex={1}
                            px={{ base: 0, md: '28px' }}
                            _light={{
                              bg: { md: 'white' },
                            }}
                            _dark={{
                              bg: 'coolGray.900',
                            }}
                          >
                            <VStack
                              px={{ base: 4, md: 0 }}
                              pb="6"
                              _dark={{
                                bg: {
                                  base: 'coolGray.800',
                                  md: 'coolGray.900',
                                },
                              }}
                              _light={{ bg: { base: 'white', md: 'white' } }}
                            >
                              <VStack mt="4">
                                <Text
                                  mb="2"
                                  fontSize="md"
                                  fontWeight="medium"
                                  _dark={{ color: 'coolGray.50' }}
                                  _light={{ color: 'coolGray.800' }}
                                >
                                  Select your UPI Payments
                                </Text>
                                <Radio.Group
                                  name="myRadioGroup"
                                  defaultValue="1"
                                >
                                  {upiPaymentMethod.map((item, index) => {
                                    // RADIO FOR WEB
                                    return (
                                      <VStack w="100%" key={index}>
                                        <Radio
                                          key={index}
                                          mt="4"
                                          mb="4"
                                          size="md"
                                          _light={{
                                            // @ts-ignore
                                            _checked: {
                                              _icon: { color: 'primary.900' },
                                              borderColor: 'primary.900',
                                            },
                                            borderColor: 'coolGray.500',

                                            _text: { color: 'coolGray.800' },
                                          }}
                                          _dark={{
                                            // @ts-ignore
                                            _checked: {
                                              _icon: { color: 'primary.700' },
                                              borderColor: 'primary.700',
                                            },
                                            borderColor: 'coolGray.400',
                                            background: {
                                              base: 'coolGray.800',
                                              md: 'coolGray.900',
                                            },
                                            _text: { color: 'coolGray.50' },
                                          }}
                                          _text={{ fontSize: 'sm' }}
                                          value={item}
                                        >
                                          {item}
                                        </Radio>
                                      </VStack>
                                    );
                                  })}
                                </Radio.Group>
                              </VStack>
                              <HStack mt="2" space="3">
                                <Input
                                  px="4"
                                  py="12.5px"
                                  w="64%"
                                  placeholder="Ex: Mobilenumber@upi"
                                  _dark={{
                                    fontSize: 'sm',
                                    color: 'coolGray.50',
                                    borderColor: 'coolGray.500',
                                  }}
                                  _light={{
                                    fontSize: 'sm',
                                    color: 'coolGray.800',
                                    borderColor: '#D1D5DB',
                                  }}
                                  _focus={{
                                    _dark: {
                                      borderColor: 'coolGray.500',
                                    },
                                    _light: {
                                      borderColor: '#D1D5DB',
                                    },
                                  }}
                                />
                                <Button
                                  w="36%"
                                  py="3"
                                  _dark={{ bg: 'primary.700' }}
                                  _light={{ bg: 'primary.900' }}
                                  _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'coolGray.50',
                                  }}
                                  borderRadius={4}
                                  _pressed={{
                                    _dark: { bg: 'primary.500' },
                                    _light: { bg: 'primary.700' },
                                  }}
                                  _focus={{
                                    _dark: { bg: 'primary.700' },
                                    _light: { bg: 'primary.900' },
                                  }}
                                >
                                  VERIFY
                                </Button>
                              </HStack>
                            </VStack>
                          </VStack>
                        ) : null}

                        {index == reasonList.length - 1 ? null : (
                          <Divider
                            _light={{ bg: 'coolGray.100' }}
                            _dark={{ bg: 'coolGray.700' }}
                            width="100%"
                          />
                        )}
                      </VStack>
                    );
                  })}
                </Radio.Group>
              </VStack>
            </VStack>
          </Hidden>
          {/* Side Containers Web */}
          <Hidden from="base" till="lg">
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
                  _dark={{ bg: 'coolGray.700' }}
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
                  _dark={{ bg: 'coolGray.700' }}
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
                  _dark={{ bg: 'coolGray.700' }}
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
                  _dark={{ bg: 'coolGray.700' }}
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
                  _dark={{ bg: 'coolGray.700' }}
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
                  _dark={{ bg: 'coolGray.700' }}
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
