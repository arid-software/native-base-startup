import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  useColorMode,
  useColorModeValue,
  Divider,
  Center,
} from 'native-base';
import IconRefer from './components/IconRefer';
import IconFacebook from './components/IconFacebook';
import IconTwiter from './components/IconTwitter';
import IconWhatsapp from './components/IconWhatsapp';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

function Code(props: any) {
  return (
    <>
      <HStack
        mt="12"
        alignItems="center"
        borderRadius={{ base: 4, md: 4 }}
        justifyContent="space-around"
        borderStyle="dashed"
        borderWidth="2"
        _light={{
          borderColor: 'coolGray.300',
          bg: 'coolGray.50',
        }}
        _dark={{
          borderColor: 'coolGray.200',
          bg: 'coolGray.700',
        }}
        shadow="4"
      >
        <VStack
          alignItems="center"
          py="4"
          px="6"
          space={{ base: 0, md: 3 }}
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
        >
          <Box
            _text={{ fontSize: 'sm' }}
            _light={{ _text: { color: 'coolGray.400' } }}
            _dark={{ _text: { color: 'coolGray.400' } }}
          >
            Your referral Code
          </Box>
          <Box
            _light={{ _text: { color: 'coolGray.800' } }}
            _dark={{ _text: { color: 'coolGray.50' } }}
            _text={{
              fontSize: 'xl',
              fontWeight: { base: 'normal', md: 'semibold' },
            }}
            pl={{ md: 2, base: 0 }}
          >
            Native50
          </Box>
        </VStack>
        <Divider orientation="vertical" bg="coolGray.300" h="50%" />
        <Pressable
          onPress={() => {
            console.log('the item selected');
          }}
        >
          <Box
            py="4"
            px="6"
            _text={{ fontSize: 'sm' }}
            _light={{ _text: { color: 'primary.900' } }}
            _dark={{ _text: { color: 'primary.500' } }}
          >
            Copy Code
          </Box>
        </Pressable>
      </HStack>
    </>
  );
}

function SocialIcon(props: any) {
  return (
    <>
      <HStack
        mt="4"
        alignItems="center"
        justifyContent="space-between"
        space={8}
      >
        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <IconFacebook />
        </Pressable>

        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <IconWhatsapp />
        </Pressable>

        <Pressable
          onPress={() => {
            console.log('hello');
          }}
        >
          <IconTwiter />
        </Pressable>
      </HStack>
    </>
  );
}
function FAQModal(props: any) {
  const [currentItemNumber, setCurrentItemNumber] = React.useState(-1);
  const primaryText = useColorModeValue('coolGray.800', 'coolGray.200');
  const tertioryText = useColorModeValue('coolGray.600', 'coolGray.400');
  let faqItemList = [
    {
      itemNumber: 0,
      modalVisible: false,
      title: 'How it works ?',
      text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
    },
    {
      itemNumber: 1,
      modalVisible: false,
      title: 'How much do i get ?',
      text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
    },
    {
      itemNumber: 2,
      modalVisible: false,
      title: 'Terms and conditions for referral?',
      text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
    },
  ];
  return (
    <>
      <VStack
        width="100%"
        space={{ base: 2, md: 4 }}
        mt="8"
        px={{ md: 40 }}
        pb={{ md: 4 }}
      >
        <Text
          mb="2"
          fontSize="sm"
          fontWeight="semibold"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
          textAlign={{ md: 'center' }}
        >
          Frequently Asked Questions
        </Text>
        {faqItemList.map((item, index) => {
          return (
            <VStack
              key={index}
              _light={{ bg: '#F5F5F5' }}
              _dark={{ bg: 'coolGray.700' }}
              borderRadius="4"
            >
              <Pressable
                onPress={() => {
                  setCurrentItemNumber(item.itemNumber);
                }}
              >
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  px="2"
                  py="4"
                >
                  <Icon mr="3" size="2" as={MaterialIcons} name={'circle'} />

                  <Text
                    flex={1}
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    {item.title}
                  </Text>

                  <Icon
                    size="6"
                    as={MaterialIcons}
                    color={
                      item.itemNumber === currentItemNumber
                        ? tertioryText
                        : primaryText
                    }
                    name={
                      !(item.itemNumber === currentItemNumber)
                        ? 'keyboard-arrow-down'
                        : 'keyboard-arrow-up'
                    }
                  />
                </HStack>
              </Pressable>
              {item.itemNumber === currentItemNumber ? (
                <Text
                  px="7"
                  pb="4"
                  fontSize="sm"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  {item.text}
                </Text>
              ) : null}
            </VStack>
          );
        })}
      </VStack>
    </>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();

  return (
    <DashboardLayout title={'Refer And Earn'} displaySidebar={false}>
      <VStack
        px={{ base: 4 }}
        py={{ base: 4, md: 10 }}
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
        space="4"
        flex={1}
      >
        <VStack alignItems="center">
          <Center mt={{ base: 4, md: 6 }}>
            <IconRefer />
          </Center>
          <Code />
          <Text
            mt="6"
            fontSize="sm"
            fontWeight="semibold"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            Share your referral code
          </Text>
          <SocialIcon />
          <FAQModal />
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
