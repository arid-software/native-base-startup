import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Button,
  Center,
  Radio,
  Divider,
  Hidden,
  Input,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconPaymentOne from './components/IconPaymentOne';
import IconAxis from './components/IconAxis';
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
              borderRadius={4}
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
                    mb="4"
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Enter your Credit card information.
                  </Text>
                  <Input
                    mb="3"
                    px="4"
                    py="12.5px"
                    w="100%"
                    placeholder="Card Name"
                    _dark={{
                      fontSize: 'sm',
                      color: 'coolGray.300',
                      borderColor: 'coolGray.500',
                      _focus: { borderColor: 'coolGray.500' },
                    }}
                    _light={{
                      fontSize: 'sm',
                      color: 'coolGray.800',
                      borderColor: '#D1D5DB',
                      _focus: { borderColor: '#D1D5DB' },
                    }}
                  />
                  <Input
                    px="4"
                    py="12.5px"
                    w="100%"
                    placeholder="Card Number"
                    _dark={{
                      fontSize: 'sm',
                      color: 'coolGray.300',
                      borderColor: 'coolGray.500',
                      _focus: { borderColor: 'coolGray.500' },
                    }}
                    _light={{
                      fontSize: 'sm',
                      color: 'coolGray.800',
                      borderColor: '#D1D5DB',
                      _focus: { borderColor: '#D1D5DB' },
                    }}
                  />
                </VStack>
                <VStack mt="6">
                  <Text
                    mb="2"
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Expiry Date
                  </Text>
                  <HStack flex={1} space="10px">
                    <Pressable
                      flex={1}
                      onPress={() => {
                        console.log('pressed');
                      }}
                    >
                      <HStack
                        pl={4}
                        pr={2}
                        py="11px"
                        borderWidth="1"
                        borderRadius="4"
                        justifyContent="space-between"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: '#D1D5DB',
                        }}
                      >
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _dark={{
                            color: 'coolGray.50',
                          }}
                          _light={{
                            color: 'coolGray.800',
                          }}
                        >
                          01
                        </Text>
                        <Icon
                          as={MaterialIcons}
                          name="keyboard-arrow-down"
                          size="6"
                          _light={{ color: 'coolGray.400' }}
                          _dark={{ color: 'coolGray.500' }}
                        />
                      </HStack>
                    </Pressable>
                    <Pressable
                      flex={1}
                      onPress={() => {
                        console.log('pressed');
                      }}
                    >
                      <HStack
                        pl={4}
                        pr={2}
                        py="11px"
                        borderWidth="1"
                        borderRadius="4"
                        justifyContent="space-between"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: '#D1D5DB',
                        }}
                      >
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _dark={{
                            color: 'coolGray.50',
                          }}
                          _light={{
                            color: 'coolGray.800',
                          }}
                        >
                          2021
                        </Text>
                        <Icon
                          as={MaterialIcons}
                          name="keyboard-arrow-down"
                          size="6"
                          _light={{ color: 'coolGray.400' }}
                          _dark={{ color: 'coolGray.500' }}
                        />
                      </HStack>
                    </Pressable>
                  </HStack>
                </VStack>
                <Button
                  mt="8"
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
                  borderRadius={4}
                >
                  ADD YOUR CARD
                </Button>
              </VStack>
            </VStack>
          </Hidden>
          {/* Main container Web */}
          <Hidden from="base" till="lg">
            <VStack
              flex={1}
              px={{ base: 0, md: 8 }}
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
                    mt="3"
                    _dark={{
                      bg: { md: 'coolGray.900' },
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
                px={{ base: 4, md: 0 }}
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
                  defaultValue="2"
                  onChange={(serialNum) => {
                    serialNum == '2'
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
                          _dark={{
                            bg: { md: 'coolGray.900' },
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
                          value={serialNum}
                        >
                          {item}
                        </Radio>
                        {cardVisible && serialNum == '2' ? (
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
                                  mb="3"
                                  fontSize="md"
                                  fontWeight="medium"
                                  _dark={{ color: 'coolGray.50' }}
                                  _light={{ color: 'coolGray.800' }}
                                >
                                  Enter your Credit card information.
                                </Text>
                                <HStack space="4">
                                  <Input
                                    px="4"
                                    py="12.5px"
                                    w="100%"
                                    placeholder="Card Name"
                                    _dark={{
                                      fontSize: 'sm',
                                      color: 'coolGray.300',
                                      borderColor: 'coolGray.500',
                                      _focus: { borderColor: 'coolGray.500' },
                                    }}
                                    _light={{
                                      fontSize: 'sm',
                                      color: 'coolGray.800',
                                      borderColor: '#D1D5DB',
                                      _focus: { borderColor: '#D1D5DB' },
                                    }}
                                  />
                                  <Input
                                    px="4"
                                    py="12.5px"
                                    w="100%"
                                    placeholder="Card Number"
                                    _dark={{
                                      fontSize: 'sm',
                                      color: 'coolGray.300',
                                      borderColor: 'coolGray.500',
                                      _focus: { borderColor: 'coolGray.500' },
                                    }}
                                    _light={{
                                      fontSize: 'sm',
                                      color: 'coolGray.800',
                                      borderColor: '#D1D5DB',
                                      _focus: { borderColor: '#D1D5DB' },
                                    }}
                                  />
                                </HStack>
                              </VStack>
                              <VStack mt="4">
                                <Text
                                  mb="2"
                                  fontSize="md"
                                  fontWeight="medium"
                                  _dark={{ color: 'coolGray.50' }}
                                  _light={{ color: 'coolGray.800' }}
                                >
                                  Expiry Date
                                </Text>
                                <HStack flex={1} space="10px">
                                  <Pressable
                                    flex={1}
                                    onPress={() => {
                                      console.log('pressed');
                                    }}
                                  >
                                    <HStack
                                      px="4"
                                      py="11px"
                                      borderWidth="1"
                                      borderRadius="4"
                                      justifyContent="space-between"
                                      _dark={{
                                        borderColor: 'coolGray.500',
                                      }}
                                      _light={{
                                        borderColor: '#D1D5DB',
                                      }}
                                    >
                                      <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        _dark={{
                                          color: 'coolGray.50',
                                        }}
                                        _light={{
                                          color: 'coolGray.800',
                                        }}
                                      >
                                        01
                                      </Text>
                                      <Icon
                                        as={MaterialIcons}
                                        name="keyboard-arrow-down"
                                        size="6"
                                        _light={{ color: 'coolGray.400' }}
                                        _dark={{ color: 'coolGray.500' }}
                                      />
                                    </HStack>
                                  </Pressable>
                                  <Pressable
                                    flex={1}
                                    onPress={() => {
                                      console.log('pressed');
                                    }}
                                  >
                                    <HStack
                                      px="4"
                                      py="11px"
                                      borderWidth="1"
                                      borderRadius="4"
                                      justifyContent="space-between"
                                      _dark={{
                                        borderColor: 'coolGray.500',
                                      }}
                                      _light={{
                                        borderColor: '#D1D5DB',
                                      }}
                                    >
                                      <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        _dark={{
                                          color: 'coolGray.50',
                                        }}
                                        _light={{
                                          color: 'coolGray.800',
                                        }}
                                      >
                                        2021
                                      </Text>
                                      <Icon
                                        as={MaterialIcons}
                                        name="keyboard-arrow-down"
                                        size="6"
                                        _light={{ color: 'coolGray.400' }}
                                        _dark={{ color: 'coolGray.500' }}
                                      />
                                    </HStack>
                                  </Pressable>
                                  <Pressable
                                    flex={1}
                                    onPress={() => {
                                      console.log('pressed');
                                    }}
                                  >
                                    <Button
                                      py="3"
                                      _dark={{
                                        bg: 'primary.700',
                                        _pressed: { bg: 'primary.500' },
                                      }}
                                      _light={{
                                        bg: 'primary.900',
                                        _pressed: { bg: 'primary.700' },
                                      }}
                                      borderRadius={4}
                                    >
                                      <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color="coolGray.50"
                                      >
                                        PAY {'\u20B9'} 22,000
                                      </Text>
                                    </Button>
                                  </Pressable>
                                </HStack>
                                <Text
                                  mt="6"
                                  fontSize="sm"
                                  _dark={{ color: 'coolGray.400' }}
                                  _light={{ color: 'coolGray.500' }}
                                >
                                  Your card details would be Securely Saved for
                                  faster payments
                                </Text>
                              </VStack>
                            </VStack>
                          </VStack>
                        ) : null}

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
              <Hidden from="lg">
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
                    _dark={{ bg: 'primary.700' }}
                    _light={{ bg: 'primary.900' }}
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
