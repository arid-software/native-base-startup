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
  ScrollView,
  Pressable,
  useColorMode,
} from 'native-base';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
const list = [
  {
    iconName: 'person-outline',
    iconText: 'Contacts',
  },
  {
    iconName: 'groups',
    iconText: 'Group',
  },
  {
    iconName: 'notifications-none',
    iconText: 'Notification',
  },
  {
    iconName: 'shopping-bag',
    iconText: 'Orders',
  },
  {
    iconName: 'settings',
    iconText: 'Settings',
    iconColorLight: 'primary.900',
    textColorLight: 'primary.900',
    iconColorDark: 'violet.500',
    textColorDark: 'violet.500',
  },
  {
    iconName: 'shield',
    iconText: 'Privacy Policy',
  },
  {
    iconName: 'support-agent',
    iconText: 'Help & Support',
  },
  {
    iconName: 'share',
    iconText: 'Refer & Earn',
  },
  {
    iconName: 'exit-to-app',
    iconText: 'Logout',
  },
] as any;

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.800' }}
      />
      <VStack
        flex={1}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'coolGray.900' }}
      >
        <Box
          px={{ base: 4, md: 8 }}
          pt={{ base: 9, md: 4 }}
          pb={{ base: 5, md: 4 }}
          _light={{ bg: { base: 'primary.900', md: 'coolGray.50' } }}
        >
          {/* Mobile header */}
          <HStack
            space="2"
            display={{
              md: 'none',
            }}
          >
            <Icon
              size="6"
              as={AntDesign}
              name={'arrowleft'}
              color="coolGray.50"
            />
            <Text color="coolGray.50" fontSize="lg">
              Manage Account
            </Text>
          </HStack>
          {/* Desktop header */}
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            display={{ base: 'none', md: 'flex' }}
          >
            {colorMode == 'light' ? (
              <Image
                h="8"
                size="64"
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

            <HStack ml="auto" space="5" alignItems="center">
              <Icon
                size="6"
                color="coolGray.400"
                as={FontAwesome}
                name={'bell'}
              />
              <Avatar
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                borderWidth="2"
                _dark={{
                  borderColor: 'primary.700',
                }}
                w="8"
                h="8"
              />
            </HStack>
          </Box>
        </Box>
        <Box
          flex={1}
          flexDirection={{ base: 'column', md: 'row' }}
          borderTopWidth="1"
          _light={{
            borderTopColor: 'coolGray.200',
          }}
          _dark={{
            bg: 'coolGray.800',
            borderTopColor: 'coolGray.700',
          }}
        >
          <Box
            h="100%"
            w="300px"
            borderRightWidth="1"
            display={{ base: 'none', md: 'flex' }}
            _light={{ bg: 'coolGray.50', borderRightColor: 'coolGray.200' }}
            _dark={{ bg: 'coolGray.900', borderRightColor: 'coolGray.700' }}
          >
            <VStack
              pb="4"
              mt="10"
              space="3"
              alignItems="center"
              borderBottomWidth="1"
              _light={{
                borderBottomColor: 'coolGray.200',
              }}
              _dark={{
                borderBottomColor: 'coolGray.700',
              }}
            >
              <Avatar
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                width={{ base: 20, md: 40 }}
                height={{ base: 20, md: 40 }}
              />
              <HStack alignItems="center" justifyContent="center" space="2">
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  _light={{ color: 'coolGray.800' }}
                >
                  Jane Doe
                </Text>
              </HStack>
              <Text
                fontSize="md"
                fontWeight="medium"
                textAlign="center"
                _light={{ color: 'coolGray.500' }}
              >
                janedoe@mydomain.com
              </Text>
            </VStack>
            <ScrollView>
              <VStack px="8" py="4" space="8">
                {list.map((item: any, idx: number) => {
                  return (
                    <Pressable key={idx} justifyContent="center">
                      <HStack space="4" alignItems="center">
                        <Icon
                          size="6"
                          as={MaterialIcons}
                          name={item.iconName}
                          _light={{ color: 'coolGray.500' }}
                          _dark={{ color: 'coolGray.50' }}
                        />
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.50' }}
                        >
                          {item.iconText}
                        </Text>
                      </HStack>
                    </Pressable>
                  );
                })}
              </VStack>
            </ScrollView>
          </Box>
          <Box flex={1} p={{ md: 8 }}>
            <VStack px={{ md: 8 }} flex={1}></VStack>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
