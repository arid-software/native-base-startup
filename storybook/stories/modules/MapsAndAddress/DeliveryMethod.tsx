import React from 'react';
import {
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Radio,
  Box,
  Spacer,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function DeliveryMethod(props: any) {
  const reasonList = [
    'Monday- Free delivery',
    'Tuesday- Delivery fee ₹50',
    '2 Business Days- Delivery fee ₹150',
    'Pickup',
  ];
  return (
    <DashboardLayout
      title="Delivery Method"
      displaySearchButton
      displayNotificationButton
    >
      <VStack
        safeAreaBottom
        flex="1"
        space={{ base: '4', md: '5' }}
        px={{ base: '0', md: '10', lg: '40' }}
        py={{ base: '0', md: '8' }}
        pb={{ base: '4', md: '8' }}
        rounded={{ md: 'lg' }}
        borderWidth={{ base: '0', md: '1' }}
        _light={{
          bg: { md: 'white', base: 'primary.50' },
          borderColor: 'coolGray.200',
        }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.700',
        }}
      >
        <Box
          p={{ base: '4', md: '0' }}
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
        >
          <HStack
            space={{ base: '3', md: '5' }}
            alignItems="center"
            p={{ base: '3', md: '4' }}
            borderRadius="4"
            _light={{ bg: 'coolGray.50' }}
            _dark={{ bg: { base: 'coolGray.700', md: 'coolGray.800' } }}
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              }}
              alt="Product Image"
              height="24"
              width="20"
              borderRadius="md"
            />

            <VStack mt="1">
              <Text
                fontSize="sm"
                fontWeight="bold"
                _dark={{ color: 'coolGray.100' }}
                _light={{ color: 'coolGray.800' }}
              >
                Baby Bed Lamp
              </Text>
              <Text
                fontSize="sm"
                _dark={{ color: 'coolGray.200' }}
                _light={{ color: 'coolGray.500' }}
              >
                Automatic sensor,Multi color
              </Text>
              <Text
                fontSize="sm"
                _dark={{ color: 'coolGray.200' }}
                _light={{ color: 'coolGray.500' }}
              >
                Size : Medium
              </Text>
              <Text
                fontWeight="semibold"
                _dark={{ color: 'coolGray.100' }}
                _light={{ color: 'coolGray.800' }}
              >
                ₹ 1635.00
              </Text>
            </VStack>
          </HStack>
        </Box>
        <VStack
          px="4"
          pb="8"
          pt="3"
          _dark={{ bg: { base: 'coolGray.800', md: 'transparent' } }}
          _light={{ bg: { base: 'white', md: 'transparent' } }}
        >
          <Radio.Group name="myRadioGroup" defaultValue="1">
            <VStack space="4">
              <Text
                fontSize="md"
                fontWeight="bold"
                _dark={{ color: 'coolGray.100' }}
                _light={{ color: 'coolGray.800' }}
              >
                Choose a delivery option:
              </Text>
              {reasonList.map((item, index) => {
                return (
                  <Radio
                    alignItems="flex-start"
                    key={index}
                    // @ts-ignore
                    _dark={{
                      bg: { base: 'coolGray.800', md: 'coolGray.900' },
                      borderColor: 'coolGray.300',
                      _text: { color: 'coolGray.200' },
                      colorScheme: 'coolGray',
                    }}
                    // @ts-ignore
                    _light={{
                      borderColor: 'coolGray.400',
                      _text: { color: 'coolGray.500' },
                      colorScheme: 'primary',
                    }}
                    _text={{
                      fontSize: 'sm',
                      color: 'coolGray.800',
                      ml: '3',
                      fontWeight: 'medium',
                    }}
                    value={item}
                  >
                    {item}
                  </Radio>
                );
              })}
            </VStack>
          </Radio.Group>
        </VStack>
        <Spacer />
        <Box px={{ base: '4', md: '0' }}>
          <Button py="3" w="100%" bg="primary.800" _text={{ fontSize: 'md' }}>
            CONTINUE
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
