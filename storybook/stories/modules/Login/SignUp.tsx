import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
  IconButton,
  useColorModeValue,
  Pressable,
  Hidden,
  Center,
} from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import IconGoogle from './components/IconGoogle';
import IconFacebook from './components/IconFacebook';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GuestLayout from '../../layouts/GuestLayout';

function SignUpForm() {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const [confirm_pass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{ base: '2xl', md: 'xl' }}
        borderBottomRightRadius={{ base: '0', md: 'xl' }}
        borderTopLeftRadius={{ base: '2xl', md: '0' }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="8">
              <VStack space="4">
                <FloatingLabelInput
                  py="3"
                  isRequired
                  label="Email"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  borderRadius="sm"
                  defaultValue={text}
                  onChangeText={(txt: any) => setText(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />
                <FloatingLabelInput
                  py="3"
                  isRequired
                  type={showPass ? '' : 'password'}
                  label="Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={pass}
                  onChangeText={(txt: any) => setPass(txt)}
                  InputRightElement={
                    <IconButton
                      mr="1"
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showPass ? 'eye' : 'eye-with-line'}
                        />
                      }
                      onPress={() => {
                        setShowPass(!showPass);
                      }}
                    />
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />

                <FloatingLabelInput
                  py="3"
                  isRequired
                  type={showConfirmPass ? '' : 'password'}
                  label="Confirm Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={confirm_pass}
                  onChangeText={(txt: any) => setConfirmPass(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      mr="1"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showConfirmPass ? 'eye' : 'eye-with-line'}
                        />
                      }
                      onPress={() => {
                        setShowConfirmPass(!showConfirmPass);
                      }}
                    />
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />
              </VStack>
              <Checkbox
                _dark={{
                  // @ts-ignore
                  _checked: { bg: 'primary.800', borderColor: 'primary.700' },
                }}
                _light={{
                  // @ts-ignore
                  _checked: { bg: 'primary.900' },
                }}
                defaultIsChecked
                value="demo"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center">
                  <Text
                    fontSize="sm"
                    color="coolGray.800"
                    _dark={{ color: 'coolGray.400' }}
                    pl="2"
                  >
                    I accept the{' '}
                  </Text>
                  <Link
                    href="https://nativebase.io"
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      textDecoration: 'none',
                    }}
                    _light={{
                      _text: {
                        color: 'primary.900',
                      },
                    }}
                    _dark={{
                      _text: {
                        color: 'primary.700',
                      },
                    }}
                  >
                    Terms of Use
                  </Link>
                  <Text fontSize="sm"> & </Text>

                  <Link
                    href="https://nativebase.io"
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      textDecoration: 'none',
                    }}
                    _light={{
                      _text: {
                        color: 'primary.900',
                      },
                    }}
                    _dark={{
                      _text: {
                        color: 'primary.700',
                      },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              <Button
                size="md"
                py="3"
                borderRadius="sm"
                _light={{
                  bg: 'primary.900',
                }}
                _dark={{
                  bg: 'primary.700',
                  _pressed: { bg: 'primary.500' },
                }}
              >
                SIGN UP
              </Button>
              <HStack
                space="2"
                mb={{ base: '6', md: '7' }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'coolGray.700' }}
                ></Divider>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.300' }}
                  _light={{ color: 'coolGray.400' }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: 'coolGray.200' }}
                  _dark={{ bg: 'coolGray.700' }}
                ></Divider>
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable onPress={() => console.log('pressed')}>
                  <IconFacebook />
                </Pressable>
                <Pressable onPress={() => console.log('pressed')}>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          <Text
            fontSize="sm"
            color="coolGray.500"
            _dark={{ color: 'coolGray.400' }}
          >
            Already have an account?
          </Text>

          <Link
            href="https://nativebase.io"
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            _light={{
              _text: {
                color: 'primary.900',
              },
            }}
            _dark={{
              _text: {
                color: 'primary.700',
              },
            }}
          >
            Sign in
          </Link>
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

export default function SignUp({ navigation }: any) {
  return (
    <GuestLayout>
      <Hidden from="md">
        <VStack px="4" mt="4" mb="5" space="9">
          <HStack space="2" alignItems="center">
            <Pressable
              onPress={() => {
                console.log('button Pressed');
              }}
            >
              <Icon
                size="6"
                as={AntDesign}
                name="arrowleft"
                color="coolGray.50"
              />
            </Pressable>
            <Text color="coolGray.50" fontSize="lg">
              Sign Up
            </Text>
          </HStack>
          <VStack space="2">
            <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
              Welcome
            </Text>
            <Text
              fontSize="md"
              fontWeight="normal"
              _dark={{
                color: 'coolGray.400',
              }}
              _light={{
                color: 'primary.300',
              }}
            >
              Sign up to continue
            </Text>
          </VStack>
        </VStack>
      </Hidden>
      <Hidden till="md">
        <Center
          flex="1"
          bg="primary.900"
          borderTopLeftRadius={{ base: '0', md: 'xl' }}
          borderBottomLeftRadius={{ base: '0', md: 'xl' }}
        >
          <Image
            h="24"
            size="80"
            alt="NativeBase Startup+ "
            resizeMode={'contain'}
            source={require('./components/logo.png')}
          />
        </Center>
      </Hidden>
      <SignUpForm />
    </GuestLayout>
  );
}
