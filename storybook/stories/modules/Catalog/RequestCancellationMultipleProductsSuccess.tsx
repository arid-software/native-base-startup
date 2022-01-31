import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Pressable,
  useColorMode,
  Button,
  Center,
  Radio,
  Modal,
} from 'native-base';

import DashboardLayout from '../../layouts/DashboardLayout';
import IconSuccessful from './components/IconSuccessful';

const productList = [
  {
    orderId: '#9726895435345',
    imageUri: 'https://wallpaperaccess.com/full/317501.jpg',
    item: 'BEDLAMP',
    details: 'Automatic sensor,Multi color',
    size: 'Size : Medium',
    delivery: 'Delivery by Mon 27',
    rupeeIcon: 'rupee',
    amount: '₹ 1635.00',
    discount: '5%off',
    deleteIcon: 'delete-outline',
  },

  {
    orderId: '#9726895435457',
    imageUri: 'https://wallpaperaccess.com/full/317501.jpg',
    item: 'JOHNSONS BABY',
    details: 'Skin care, body kit',
    size: 'Size : Medium',
    delivery: 'Delivery by Mon 27',
    rupeeIcon: 'rupee',
    amount: '₹ 3535.00',
    discount: '5%off',
    deleteIcon: 'delete-outline',
  },
];

