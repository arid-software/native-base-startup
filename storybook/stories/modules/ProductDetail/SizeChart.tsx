import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  useColorMode,
  ScrollView,
  Pressable,
  Center,
  Button,
  Radio,
  Stack,
} from 'native-base';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const sizeList = [
  {
    index: 0,
    size: 'Size',
    chest: 'Chest',
    brandSize: 'Brand Size',
    shoulder: 'Shoulder',
    length: 'Length',
    waist: 'Waist',
    hip: 'Hips',
  },
  {
    index: 1,
    size: 38,
    chest: 40.2,
    brandSize: 38,
    shoulder: 16.5,
    length: 29.5,
    waist: 23.5,
    hip: 30.5,
  },
  {
    index: 2,
    size: 40,
    chest: 41.5,
    brandSize: 40,
    shoulder: 40,
    length: 30,
    waist: 23.5,
    hip: 30.5,
  },
  {
    index: 3,
    size: 42,
    chest: 43,
    brandSize: 42,
    shoulder: 18.5,
    length: 30.5,
    waist: 25,
    hip: 32,
  },
  {
    index: 4,
    size: 44,
    chest: 48.5,
    brandSize: 48.5,
    shoulder: 19.5,
    length: 30.75,
    waist: 26.5,
    hip: 33.5,
  },
  {
    index: 5,
    size: 46,
    chest: 51,
    brandSize: 51,
    shoulder: 20.5,
    length: 31,
    waist: 28,
    hip: 35,
  },
  {
    index: 6,
    size: 48,
    chest: 53.5,
    brandSize: 48,
    shoulder: 21.5,
    length: 21.5,
    waist: 29.5,
    hip: 36.5,
  },
  {
    index: 7,
    size: 50,
    chest: 56,
    brandSize: 50,
    shoulder: 22.5,
    length: 32,
    waist: 31,
    hip: 38,
  },
];

function SizeChartItem(props: any) {
  return (
    <HStack
      py="2"
      px="4"
      _light={{ bg: props.item.index == 0 ? 'coolGray.50' : 'white' }}
      _dark={{
        bg:
          props.item.index == 0
            ? { md: 'coolGray.800', base: 'coolGray.700' }
            : { md: 'coolGray.900', base: 'coolGray.800' },
      }}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
    >
      {props.item.size != 'Size' ? (
        <Center>
          <Box w={3} m={0} p={0}>
            <Radio
              _light={{
                bg: props.item.index == 0 ? 'coolGray.50' : 'white',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.900' },
                  borderColor: 'primary.900',
                },
              }}
              _dark={{
                bg: props.item.index == 0 ? 'coolGray.900' : 'coolGray.800',
                // @ts-ignore
                _checked: {
                  _icon: { color: 'primary.700' },
                  borderColor: 'primary.700',
                },
              }}
              value={props.item.size + ''}
              my="1"
              label={'radio'}
            ></Radio>
          </Box>
        </Center>
      ) : (
        <Text
          w="4"
          _light={{
            color:
              props.item.index == 0 || props.item.index == 2
                ? 'coolGray.900'
                : 'coolGray.500',
          }}
          _dark={{
            color:
              props.item.index == 0 || props.item.index == 2
                ? 'coolGray.100'
                : 'coolGray.400',
          }}
          fontSize="sm"
          textAlign="center"
        ></Text>
      )}

      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.size}
      </Text>
      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 ||
            props.item.index + 38 + '' == props.item.size
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.chest}
      </Text>
      <Text
        w="32"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.brandSize}
      </Text>
      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.shoulder}
      </Text>
      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.length}
      </Text>
      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.waist}
      </Text>
      <Text
        w="20"
        _light={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.900'
              : 'coolGray.500',
        }}
        _dark={{
          color:
            props.item.index == 0 || props.item.index == 2
              ? 'coolGray.100'
              : 'coolGray.400',
        }}
        fontSize="sm"
        textAlign="center"
      >
        {props.item.hip}
      </Text>
    </HStack>
  );
}
const AddToCartButton = (props: any) => {
  return (
    <HStack
      mt={{ base: 16, md: 120 }}
      space="4"
      alignItems="center"
      display={{
        base: props.base,
        md: props.md,
      }}
    >
      <Pressable
        onPress={() => {
          console.log('hello');
        }}
      >
        <Center
          p="2"
          borderRadius="4"
          _light={{ bg: 'primary.100' }}
          _dark={{ bg: { base: 'coolGray.700', md: 'coolGray.800' } }}
        >
          <Icon
            size="8"
            name="heart"
            as={EvilIcons}
            _dark={{ color: 'violet.500' }}
            _light={{ color: 'primary.900' }}
          />
        </Center>
      </Pressable>

      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _light={{
          bg: 'primary.900',
        }}
        _dark={{
          bg: 'primary.700',
          _pressed: { bg: 'primary.500' },
        }}
        _text={{ fontSize: 'md', fontWeight: 'semibold' }}
      >
        ADD TO CART
      </Button>
    </HStack>
  );
};

