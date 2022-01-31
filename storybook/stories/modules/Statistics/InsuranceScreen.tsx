import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Input,
  useColorMode,
  ScrollView,
  Pressable,
  Center,
  Button,
  FormControl,
  Link,
  IconButton,
  Actionsheet,
  useDisclose,
  Hidden,
  FlatList,
  useBreakpointValue,
} from 'native-base';
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Carousel } from './components/Carousel';

const categories = [
  {
    iconName: 'bike',
    iconText: 'Bike',
  },
  {
    iconName: 'car',
    iconText: 'Car',
  },
  {
    iconName: 'human-male',
    iconText: 'Personal Accident',
  },
  {
    iconName: 'heartbeat',
    iconText: 'Health',
  },
  {
    iconName: 'hand-holding-heart',
    iconText: 'Life Insurance',
  },
  {
    iconName: 'virus-outline',
    iconText: 'Covid',
  },
  {
    iconName: 'shield-half-full',
    iconText: 'Renewal',
  },
  {
    iconName: 'chevron-right',
    iconText: 'More',
  },
];

const banking_partners = [
  {
    imageUri: require('../../assets/axis-mutual.jpg'),
    text: 'Oriental',
  },
  {
    imageUri: require('../../assets/birla.jpg'),
    text: 'United India',
  },
  {
    imageUri: require('../../assets/abmf.png'),

    text: 'Exide Life',
  },
  {
    imageUri: require('../../assets/axis-mutual.jpg'),

    text: 'Max Life',
  },
  {
    imageUri: require('../../assets/axis-mutual.jpg'),

    text: 'PNB',
  },
  {
    imageUri: require('../../assets/birla.jpg'),
    text: 'United India',
  },
  {
    imageUri: require('../../assets/abmf.png'),

    text: 'Exide Life',
  },
  {
    imageUri: require('../../assets/axis-mutual.jpg'),

    text: 'Max Life',
  },
  {
    imageUri: require('../../assets/axis-mutual.jpg'),

    text: 'PNB',
  },
  {
    imageUri: require('../../assets/axis-mutual.jpg'),

    text: 'Max',
  },
  {
    imageUri: require('../../assets/smiling.jpg'),

    text: 'Axis Bank',
  },
  {
    imageUri: require('../../assets/amazon.png'),

    text: 'ICICI Bank',
  },
];

function CategoryIcon(props: any) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <VStack space={2} alignItems="center" w="70px">
        <Center
          p="2"
          rounded="full"
          _dark={{ bg: 'coolGray.700' }}
          _light={{ bg: 'primary.100' }}
        >
          <IconButton
            p={1}
            variant="unstyled"
            icon={
              <Icon
                size="sm"
                color="primary.900"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'primary.900' }}
                name={props.item.iconName}
                as={
                  props.item.iconName == 'heartbeat' ||
                  props.item.iconName == 'hand-holding-heart'
                    ? FontAwesome5
                    : MaterialCommunityIcons
                }
              />
            }
            onPress={() => {
              console.log('icon button pressed');
            }}
          />
        </Center>
        <Center>
          <Text
            fontSize="xs"
            textAlign="center"
            fontWeight="medium"
            _dark={{ color: 'coolGray.50' }}
            _light={{ color: 'coolGray.800' }}
          >
            {props.item.iconText}
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}

function BankCard(props: any) {
  return (
    <VStack space={{ base: 2 }}>
      <Box shadow="1">
        <Image
          height={{ base: 20, md: 32 }}
          width={{ base: 20, md: 32 }}
          borderRadius={{ base: 4, md: 8 }}
          source={props.item.imageUri}
          alt="Insurance Partner"
        />
      </Box>
      <Text
        fontSize="xs"
        textAlign="center"
        fontWeight="normal"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
      >
        {props.item.text}
      </Text>
    </VStack>
  );
}

