import React, { useRef, useState } from 'react';
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
import { Feather, Ionicons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const place = [
  {
    iconName: 'location-sharp',
    keyword: 'Ram Bagh',
    address: 'Agra, Uttar Pradesh',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Vedanta Hospitals',
    address: 'Mall Road, Banaras',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Mall Road, Rai Barailley',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Railway Hospital',
    address: 'Rainbow Hospitals,lucknow ',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Ram Raghu Hospital',
    address: 'Mahatma Gandhi Road',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Markanday Hospitals',
    address: 'Rainbow Hospitals,Begusarai',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals,Sultanpura',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Rainbow Hospitals',
    address: 'Rainbow Hospitals, Maharishi ',
  },
  {
    iconName: 'location-sharp',
    keyword: 'Sewa Hospitals',
    address: 'Rainbow Hospitals',
  },
];

function RecentSearchItem({ index, data }: any) {
  return (
    <Pressable>
      <HStack
        w={{ base: 'full', md: 'full' }}
        alignItems="center"
        justifyContent="space-between"
        key={index}
      >
        <HStack alignItems={{ base: 'center', md: 'flex-start' }} space="4">
          <Stack
            direction={{ base: 'column', md: 'column' }}
            space={{ base: '1', md: '2' }}
            // alignItems={{ md: 'normal' }}
          >
            <Center
              _light={{ bg: data.address ? 'primary.100' : 'red.100' }}
              _dark={{ bg: data.address ? 'coolGray.700' : 'red.100' }}
              p="2"
              rounded="full"
            >
              <Icon
                as={Ionicons}
                name={data.iconName}
                size="4"
                _light={{ color: data.address ? 'primary.900' : 'red.500' }}
                _dark={{ color: data.address ? 'coolGray.400' : 'red.500' }}
              />
            </Center>
            <Text
              fontSize="10"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.100' }}
              isTruncated
            >
              {data.address ? '1.6 kms' : ''}
            </Text>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            space={{ base: '0', md: '2' }}
            alignItems={{ md: 'center' }}
            mt={{ md: '1' }}
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
              _dark={{ color: 'coolGray.500' }}
              isTruncated
            >
              {data.address}
            </Text>
          </Stack>
        </HStack>
        <Icon
          as={Feather}
          name="arrow-up-left"
          size="6"
          _light={{ color: 'coolGray.400' }}
          _dark={{ color: 'coolGray.400' }}
        />
      </HStack>
    </Pressable>
  );
}

export default function KeywordSearch(props: any) {
  const [text, setText] = useState<string>('');

  return (
    <DashboardLayout displaySidebar={false} title={'Explore'}>
      <VStack
        flexGrow={1}
        safeAreaBottom
        rounded={{ md: '8' }}
        borderWidth={{ md: '1' }}
        px={{ base: '4', md: '8' }}
        py={{ base: '4', md: '6' }}
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
      >
        <Input
          py="3"
          size="md"
          value={text}
          onChangeText={setText}
          _dark={{ borderColor: 'coolGray.700' }}
          InputLeftElement={
            <>
              <Hidden from="base">
                <Icon
                  ml="4"
                  as={<Ionicons name="search" />}
                  size="6"
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.200' }}
                />
              </Hidden>
              <IconButton
                p="0"
                ml="4"
                variant="unstyled"
                icon={
                  <Icon
                    as={<Ionicons name="arrow-back" />}
                    size="6"
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.400' }}
                  />
                }
              />
            </>
          }
          InputRightElement={
            <IconButton
              onPress={() => {
                setText('');
              }}
              p="0"
              mr="4"
              variant="unstyled"
              icon={
                <Icon
                  size="6"
                  as={<Ionicons name="close" />}
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.400' }}
                />
              }
            />
          }
          placeholder="Search here"
        />
        <Hidden from="base" till="md">
          <Text
            mt="4"
            fontWeight="semibold"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.100' }}
          >
            Search Result
          </Text>
        </Hidden>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space="4" mt={3} safeAreaBottom>
            {place
              .filter((names) =>
                names.keyword.toLowerCase().includes(text.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecentSearchItem index={index} data={item} />
                  </React.Fragment>
                );
              })}
          </VStack>
        </ScrollView>
      </VStack>
    </DashboardLayout>
  );
}
