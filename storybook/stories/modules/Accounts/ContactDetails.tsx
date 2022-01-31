import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  useColorMode,
  Center,
  Fab,
} from 'native-base';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
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
function TopSection(props: any) {
  return (
    <>
      <VStack
        _light={{
          borderBottomColor: 'coolGray.200',
          bg: { base: 'primary.900', md: 'white' },
        }}
        _dark={{
          borderBottomColor: 'coolGray.800',
          bg: 'coolGray.900',
        }}
        borderBottomWidth={{ md: '1' }}
      >
        <VStack px={{ md: '8' }} py={{ base: 4, md: 8 }} alignItems="center">
          <VStack alignItems="center" space="2">
            <Avatar
              width="20"
              height="20"
              source={require('../../assets/women.jpg')}
            />
            <VStack alignItems="center">
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.800' },
                }}
                fontSize="2xl"
                fontWeight="medium"
              >
                Jane Doe
              </Text>
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.400' },
                }}
                _dark={{
                  color: 'coolGray.500',
                }}
                fontSize="sm"
              >
                United States
              </Text>
            </VStack>
          </VStack>
          <HStack
            mt="5"
            space="12"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                size="6"
                name="call"
                as={Ionicons}
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                fontSize="md"
              >
                Call
              </Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={Foundation}
                name="video"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                fontSize="md"
              >
                Video
              </Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={MaterialCommunityIcons}
                name="message-text"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                fontSize="md"
              >
                Message
              </Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={MaterialCommunityIcons}
                name="email"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                fontSize="md"
              >
                Email
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
function BottomSection(props: any) {
  const contactList = [
    {
      iconName: 'mobile1',
      contactDetail: '(316) 555-0116',
      contactTye: 'Mobile',
      as: AntDesign,
    },
    {
      iconName: 'phone',
      contactDetail: '(316) 555-0116',
      contactTye: 'Home',
      as: FontAwesome,
    },
    {
      iconName: 'mail',
      contactDetail: 'janedoe2@mydomain.com',
      contactTye: 'Email',
      as: Entypo,
    },
    {
      iconName: 'map-marker',
      contactDetail: 'New York, United States',
      contactTye: 'Location',
      as: MaterialCommunityIcons,
    },
  ];
  return (
    <>
      <VStack
        flex={1}
        py={{ base: 6, md: 8 }}
        flexWrap={{ md: 'wrap' }}
        space={{ base: 6, md: 1 }}
        flexDirection={{ md: 'row' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
      >
        {contactList.map((item, index) => {
          return (
            <HStack
              width={{ md: '100%', lg: '50%' }}
              key={index}
              px={{ base: 4, md: 4, lg: '12%' }}
              py={{ md: 0 }}
              space={{ base: 2 }}
            >
              <Icon
                size="6"
                as={item.as}
                name={item.iconName}
                _dark={{ color: 'primary.700' }}
                _light={{ color: 'primary.900' }}
                mt="1"
                mr="2"
              />

              <VStack space="1">
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  {item.contactDetail}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.300' }}
                  _light={{ color: 'coolGray.500' }}
                >
                  {item.contactTye}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
    </>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout title="My Contacts">
        <VStack
          _light={{
            borderColor: 'coolGray.200',
          }}
          _dark={{
            borderColor: 'coolGray.800',
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          borderRadius={{ md: '8' }}
          overflow="hidden"
          flex={1}
        >
          <TopSection />
          <BottomSection />
          <Fab
            mb="5"
            mr="5"
            borderRadius="full"
            placement="bottom-right"
            icon={
              <Center>
                <Icon
                  size="6"
                  color="coolGray.50"
                  as={MaterialIcons}
                  name={'edit'}
                />
              </Center>
            }
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700' }}
          />
        </VStack>
      </DashboardLayout>
    </>
  );
}