function ActionSheetPopup(pros: any) {
  return (
    <VStack width="100%" px="4" mb="12" mt="10">
      <HStack justifyContent="space-between" alignItems="center">
        <Text
          fontSize="md"
          letterSpacing="0.5"
          fontWeight="semibold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Bike Insurance
        </Text>
        <Icon
          size="6"
          as={AntDesign}
          name={'questioncircle'}
          _dark={{ color: 'primary.500' }}
          _light={{ color: 'primary.900' }}
        />
      </HStack>
      <Box
        mt="2"
        py="2"
        pl="4"
        w="72"
        rounded="full"
        _dark={{ bg: 'coolGray.700' }}
        _light={{ bg: 'coolGray.100' }}
      >
        <HStack alignItems="center" space={2}>
          <Icon size="5" color="red.500" as={Ionicons} name={'star'} />
          <Text
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.300' }}
            fontSize="xs"
          >
            Insure your bike instantly at great price
          </Text>
        </HStack>
      </Box>
      <Text
        fontSize="sm"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
        mt="6"
      >
        Enter your Bike Number
      </Text>
      <FormControl isRequired mt="3">
        <Input
          p="5"
          borderColor="primary.900"
          placeholder="EX : KA 01 AC 1212"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        />
      </FormControl>
      <Button
        borderRadius="4"
        width="100%"
        size="lg"
        py="5"
        mt="4"
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'primary.700' }}
        onPress={() => console.log('submit button pressed')}
        _text={{ fontSize: 'md' }}
      >
        Submit
      </Button>
      <Center>
        <Box
          _light={{ bg: 'coolGray.100' }}
          _dark={{ bg: 'coolGray.700' }}
          py="1"
          px="1"
          mt="6"
          rounded="full"
          width="72"
        >
          <HStack alignItems="center" space={1}>
            <Text
              fontWeight="medium"
              px="1"
              fontSize="xs"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.300' }}
            >
              Looking for car new insurance?
            </Text>
            <Link
              _light={{
                _text: {
                  color: 'primary.900',
                  fontSize: 'xs',
                },
              }}
              _dark={{
                _text: {
                  color: 'primary.500',
                  fontSize: 'xs',
                },
              }}
            >
              Get a Quote
            </Link>
            <Icon
              size="5"
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.500' }}
              as={MaterialIcons}
              name={'arrow-right-alt'}
            />
          </HStack>
        </Box>
      </Center>
    </VStack>
  );
}
const CarouselLayout = () => {
  return (
    <Box
      px={{ base: '4', md: 0 }}
      py={{ base: '4', md: 0 }}
      bg={{ base: 'transparent', md: 'transparent' }}
    >
      <Carousel
        images={[
          require('../../assets/bike.jpg'),
          require('../../assets/birla.jpg'),
          require('../../assets/birla.jpg'),
          require('../../assets/birla.jpg'),
        ]}
        height={{ base: 40, md: 72 }}
      />
    </Box>
  );
};

export default function (props: any) {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclose();
  const noColumn = useBreakpointValue({
    sm: 2,
    base: 4,
    lg: 8,
    md: 6,
    xl: 10,
  });
  const noColumnBankPartner = useBreakpointValue({
    sm: 2,
    base: 4,
    lg: 6,
    md: 6,
    xl: 6,
  });

  return (
    <DashboardLayout
      title="Insurance"
      displayScreenTitle={false}
      displaySidebar={false}
    >
      <Box
        _light={{
          bg: { base: 'white', md: 'primary.50' },
        }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.700' },
        }}
      >
        <CarouselLayout />
      </Box>

      <Box
        mt={{ base: 0, md: 3 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 2, md: 8 }}
        _light={{
          bg: 'white',
          borderColor: 'coolGray.200',
        }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Insurance
        </Text>

        <Box flex={1} width="100%">
          <FlatList
            ml={{ base: -7, md: -6 }}
            numColumns={noColumn}
            data={categories}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item, index }) => (
              <Pressable key={index} mt="3" mx={{ base: 5, md: 4 }}>
                <CategoryIcon item={item} />
              </Pressable>
            )}
            key={noColumn}
          />
        </Box>
      </Box>
      <HStack
        mt={{ base: 4, md: 3 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 0, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        _light={{
          bg: { base: 'primary.50', md: 'white' },
          borderColor: 'coolGray.200',
        }}
        _dark={{
          bg: { base: 'coolGray.700', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
      >
        <HStack space={4} alignItems="center">
          <Center
            bg="red.100"
            _light={{ bg: 'red.100' }}
            _dark={{ bg: 'coolGray.800' }}
            p="3"
            rounded="full"
          >
            <Icon
              size="6"
              color="error.400"
              as={FontAwesome5}
              name="hand-holding-heart"
            />
          </Center>
          <VStack space={1}>
            <Text
              fontSize="sm"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Have a corporate Health Policy
            </Text>
            <Text
              fontSize="xs"
              fontWeight="normal"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.300' }}
            >
              Access you benefits now.
            </Text>
          </VStack>
        </HStack>
        <Pressable
          onPress={() => {
            console.log('icon pressed');
          }}
        >
          <Icon
            size="8"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.300' }}
            as={MaterialCommunityIcons}
            name="chevron-right"
          />
        </Pressable>
      </HStack>
      <Box
        mt={{ base: 4, md: 3 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        _light={{
          bg: 'white',
          borderColor: 'coolGray.200',
        }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Insurance Partners
        </Text>
        <Box flex={1} width="100%">
          <FlatList
            ml={{ base: -2, md: -4 }}
            numColumns={noColumnBankPartner}
            data={banking_partners}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item, index }) => (
              <Pressable key={index} mt="2" mx={{ base: 2.5, md: 4 }}>
                <BankCard item={item} />
              </Pressable>
            )}
            key={noColumn}
          />
        </Box>
      </Box>
      <Hidden from="md">
        <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content
            _light={{ bg: 'coolGray.50' }}
            _dark={{ bg: 'coolGray.800' }}
          >
            <ActionSheetPopup />
          </Actionsheet.Content>
        </Actionsheet>
      </Hidden>
    </DashboardLayout>
  );
}
