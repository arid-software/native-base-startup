import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  useColorMode,
  IconButton,
  Input,
  Pressable,
  ScrollView,
  Center,
  Stack,
  Hidden,
} from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
const place = [
  {
    iconName: 'clock-outline',
    keyword: 'Ram Bagh',
    address: 'Agra, Uttar Pradesh',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Railway Hospital',
    address: 'Rainbow Hospitals, Maharishi Agra Sultanpura ',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Ram Raghu Hospital',
    address: 'Mahatma Gandhi Road',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,  Maharishi Agra Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,  Maharishi Agra Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,  Maharishi Agra Sultanpura',
  },
  {
    iconName: 'clock-outline',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,  Maharishi Agra Sultanpura',
  },
];

function RecentSearchItem({ index, data }: any) {
  return (
    <Pressable>
      <HStack
        maxW={{ base: '48', md: 'full' }}
        alignItems="center"
        space="4"
        key={index}
      >
        <Center
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: 'coolGray.700' }}
          p="2"
          rounded="full"
        >
          <Icon
            as={MaterialCommunityIcons}
            name={data.iconName}
            size="6"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'coolGray.400' }}
          />
        </Center>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          space={{ base: '1', md: '2' }}
          alignItems={{ md: 'center' }}
        >
          <Text
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="medium"
          >
            {data.keyword}
          </Text>
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.300' }}
            isTruncated
          >
            {data.address}
          </Text>
        </Stack>
      </HStack>
    </Pressable>
  );
}

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout title={'Explore'}>
      <VStack
        px={{ base: '4', md: '8' }}
        py={{ base: '4', md: '6' }}
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        rounded={{ md: '8' }}
        borderWidth={{ md: '1' }}
      >
        <Input
          py="4"
          size="md"
          InputLeftElement={
            <>
              <Hidden till="md">
                <Icon
                  ml="4"
                  as={<Ionicons name="search" />}
                  size="6"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                />
              </Hidden>
              <Hidden from="md">
                <IconButton
                  p="0"
                  ml="4"
                  variant="unstyled"
                  icon={
                    <Icon
                      as={<Ionicons name="arrow-back" />}
                      size="6"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.200' }}
                    />
                  }
                />
              </Hidden>
            </>
          }
          InputRightElement={
            <Hidden from="md">
              <IconButton
                p="0"
                mr="4"
                variant="unstyled"
                icon={
                  <Icon
                    as={<Ionicons name="close" />}
                    size="6"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  />
                }
              />
            </Hidden>
          }
          placeholder="Search here"
          fontSize="md"
        />
        <Text
          fontWeight="bold"
          fontSize="md"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'white' }}
          pt="8"
          pb="4"
        >
          Recent
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space="8" safeAreaBottom>
            {place.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <RecentSearchItem index={index} data={item} />
                </React.Fragment>
              );
            })}
          </VStack>
        </ScrollView>
        <Hidden from="md">
          <Pressable>
            <Center pt="8">
              <Text
                fontWeight="medium"
                fontSize="sm"
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.700' }}
              >
                More from recent history
              </Text>
            </Center>
          </Pressable>
        </Hidden>
      </VStack>
    </DashboardLayout>
  );
}
