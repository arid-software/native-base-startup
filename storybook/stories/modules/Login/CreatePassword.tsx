import React, { useState } from 'react';
import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  Button,
  Image,
  IconButton,
  Center,
  Hidden,
  FormControl,
} from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import GuestLayout from '../../layouts/GuestLayout';
export default function CreatePassword(props: any) {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <GuestLayout>
      <Hidden from="md">
        <HStack space="2" px="1" mt="4" mb="5" alignItems="center">
          <IconButton
            variant="unstyled"
            onPress={() => {}}
            icon={
              <Icon
                alignItems="center"
                justifyContent="center"
                size="6"
                as={AntDesign}
                name="arrowleft"
                color="coolGray.50"
              />
            }
          />
          <Text color="coolGray.50" fontSize="lg">
            Create Password
          </Text>
        </HStack>
      </Hidden>
      <Hidden till="md">
        <Center
          flex="1"
          bg="primary.900"
          px={{ base: '4', md: '8' }}
          borderTopLeftRadius={{ md: 'xl' }}
          borderBottomLeftRadius={{ md: 'xl' }}
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
      <Box
        py={{ base: '6', md: '10' }}
        px={{ base: '4', md: '10' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        flex="1"
        borderTopRightRadius={{ md: 'xl' }}
        borderBottomRightRadius={{ md: 'xl' }}
      >
        <VStack justifyContent="space-between" flex="1">
          <Box>
            <VStack space={{ base: '4', md: '5' }}>
              <Text
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="bold"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                Create new password
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.400' }}
                fontSize="sm"
              >
                Your new password must be different from previous used passwords
                and must be of at least 8 characters.
              </Text>
            </VStack>
            <VStack space="4" mt="10">
              <FormControl>
                <FloatingLabelInput
                  _focus={{
                    _light: { borderColor: '#D1D5DB' },
                    _dark: { borderColor: 'coolGray.700' },
                  }}
                  py="3"
                  isRequired
                  type={showPass ? '' : 'password'}
                  label="Password"
                  borderRadius="4"
                  defaultValue={pass}
                  labelColor="#9ca3af"
                  onChangeText={(txt: any) => setPass(txt)}
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  InputRightElement={
                    <IconButton
                      mr="3"
                      variant="unstyled"
                      icon={
                        <Icon
                          size="5"
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
                  _dark={{
                    borderColor: 'coolGray.700',
                  }}
                  _light={{
                    borderColor: 'coolGray.300',
                  }}
                />
                <FormControl.HelperText
                  _light={{ _text: { color: 'coolGray.600' } }}
                  _dark={{ _text: { color: 'coolGray.400' } }}
                >
                  Must be at least 8 characters.
                </FormControl.HelperText>
              </FormControl>
              <FormControl mt={{ base: 1, md: 0 }}>
                <FloatingLabelInput
                  _focus={{
                    _light: { borderColor: '#D1D5DB' },
                    _dark: { borderColor: 'coolGray.700' },
                  }}
                  isRequired
                  type={showConfirmPass ? '' : 'password'}
                  borderRadius="4"
                  labelColor="#9ca3af"
                  label="Confirm Password"
                  defaultValue={confirmPass}
                  onChangeText={(txt: any) => setConfirmPass(txt)}
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  InputRightElement={
                    <IconButton
                      mr="3"
                      variant="unstyled"
                      icon={
                        <Icon
                          size="5"
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
                <FormControl.HelperText
                  _light={{ _text: { color: 'coolGray.600' } }}
                  _dark={{ _text: { color: 'coolGray.400' } }}
                >
                  Both passwords must match.
                </FormControl.HelperText>
              </FormControl>
            </VStack>
          </Box>
        </VStack>
        <Button
          mt={{ base: 4, md: '102px' }}
          mb={{ base: '4', md: 0 }}
          py="13px"
          size="md"
          _light={{
            bg: 'primary.900',
          }}
          _dark={{
            bg: 'primary.800',
          }}
        >
          UPDATE PASSWORD
        </Button>
      </Box>
    </GuestLayout>
  );
}
