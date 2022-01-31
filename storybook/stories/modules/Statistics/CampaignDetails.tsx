import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  ScrollView,
  Pressable,
  Button,
  Progress,
  useColorMode,
  Hidden,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const categories = [
  {
    category: 'COVID-19',
  },
  {
    category: 'Food',
  },
  {
    category: 'Health',
  },
];

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout title={'Campaign Details'} displaySidebar={false}>
      <VStack
        px={{ md: 8 }}
        py={{ md: 8 }}
        pb={{ base: 4, md: 8 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'coolGray.50' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth="1"
        space={4}
        safeAreaBottom
      >
        <Box flexDirection={{ base: 'column', md: 'row' }}>
          <Box flex={{ md: 0.6 }}>
            <Image
              borderRadius={{ md: 8 }}
              width="100%"
              mt={{ base: 4 }}
              height={{ base: 300, md: 668 }}
              alt="Header Image"
              source={{
                uri: 'https://512pixels.net/downloads/macos-wallpapers/10-8.jpg',
              }}
            />
          </Box>
          <Box px="4" flex={{ md: 0.4 }} mt={4}>
            <VStack justifyContent="center">
              <VStack>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    India COVID Relief
                  </Text>
                  <Pressable
                    onPress={() => {
                      console.log('hello');
                    }}
                  >
                    <Icon
                      display={{ base: 'flex', md: 'none' }}
                      size="6"
                      name="heart-outline"
                      as={MaterialCommunityIcons}
                      _dark={{ color: 'primary.500' }}
                      _light={{ color: 'primary.900' }}
                    />
                  </Pressable>
                </HStack>
                <HStack space={1}>
                  <Text fontSize="sm" color="coolGray.400">
                    Created by
                  </Text>
                  <Text
                    fontSize="sm"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Project Ekta
                  </Text>
                </HStack>
              </VStack>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <HStack mt="3" space={2} alignItems="center">
                  {categories.map((item: any, index: number) => {
                    return (
                      <HStack key={index} alignItems="center">
                        <Pressable
                          onPress={() => {
                            console.log('pressed');
                          }}
                        >
                          <Box
                            py="3"
                            px="4"
                            borderRadius="md"
                            _light={{ bg: 'primary.50' }}
                            _dark={{ bg: 'customGray' }}
                          >
                            <Text
                              fontSize="sm"
                              textAlign="center"
                              _dark={{ color: 'coolGray.50' }}
                              _light={{ color: 'coolGray.800' }}
                            >
                              {item.category}
                            </Text>
                          </Box>
                        </Pressable>
                      </HStack>
                    );
                  })}
                </HStack>
              </ScrollView>
              <VStack>
                <Box zIndex={-1}>
                  <Progress
                    w="100%"
                    mt={{ base: 3, md: 5 }}
                    value={70}
                    bg="#D1FAE5"
                    colorScheme="emerald"
                  />
                </Box>
                <HStack
                  mt="2"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <VStack>
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
                      fontSize="sm"
                      fontWeight="bold"
                      letterSpacing="0"
                    >
                      {'\u20B9'} 3,80,000
                    </Text>
                  </VStack>
                  <VStack>
                    <Text
                      textAlign="right"
                      fontSize="xs"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.300' }}
                    >
                      Target
                    </Text>
                    <Text
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="bold"
                      letterSpacing="0"
                    >
                      {'\u20B9'} 5,00,000
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <Hidden from="base" till="md">
              <HStack mt={{ md: 3 }} space={2} alignItems="center">
                <Pressable
                  p="2"
                  borderRadius="4"
                  _light={{ bg: 'primary.50' }}
                  _dark={{ bg: 'customGray' }}
                >
                  <Icon
                    size="6"
                    name="heart-outline"
                    as={MaterialCommunityIcons}
                    _dark={{ color: 'primary.500' }}
                    _light={{ color: 'primary.900' }}
                  />
                </Pressable>
                <Button
                  flex={1}
                  h="100%"
                  borderRadius="4"
                  _dark={{ bg: 'primary.700' }}
                  _light={{ bg: 'primary.900' }}
                  onPress={() => console.log('pressed')}
                  _text={{
                    color: 'coolGray.50',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                >
                  DONATE
                </Button>
              </HStack>
            </Hidden>
            <VStack mt="4">
              <Text
                fontSize="md"
                fontWeight="medium"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Recent Donors
              </Text>
              <HStack>
                <Avatar.Group size="xl" max={3}>
                  <Avatar
                    mt="2"
                    size="10"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
                    }}
                  />
                  <Avatar
                    mt="2"
                    size="10"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
                    }}
                  />
                  <Avatar
                    mt="2"
                    size="10"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
                    }}
                  />
                </Avatar.Group>
              </HStack>
            </VStack>
            <VStack mt="4">
              <Text
                fontSize="md"
                fontWeight="medium"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                About Us
              </Text>
              <Text
                mt="2"
                mb="2"
                fontWeight="normal"
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Indian Matchmaking is teaming up with Project Ekta and Delhi
                Youth Welfare Association to raise funds for organizations in
                India to help with COVID relief.
              </Text>
            </VStack>
          </Box>
        </Box>

        <Hidden from="md">
          <HStack px="4" space={2} alignItems="center">
            <Button
              flex={1}
              h="100%"
              borderRadius="4"
              _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
              _light={{ bg: 'primary.900' }}
              onPress={() => console.log('pressed')}
              _text={{
                color: 'coolGray.50',
                fontSize: 'sm',
                fontWeight: 'medium',
              }}
            >
              DONATE
            </Button>
          </HStack>
        </Hidden>
      </VStack>
    </DashboardLayout>
  );
}
