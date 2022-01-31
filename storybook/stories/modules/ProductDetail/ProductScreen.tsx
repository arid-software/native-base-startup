import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  useColorMode,
  ScrollView,
  Pressable,
  Center,
  Divider,
  Button,
  Stack,
  Link,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const categories = [
  {
    category: 'New Born',
  },
  {
    category: 'Tiny Baby',
  },
  {
    category: '0-3 M',
  },
];

const reviews = [
  {
    imageUrl: require('../../assets/handsome.jpg'),
    name: 'Laura Jones',
    time: '12 May 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl: require('../../assets/smiling.jpg'),
    name: 'Laura Jones',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl: require('../../assets/young-girl.jpg'),
    name: 'Rati Agarwal',
    time: '31 Aug 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];
const AddToCartButton = (props: any) => {
  return (
    <HStack
      mt="5"
      space="4"
      alignItems="center"
      display={{
        base: props.base,
        md: props.md,
      }}
    >
      <Pressable
        onPress={() => {
          console.log('hello');
        }}
      >
        <Center
          p="2"
          borderRadius="4"
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: { base: 'customGray', md: 'coolGray.800' } }}
        >
          <Icon
            size="8"
            name="heart"
            as={EvilIcons}
            _dark={{ color: 'violet.500' }}
            _light={{ color: 'primary.900' }}
          />
        </Center>
      </Pressable>

      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _dark={{ bg: 'violet.700', _pressed: { bg: 'primary.500' } }}
        _light={{ bg: 'primary.900' }}
        _text={{ fontSize: 'md', fontWeight: 'semibold' }}
      >
        ADD TO CART
      </Button>
    </HStack>
  );
};

function ProductImage(props: any) {
  return (
    <>
      <Box
        p="2"
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
        borderRadius="md"
        alignItems="center"
        w={{ md: '50%' }}
        h={{ base: '40%', md: 'auto' }}
        mt={{ base: 5 }}
        px={{ base: '2', md: '2' }}
        justifyContent="center"
        mx={{ base: 4 }}
      >
        <Image
          width="full"
          height={{ base: 'full', md: 'full' }}
          rounded="lg"
          alt="Alternate Text"
          source={require('./components/baby-clothes.jpg')}
        />
      </Box>
    </>
  );
}
function ProductInfo(props: any) {
  return (
    <>
      <VStack>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={{ md: 4 }}
        >
          <Text
            fontSize="lg"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="medium"
          >
            Body Suit
          </Text>
          <HStack alignItems="center" space="1">
            <Icon size="4" name={'star'} as={AntDesign} color="amber.400" />
            <Text
              fontSize="md"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              4.9
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              _light={{ color: 'coolGray.400' }}
              _dark={{ color: 'coolGray.400' }}
            >
              (120)
            </Text>
          </HStack>
        </HStack>
        <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
          Mother care
        </Text>
        <Text
          fontSize="xl"
          fontWeight="medium"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          ₹500
        </Text>
      </VStack>
      <HStack space="1" mt="5" alignItems="center">
        <Text
          fontSize="sm"
          fontWeight="medium"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Select Size
        </Text>
        <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
          (Age Group)
        </Text>
        <Link
          ml="auto"
          _text={{ textDecoration: 'none' }}
          _light={{
            _text: {
              color: 'primary.800',
              fontSize: 'sm',
              fontWeight: 'medium',
            },
          }}
          _dark={{
            _text: {
              color: 'primary.400',
              fontSize: 'sm',
              fontWeight: 'medium',
            },
          }}
        >
          Size Chart
        </Link>
      </HStack>
    </>
  );
}

function Category(props: any) {
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Button.Group space="2" mt={3} alignItems="center">
          {categories.map((item: any, index: number) => {
            return (
              <Button
                key={index}
                ml={{ md: 1, base: 0 }}
                mb={{ md: 1, base: 0 }}
                py="4"
                px="5"
                borderRadius="4"
                variant="subtle"
                _text={{
                  _dark: { color: 'coolGray.50' },
                  _light: { color: 'coolGray.800' },
                  fontWeight: 'normal',
                }}
                _light={{
                  bg: { base: 'primary.50', md: 'primary.50' },
                }}
                _dark={{
                  bg: { base: 'customGray', md: 'coolGray.800' },
                }}
              >
                {item.category}
              </Button>
            );
          })}
        </Button.Group>
      </ScrollView>
    </>
  );
}
function Description(props: any) {
  const [tabName, setTabName] = React.useState('Description');
  return (
    <>
      <HStack mt={{ md: 8, base: 5 }} space="4">
        <Pressable
          onPress={() => {
            setTabName('Description');
          }}
        >
          <Text
            fontSize="16"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: tabName == 'Description' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName == 'Description' ? 'coolGray.50' : 'coolGray.400',
            }}
          >
            Description
          </Text>
          {tabName == 'Description' ? (
            <Box width="100%" py="1">
              <Divider
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700' }}
              />
            </Box>
          ) : (
            <></>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setTabName('Reviews');
          }}
        >
          <Text
            fontSize="16"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: tabName == 'Reviews' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName == 'Reviews' ? 'coolGray.50' : 'coolGray.400',
            }}
          >
            Reviews
          </Text>
          {tabName == 'Reviews' ? (
            <Box width="100%" py="1">
              <Divider
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700' }}
              />
            </Box>
          ) : (
            <></>
          )}
        </Pressable>
      </HStack>
      {tabName === 'Description' ? (
        <Text
          mt="3"
          fontSize="sm"
          lineHeight="lg"
          fontWeight="normal"
          letterSpacing="0.3"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.100' }}
        >
          Yellow bodysuit, has a round neck with envelope detail along the
          shoulder, short sleeves and snap button closures along the crotch.Your
          Body suit has a round neck with detail along the shoulder,short
          sleeves and snap button closer along the front.
        </Text>
      ) : (
        reviews.map((item: any, idx: number) => {
          return (
            <VStack my="3" px="4" key={idx}>
              <HStack justifyContent="space-between">
                <HStack space="3">
                  <Avatar source={item.imageUrl} height="9" width="9" />
                  <VStack space="1">
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      _dark={{ color: 'coolGray.50' }}
                      _light={{ color: 'coolGray.800' }}
                    >
                      {item.name}
                    </Text>
                    <HStack space="1">
                      <Icon
                        size="4"
                        name="star"
                        as={AntDesign}
                        color="amber.400"
                      />
                    </HStack>
                  </VStack>
                </HStack>
                <Text
                  fontSize="sm"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  {item.time}
                </Text>
              </HStack>
              <Text
                alignItems="center"
                lineHeight="lg"
                mt="4"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="md"
              >
                {item.review}
              </Text>
            </VStack>
          );
        })
      )}
    </>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout
      title="Body Suit"
      displaySidebar={false}
      header={{ searchbar: true }}
    >
      <Stack
        flex={1}
        p={{ md: '6' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth={1}
        borderColor="#E5E7EB"
        borderRadius={{ md: 8 }}
        direction={{ base: 'column', md: 'row' }}
        space="3"
      >
        <ProductImage />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box flex={1} px={{ base: '4' }}>
            <ProductInfo />
            <Category />
            <AddToCartButton base="none" md="flex" />
            <Description />
            <AddToCartButton base="flex" md="none" />
          </Box>
        </ScrollView>
      </Stack>
    </DashboardLayout>
  );
}
