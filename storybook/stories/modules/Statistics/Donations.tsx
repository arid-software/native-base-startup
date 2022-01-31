import React from 'react';
import {
  Box,
  Icon,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Pressable,
  Image,
  Progress,
  IconButton,
  Divider,
  Hidden,
} from 'native-base';
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

let contentlist = [
  {
    imageUri: require('../../assets/houseplant.jpg'),
    itemName: 'Covid Warriors',
    itemCompany: 'BABY GROW',
    discountedPrice: 500,
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/archive/1.jpeg'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '5,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/smiling.jpg'),
    itemName: 'Covid Warriors',
    itemCompany: 'Mother care',
    discountedPrice: 500,
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/nice-girl.jpg'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '5,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/young-girl.jpg'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '5,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('../../assets/handsome.jpg'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '5,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
];
const iconListMobile = [
  {
    iconName: 'graduation',
    iconText: 'Education',
  },
  {
    iconName: 'lightbulb-on-outline',
    iconText: 'Creative',
  },
  {
    iconName: 'coronavirus',
    iconText: 'Coronavirus',
  },
  {
    iconName: 'human-handsup',
    iconText: 'Health',
  },
];
const iconListWeb = [
  {
    iconName: 'meditation',
    iconText: 'Meditation',
  },
  {
    iconName: 'lightbulb-on-outline',
    iconText: 'Creative',
  },
  {
    iconName: 'coronavirus',
    iconText: 'Coronavirus',
  },
  {
    iconName: 'theater-comedy',
    iconText: 'Comedy',
  },
  {
    iconName: 'graduation',
    iconText: 'Education',
  },
  {
    iconName: 'human-male',
    iconText: 'News',
  },
  {
    iconName: 'sports-esports',
    iconText: 'Sports',
  },

  {
    iconName: 'dots-three-vertical',
    iconText: 'More',
  },
];
function Card(props: any) {
  return (
    <Pressable _light={{ bg: 'coolGray.50' }} _dark={{ bg: 'coolGray.800' }}>
      <VStack
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        borderRadius="lg"
      >
        <Image
          w="141"
          h="141"
          borderRadius="lg"
          source={props.item.imageUri}
          alt="Alternate Text"
          resizeMode="cover"
        />

        <Text
          mt="2"
          fontSize="sm"
          fontWeight="normal"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          {props.item.itemName}
        </Text>

        <Progress
          w="100%"
          mt="3"
          value={40}
          _light={{ bg: '#D1FAE5' }}
          _dark={{ bg: 'coolGray.700' }}
          colorScheme="emerald"
        />

        <HStack mt="2" alignItems="center" justifyContent="space-between">
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.300' }}
          >
            Total Raised
          </Text>
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="0"
          >
            {'\u20B9'} {props.item.discountedPrice}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}
function CardFundraisers(props: any) {
  return (
    <Pressable>
      <VStack
        _light={{ bg: { base: 'primary.50', md: 'coolGray.50' } }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        borderRadius="lg"
        p={{ base: '2', md: 0 }}
      >
        <Image
          w={{ base: '157', md: '141' }}
          h={{ base: '169', md: '141' }}
          borderRadius="lg"
          source={props.item.imageUri}
          alt="Alternate Text"
          resizeMode="cover"
        />

        <Text
          mt="2"
          fontSize="sm"
          fontWeight="normal"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          {props.item.itemName}
        </Text>

        <Progress
          w="100%"
          mt="3"
          value={40}
          _light={{ bg: '#D1FAE5' }}
          _dark={{ bg: 'coolGray.700' }}
          colorScheme="emerald"
        />

        <HStack mt="2" alignItems="center" justifyContent="space-between">
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.300' }}
          >
            Total Raised
          </Text>
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="0"
          >
            {'\u20B9'} {props.item.discountedPrice}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}
function CatagoriesIcon(props: any) {
  return (
    <HStack space={1} justifyContent="space-evenly" mt="0" alignItems="center">
      <VStack space={2} alignItems="center">
        <Center
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: 'coolGray.700' }}
          p="2"
          rounded="full"
        >
          <IconButton
            variant="unstyled"
            icon={
              <Icon
                as={
                  props.item.iconName == 'meditation'
                    ? MaterialCommunityIcons
                    : props.item.iconName == 'human-handsup'
                    ? MaterialCommunityIcons
                    : props.item.iconName == 'human-male'
                    ? MaterialCommunityIcons
                    : props.item.iconName == 'lightbulb-on-outline'
                    ? MaterialCommunityIcons
                    : props.item.iconName == 'graduation'
                    ? SimpleLineIcons
                    : props.item.iconName == 'dots-three-vertical'
                    ? Entypo
                    : MaterialIcons
                }
                name={props.item.iconName}
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'coolGray.50' }}
                size="6"
              />
            }
            onPress={() => {
              console.log('iconButton pressed good luck');
            }}
          />
        </Center>
        <Text
          fontSize="xs"
          fontWeight="medium"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: { base: 'coolGray.50', md: 'coolGray.300' } }}
        >
          {props.item.iconText}
        </Text>
      </VStack>
    </HStack>
  );
}

