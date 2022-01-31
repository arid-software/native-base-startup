import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Avatar,
  useColorMode,
  Button,
  Link,
  TextArea,
  useColorModeValue,
  useBreakpointValue,
} from 'native-base';

import FloatingLabelInput from '../../components/FloatingLabelInput';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function (props: any) {
  const { colorMode } = useColorMode();
  const [pass, setPass] = React.useState('');
  const bgColor = useBreakpointValue({
    base: '#1f2937',
    lg: '#111827',
    md: '#111827',
    xl: '#111827',
  });
  return (
    <>
      <DashboardLayout title="Disable Account">
        <VStack
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
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
          borderBottomWidth="1"
          flex={1}
        >
          <HStack justifyContent="space-between">
            <HStack space="3" alignItems="center">
              <Avatar
                source={require('../../assets/women.jpg')}
                width="9"
                height="9"
              />
              <VStack>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  Jane Doe
                </Text>
                <Text
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.400' }}
                  fontSize="xs"
                  fontWeight="normal"
                >
                  janedoe2@mydomain.com
                </Text>
              </VStack>
            </HStack>
          </HStack>
          <VStack space="4" mt="8">
            <Text
              fontSize="md"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Why are you disabling your account?
            </Text>
            <TextArea
              placeholder="Please enter the reason for disabling your account."
              textAlignVertical={'top'}
              fontSize="sm"
              h="48"
              width="100%"
              _light={{ borderColor: 'coolGray.300' }}
              _dark={{ borderColor: 'coolGray.500' }}
            />
          </VStack>
          <Box mt="8">
            <Text
              mb="4"
              fontSize="md"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              To continue, please re-enter your password
            </Text>
            <FloatingLabelInput
              p="3"
              isRequired
              type="password"
              label="Password"
              borderRadius="4"
              labelColor="#9ca3af"
              defaultValue={pass}
              onChangeText={(txt: any) => setPass(txt)}
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              _text={{
                fontSize: 'sm',
                fontWeight: 'medium',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
            />
            <Link
              href="https://nativebase.io"
              mt="5"
              _light={{
                _text: {
                  _light: { color: 'primary.900' },
                  _dark: { color: 'primary.700' },
                  fontSize: 'sm',
                  fontWeight: 'bold',
                  textDecorationLine: 'none',
                },
              }}
              _dark={{
                _text: {
                  color: 'violet.500',
                  fontSize: 'sm',
                  fontWeight: 'bold',
                  textDecorationLine: 'none',
                },
              }}
            >
              Forgot password ?
            </Link>
          </Box>
          <Text
            mt="5"
            mb="2"
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Note: If you disable, your account will reactivate the next time you
            sign in. Deleted accounts are gone forever. In either case, your
            account disappears.
          </Text>
          <Button
            mt="auto"
            size="md"
            borderRadius="4"
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
            }}
            _light={{
              bg: 'primary.900',
            }}
            _dark={{
              bg: 'primary.700',
              _pressed: { bg: 'primary.500' },
            }}
          >
            CONFIRM
          </Button>
        </VStack>
      </DashboardLayout>
    </>
  );
}
