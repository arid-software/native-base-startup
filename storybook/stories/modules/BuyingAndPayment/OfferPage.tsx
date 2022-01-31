import React from 'react';
import {
  Text,
  VStack,
  Image,
  useColorMode,
  useBreakpointValue,
  FlatList,
  Box,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
const list = [
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '30%',
    type: 'Bodysuits',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '40%',
    type: 'Kids Set',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '50%',
    type: 'Shoes',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '60%',
    type: 'Night Wear',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '30%',
    type: 'Bodysuits',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '40%',
    type: 'Kids Set',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '50%',
    type: 'Shoes',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '60%',
    type: 'Night Wear',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '30%',
    type: 'Bodysuits',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '40%',
    type: 'Kids Set',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '50%',
    type: 'Shoes',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '60%',
    type: 'Night Wear',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '30%',
    type: 'Bodysuits',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '40%',
    type: 'Kids Set',
  },
  {
    imageResLight: require('./Components/baby.jpeg'),
    imageResDark: require('./Components/OfferImage3.jpg'),
    discount: '50%',
    type: 'Shoes',
  },
];
function Card(props: any) {
  const { colorMode } = useColorMode();
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      w={{ base: 96, md: 64, lg: 72, xl: 80 }}
      mt={{ base: 5, md: 4 }}
      mx={{ base: 0, md: 1 }}
      height={48}
    >
      {colorMode == 'dark' ? (
        <Image
          source={props.item.imageResDark}
          alt="Alternate Text"
          position="absolute"
          resizeMode="cover"
          top={0}
          bottom={0}
          right={0}
          left={0}
          zIndex={-1}
          w={{ base: 96, md: 64, lg: 72, xl: 80 }}
        />
      ) : (
        <>
          <Image
            source={props.item.imageResLight}
            alt="Alternate Text"
            position="absolute"
            resizeMode="cover"
            top={0}
            bottom={0}
            right={0}
            left={0}
            zIndex={-1}
            w={{ base: 96, md: 64, lg: 72, xl: 80 }}
          ></Image>
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={-1}
            bg={{
              linearGradient: {
                colors: ['transparent', 'rgba(0,0,0,0.8)'],
              },
            }}
          ></Box>
        </>
      )}
      <VStack
        justifyContent="flex-end"
        ml={3}
        flex={1}
        w={{ base: 350, md: 56, lg: 72 }}
      >
        <Text
          _light={{ color: 'white' }}
          _dark={{ color: 'coolGray.400' }}
          fontWeight="semibold"
          fontSize="xl"
        >
          {props.item.type}
        </Text>
        <Text
          _light={{ color: 'white' }}
          _dark={{ color: 'coolGray.400' }}
          fontWeight="semibold"
          fontSize="2xl"
        >
          {props.item.discount + ' OFF'}
        </Text>
      </VStack>
    </Box>
  );
}
export default function OfferPage(props: any) {
  const { colorMode } = useColorMode();
  const noColumn = useBreakpointValue({
    base: 1,
    lg: 3,
    md: 3,
    xl: 3,
  });

  return (
    <DashboardLayout displaySidebar={false} title="Rewards" displayBackButton>
      <VStack
        pt={{ base: 0, md: 2 }}
        pb={{ base: 5, md: 4 }}
        borderRadius={{ md: '6' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.700',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth="1"
        space={4}
        alignItems="center"
      >
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          w="100%"
          numColumns={noColumn}
          data={list}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => <Card item={item} />}
          key={noColumn}
        />
      </VStack>
    </DashboardLayout>
  );
}
