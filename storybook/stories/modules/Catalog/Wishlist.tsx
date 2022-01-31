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
  useBreakpointValue,
  FlatList,
} from 'native-base';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Card(props: any) {
  return (
    <VStack
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{
        bg: { md: 'coolGray.900', base: 'coolGray.800' },
        borderColor: 'coolGray.700',
      }}
      width={{
        base: windowWidth / 2 - 24,
        sm: windowWidth / 2 - 24,
        md: '170',
      }}
      space="1"
    >
      <Icon
        position="absolute"
        right="2"
        top="4"
        // @ts-ignore
        zIndex="1"
        size={{ base: '7', md: '5' }}
        fontWeight="semibold"
        color="white"
        as={MaterialCommunityIcons}
        name="close-circle"
      />
      <Image
        width={{
          base: windowWidth / 2 - 24,
          sm: windowWidth / 2 - 24,
          md: '170',
        }}
        maxWidth="180"
        h="169"
        borderRadius="12"
        source={props.item.imageUri}
        alt="Alternate Text"
        // @ts-ignore
        resizeMode="cover"
      ></Image>
      <HStack pl="2" alignItems="center" justifyContent="space-between">
        <Text>{props.item.itemName}</Text>
        <HStack pl="2" justifyContent="flex-end" alignItems="center">
          <Icon
            size={{ base: '3', md: '2' }}
            color="yellow.400"
            mr="1"
            as={Ionicons}
            name={'ios-star'}
          />
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.100' }}
          >
            4.9
          </Text>
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.400' }}
          >
            (120)
          </Text>
        </HStack>
      </HStack>
      <HStack space="1" pl={2}>
        <Text fontSize="xs" fontWeight="bold">
          {'\u20B9'} {props.item.discountedPrice}
        </Text>
        <Text fontSize="xs" strikeThrough={true} color="coolGray.400">
          {'\u20B9'} {props.item.actualPrice}
        </Text>
        <Text fontSize="xs" color="emerald.600">
          ({props.item.discountPercentage}%OFF)
        </Text>
      </HStack>

      <Pressable
        py={1}
        borderRadius="md"
        borderWidth={1}
        _light={{
          borderColor: 'primary.900',
          _pressed: { bg: 'primary.100' },
        }}
        _dark={{
          borderColor: 'coolGray.500',
          _pressed: { bg: 'coolGray.700' },
        }}
      >
        <HStack alignItems="center" justifyContent="center" space="2">
          <Icon
            as={AntDesign}
            name="plus"
            size="3"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'coolGray.300' }}
          />

          <Text
            _light={{ color: 'primary.900', fontSize: 'xs' }}
            _dark={{ color: 'coolGray.300', fontSize: 'xs' }}
          >
            ADD TO CART
          </Text>
        </HStack>
      </Pressable>
    </VStack>
  );
}
const itemList = [
  {
    imageUri: require('../../assets/candle.jpg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/lamp.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/houseplant.jpg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse5.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse7.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/candle.jpg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse8.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/houseplant.jpg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
    itemName: 'Homesake',
    discountedPrice: '2,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
];

function MainContent() {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 3,
    md: 2,
    xl: 5,
  });
  return (
    <>
      <VStack
        px={{ md: 10, base: 0 }}
        _light={{ bg: { md: 'white' } }}
        _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
      >
        <VStack _light={{ bg: { md: 'white' } }} alignItems="center">
          <FlatList
            numColumns={noColumn}
            _light={{ bg: { md: 'white' } }}
            _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
            data={itemList}
            renderItem={({ item }) => (
              <HStack mx="1" mt="2">
                <Card item={item} />
              </HStack>
            )}
            key={noColumn}
            keyExtractor={(item, index) => 'key' + index}
          />
        </VStack>
      </VStack>
    </>
  );
}

export default function Wishlist(props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout
        title="Wishlist"
        subTitle="28 items"
        children={undefined}
        displayBackButton
      >
        <VStack
          px={{ base: 4, md: 0 }}
          py={{ base: 4, md: 10 }}
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
          space="4"
        >
          <MainContent />
        </VStack>
      </DashboardLayout>
    </>
  );
}
