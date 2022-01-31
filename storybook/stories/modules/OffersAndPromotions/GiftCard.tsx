import React from 'react';
import { Text, VStack, Button, Image, Box, Radio } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
function FirstSection(props: any) {
  return (
    <Box
      py="2"
      borderBottomWidth="1"
      _light={{ borderColor: 'coolGray.200' }}
      _dark={{ borderColor: 'coolGray.500' }}
    >
      <VStack space={1}>
        <Text
          fontSize="lg"
          fontWeight="500"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Amazon
        </Text>
        <Text
          fontSize="sm"
          fontWeight="500"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Voucher worth RS.5000
        </Text>
        <Text
          fontSize="xs"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
        >
          Note :Non-returnable/ Non-replaceable
        </Text>
      </VStack>
    </Box>
  );
}
function SecondSection(props: any) {
  return (
    <Box
      py="2"
      borderBottomWidth="1"
      _light={{ borderColor: 'coolGray.200' }}
      _dark={{ borderColor: 'coolGray.500' }}
    >
      <VStack space={2}>
        <Text
          fontSize="sm"
          fontWeight="500"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          About
        </Text>
        <Text
          fontSize="xs"
          lineHeight="lg"
          letterSpacing="lg"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
        >
          Online shopping from the biggest e-com company.Biggest collection of
          magazines, books ,electronics and fashions appeals
        </Text>
      </VStack>
    </Box>
  );
}
function ThirdSection(props: any) {
  return (
    <Box
      py="2"
      borderBottomWidth="1"
      _light={{ borderColor: 'coolGray.200' }}
      _dark={{ borderColor: 'coolGray.500' }}
    >
      <VStack space={2}>
        <Text
          fontSize="sm"
          fontWeight="500"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Details
        </Text>
        <Text
          fontSize="xs"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
        >
          The Voucher of worth of RS 5000
        </Text>
      </VStack>
    </Box>
  );
}
function RadioSection(props: any) {
  return (
    <VStack space={4} py="2" borderColor="coolGray.200">
      <Text
        fontSize="sm"
        fontWeight="500"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
      >
        Delivery Options
      </Text>
      <Radio.Group name="myRadioGroup" flexDirection="row">
        <Radio
          value="one"
          _text={{ fontSize: 'xs' }}
          _light={{
            //@ts-ignore
            _checked: {
              _icon: { color: 'primary.900' },
              borderColor: 'primary.900',
            },
          }}
          _dark={{
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
            //@ts-ignore
            _checked: {
              _icon: { color: 'primary.700' },
              borderColor: 'primary.700',
            },
          }}
        >
          Buy for Self
        </Radio>
        <Radio
          ml="8"
          value="two"
          _light={{
            //@ts-ignore
            _checked: {
              _icon: { color: 'primary.900' },
              borderColor: 'primary.900',
            },
          }}
          _dark={{
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
            //@ts-ignore
            _checked: {
              _icon: { color: 'primary.700' },
              borderColor: 'primary.700',
            },
          }}
          _text={{ fontSize: 'xs' }}
        >
          Send a Gift
        </Radio>
      </Radio.Group>
    </VStack>
  );
}
export default function (props: any) {
  return (
    <DashboardLayout title={'Gift Cards'}>
      <VStack
        flex={1}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        px={{ md: 32 }}
      >
        <Image
          resizeMode="cover"
          alt="alternative text"
          width="100%"
          px={{ md: 20 }}
          pt={{ base: 0, md: 8 }}
          mt={{ base: 0, md: 8 }}
          h={{ base: 56, lg: 80 }}
          rounded={{ base: 'none', md: 'md' }}
          source={require('./components/image.png')}
        />

        <VStack px={{ base: 4, md: 0 }} pb={3}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <RadioSection />
          <Button
            mt={{ md: 7, base: 32 }}
            mb={9}
            py={4}
            borderRadius="4"
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
            }}
            _light={{
              bg: 'primary.900',
            }}
            _dark={{
              bg: 'primary.800',
            }}
            onPress={() => console.log('button pressed')}
          >
            BUY FOR 5000
          </Button>
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
