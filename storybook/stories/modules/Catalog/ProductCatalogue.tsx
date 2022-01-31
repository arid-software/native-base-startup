import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  FlatList,
  Hidden,
} from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { useBreakpointValue } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
let list = [
  {
    imageUri: require('../../assets/furniture.jpg'),
    itemName: 'Boys Printed T-Shirt',
    itemCompany: 'BABY GROW',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '(60 % OFF)',
  },
  {
    imageUri: require('../../assets/lamp.jpeg'),
    itemName: 'Boys Casual Shoes',
    itemCompany: 'YK',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/table.jpg'),
    itemName: 'Body Suit T-shirt',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/light.jpeg'),
    itemName: 'Knitted Sweater',
    itemCompany: 'BABY GROW',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/fashion.jpg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/light.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'YK',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/table.jpg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/houseplant.jpg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/eclipse5.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
  {
    imageUri: require('../../assets/furniture.jpg'),
    itemName: 'Homesake',
    itemCompany: 'Mother care',
    discountedPrice: 2000,
    actualPrice: 5000,
    discountPercentage: '',
  },
];
function Card(props: any) {
  return (
    <Pressable>
      <VStack
        w={{ base: '173', md: '130', lg: '145', xl: '173' }}
        mt="3"
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
        borderRadius="lg"
        p="3"
      >
        <Hidden from="md" till="base">
          <Text
            position="absolute"
            left="5"
            top="5"
            zIndex={1}
            fontWeight="bold"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'violet.700' }}
          >
            {props.item.discountPercentage}
          </Text>
        </Hidden>
        <Image
          w={{ base: '157', md: '117', lg: '127', xl: '157' }}
          h="169"
          borderRadius="8"
          source={props.item.imageUri}
          alt="Alternate Text"
          resizeMode="cover"
        />

        <VStack space="1" mt="3">
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.200' }}
          >
            {props.item.itemName}
          </Text>
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.400' }}
          >
            {props.item.itemCompany}
          </Text>
        </VStack>
        <HStack mt="2" alignItems="center" justifyContent="space-between">
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.200' }}
            fontWeight="bold"
          >
            {'\u20B9'} {props.item.discountedPrice}
          </Text>
          <Icon
            size="6"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'violet.500' }}
            as={AntDesign}
            name="hearto"
          />
        </HStack>
      </VStack>
    </Pressable>
  );
}
export default function (props: any) {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 4,
    md: 3,
    xl: 5,
  });

  return (
    <>
      <DashboardLayout title="Kids" subTitle="28 items">
        <VStack
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'coolGray.50' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          space="4"
        >
          <VStack
            alignItems="center"
            _light={{ backgroundColor: 'coolGray.50' }}
            _dark={{
              backgroundColor: { md: 'coolGray.900', base: 'coolGray.800' },
            }}
            pb={4}
          >
            <FlatList
              numColumns={noColumn}
              data={list}
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
      </DashboardLayout>
    </>
  );
}
