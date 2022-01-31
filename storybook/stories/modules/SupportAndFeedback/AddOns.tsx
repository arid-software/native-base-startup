import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  ScrollView,
  Button,
  Link,
  FlatList,
  Spacer,
  AspectRatio,
  Hidden,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';

const product = [
  {
    imageRes:
      'https://images.unsplash.com/photo-1631541909061-71e349d1f203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80',
    type: 'Knitted Sweater',
    category: 'BABY GROW',
    price: '₹1000',
  },
  {
    imageRes:
      'https://images.unsplash.com/photo-1594150878496-a921e5af8907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80',
    type: 'Boys Casual Shoes',
    category: 'YK',
    price: '₹200',
  },
  {
    imageRes:
      'https://images.unsplash.com/photo-1560706980-0ee43b01f4c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    type: 'Boys Printed T-Shirt',
    category: 'Mother Care',
    price: '₹500',
  },
  {
    imageRes:
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    type: 'Boys Bodysuit',
    category: 'Mother Care',
    price: '₹400',
  },
];
function ProductAddons(props: any) {
  return (
    <>
      <Hidden till="md">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          mx="-8"
        >
          <HStack space="4" mx="8">
            {product.map((item, key) => {
              return <Item item={item} key={key} />;
            })}
          </HStack>
        </ScrollView>
      </Hidden>
      <Hidden from="md">
        <FlatList
          contentContainerStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          keyExtractor={(item, index) => 'key' + index}
          data={props.showAll ? product : product.slice(0, 2)}
          renderItem={({ item, index }) => (
            <Item item={item} index={index}></Item>
          )}
          key={2}
        />
      </Hidden>
    </>
  );
}
function Item(props: any) {
  return (
    <Box
      p="2"
      _light={{ bg: 'primary.50' }}
      _dark={{ bg: 'customGray' }}
      rounded="8"
      flex="1"
      ml={{ base: props?.index % 2 != 0 ? '4' : '0', md: '0' }}
      mb="4"
    >
      <AspectRatio width="40" ratio={156 / 169}>
        <Image
          rounded="8"
          source={{ uri: props.item.imageRes }}
          alt="Alternet Text"
        />
      </AspectRatio>
      <VStack space="1" mt="3">
        <Text
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          {props.item.type}
        </Text>
        <Text
          fontSize="xs"
          _light={{ color: 'coolGray.400' }}
          _dark={{ color: 'coolGray.300' }}
        >
          {props.item.category}
        </Text>
      </VStack>
      <HStack justifyContent="space-between" alignItems="center" mt="3">
        <Text fontSize="md" fontWeight="bold">
          {props.item.price}
        </Text>
      </HStack>
    </Box>
  );
}
export default function (props: any) {
  const [seeAllAddons, setSeeAllAddons] = React.useState(false);
  function toggleSeeAllAddons() {
    setSeeAllAddons(!seeAllAddons);
  }
  return (
    <>
      <DashboardLayout
        title="Add-ons"
        displayNotificationButton
        displayScreenTitle
      >
        <VStack
          rounded="lg"
          borderWidth={{ base: '0', md: '1' }}
          _light={{
            bg: { md: 'white', base: 'primary.50' },
            borderColor: 'coolGray.200',
          }}
          _dark={{
            bg: { md: 'coolGray.900', base: 'customGray' },
            borderColor: 'coolGray.700',
          }}
          px={{ md: '8', lg: '24', xl: '32' }}
          py={{ md: '8' }}
          pb={{ base: '4', md: '8' }}
          space="4"
          flex="1"
        >
          <Box
            _light={{ bg: 'white' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
            p={{ base: '4', md: '0' }}
          >
            <HStack
              _light={{ bg: 'coolGray.50' }}
              _dark={{ bg: { base: 'coolGray.700', md: 'customGray' } }}
              space="3"
              alignItems="center"
              px="3"
              py="3"
              rounded="4"
            >
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
                }}
                alt="Lamp Photo"
                height="24"
                width="20"
                borderRadius="md"
              />

              <VStack>
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
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.500' }}
                >
                  Automatic sensor,Multi color
                </Text>
                <Text
                  fontSize="sm"
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.500' }}
                >
                  Size : Medium
                </Text>
                <Text
                  fontWeight="semibold"
                  _dark={{ color: 'coolGray.100' }}
                  _light={{ color: 'coolGray.800' }}
                  mt="2"
                >
                  ₹ 1635.00
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box
            _light={{ bg: 'white' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
            px={{ base: '4', md: '0' }}
          >
            <HStack alignItems="center" justifyContent="space-between" py="4">
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontWeight="bold"
              >
                Product Add-ons
              </Text>

              <Link
                onPress={toggleSeeAllAddons}
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  textDecorationLine: 'none',
                }}
                _light={{
                  _text: {
                    color: 'primary.900',
                  },
                }}
                _dark={{
                  _text: {
                    color: 'primary.500',
                  },
                }}
              >
                See {seeAllAddons ? 'Less' : 'All'}
              </Link>
            </HStack>
            <ProductAddons showAll={seeAllAddons} />
          </Box>
          <Spacer />
          <Box px={{ base: '4', md: '0' }}>
            <Button
              _light={{ bg: 'primary.900' }}
              _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
              py="3"
              _text={{ fontSize: 'md' }}
            >
              CHECKOUT
            </Button>
          </Box>
        </VStack>
      </DashboardLayout>
    </>
  );
}
