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
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const reviews = [
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Laura Jones',
    time: '12 May 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Laura Jones',
    time: '12 May 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Laura Jones',
    time: '12 May 2021',
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
      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _dark={{ bg: 'violet.700', _pressed: { bg: 'primary.500' } }}
        _light={{ bg: 'primary.900' }}
        _text={{ fontSize: 'md', fontWeight: 'medium' }}
        onPress={() => {
          console.log('hello');
        }}
      >
        CONTINUE
      </Button>
    </HStack>
  );
};

function Category(props: any) {
  return (
    <>
      <HStack mt="4" space="4" alignItems="center">
        <Box
          _light={{ bg: 'primary.50' }}
          _dark={{ bg: 'customGray' }}
          flex={1}
          height="20"
          borderRadius="4"
        >
          <Center>
            <VStack alignItems="center" my="4" space="1">
              <Text
                fontSize="lg"
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.700' }}
                fontWeight="bold"
              >
                97%
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Positive Feedback
              </Text>
            </VStack>
          </Center>
        </Box>
        <Box
          _light={{ bg: 'primary.50' }}
          _dark={{ bg: 'customGray' }}
          flex={1}
          height="20"
          borderRadius="4"
        >
          <Center>
            <VStack alignItems="center" my="4" space="1">
              <Text
                fontSize="lg"
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.700' }}
                fontWeight="bold"
              >
                50k
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Customers
              </Text>
            </VStack>
          </Center>
        </Box>
      </HStack>
    </>
  );
}
function ProductInfo(props: any) {
  return (
    <>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        mt={{ base: 0, md: 5 }}
      >
        <Text
          fontSize="lg"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Cool Store
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
      <Text fontSize="md" color="coolGray.400">
        24th Sep 2018
      </Text>
      <Text
        mt="2"
        fontSize="md"
        fontWeight="medium"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
      >
        843 Products
      </Text>
    </>
  );
}
function Review(props: any) {
  const [tabName, setTabName] = React.useState('Reviews');
  return (
    <>
      <HStack mt={{ base: 5, md: 10 }} space="5">
        <Pressable
          onPress={() => {
            setTabName('Reviews');
          }}
        >
          <Text
            fontSize="md"
            letterSpacing="0.4"
            fontWeight="medium"
            _light={{
              color: tabName == 'Reviews' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName == 'Reviews' ? 'coolGray.100' : 'coolGray.400',
            }}
          >
            Reviews
          </Text>

          {tabName == 'Reviews' ? (
            <Divider
              _light={{
                bgColor: tabName == 'Reviews' ? 'primary.900' : 'coolGray.50',
              }}
              _dark={{
                bgColor: tabName == 'Reviews' ? 'primary.700' : 'coolGray.800',
              }}
              py="1px"
            />
          ) : (
            <></>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setTabName('OtherLinks');
          }}
        >
          <Text
            fontSize="md"
            letterSpacing="0.4"
            fontWeight="medium"
            _light={{
              color: tabName == 'OtherLinks' ? 'primary.900' : 'coolGray.400',
            }}
            _dark={{
              color: tabName == 'OtherLinks' ? 'coolGray.100' : 'coolGray.400',
            }}
          >
            Other Items
          </Text>
          {tabName == 'OtherLinks' ? (
            <Divider
              _light={{
                bgColor:
                  tabName == 'OtherLinks' ? 'primary.900' : 'coolGray.50',
              }}
              _dark={{
                bgColor:
                  tabName == 'OtherLinks' ? 'primary.700' : 'coolGray.800',
              }}
              py="1px"
            />
          ) : (
            <></>
          )}
        </Pressable>
      </HStack>
      {tabName === 'OtherLinks' ? (
        <Text
          mt="5"
          fontSize="md"
          lineHeight="lg"
          letterSpacing="0.3"
          _light={{ color: 'coolGray.700' }}
          _dark={{ color: 'coolGray.200' }}
        >
          Yellow bodysuit, has a round neck with envelope detail along the
          shoulder, short sleeves and snap button closures along the crotch.Your
          Body suit has a round neck with detail along the shoulder,short
          sleeves and snap button closer along the front.
        </Text>
      ) : (
        reviews.map((item: any, idx: number) => {
          return (
            <VStack mt="5" key={idx}>
              <HStack justifyContent="space-between">
                <HStack space="3">
                  <Avatar
                    source={{
                      uri: item.imageUrl,
                    }}
                    height="9"
                    width="9"
                  />
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
                      <Icon
                        size="4"
                        name="star"
                        as={AntDesign}
                        color="amber.400"
                      />
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
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  {item.time}
                </Text>
              </HStack>
              <Text
                alignItems="center"
                lineHeight="lg"
                mt="2"
                _light={{ color: 'coolGray.700' }}
                _dark={{ color: 'coolGray.200' }}
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
      title="Cool Store"
      displaySidebar={false}
      header={{ searchbar: false }}
    >
      <Stack
        p={{ md: '8' }}
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
        borderWidth={1}
        borderColor="#E5E7EB"
        direction={{ base: 'column', md: 'row' }}
        space={{ base: '3', md: 0 }}
      >
        <Box
          p="2"
          _light={{ bg: 'primary.50' }}
          _dark={{ bg: 'customGray' }}
          borderRadius="md"
          alignItems="center"
          w={{ md: '50%' }}
          h={{ base: '27%', md: 'auto' }}
          pr={{ base: '2', md: '4' }}
          mx={{ base: 4 }}
          justifyContent="center"
          mt={{ base: 4 }}
        >
          <Image
            width="full"
            height={{ base: 'full', md: 'full' }}
            rounded={{ base: 'none', md: 'lg' }}
            alt="Alternate Text"
            source={require('./components/baby-clothes.jpg')}
          />
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box flex={1} px={{ base: 4 }} pb={{ base: 10 }}>
            <ProductInfo />
            <Category />
            <AddToCartButton base="none" md="flex" />
            <Review />
            <AddToCartButton base="flex" md="none" />
          </Box>
        </ScrollView>
      </Stack>
    </DashboardLayout>
  );
}
