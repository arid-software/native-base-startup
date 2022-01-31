import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  useColorMode,
  Divider,
  Hidden,
} from 'native-base';
import { Ionicons, Feather } from '@expo/vector-icons';
import IconPortfolio from '../Others/components/IconPortfolio';
import IconOrders from '../Others/components/IconOrders';
import IconRupee from '../Others/components/IconRupee';
import DashboardLayout from '../../layouts/DashboardLayout';
const stocks = [
  {
    companyName: 'Reliance',
    nse: 'NSE : Jul 06,11:44',
    value: '1700.37',
    vol: 'Vol:5.53m',
    change: '170.37',
    changePercentage: '+9.12%',
  },
  {
    companyName: 'TVS',
    nse: 'NSE : Jul 06,11:44',
    value: '1410.37',
    vol: 'Vol:5.53m',
    change: '78.37',
    changePercentage: '+4.12%',
  },
  {
    companyName: 'Bajaj Auto',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '410.37',
    vol: 'Vol:5.53m',
    change: '18.37',
    changePercentage: '-3.12%',
  },
  {
    companyName: 'Cipla',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '210.37',
    vol: 'Vol:5.53m',
    change: '12.37',
    changePercentage: '-2.12%',
  },
  {
    companyName: 'Balakrishna',
    nse: 'NSE : Jul 06,11:44',
    value: '610.37',
    vol: 'Vol:5.53m',
    change: '15.37',
    changePercentage: '+8.12%',
  },
  {
    companyName: 'Asian Paints',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '414.37',
    vol: 'Vol:5.53m',
    change: '16.37',
    changePercentage: '-1.12%',
  },
  {
    companyName: 'CDSL',
    nse: 'NSE : Jul 06,11:44',
    value: '219.37',
    vol: 'Vol:5.53m',
    change: '18.37',
    changePercentage: '+3.12%',
  },
  {
    companyName: 'Bajaj Finance',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '110.37',
    vol: 'Vol:5.53m',
    change: '20.37',
    changePercentage: '-23.12%',
  },
  {
    companyName: 'HDFC Bank',
    nse: 'NSE : Jul 06,11:44',
    value: '610.37',
    vol: 'Vol:5.53m',
    change: '21.37',
    changePercentage: '+8.12%',
  },
];

