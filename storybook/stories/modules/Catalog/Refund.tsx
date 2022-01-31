import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  Button,
  Center,
  FormControl,
  Stack,
  Input,
  TextArea,
  Hidden,
  Divider,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

function MainContent() {
  return (
    <>
      <VStack
        _light={{ bg: { md: 'white' }, borderColor: 'coolGray.200' }}
        _dark={{
          bg: {
            base: 'customGray',
            md: 'coolGray.900',
          },
          borderColor: 'coolGray.800',
        }}
        safeAreaBottom
        px={{ base: 0, md: 12, lg: 24, xl: 40 }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
        py={{ base: 0, md: 6 }}
      >
        <Box
          _light={{ bg: { base: 'white' } }}
          _dark={{ bg: { base: 'coolGray.800' } }}
        >
          <HStack
            space="3"
            alignItems="center"
            px="1"
            py="2"
            mx={{ base: '4', md: 0 }}
            mt={{ base: '4', md: 0 }}
            _light={{ bg: { base: 'coolGray.50', md: 'coolGray.100' } }}
            _dark={{ bg: { base: 'coolGray.700', md: 'coolGray.800' } }}
          >
            <Box
              _light={{ bg: 'primary.50' }}
              width="20"
              height="20"
              px="2"
              py="2"
              borderRadius="lg"
            >
              <Image
                source={require('./components/baby-clothes.jpg')}
                alt="Alternate Text"
                height="16"
                width="16"
                borderRadius="md"
              />
            </Box>
            <VStack space="1">
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Body Suit
              </Text>
              <Text
                fontSize="xs"
                _light={{ color: 'coolGray.400' }}
                _dark={{ color: 'coolGray.300' }}
              >
                Mother care
              </Text>
              <Text
                fontSize="sm"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                mt="2"
              >
                ₹500
              </Text>
            </VStack>
          </HStack>
        </Box>

        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            pt="7"
            px="4"
            pb="5"
            _light={{ bg: 'white' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          >
            <Text
              fontSize="md"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontWeight="bold"
            >
              Select reason
            </Text>
            <Icon
              as={MaterialIcons}
              name={'chevron-right'}
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              size="6"
            />
          </HStack>
        </Pressable>
        <Hidden from="base" till="md">
          <Box py={1}>
            <Divider
              py="0.1"
              _light={{ bg: 'coolGray.200' }}
              _dark={{ bg: 'coolGray.500' }}
            />
          </Box>
        </Hidden>

        <Pressable
          px="4"
          my="4"
          pb="4"
          _light={{ bg: 'white' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        >
          <Text
            fontSize="md"
            my="5"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
          >
            Add Photo or Video
          </Text>

          <Box
            width="100%"
            height="20"
            _light={{ borderColor: 'coolGray.300' }}
            _dark={{ borderColor: 'coolGray.500' }}
            borderWidth="2"
            borderStyle="dashed"
          >
            <Pressable
              onPress={() => {
                console.log('hello');
              }}
            >
              <VStack justifyContent="center" alignItems="center" space="2">
                <Icon
                  as={MaterialIcons}
                  name={'cloud-upload'}
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                  size="6"
                  mt="4"
                />
                <Text
                  fontSize="sm"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  Upload
                </Text>
              </VStack>
            </Pressable>
          </Box>
        </Pressable>
        <Box
          _light={{ bg: 'white' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        >
          <Text
            px="4"
            mt="7"
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
          >
            Description
          </Text>
          <TextArea
            mx="4"
            my="4"
            pt="4"
            h="32"
            placeholder="Refund Reason (optional)"
          />
        </Box>
        <Box
          _light={{ bg: 'white' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          mt="4"
        >
          <Text
            px="4"
            pt="4"
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
          >
            Refund Amount
          </Text>
          <FormControl isRequired px="4" my="4">
            <Stack>
              <Input
                py="4"
                type="text"
                placeholder="Enter amount you want to be refunded"
              />
            </Stack>
          </FormControl>
        </Box>
        <Box
          _light={{ bg: 'white' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          mt="4"
        >
          <Text
            px="4"
            pt="4"
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="bold"
          >
            Email Address
          </Text>
          <FormControl isRequired px="4" my="4">
            <Stack>
              <Input
                type="text"
                py="4"
                placeholder="Enter your email address"
              />
            </Stack>
          </FormControl>
        </Box>
        <Center px="4">
          <Button
            borderRadius="4"
            width="100%"
            size="md"
            mt="8"
            bg="primary.900"
            onPress={() => console.log('hello world')}
            _text={{ fontSize: 'sm', fontWeight: 'medium' }}
          >
            SUBMIT
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
      <DashboardLayout title={'Refund order'}>
        <MainContent />
      </DashboardLayout>
    </>
  );
}