export default function SizeChart(props: any) {
  const { colorMode } = useColorMode();
  const [measurement, setMeasurement] = React.useState('cm');
  const [size, setSize] = React.useState('40');
  return (
    <>
      <DashboardLayout
        title="Size Chart"
        showIcons
        header={{ searchbar: true }}
        displaySidebar={false}
      >
        <Stack
          flex={1}
          borderWidth={1}
          borderColor="#E5E7EB"
          borderRadius={{ md: '8' }}
          _light={{ bg: 'white' }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          py={{ base: '4', md: '8' }}
          direction={{ base: 'column', md: 'row' }}
          space={3}
          w="100%"
        >
          <Stack
            pr={{ base: 0, md: 8 }}
            flex={1}
            flexDirection={{ md: 'row', base: 'column' }}
          >
            <VStack w={{ md: '60%', base: '100%' }}>
              <HStack px={8} alignItems="flex-start">
                <Box
                  p="1.5"
                  mr="3"
                  _light={{ bg: 'primary.100' }}
                  _dark={{ bg: '#2F3948' }}
                  borderRadius="md"
                >
                  <Image
                    width={{ md: 24, base: 16 }}
                    height={{ md: 24, base: 16 }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require('./components/baby-clothes.jpg')}
                  />
                </Box>
                <VStack
                  space={{ base: 1, md: 1 }}
                  justifyContent="space-between"
                >
                  <Text
                    fontSize="14"
                    fontWeight="semibold"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Body Suit
                  </Text>
                  <Text
                    fontSize="12"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'coolGray.300' }}
                  >
                    Mother care
                  </Text>
                  <Text
                    fontSize="16"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    ₹500
                  </Text>
                </VStack>
              </HStack>
              <HStack
                px={{ base: 8, md: 0 }}
                space="4"
                justifyContent="flex-end"
              >
                <Button
                  w="12"
                  py="0.5"
                  borderRadius="4"
                  variant="outline"
                  _text={{ fontWeight: 'bold' }}
                  colorScheme={measurement == 'cm' ? 'primary' : 'coolGray'}
                  borderWidth={measurement == 'cm' ? 0 : 1}
                  bg={measurement == 'cm' ? 'primary.100' : 'white'}
                  onPress={() => setMeasurement('cm')}
                  _dark={{ bg: 'coolGray.800' }}
                >
                  cm
                </Button>
                <Button
                  w="12"
                  py="0.5"
                  variant="outline"
                  _text={{ fontWeight: 'bold' }}
                  colorScheme={measurement == 'inch' ? 'primary' : 'coolGray'}
                  borderWidth={measurement == 'inch' ? 0 : 1}
                  bg={measurement == 'inch' ? 'primary.100' : 'white'}
                  borderRadius="4"
                  onPress={() => setMeasurement('inch')}
                  _dark={{
                    bg: 'coolGray.900',
                    borderColor: 'coolGray.600',
                  }}
                >
                  in
                </Button>
              </HStack>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <VStack px={{ base: 0, md: 8 }} width="100%" h="80%" mt="2">
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={size}
                    onChange={(nextValue) => {
                      setSize(nextValue);
                    }}
                  >
                    {sizeList.map((item, index) => {
                      return (
                        <SizeChartItem item={item} key={index} size={size} />
                      );
                    })}
                  </Radio.Group>
                </VStack>
              </ScrollView>
            </VStack>
            <Box ml={4} pr={4} flex={1} justifyContent="center">
              <AddToCartButton base="none" md="flex" />
              <VStack
                p="4"
                mt={8}
                _light={{ bg: 'coolGray.50' }}
                _dark={{ bg: { md: 'coolGray.800', base: 'coolGray.700' } }}
              >
                <Text
                  fontWeight="bold"
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.100' }}
                >
                  Measurements Guidelines
                </Text>
                <HStack alignItems="flex-start" mt="3">
                  <HStack flexShrink={1}>
                    <Icon
                      size="2"
                      mr={1}
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                      as={FontAwesome}
                      mt={1}
                      name={'circle'}
                    />

                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      <Text
                        _light={{ color: 'coolGray.900' }}
                        _dark={{ color: 'coolGray.100' }}
                        fontSize="xs"
                      >
                        Full sleeve shirts{' '}
                      </Text>
                      - Measure the shoulder from back, from the edge to edge
                      with arms relaxed on both sides
                    </Text>
                  </HStack>
                </HStack>
                <HStack alignItems="flex-start" mt="3">
                  <HStack flexShrink={1}>
                    <Icon
                      size="2"
                      mr={1}
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                      as={FontAwesome}
                      mt={1}
                      name={'circle'}
                    />

                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      <Text
                        _light={{ color: 'coolGray.900' }}
                        _dark={{ color: 'coolGray.100' }}
                        fontSize="xs"
                      >
                        Shoulder{' '}
                      </Text>
                      - Measure the shoulder from back, from the edge to edge
                      with arms relaxed on both sides
                    </Text>
                  </HStack>
                </HStack>
                <HStack alignItems="flex-start" mt="3">
                  <HStack flexShrink={1}>
                    <Icon
                      size="2"
                      mr={1}
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                      as={FontAwesome}
                      mt={1}
                      name={'circle'}
                    />

                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      <Text
                        _light={{ color: 'coolGray.900' }}
                        _dark={{ color: 'coolGray.100' }}
                        fontSize="xs"
                      >
                        Chest{' '}
                      </Text>
                      - Measure around the body under the arms, from the edge to
                      edge with arms relaxed on both side.
                    </Text>
                  </HStack>
                </HStack>
                <HStack alignItems="flex-start" mt="3">
                  <HStack flexShrink={1}>
                    <Icon
                      size="2"
                      mr={1}
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                      as={FontAwesome}
                      mt={1}
                      name={'circle'}
                    />

                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      <Text
                        _light={{ color: 'coolGray.900' }}
                        _dark={{ color: 'coolGray.100' }}
                        fontSize="xs"
                      >
                        Waist{' '}
                      </Text>
                      - Measure the circumference just above your hip bones.
                    </Text>
                  </HStack>
                </HStack>
                <HStack alignItems="flex-start" mt="3">
                  <HStack flexShrink={1}>
                    <Icon
                      size="2"
                      mr={1}
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                      as={FontAwesome}
                      mt={1}
                      name={'circle'}
                    />

                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      <Text
                        _light={{ color: 'coolGray.900' }}
                        _dark={{ color: 'coolGray.100' }}
                        fontSize="xs"
                      >
                        Length{' '}
                      </Text>
                      - Measure the length from the shoulder till the waist.
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
              <AddToCartButton base="flex" md="none" />
            </Box>
          </Stack>
        </Stack>
      </DashboardLayout>
    </>
  );
}
