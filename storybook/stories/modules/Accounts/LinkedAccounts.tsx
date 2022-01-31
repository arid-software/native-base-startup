import React, { useState } from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  useColorMode,
  Switch,
  Center,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import IconFacebook from './components/IconFacebook';
import IconTwitter from './components/IconTwitter';
import IconGoogle from './components/IconGoogle';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Platform } from 'react-native';

export default function LinkedAccounts(props: any) {
  const { colorMode } = useColorMode();
  let [itemList, setItemList] = useState([
    {
      imageUri: (
        <Center ml={-0.5}>
          <IconFacebook />
        </Center>
      ),
      text: 'Facebook',
      isVisible: false,
    },
    {
      imageUri: <IconTwitter />,
      text: 'Twitter',
      isVisible: false,
    },
    {
      imageUri: <IconGoogle />,
      text: 'Google',
      isVisible: false,
    },
    {
      imageUri: (
        <Center mt={{ base: 0, md: -1 }}>
          <Icon size="6" as={AntDesign} color="black" name={'apple1'} />
        </Center>
      ),
      text: 'Apple',
      isVisible: false,
    },
  ]);
  return (
    <>
      <DashboardLayout title="Linked Accounts">
        <VStack
          space={{ base: 4, md: 6 }}
          py={{ base: 4, md: 8 }}
          px={{ base: 4, md: 8 }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderRadius={{ md: '8' }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
        >
          {itemList.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setItemList((prevItems) => {
                    const newItems = [...prevItems];
                    newItems[index].isVisible = !newItems[index].isVisible;
                    return newItems;
                  });
                }}
              >
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center" space="2">
                    {item.imageUri}
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.100' }}
                    >
                      {item.text}
                    </Text>
                  </HStack>
                  <Switch
                    size={Platform.OS === 'ios' ? 'sm' : 'md'}
                    _light={{
                      onThumbColor: 'white',
                      offThumbColor: 'white',
                      offTrackColor: 'coolGray.200',
                      onTrackColor: 'primary.900',
                    }}
                    _dark={{
                      onThumbColor: 'white',
                      offThumbColor: 'white',
                      offTrackColor: 'primary.700',
                      onTrackColor: 'primary.700',
                    }}
                  />
                </HStack>
              </Pressable>
            );
          })}
        </VStack>
      </DashboardLayout>
    </>
  );
}