function MainContent(props: any) {
  const [tabName, setTabName] = React.useState('TopGainers');
  return (
    <>
      <Box
        width={{ md: '100%', base: '100%' }}
        _dark={{ bg: 'coolGray.900' }}
        _light={{ bg: { base: 'primary.900', md: 'white' } }}
      >
        <HStack
          px={{ base: 4, md: 4 }}
          mt="4"
          width="100%"
          justifyContent="space-between"
        >
          <Pressable
            px="2"
            onPress={() => {
              setTabName('TopGainers');
            }}
            maxW="25%"
          >
            <Text
              fontSize="md"
              fontWeight="medium"
              _light={{
                color: tabName == 'TopGainers' ? 'white' : 'coolGray.400',
              }}
              _dark={{
                color: tabName == 'TopGainers' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Top Gainers
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == 'TopGainers' ? 'white' : 'primary.900',
                    md: tabName == 'TopGainers' ? 'primary.900' : 'white',
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == 'TopGainers' ? 'primary.700' : 'coolGray.900',
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            px="2"
            maxW="25%"
            onPress={() => {
              setTabName('TopLosers');
            }}
          >
            <Text
              fontSize="md"
              fontWeight="medium"
              _light={{
                color: tabName == 'TopLosers' ? 'white' : 'coolGray.400',
              }}
              _dark={{
                color: tabName == 'TopLosers' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Top Losers
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == 'TopLosers' ? 'white' : 'primary.900',
                    md: tabName == 'TopLosers' ? 'primary.900' : 'white',
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == 'TopLosers' ? 'primary.700' : 'coolGray.900',
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            maxW="25%"
            onPress={() => {
              setTabName('ActiveByValue');
            }}
            px="2"
          >
            <Text
              fontSize="md"
              fontWeight="medium"
              _light={{
                color: tabName == 'ActiveByValue' ? 'white' : 'coolGray.400',
              }}
              _dark={{
                color:
                  tabName == 'ActiveByValue' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Active By Value
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == 'ActiveByValue' ? 'white' : 'primary.900',
                    md: tabName == 'ActiveByValue' ? 'primary.900' : 'white',
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == 'ActiveByValue'
                        ? 'primary.700'
                        : 'coolGray.900',
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            px="2"
            maxW="25%"
            onPress={() => {
              setTabName('ActiveByVolumn');
            }}
          >
            <Text
              fontSize="md"
              fontWeight="medium"
              _light={{
                color: tabName == 'ActiveByVolumn' ? 'white' : 'coolGray.400',
              }}
              _dark={{
                color:
                  tabName == 'ActiveByVolumn' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Active by volume
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == 'ActiveByVolumn' ? 'white' : 'primary.900',
                    md: tabName == 'ActiveByVolumn' ? 'primary.900' : 'white',
                  },
                }}
                _dark={{
                  bg:
                    tabName == 'ActiveByVolumn'
                      ? 'primary.700'
                      : 'coolGray.900',
                }}
              />
            </Box>
          </Pressable>
        </HStack>
      </Box>
      <Box
        py="2"
        px="4"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center" space="1">
            <Text
              _light={{ color: 'coolGray.700' }}
              _dark={{ color: 'white' }}
              fontWeight="medium"
              fontSize="xs"
            >
              Today
            </Text>
            <Icon as={Ionicons} name={'chevron-down'} size="4" />
          </HStack>
          <Text
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'white' }}
            fontWeight="medium"
            fontSize="xs"
            ml="8"
          >
            Value
          </Text>
          <Text
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'white' }}
            fontWeight="medium"
            fontSize="xs"
          >
            Change(%)
          </Text>
        </HStack>
      </Box>
      {tabName == 'TopGainers' ? (
        <VStack space="3" px="4" mt="4" pb={{ base: 4, md: 0 }}>
          {stocks.map((item, index) => {
            return (
              <VStack space="3" key={index}>
                <HStack justifyContent="space-between" alignItems="center">
                  <VStack space="1">
                    <Text
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'white' }}
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      {item.companyName}
                    </Text>
                    <Text
                      fontSize="xs"
                      _light={{ color: 'coolGray.500' }}
                      _dark={{ color: 'coolGray.300' }}
                    >
                      {item.nse}
                    </Text>
                  </VStack>

                  <VStack space="1">
                    {item.negativeValue ? (
                      <>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          _light={{ color: 'red.700' }}
                          _dark={{ color: 'red.700' }}
                        >
                          {item.value}
                        </Text>
                        <Text
                          fontSize="xs"
                          _light={{ color: 'coolGray.500' }}
                          _dark={{ color: 'coolGray.300' }}
                        >
                          {item.vol}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          _light={{ color: 'emerald.600' }}
                          _dark={{ color: 'emerald.400' }}
                        >
                          {item.value}
                        </Text>
                        <Text
                          fontSize="xs"
                          _light={{ color: 'coolGray.400' }}
                          _dark={{ color: 'coolGray.300' }}
                        >
                          {item.vol}
                        </Text>
                      </>
                    )}
                  </VStack>
                  <VStack space="1" alignItems="center">
                    {item.negativeValue ? (
                      <>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          _light={{ color: 'red.700' }}
                          _dark={{ color: 'red.700' }}
                        >
                          {item.change}
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight="semibold"
                          _light={{ color: 'red.700' }}
                          _dark={{ color: 'red.700' }}
                        >
                          {item.changePercentage}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          _light={{ color: 'emerald.600' }}
                          _dark={{ color: 'emerald.400' }}
                        >
                          {item.change}
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight="semibold"
                          _light={{ color: 'emerald.600' }}
                          _dark={{ color: 'emerald.400' }}
                        >
                          {item.changePercentage}
                        </Text>
                      </>
                    )}
                  </VStack>
                </HStack>
                {index == stocks.length - 1 ? null : (
                  <Divider
                    _light={{ bg: 'coolGray.300' }}
                    _dark={{ bg: 'coolGray.500' }}
                    width="100%"
                  />
                )}
              </VStack>
            );
          })}
        </VStack>
      ) : null}
    </>
  );
}
function FooterComponent() {
  return (
    <Hidden from="md">
      <Box
        _light={{ bg: 'white' }}
        _dark={{ bg: 'customGray' }}
        alignSelf="center"
        p="2"
        borderTopLeftRadius="12"
        borderTopRightRadius="12"
        height={20}
        position="absolute"
        px="6"
        bottom="0"
        left="0"
        right="0"
      >
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <HStack justifyContent="space-between">
            <VStack alignItems="center" space="2">
              <Icon
                as={Feather}
                name={'list'}
                size="6"
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.500' }}
              />
              <Text
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.500' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Watchlist
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <IconOrders />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Orders
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <IconPortfolio />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Portfolio
              </Text>
            </VStack>
            <VStack alignItems="center" space="2">
              <IconRupee />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Funds
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    </Hidden>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();

  return (
    <>
      <DashboardLayout title={'Market Movers'}>
        <VStack
          px={{ md: 6 }}
          py={{ md: 6 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          space="4"
          mb={{ base: 16, md: 0 }}
        >
          <MainContent />
        </VStack>
        <HStack
          display={{ base: 'none', md: 'flex' }}
          space="2"
          alignItems="center"
          mt="2"
          justifyContent="flex-end"
        >
          <Pressable
            height={8}
            width={8}
            borderRadius={4}
            _light={{
              bg: 'white',
              color: 'coolGray.500',
              borderColor: 'primary.700',
            }}
            _dark={{
              bg: 'customGray',
              color: 'coolGray.500',
              borderColor: 'coolGray.500',
            }}
            textAlign="center"
            justifyContent="center"
            borderWidth={1}
          >
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="sm"
            >
              1
            </Text>
          </Pressable>
          <Pressable
            height={8}
            width={8}
            borderRadius={4}
            _light={{ bg: 'white' }}
            _dark={{ bg: 'customGray' }}
            textAlign="center"
            justifyContent="center"
            fontSize="sm"
          >
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              2
            </Text>
          </Pressable>
        </HStack>
      </DashboardLayout>
      <FooterComponent />
    </>
  );
}
