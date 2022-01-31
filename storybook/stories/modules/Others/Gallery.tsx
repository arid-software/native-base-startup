import React from 'react';
import {
  Text,
  VStack,
  Image,
  useColorMode,
  useBreakpointValue,
  FlatList,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
const list = [
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    folderName: 'All',
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
    folderName: 'Camera',
  },
  {
    imageUri: require('./components/video.png'),
    folderName: 'Videos',
  },
  {
    imageUri: require('../../assets/chair.jpeg'),
    folderName: 'ScreenShots',
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    folderName: 'Bluetooth',
  },
  {
    imageUri: require('../../assets/fashion.jpg'),
    folderName: 'WhatsApp',
  },
  {
    imageUri: require('../../assets/handsome.jpg'),
    folderName: 'Facebook',
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
    folderName: 'Download',
  },
  {
    imageUri: require('../../assets/joker.png'),
    folderName: 'Others',
  },
];
const listMd = [
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/joker.png'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/joker.png'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/handsome.jpg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse5.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse8.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse6.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: 'https://wallpaperaccess.com/full/317501.jpg',
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/thinking-girl.jpg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/man.jpg'),
  },
  {
    imageUri: require('../../assets/nice-girl.jpg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/table.jpg'),
  },
  {
    imageUri: require('../../assets/living.jpg'),
  },
  {
    imageUri: 'https://wallpaperaccess.com/full/317501.jpg',
  },
];
function CardBase(props: any) {
  return (
    <VStack space={2} mx={{ base: 2, md: 4 }} my={{ base: 2 }}>
      <Image
        height={100}
        width={108}
        rounded="lg"
        source={props.item.imageUri}
        alt="Alternate Text"
      />
      <Text
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.100' }}
        fontWeight="semibold"
        fontSize="sm"
      >
        {props.item.folderName}
      </Text>
    </VStack>
  );
}
function CardMd(props: any) {
  return (
    <VStack space={1} mx={{ base: 2, md: 3 }} my={{ base: 0, md: 3 }}>
      <Image
        height={48}
        width={40}
        rounded="lg"
        source={props.item.imageUri}
        alt="Alternate Text"
      />
    </VStack>
  );
}
export default function ImagePicker(props: any) {
  const { colorMode } = useColorMode();
  const noColumn = useBreakpointValue({
    base: 3,
    lg: 5,
    md: 5,
    xl: 5,
  });
  return (
    <>
      <DashboardLayout displaySidebar={false} title="Gallery">
        <VStack
          px={{ base: 4, md: 0 }}
          py={{ base: 2, md: 4 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth="1"
          space={4}
          alignItems="center"
        >
          <FlatList
            display={{ base: 'flex', md: 'none' }}
            numColumns={noColumn}
            data={list}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => <CardBase item={item} />}
            pb={300}
          />
          <FlatList
            display={{ base: 'none', md: 'flex' }}
            numColumns={noColumn}
            data={listMd}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => <CardMd item={item} />}
          />
        </VStack>
      </DashboardLayout>
    </>
  );
}
