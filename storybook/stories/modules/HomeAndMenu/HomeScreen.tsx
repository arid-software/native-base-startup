import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  Avatar,
  Image,
  ScrollView,
  Pressable,
  Hidden,
  Center,
  IconButton,
  ArrowBackIcon,
  Input,
} from 'native-base';
import {
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import IconGirl from '../Others/components/IconGirl';
import DashboardLayout from '../../layouts/DashboardLayout';

const iconList = [
  {
    iconName: 'plus',
    iconText: 'Maths',
  },
  {
    iconName: 'lightbulb-outline',
    iconText: 'Physics',
  },
  {
    iconName: 'beaker',
    iconText: 'Chemistry',
  },
  {
    iconName: 'virus-outline',
    iconText: 'Biology',
  },
];

const trending = [
  {
    imageUri: require('../../assets/houseplant.jpg'),
  },
  {
    imageUri: require('../../assets/living.jpg'),
  },
  {
    imageUri: require('../../assets/women.jpg'),
  },
  {
    imageUri: require('../../assets/young-girl.jpg'),
  },
  {
    imageUri: require('../../assets/chair.jpeg'),
  },
  {
    imageUri: require('../../assets/lamp.jpeg'),
  },
];

function Card(props: any) {
  return (
    <Box width={{ md: 226, base: 320 }} mt="3">
      <Image
        borderTopRadius="lg"
        width={{ md: 226, base: 320 }}
        height="24"
        source={props.item.imageUri}
        alt="Alternate Text"
      />
      <HStack
        borderWidth="1"
        borderTopRadius="none"
        borderRadius="lg"
        _light={{ borderColor: 'coolGray.100', bg: 'white' }}
        _dark={{ borderColor: 'coolGray.700', bg: 'coolGray.700' }}
        px="3"
        pt="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack>
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.100' }}
            fontWeight="medium"
          >
            Chapter 1
          </Text>
          <Text
            fontSize="sm"
            fontWeight="bold"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.100' }}
          >
            Theory of relativity
          </Text>
          <HStack space="5" mt={1}>
            <Text
              fontSize="xs"
              textAlign="center"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.300' }}
            >
              Active Users
            </Text>
            <Avatar.Group size="xs" mb={5}>
              <Avatar source={require('../../assets/women.jpg')}></Avatar>
              <Avatar source={require('../../assets/nice-girl.jpg')}></Avatar>
              <Avatar source={require('../../assets/smiling.jpg')}></Avatar>
            </Avatar.Group>
          </HStack>
        </VStack>
        <Center bg="red.400" p="1" rounded="full" mb="8">
          <IconButton
            variant="unstyled"
            icon={
              <Icon
                as={Entypo}
                name="controller-play"
                color="coolGray.50"
                size="xs"
              />
            }
          />
        </Center>
      </HStack>
    </Box>
  );
}
function TrendCard(props: any) {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.700' }}
      width={{ md: 300, base: 157 }}
      mt="3"
      rounded="lg"
    >
      <Image
        borderTopRadius="lg"
        width={{ md: 300, base: 157 }}
        height={{ md: 143, base: 24 }}
        source={props.item.imageUri}
        alt="Alternate Text"
      />
      <HStack
        px="3"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        borderWidth="1"
        borderTopRadius="none"
        borderRadius="lg"
        _light={{ borderColor: 'coolGray.100' }}
        _dark={{ borderColor: 'coolGray.800' }}
      >
        <Text
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Courses {props.courseNo}
        </Text>
      </HStack>
    </Box>
  );
}