function Donations(props: any) {
  return (
    <>
      <Text
        fontSize="md"
        fontWeight="bold"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
      >
        Trending Fundraisers
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        mx="-6"
      >
        <HStack
          mx="6"
          space={{ base: 3, md: 4 }}
          mt="3"
          alignItems="center"
          _light={{ bg: 'coolGray.50' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        >
          {contentlist.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </HStack>
      </ScrollView>

      <Divider
        mt="3"
        mr="4"
        w="100%"
        h="1px"
        _dark={{ bgColor: '#5D6471' }}
        _light={{ bgColor: 'coolGray.200' }}
      />
      <Text
        mt="6"
        fontWeight="bold"
        fontSize="md"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
      >
        Categories
      </Text>

      <Hidden from="md">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          mx="-6"
        >
          <HStack
            mx="6"
            space={3}
            mt="3"
            alignItems="center"
            _light={{ bg: 'coolGray.50' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          >
            {iconListMobile.map((item, index) => {
              return (
                <Box mr="6" key={index}>
                  <Pressable>
                    <CatagoriesIcon item={item} />
                  </Pressable>
                </Box>
              );
            })}
          </HStack>
        </ScrollView>
      </Hidden>
      <Hidden from="base" till="md">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          mx="-6"
        >
          <HStack
            mx="6"
            space={3}
            mt="3"
            alignItems="center"
            _light={{ bg: 'coolGray.50' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          >
            {iconListWeb.map((item, index) => {
              return (
                <Box mr="46px" key={index}>
                  <Pressable>
                    <CatagoriesIcon item={item} />
                  </Pressable>
                </Box>
              );
            })}
          </HStack>
        </ScrollView>
      </Hidden>
      <Divider
        mt="3"
        w="100%"
        _dark={{ bgColor: '#5D6471' }}
        _light={{ bgColor: 'coolGray.200' }}
      />
      <Text
        mt="6"
        fontWeight="bold"
        fontSize="md"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
      >
        Fundraisers
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        mx="-6"
      >
        <HStack
          mx="6"
          space={{ base: 3, md: 4 }}
          mt="3"
          alignItems="center"
          _light={{ bg: 'coolGray.50' }}
          _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        >
          {contentlist.map((item, index) => {
            return <CardFundraisers key={index} item={item} />;
          })}
        </HStack>
      </ScrollView>
    </>
  );
}

export default function (props: any) {
  return (
    <>
      <DashboardLayout displayScreenTitle={false} title={'Donation'}>
        <VStack
          px={{ base: '4', md: '6' }}
          py={{ base: '4', md: '6' }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'coolGray.50' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          space="4"
        >
          <Donations />
        </VStack>
      </DashboardLayout>
    </>
  );
}
