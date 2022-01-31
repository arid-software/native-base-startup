import React from 'react';
import {
  VStack,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  StatusBar,
  Hidden,
  Center,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
export default function FullScreenProductPage(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'coolGray.900' }}
        _dark={{ bg: 'coolGray.800' }}
      />

      <VStack
        flex={1}
        _light={{ bg: 'coolGray.900' }}
        _dark={{ bg: 'coolGray.800' }}
        py={{ md: '5%' }}
        height="100%"
        justifyContent="center"
      >
        <Hidden from="md">
          <HStack
            py="4"
            _light={{ bg: 'coolGray.900' }}
            _dark={{ bg: 'coolGray.800' }}
            px="5"
          >
            <IconButton
              variant="unstyled"
              icon={
                <Icon size="7" as={Ionicons} name="close" color="coolGray.50" />
              }
            />
          </HStack>
        </Hidden>

        <Box px={{ base: 0, md: '80px', lg: '200px', xl: '298px' }} flex={1}>
          <Box
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-end"
            justifyContent="center"
          >
            <IconButton
              variant="unstyled"
              icon={
                <Icon size="6" as={Ionicons} name="close" color="coolGray.50" />
              }
            />
          </Box>
          <Hidden from="base" till="md">
            <Center>
              <Image
                resizeMode="stretch"
                source={require('./components/baby-clothes.jpg')}
                alt="Product full screen display"
                height="575px"
                width="100%"
              />
            </Center>
          </Hidden>
          <Hidden from="md">
            <Center>
              <Image
                resizeMode="cover"
                source={require('./components/baby-clothes.jpg')}
                alt="Product full screen display"
                height="625"
                width="100%"
              />
            </Center>
          </Hidden>

          <HStack
            alignItems="center"
            justifyContent="space-between"
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              variant="unstyled"
              position="absolute"
              bottom="310"
              icon={
                <Icon
                  size="6"
                  as={Ionicons}
                  name="chevron-back-outline"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.800' }}
                />
              }
            />
            <IconButton
              position="absolute"
              bottom="310px"
              right="0"
              variant="unstyled"
              icon={
                <Icon
                  size="6"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.900' }}
                />
              }
            />
          </HStack>
          <Hidden till="md">
            <HStack alignItems="center" justifyContent="space-between">
              <IconButton
                variant="unstyled"
                position="absolute"
                bottom="260px"
                icon={
                  <Icon
                    size="60px"
                    as={Ionicons}
                    name="chevron-back-outline"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.800' }}
                  />
                }
              />
              <IconButton
                position="absolute"
                bottom="260px"
                right="0"
                variant="unstyled"
                icon={
                  <Icon
                    size="60px"
                    as={Ionicons}
                    name="chevron-forward-outline"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.900' }}
                  />
                }
              />
            </HStack>
          </Hidden>
        </Box>
      </VStack>
    </>
  );
}