function MobileFooter() {
  return (
    <Hidden from="md">
      <HStack
        justifyContent="space-between"
        safeAreaBottom
        h="20"
        width="100%"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        overflow="hidden"
        alignSelf="center"
        borderTopLeftRadius="24"
        borderTopRightRadius="24"
        _light={{ backgroundColor: 'white' }}
        _dark={{ backgroundColor: 'coolGray.800' }}
      >
        <Button
          variant="ghost"
          flex={1}
          colorScheme="coolGray"
          _stack={{
            flexDirection: 'column',
          }}
          startIcon={
            <Icon
              as={SimpleLineIcons}
              name="home"
              size="5"
              color="primary.500"
            />
          }
          _text={{ color: 'primary.500' }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          flex={1}
          colorScheme="coolGray"
          _stack={{
            flexDirection: 'column',
          }}
          startIcon={<Icon as={Ionicons} name="md-book-outline" size="5" />}
        >
          Syallabus
        </Button>
        <Button
          variant="ghost"
          flex={1}
          colorScheme="coolGray"
          _stack={{
            flexDirection: 'column',
          }}
          startIcon={<Icon as={Feather} name="clock" size="5" />}
        >
          Test
        </Button>
        <Button
          variant="ghost"
          flex={1}
          colorScheme="coolGray"
          _stack={{
            flexDirection: 'column',
          }}
          startIcon={
            <Icon
              as={MaterialCommunityIcons}
              name="youtube-subscription"
              size="5"
            />
          }
        >
          Subscribe
        </Button>
      </HStack>
    </Hidden>
  );
}
export default function HomeScreen(props: any) {
  return (
    <>
      <DashboardLayout
        title="Class 12th"
        displayMenuButton
        displayScreenTitle={false}
        displayAlternateMobileHeader
      >
        <ScrollView>
          <VStack
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: { md: 'coolGray.800', base: 'coolGray.900' } }}
            zIndex={2}
            borderRadius={{ md: '8' }}
            px={{ base: 4, md: 6 }}
            py={{ base: 4, md: 6 }}
            mb={{ md: '4' }}
          >
            <Hidden till="md">
              <IconButton
                w="12"
                ml="-3"
                variant="ghost"
                icon={<ArrowBackIcon color="white" />}
              />
            </Hidden>

            <HStack alignItems="center" justifyContent="space-between">
              <VStack space="2">
                <Text
                  fontSize="xl"
                  color="coolGray.50"
                  fontWeight="semibold"
                  letterSpacing="0.2"
                >
                  Welcome John
                </Text>
                <Text
                  width="56"
                  fontSize="xs"
                  color="coolGray.50"
                  fontWeight="normal"
                  letterSpacing="0.2"
                >
                  Choose a goal and start learning from Top Educators
                </Text>
              </VStack>
              <IconGirl size={{ base: 114, md: 140 }} />
            </HStack>
            <Hidden from="md">
              <Input
                mb={-10}
                size="2xl"
                placeholder="Search"
                _light={{
                  bg: 'white',
                  borderColor: 'coolGray.300',
                }}
                _dark={{
                  bg: 'coolGray.700',
                  borderColor: 'coolGray.700',
                }}
                _hover={{
                  _light: {
                    bg: 'coolGray.50',
                  },
                  _dark: {
                    bg: 'coolGray.700',
                  },
                }}
                InputLeftElement={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="magnify"
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.400' }}
                    size="6"
                    ml="2"
                  />
                }
              />
            </Hidden>
          </VStack>
          <VStack
            px={{ base: 4, md: 6 }}
            pt={{ base: 4, md: 6 }}
            pb={{ base: 24, md: 6 }}
            borderRadius={{ md: '8' }}
            _light={{
              borderColor: 'coolGray.200',
              bg: { base: 'white' },
            }}
            _dark={{
              borderColor: 'coolGray.800',
              bg: 'coolGray.800',
            }}
            borderWidth={{ md: '1' }}
          >
            <VStack
              borderRadius="lg"
              mt={{ base: '4', md: '1' }}
              _light={{ bg: { md: 'white' } }}
              _dark={{ bg: 'coolGray.800' }}
            >
              <Text
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                fontSize="sm"
                fontWeight="semibold"
              >
                Resume Your Course
              </Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                mx="-6"
              >
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  space="2"
                  mx="6"
                >
                  {trending.map((item, index) => {
                    return (
                      <Pressable key={index}>
                        <Card item={item} key={index} />
                      </Pressable>
                    );
                  })}
                </HStack>
              </ScrollView>
              <VStack
                mt="4"
                pb={{ md: 3 }}
                borderTopWidth={{ md: 1 }}
                borderBottomWidth={{ md: 1 }}
                _light={{
                  borderColor: 'coolGray.200',
                }}
                _dark={{
                  borderColor: 'coolGray.700',
                }}
              >
                <Text
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  fontSize="md"
                  mt="1"
                  fontWeight="semibold"
                >
                  Categories
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  mx="-6"
                >
                  <HStack
                    mx="6"
                    space="7"
                    justifyContent="space-between"
                    mt="4"
                    alignItems="center"
                  >
                    {iconList.map((item, index) => {
                      return (
                        <VStack
                          space="2"
                          w={60}
                          key={index}
                          alignItems="center"
                        >
                          <Center
                            _light={{ bg: 'primary.100' }}
                            _dark={{ bg: 'coolGray.700' }}
                            p="2"
                            rounded="full"
                            w="12"
                            h="12"
                          >
                            <IconButton
                              variant="unstyled"
                              icon={
                                <Icon
                                  as={MaterialCommunityIcons}
                                  name={item.iconName}
                                  _light={{ color: 'primary.900' }}
                                  _dark={{ color: 'coolGray.50' }}
                                  size="5"
                                />
                              }
                            />
                          </Center>
                          <Text
                            fontSize="10"
                            _light={{ color: 'coolGray.500' }}
                            _dark={{ color: 'coolGray.50' }}
                            textAlign="center"
                          >
                            {item.iconText}
                          </Text>
                        </VStack>
                      );
                    })}
                    <VStack space="2" w={60} alignItems="center">
                      <Center
                        _light={{ bg: 'primary.100' }}
                        _dark={{ bg: 'coolGray.700' }}
                        p="2"
                        rounded="full"
                        w="12"
                        h="12"
                      >
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              as={Feather}
                              name={'more-vertical'}
                              _light={{ color: 'coolGray.800' }}
                              _dark={{ color: 'coolGray.50' }}
                              size="sm"
                            />
                          }
                        />
                      </Center>
                      <Text
                        fontSize="12"
                        _light={{ color: 'coolGray.500' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        More
                      </Text>
                    </VStack>
                  </HStack>
                </ScrollView>
              </VStack>

              <Text
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                fontSize="md"
                mt="5"
                fontWeight="semibold"
              >
                Trending Courses
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                mx="-6"
              >
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  mt="3"
                  space="2"
                  mx="6"
                >
                  {trending.map((item, index) => {
                    return (
                      <Pressable key={index}>
                        <TrendCard
                          item={item}
                          courseNo={index + 1}
                          key={index}
                        />
                      </Pressable>
                    );
                  })}
                </HStack>
              </ScrollView>
            </VStack>
          </VStack>
        </ScrollView>
      </DashboardLayout>
      <MobileFooter />
    </>
  );
}
