import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  useColorMode,
  Pressable,
  Checkbox,
  useBreakpointValue,
  Center,
} from 'native-base';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
const folder = [
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse5.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse7.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse8.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse7.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse7.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse5.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse8.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse7.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse8.jpeg'),
  },
];
function Card(props: any) {
  return (
    <>
      <Box
        w={{ base: '22.5%', md: '22.5%' }}
        h={{ base: '120px', md: '213px' }}
        mx={{ base: '1', md: '2', lg: '2', xl: '3' }}
        mt={{ base: '2', md: '4', lg: '4', xl: '5' }}
      >
        <Image
          height="100%"
          width="100%"
          rounded="sm"
          source={props.item.imageUri}
          alt="Alternate Text"
        />
        <Checkbox
          value="one"
          position="absolute"
          bottom="1"
          right="1"
          _checked={{
            _dark: {
              bg: '#6D28D9',
              value: 'one',
              borderColor: '#6D28D9',
              _icon: { color: 'white' },
            },
            _light: {
              bg: 'primary.900',
              value: 'one',
              borderColor: 'primary.900',
              _icon: { color: 'white' },
            },
            value: 'one',
          }}
        />
      </Box>
    </>
  );
}

function FooterComponent() {
  return (
    <Center
      position="absolute"
      left="0"
      right="0"
      bottom={{ base: '22px', lg: '60px' }}
    >
      <Box
        _light={{ bg: 'white' }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        px={{ md: 6, base: 0 }}
        pt="3"
        rounded={4}
        height="24"
        position="absolute"
        bottom="8"
        justifyContent="center"
        alignItems="center"
      >
        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <HStack justifyContent="space-between">
            <VStack alignItems="center" px={4}>
              <Icon
                as={MaterialIcons}
                name={'share'}
                size="5"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Share
              </Text>
            </VStack>
            <VStack alignItems="center" px={4}>
              <Icon
                as={MaterialIcons}
                name={'add-circle-outline'}
                size="5"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Add to
              </Text>
            </VStack>
            <VStack alignItems="center" px={4}>
              <Icon
                as={MaterialIcons}
                name={'lock-outline'}
                size="5"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Set as Private
              </Text>
            </VStack>
            <VStack alignItems="center" px={4}>
              <Icon
                as={MaterialCommunityIcons}
                name={'delete-outline'}
                size="5"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Delete
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    </Center>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();
  const noColumn = useBreakpointValue({
    base: 4,
    lg: 5,
    md: 5,
    xl: 6,
  });
  return (
    <>
      <DashboardLayout
        displayScreenTitle={false}
        displaySidebar={false}
        title="All"
      >
        <VStack
          justifyContent="center"
          borderRadius={{ md: '8' }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          px={{ base: 0, md: 1 }}
          py={{ base: 0, md: 3 }}
          pb={{ base: '2', md: '6', lg: '6', xl: '7' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
          }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <HStack flexWrap="wrap" width="100%" justifyContent="center">
            {folder.map((item, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Card item={item} />
                </React.Fragment>
              );
            })}
          </HStack>
        </VStack>
      </DashboardLayout>
      <FooterComponent />
    </>
  );
}