function MainContent(props: any) {
  const [modalVisible, setModalVisible] = React.useState(true);
  const reasonList = [
    'I want to change my phone number',
    'I have changed my mind',
    'I have purchased the product elsewhere',
    'Expected delivery time is very long',
    'I want to change address for the order',
    'I want to cancel due to product quality issues',
  ];
  return (
    <>
      <Box flex={1}>
        <VStack
          flex={1}
          px={{ base: 0, md: 8, lg: 16, xl: 32 }}
          pb={{ base: 0, md: 8 }}
          borderWidth={1}
          borderRadius={4}
          _light={{
            bg: { md: 'white', base: 'primary.50' },
            borderColor: 'coolGray.200',
          }}
          _dark={{
            bg: { base: 'customGray', md: 'coolGray.900' },
            borderColor: 'customGray',
          }}
        >
          {productList.map((item, index) => {
            return (
              <Box
                mt={{ md: 8, base: 4 }}
                _dark={{ bg: 'coolGray.800' }}
                _light={{ bg: 'white' }}
                px={{ base: 4, md: 0 }}
                py={{ base: 3, md: 0 }}
                key={index}
                borderRadius={6}
              >
                <HStack
                  _dark={{ bg: { base: 'customGray', md: 'coolGray.800' } }}
                  _light={{ bg: 'coolGray.50' }}
                  borderRadius={6}
                  pb={{ base: 0, md: 4 }}
                >
                  <VStack
                    justifyContent="center"
                    ml={4}
                    mt={{ base: 0, md: 4 }}
                  >
                    <Radio.Group name="RadioCard">
                      <Radio
                        value="RadioCards"
                        _light={{
                          // @ts-ignore
                          _checked: {
                            _icon: { color: 'primary.900' },
                            borderColor: 'primary.900',
                          },
                          borderColor: 'coolGray.400',

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
                            base: 'customGray',
                            md: 'coolGray.800',
                          },
                          _text: { color: 'coolGray.300' },
                        }}
                        _text={{ fontSize: 'sm' }}
                        label="radio"
                      />
                    </Radio.Group>
                  </VStack>
                  <VStack flex={1}>
                    <HStack
                      flex={1}
                      mx={{ md: 3, base: 3 }}
                      alignItems="center"
                      justifyContent="space-between"
                      pt={{ base: 3, md: 4 }}
                      mb={2}
                      borderRadius="4"
                    >
                      <Text
                        flex={1}
                        fontSize="xs"
                        _dark={{ color: 'coolGray.400' }}
                        _light={{ color: 'coolGray.800' }}
                      >
                        Order:{item.orderId}
                      </Text>
                      <Text
                        fontSize="xs"
                        _dark={{ color: 'emerald.500' }}
                        _light={{ color: 'emerald.600' }}
                        ml="2"
                      >
                        Delivered
                      </Text>
                    </HStack>
                    <HStack
                      space="3"
                      alignItems="center"
                      px="3"
                      py="0"
                      mb={{ md: 0, base: 3 }}
                      borderRadius="4"
                    >
                      <Image
                        source={{ uri: item.imageUri }}
                        alt="Alternate Text"
                        height="24"
                        width="20"
                        borderRadius="md"
                      />

                      <VStack mt="2" flex={1}>
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
                          _dark={{ color: 'coolGray.400' }}
                          _light={{ color: 'coolGray.500' }}
                        >
                          {item.details}
                        </Text>
                        <Text
                          fontSize="sm"
                          _dark={{ color: 'coolGray.400' }}
                          _light={{ color: 'coolGray.500' }}
                        >
                          {item.size}
                        </Text>
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          _dark={{ color: 'coolGray.100' }}
                          _light={{ color: 'coolGray.700' }}
                        >
                          {item.amount}
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            );
          })}
          <VStack
            px={{ base: 4, md: 0 }}
            pb="4"
            pt="3"
            mt={{ base: 4, md: 5 }}
            mb={{ base: 8, md: 4 }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
            _light={{ bg: { base: 'white', md: 'white' } }}
          >
            <Text
              fontSize="md"
              fontWeight="bold"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              Reason for Cancellation
            </Text>
            <Radio.Group name="myRadioGroup" defaultValue="1">
              {reasonList.map((item, index) => {
                return (
                  <Radio
                    _light={{
                      // @ts-ignore
                      _checked: {
                        _icon: { color: 'primary.900' },
                        borderColor: 'primary.900',
                      },
                      borderColor: 'coolGray.400',
                      _text: { color: 'coolGray.500' },
                    }}
                    _dark={{
                      // @ts-ignore
                      _checked: {
                        _icon: { color: 'primary.700' },
                        borderColor: 'primary.700',
                      },
                      borderColor: 'coolGray.400',
                      background: { base: 'coolGray.800', md: 'coolGray.900' },
                      _text: { color: 'coolGray.300' },
                    }}
                    key={index}
                    mt="3"
                    _text={{ fontSize: 'sm' }}
                    value={item}
                  >
                    {item}
                  </Radio>
                );
              })}
            </Radio.Group>
          </VStack>
          <Center mx={{ base: 4, md: 0 }}>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              py="3"
              w="100%"
              _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
              _light={{ bg: 'primary.900' }}
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
                color: 'coolGray.50',
              }}
              borderRadius={6}
              _focus={{
                _dark: { bg: 'primary.700' },
                _light: { bg: 'primary.900' },
              }}
            >
              SUBMIT REQUEST
            </Button>
          </Center>

          <Modal
            isOpen={modalVisible}
            onClose={setModalVisible}
            size="md"
            _light={{ bg: 'rgba(31,41,55,0.6)' }}
          >
            <Modal.Content
              _dark={{ bg: 'coolGray.800' }}
              px={4}
              ml={{ base: 0, md: '6' }}
              maxWidth="368px"
              borderRadius={10}
            >
              <VStack
                borderRadius="xl"
                alignItems="center"
                justifyContent="center"
                pt={10}
              >
                <Pressable borderRadius={120}>
                  <IconSuccessful />
                </Pressable>
                <Text
                  fontSize="lg"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  textAlign="center"
                  my={8}
                >
                  Your order has been cancelled successfully
                </Text>
                <HStack alignItems="center" justifyContent="center" w="100%">
                  <Button
                    mb={8}
                    py="4"
                    onPress={() => {
                      console.log('when clicking here, will show all orders ');
                    }}
                    _light={{ bg: 'primary.900' }}
                    _dark={{
                      bg: 'primary.700',
                      _pressed: { bg: 'primary.500' },
                    }}
                    borderRadius="4"
                    width="80%"
                    _text={{ fontSize: 'xs', fontWeight: 'semibold' }}
                    _focus={{
                      _dark: { bg: 'primary.700' },
                      _light: { bg: 'primary.900' },
                    }}
                  >
                    VIEW ALL ORDERS
                  </Button>
                </HStack>
              </VStack>
            </Modal.Content>
          </Modal>
        </VStack>
      </Box>
    </>
  );
}

export default function (props: any) {
  return (
    <>
      <DashboardLayout title="Request Cancellation" displaySidebar>
        <MainContent />
      </DashboardLayout>
    </>
  );
}
