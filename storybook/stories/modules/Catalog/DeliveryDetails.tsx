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
  Center,
  Divider,
  Button,
  Radio,
  Actionsheet,
  useDisclose,
  Modal,
  Link,
  Stack,
} from 'native-base';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';

const categories = [
  {
    category: 'New Born',
  },
  {
    category: 'Tiny Baby',
  },
  {
    category: '0-3 M',
  },
];

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
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Rati Agarwal',
    time: '31 Aug 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];
function PopUp(props: any) {
  const [value, setValue] = React.useState('one');
  return (
    <>
      <VStack
        justifyContent="flex-start"
        width="100%"
        px={{ base: 4, md: 8 }}
        _dark={{ bg: 'coolGray.700' }}
      >
        <HStack space="3" pt="9">
          <Box
            _light={{ bg: 'primary.50' }}
            _dark={{ bg: 'coolGray.400' }}
            width="20"
            height="20"
            px="2"
            py="2"
            borderRadius="md"
          >
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              height="16"
              width="16"
              borderRadius="md"
            />
          </Box>
          <VStack space="1">
            <Text
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              Body Suit
            </Text>
            <Text
              fontSize="sm"
              _dark={{ color: 'coolGray.400' }}
              _light={{ color: 'coolGray.400' }}
            >
              Mother care
            </Text>
            <Text
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              ₹500
            </Text>
          </VStack>
        </HStack>
        <Text
          fontSize="lg"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
          fontWeight="bold"
          mt="6"
          letterSpacing="0.2"
        >
          Choose a delivery option:
        </Text>
        <Radio.Group
          name="myRadioGroup"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
          mt={6}
          size={{ base: 'lg', md: 'md' }}
          mb={8}
        >
          <HStack alignItems="center" my="2">
            <Radio
              value="one"
              height="20px"
              w="20px"
              borderRadius="20px"
              borderColor="coolGray.400"
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.900' },
                  size: '20px',
                  borderWidth: '0',
                },
              }}
              _dark={{
                bg: 'coolGray.700',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  bg: 'coolGray.50',
                  size: '20px',
                  p: '0',
                  borderWidth: '0',
                },
              }}
              icon={<Icon size="20px" as={AntDesign} name="checkcircle" />}
            />
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'primary.700' }}
              _light={{ color: 'primary.900' }}
              ml="2"
            >
              Monday-
            </Text>
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
              letterSpacing="0.2"
            >
              Free Delivery
            </Text>
          </HStack>
          <HStack alignItems="center" my="2">
            <Radio
              value="two"
              height="20px"
              w="20px"
              borderRadius="20px"
              borderColor="coolGray.400"
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.900' },
                  size: '20px',
                  borderWidth: '0',
                },
              }}
              _dark={{
                bg: 'coolGray.700',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  bg: 'coolGray.50',
                  size: '20px',
                  p: '0',
                  borderWidth: '0',
                },
              }}
              icon={<Icon size="20px" as={AntDesign} name="checkcircle" />}
            />
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'primary.700' }}
              _light={{ color: 'primary.900' }}
              ml="2"
            >
              Tuesday-
            </Text>
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
              letterSpacing="0.2"
            >
              Delivery fee ₹50
            </Text>
          </HStack>
          <HStack alignItems="center" my="2">
            <Radio
              value="three"
              height="20px"
              w="20px"
              borderRadius="20px"
              borderColor="coolGray.400"
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.900' },
                  size: '20px',
                  borderWidth: '0',
                },
              }}
              _dark={{
                bg: 'coolGray.700',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  bg: 'coolGray.50',
                  size: '20px',
                  p: '0',
                  borderWidth: '0',
                },
              }}
              icon={<Icon size="20px" as={AntDesign} name="checkcircle" />}
            />
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'primary.700' }}
              _light={{ color: 'primary.900' }}
              ml="2"
            >
              2 Business Days-
            </Text>
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
              letterSpacing="0.2"
            >
              Delivery fee ₹150
            </Text>
          </HStack>
          <HStack alignItems="center" my="2">
            <Radio
              value="four"
              height="20px"
              w="20px"
              borderRadius="20px"
              borderColor="coolGray.400"
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.900' },
                  size: '20px',
                  borderWidth: '0',
                },
              }}
              _dark={{
                bg: 'coolGray.700',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  bg: 'coolGray.50',
                  size: '20px',
                  p: '0',
                  borderWidth: '0',
                },
              }}
              icon={<Icon size="20px" as={AntDesign} name="checkcircle" />}
            />
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'primary.700' }}
              _light={{ color: 'primary.900' }}
              ml="2"
            >
              Pickup-
            </Text>
            <Text
              fontWeight="medium"
              fontSize="md"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
              letterSpacing="0.2"
            >
              Find a Location
            </Text>
          </HStack>
        </Radio.Group>
        <VStack justifyContent="flex-end">
          <Button
            borderRadius="4"
            size="md"
            mb={{ md: 4 }}
            bg="primary.900"
            onPress={() => console.log('hello world')}
            _text={{ fontSize: 'md', fontWeight: 'medium', letterSpacing: '1' }}
          >
            CONTINUE
          </Button>
        </VStack>
      </VStack>
    </>
  );
}
const AddToCartButton = (props: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <HStack
      mt="5"
      pb={{ base: 3, md: 0 }}
      space="4"
      alignItems="center"
      display={{
        base: props.base,
        md: props.md,
      }}
    >
      <Center
        p="2"
        borderRadius="4"
        _light={{ bg: 'primary.100' }}
        _dark={{ bg: { base: 'coolGray.900', md: 'coolGray.800' } }}
      >
        <Icon
          size="8"
          name="heart"
          as={EvilIcons}
          _dark={{ color: 'violet.500' }}
          _light={{ color: 'primary.900' }}
        />
      </Center>
      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _dark={{ bg: 'violet.700' }}
        _light={{ bg: 'primary.900' }}
        _text={{ fontSize: 'md', fontWeight: 'semibold' }}
        onPress={() => {
          Platform.OS === 'web'
            ? setModalVisible(!modalVisible)
            : console.log('hello');
        }}
      >
        Add To Cart
      </Button>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        size="lg"
        marginX="auto"
        maxWidth="460"
      >
        <Modal.Content
          _dark={{ bg: 'coolGray.800' }}
          _light={{ bg: 'coolGray.50' }}
        >
          <PopUp />
        </Modal.Content>
      </Modal>
    </HStack>
  );
};
function MainContent(props: any) {
  const [tabName, setTabName] = React.useState('Reviews');
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Stack
      p={{ md: '8' }}
      flex={1}
      _light={{ bg: 'white' }}
      _dark={{
        borderColor: 'coolGray.800',
        bg: { md: 'coolGray.900', base: 'coolGray.800' },
      }}
      borderWidth={1}
      borderColor="#E5E7EB"
      borderRadius={{ md: '8' }}
      direction={{ base: 'column', md: 'row' }}
      space="6"
    >
      <Box
        p="2"
        bg="primary.100"
        borderRadius="md"
        alignItems="center"
        w={{ base: '100%', md: '50%' }}
        h={{ base: '40%', md: 'auto' }}
        pr={{ base: '2', md: '2' }}
        justifyContent="center"
      >
        <Image
          width="full"
          height={{ base: 'full', md: 'full' }}
          rounded="lg"
          alt="Alternate Text"
          source={require('./components/baby-clothes.jpg')}
        />
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1} px={{ base: 4 }}>
          <VStack space={1}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text
                fontSize="lg"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Body Suit
              </Text>
              <HStack alignItems="center" space="1">
                <Icon size="4" name={'star'} as={AntDesign} color="amber.400" />
                <Text
                  fontSize="md"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  4.9
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  (120)
                </Text>
              </HStack>
            </HStack>
            <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
              Mother care
            </Text>
            <Text
              fontSize="xl"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ₹500
            </Text>
          </VStack>

          <HStack space="2" mt="5" alignItems="center">
            <Text
              fontSize="sm"
              fontWeight="medium"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              Select Size
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="coolGray.400">
              (Age Group)
            </Text>
            <Link
              ml="auto"
              _text={{ textDecoration: 'none' }}
              _light={{
                _text: {
                  color: 'primary.800',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                },
              }}
              _dark={{
                _text: {
                  color: 'primary.400',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                },
              }}
            >
              Size Chart
            </Link>
          </HStack>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button.Group space="2" mt={3} alignItems="center">
              {categories.map((item: any, index: number) => {
                return (
                  <Button
                    py="4"
                    px="5"
                    key={index}
                    borderRadius="4"
                    variant="subtle"
                    _text={{
                      _dark: { color: 'coolGray.50' },
                      _light: { color: 'coolGray.800' },
                      fontWeight: 'normal',
                    }}
                    _light={{ colorScheme: 'primary' }}
                    _dark={{ bg: { base: 'coolGray.900', md: 'coolGray.800' } }}
                    onPress={
                      Platform.OS === 'web'
                        ? () => {
                            console.log('nkjnkjnkjnkj');
                          }
                        : onOpen
                    }
                  >
                    {item.category}
                  </Button>
                );
              })}
            </Button.Group>
          </ScrollView>
          <AddToCartButton base="none" md="flex" />
          <HStack mt="8" space="5">
            <Pressable
              onPress={() => {
                setTabName('Description');
              }}
            >
              <Text
                fontSize="16"
                fontWeight="medium"
                letterSpacing="0.4"
                _light={{
                  color:
                    tabName == 'Description' ? 'primary.900' : 'coolGray.400',
                }}
                _dark={{
                  color:
                    tabName == 'Description' ? 'coolGray.50' : 'coolGray.400',
                }}
              >
                Description
              </Text>
              {tabName == 'Description' ? (
                <Box width="100%" py="1">
                  <Divider bg="primary.900" />
                </Box>
              ) : (
                <></>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                setTabName('Reviews');
              }}
            >
              <Text
                fontSize="16"
                fontWeight="medium"
                letterSpacing="0.4"
                _light={{
                  color: tabName == 'Reviews' ? 'primary.900' : 'coolGray.400',
                }}
                _dark={{
                  color: tabName == 'Reviews' ? 'coolGray.50' : 'coolGray.400',
                }}
              >
                Reviews
              </Text>
              {tabName == 'Reviews' ? (
                <Box width="100%" py="1">
                  <Divider bg="primary.900" />
                </Box>
              ) : (
                <></>
              )}
            </Pressable>
          </HStack>
          {tabName === 'Description' ? (
            <Text
              mt="3"
              fontSize="sm"
              lineHeight="lg"
              fontWeight="medium"
              letterSpacing="0.3"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Yellow bodysuit, has a round neck with envelope detail along the
              shoulder, short sleeves and snap button closures along the
              crotch.Your Body suit has a round neck with detail along the
              shoulder,short sleeves and snap button closer along the front.
            </Text>
          ) : (
            reviews.map((item: any, idx: number) => {
              return (
                <VStack my="3" px="4" key={idx}>
                  <HStack justifyContent="space-between">
                    <HStack space="3">
                      <Avatar
                        source={{
                          uri: item.imageUrl,
                        }}
                        height="9"
                        width="9"
                      />
                      <VStack space="1">
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          _dark={{ color: 'coolGray.50' }}
                          _light={{ color: 'coolGray.800' }}
                        >
                          {item.name}
                        </Text>
                        <HStack space="1">
                          <Icon
                            size="4"
                            name="star"
                            as={AntDesign}
                            color="amber.400"
                          />
                        </HStack>
                      </VStack>
                    </HStack>
                    <Text
                      fontSize="sm"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.300' }}
                    >
                      {item.time}
                    </Text>
                  </HStack>
                  <Text
                    alignItems="center"
                    lineHeight="lg"
                    mt="4"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.300' }}
                    fontSize="md"
                  >
                    {item.review}
                  </Text>
                </VStack>
              );
            })
          )}
          <AddToCartButton base="flex" md="none" />
          <Actionsheet
            hideDragIndicator
            isOpen={isOpen}
            onClose={onClose}
            borderTopRadius="20"
            width="100%"
          >
            <Actionsheet.Content
              _light={{ bg: 'coolGray.50' }}
              _dark={{ bg: 'coolGray.700' }}
            >
              <PopUp />
            </Actionsheet.Content>
          </Actionsheet>
        </Box>
      </ScrollView>
    </Stack>
  );
}

export default function (props: any) {
  return (
    <>
      <DashboardLayout
        title="Body Suit"
        showIcons
        header={{ searchbar: true }}
        displaySidebar={false}
      >
        <MainContent />
      </DashboardLayout>
    </>
  );
}
