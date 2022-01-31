import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  StatusBar,
  Avatar,
  Image,
  useColorMode,
} from 'native-base';

import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function (props: any) {
  const { colorMode } = useColorMode();
  return <>
    <StatusBar
      translucent
      barStyle="light-content"
      backgroundColor="transparent"
    />
    <Box
      safeAreaTop
      _light={{ bg: "primary.900" }}
      _dark={{ bg: "coolGray.900" }}
    />
    <VStack
      flex={1}
      _dark={{ bg: "customGray" }}
      _light={{ bg: "primary.50" }}
    >
      <Box
        px={{ base: 4, md: 8 }}
        pt={{ base: 9, md: 4 }}
        pb={{ base: 5, md: 4 }}
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: { base: 'primary.900', md: 'coolGray.50' } }}
      >
        {/* Mobile header */}
        <HStack
          space="2"
          display={{ md: 'none' }}
          justifyContent="space-between"
        >
          <HStack space="2" alignItems="center">
            <Icon
              size="6"
              as={AntDesign}
              name={'arrowleft'}
              color="coolGray.50"
            />
            <Text color="coolGray.50" fontSize="lg">
              Bluetooth Pairing
            </Text>
          </HStack>
        </HStack>
        {/* Desktop header */}
        <HStack
          alignItems="center"
          justifyContent="space-between"
          display={{ base: 'none', md: 'flex' }}
        >
          <HStack space="0" alignItems="center">
            <Icon
              size="6"
              name={'menu-sharp'}
              as={Ionicons}
              _light={{ color: "coolGray.800" }}
              _dark={{ color: "coolGray.50" }}
            />
            {colorMode == 'light' ? (
              <Image
                h="10"
                size="72"
                alt="NativeBase Startup+ "
                resizeMode={'contain'}
                source={require('../../header_logo_light.png')}
              />
            ) : (
              <Image
                h="10"
                size="72"
                alt="NativeBase Startup+ "
                resizeMode={'contain'}
                source={require('../../header_logo_dark.png')}
              />
            )}
          </HStack>

          <HStack space="5" alignItems="center">
            <Icon
              size="6"
              name={'bell'}
              as={FontAwesome}
              color="coolGray.400"
            />
            <Avatar
              w="8"
              h="8"
              borderWidth="2"
              _dark={{ borderColor: "primary.700" }}
              source={{
                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
            />
          </HStack>
        </HStack>
      </Box>
      <Box
        flex={1}
        safeAreaBottom
        borderTopWidth="1"
        px={{ base: 4, md: 40 }}
        _light={{
          borderTopColor: "coolGray.200",
          bg: { base: 'white', md: 'primary.50' },
        }}
        _dark={{
          borderTopColor: "coolGray.700",
          bg: { base: 'coolGray.800', md: 'customGray' },
        }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box flex={1} p={{ md: 8 }}>
          <VStack px={{ md: 8 }} flex={1}>
            {/* Screen goes here */}
          </VStack>
        </Box>
      </Box>
    </VStack>
  </>;
}
