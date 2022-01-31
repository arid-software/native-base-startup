import React from 'react';
import {
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Center,
  Radio,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
function MainContent(props: any) {
  const reasonList = [
    'Quality of product not as expected',
    'Received broken/ Damaged product',
    'Received wrong item',
    "Don't won't product anymore",
    'Other.',
  ];
  return (
    <>
      <VStack
        px={{ base: 0, md: 12, lg: 24, xl: 40 }}
        py={{ base: 4, md: 6 }}
        borderRadius={{ md: '8' }}
        _light={{
          bg: { md: 'white' },
          borderColor: 'coolGray.200',
        }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        borderWidth={{ md: '1' }}
        flex={1}
      >
        <VStack
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          _light={{ bg: 'coolGray.50' }}
        >
          <HStack
            mx={{ md: 0, base: 4 }}
            _dark={{ bg: { base: 'customGray', md: 'coolGray.800' } }}
            _light={{ bg: { base: 'coolGray.100' } }}
            alignItems="center"
            px="3"
            pt="3"
            mt={{ md: 0, base: 3 }}
            borderRadius="4"
          >
            <Text
              flex={1}
              fontSize="sm"
              _dark={{ color: 'coolGray.100' }}
              _light={{ color: 'coolGray.800' }}
            >
              Order : #9726895435345
            </Text>
            <Text
              fontSize="sm"
              _dark={{ color: 'emerald.600' }}
              _light={{ color: 'emerald.600' }}
              ml="2"
            >
              Delivered
            </Text>
          </HStack>
          <HStack
            mx={{ md: 0, base: 4 }}
            space="3"
            alignItems="center"
            px="3"
            py="3"
            _dark={{ bg: { base: 'customGray', md: 'coolGray.800' } }}
            _light={{ bg: { base: 'coolGray.100' } }}
            mb={{ md: 0, base: 3 }}
            borderRadius="4"
          >
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              height="24"
              width="20"
              borderRadius="md"
            />

            <VStack mt="2" flex={1}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                _dark={{ color: 'coolGray.100' }}
                _light={{ color: 'coolGray.800' }}
              >
                BEDLAMP
              </Text>
              <Text
                fontSize="sm"
                _dark={{ color: 'coolGray.100' }}
                _light={{ color: 'coolGray.500' }}
              >
                Automatic sensor,Multi color
              </Text>
              <Text
                fontSize="sm"
                _dark={{ color: 'coolGray.100' }}
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
        </VStack>
        <VStack
          px="4"
          pb="8"
          pt="3"
          mt="3"
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          _light={{ bg: 'white' }}
        >
          <Text
            fontSize="md"
            fontWeight="bold"
            _dark={{ color: 'coolGray.100' }}
            _light={{ color: 'coolGray.800' }}
          >
            Reason for return
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
        <Center mt="9" px={{ base: 4 }}>
          <Button
            py={{ base: 3 }}
            w="100%"
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
            _text={{ fontSize: 'md', fontWeight: 'semibold' }}
          >
            RETURN
          </Button>
        </Center>
      </VStack>
    </>
  );
}

export default function (props: any) {
  const reasonList = [
    'Quality of product not as expected',
    'Received broken/ Damaged product',
    'Received wrong item',
    "Don't won't product anymore",
    'Other.',
  ];
  return (
    <>
      <DashboardLayout title="Return order">
        <MainContent />
      </DashboardLayout>
    </>
  );
}
