import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  useColorMode,
  Center,
  Button,
  Pressable,
  Divider,
  Hidden,
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import IconSubscription from './components/IconSubscription';
import DashboardLayout from '../../layouts/DashboardLayout';
function OptionSection(props: any) {
  const [tabName, setTabName] = React.useState('Premium');
  return (
    <>
      <HStack mt="4" alignItems="center" width="100%">
        <Pressable
          onPress={() => {
            setTabName('Free');
          }}
          flex={1}
          _light={{
            bgColor: 'primary.50',
          }}
          _dark={{
            bgColor: 'customGray',
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.800',
            }}
            _dark={{
              color: 'coolGray.200',
            }}
          >
            Free
          </Text>
          {tabName === 'Free' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'coolGray.800',
                }}
                _dark={{
                  bgColor: 'coolGray.50',
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.50',
                }}
                _dark={{
                  bgColor: 'customGray',
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            setTabName('Premium');
          }}
          flex={1}
          _light={{
            bgColor: 'primary.900',
          }}
          _dark={{
            bgColor: 'primary.700',
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.50',
            }}
            _dark={{
              color: 'coolGray.50',
            }}
          >
            Premium
          </Text>
          {tabName == 'Premium' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.900',
                }}
                _dark={{
                  bgColor: 'coolGray.50',
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.900',
                }}
                _dark={{
                  bgColor: 'primary.700',
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setTabName('Business');
          }}
          flex={1}
          _light={{
            bgColor: 'primary.50',
          }}
          _dark={{
            bgColor: 'customGray',
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.800',
            }}
            _dark={{
              color: 'coolGray.200',
            }}
          >
            Business
          </Text>
          {tabName === 'Business' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'coolGray.800',
                }}
                _dark={{
                  bgColor: 'coolGray.50',
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.50',
                }}
                _dark={{
                  bgColor: 'customGray',
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>
      </HStack>
      {tabName === 'Free' ? (
        <Text
          mt="3"
          fontSize="sm"
          lineHeight="lg"
          fontWeight="medium"
          letterSpacing="0.3"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Here the offer related to business will be added.
        </Text>
      ) : tabName === 'Business' ? (
        <Text
          mt="3"
          fontSize="sm"
          lineHeight="lg"
          fontWeight="medium"
          letterSpacing="0.3"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        >
          Here the offer related to business will be added.
        </Text>
      ) : (
        <>
          <VStack
            alignItems="center"
            mt={{ base: 6, md: '30px' }}
            space={{ base: 2, md: 2 }}
          >
            <Text
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.700' }}
              fontSize="2xl"
              textAlign="center"
              fontWeight={{ base: 'semibold', md: 'bold' }}
            >
              50% off
            </Text>
            <Text
              px="10"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="sm"
              textAlign="center"
              fontWeight="medium"
            >
              Until Sunday, June 25th
            </Text>
          </VStack>

          <Hidden from="md">
            <VStack
              w="100%"
              space={5}
              mt={{ base: '18px', md: '42px' }}
              display={{
                md: 'flex',
              }}
              direction={{
                md: 'column',
              }}
              flexWrap={{
                md: 'wrap',
              }}
              height={{
                md: '120px',
                lg: '100px',
              }}
            >
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                space={3}
                maxW={{
                  md: '50%',
                }}
                display={{
                  md: 'flex',
                }}
                flexWrap={{
                  md: 'wrap',
                }}
              >
                <Center
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'coolGray.400' }}
                  p="1"
                  rounded="full"
                >
                  <Icon
                    as={MaterialIcons}
                    name="check"
                    _light={{
                      color: 'coolGray.50',
                    }}
                    _dark={{
                      color: 'coolGray.900',
                    }}
                    size="xs"
                  />
                </Center>
                <Text
                  flex={1}
                  fontSize="sm"
                  _light={{
                    color: 'coolGray.800',
                  }}
                  _dark={{ color: 'coolGray.100' }}
                  fontWeight="medium"
                >
                  Unlock over 15 courses
                </Text>
              </HStack>
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                space={3}
                maxW={{
                  md: '50%',
                }}
                display={{
                  md: 'flex',
                }}
                flexWrap={{
                  md: 'wrap',
                }}
              >
                <Center
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'coolGray.400' }}
                  p="1"
                  rounded="full"
                >
                  <Icon
                    as={MaterialIcons}
                    name="check"
                    _light={{
                      color: 'coolGray.50',
                    }}
                    _dark={{
                      color: 'coolGray.900',
                    }}
                    size="xs"
                  />
                </Center>
                <Text
                  flex={1}
                  fontSize="sm"
                  _light={{
                    color: 'coolGray.800',
                  }}
                  _dark={{ color: 'coolGray.100' }}
                  fontWeight="medium"
                >
                  Unlock over 120 learning chats
                </Text>
              </HStack>
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                space={3}
                maxW={{
                  md: '50%',
                }}
                display={{
                  md: 'flex',
                }}
                flexWrap={{
                  md: 'wrap',
                }}
              >
                <Center
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'coolGray.400' }}
                  p="1"
                  rounded="full"
                >
                  <Icon
                    as={MaterialIcons}
                    name="check"
                    _light={{
                      color: 'coolGray.50',
                    }}
                    _dark={{
                      color: 'coolGray.900',
                    }}
                    size="xs"
                  />
                </Center>
                <Text
                  flex={1}
                  fontSize="sm"
                  _light={{
                    color: 'coolGray.800',
                  }}
                  _dark={{ color: 'coolGray.100' }}
                  fontWeight="medium"
                >
                  Save upto 1000 words
                </Text>
              </HStack>
              <HStack
                alignItems="flex-start"
                justifyContent="space-between"
                space={3}
                maxW={{
                  md: '50%',
                }}
                display={{
                  md: 'flex',
                }}
                flexWrap={{
                  md: 'wrap',
                }}
              >
                <Center
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'coolGray.400' }}
                  p="1"
                  rounded="full"
                >
                  <Icon
                    as={MaterialIcons}
                    name="check"
                    _light={{
                      color: 'coolGray.50',
                    }}
                    _dark={{
                      color: 'coolGray.900',
                    }}
                    size="xs"
                  />
                </Center>
                <Text
                  flex={1}
                  fontSize="sm"
                  _light={{
                    color: 'coolGray.800',
                  }}
                  _dark={{ color: 'coolGray.100' }}
                  fontWeight="medium"
                >
                  Maintain notes and access them anytime
                </Text>
              </HStack>
            </VStack>
          </Hidden>
          <Hidden from="base" till="md">
            <HStack
              space={5}
              mt={{ base: '18px', md: '50px' }}
              direction={{
                md: 'row',
              }}
              flexWrap={{
                md: 'wrap',
              }}
              height={{
                md: '120px',
                lg: '100px',
              }}
              justifyContent="space-between"
            >
              <VStack space="4">
                <HStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  space={3}
                  display={{
                    md: 'flex',
                  }}
                  flexWrap={{
                    md: 'wrap',
                  }}
                >
                  <Center
                    _light={{ bg: 'primary.900' }}
                    _dark={{ bg: 'coolGray.400' }}
                    p="1"
                    rounded="full"
                  >
                    <Icon
                      as={MaterialIcons}
                      name="check"
                      _light={{
                        color: 'coolGray.50',
                      }}
                      _dark={{
                        color: 'coolGray.900',
                      }}
                      size="xs"
                    />
                  </Center>
                  <Text
                    flex={1}
                    fontSize="sm"
                    _light={{
                      color: 'coolGray.800',
                    }}
                    _dark={{ color: 'coolGray.100' }}
                    fontWeight="medium"
                  >
                    Unlock over 15 courses
                  </Text>
                </HStack>
                <HStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  space={3}
                  display={{
                    md: 'flex',
                  }}
                  flexWrap={{
                    md: 'wrap',
                  }}
                >
                  <Center
                    _light={{ bg: 'primary.900' }}
                    _dark={{ bg: 'coolGray.400' }}
                    p="1"
                    rounded="full"
                  >
                    <Icon
                      as={MaterialIcons}
                      name="check"
                      _light={{
                        color: 'coolGray.50',
                      }}
                      _dark={{
                        color: 'coolGray.900',
                      }}
                      size="xs"
                    />
                  </Center>
                  <Text
                    flex={1}
                    fontSize="sm"
                    _light={{
                      color: 'coolGray.800',
                    }}
                    _dark={{ color: 'coolGray.100' }}
                    fontWeight="medium"
                  >
                    Unlock over 120 learning chats
                  </Text>
                </HStack>
              </VStack>
              <VStack space="4">
                <HStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  space={3}
                  display={{
                    md: 'flex',
                  }}
                  flexWrap={{
                    md: 'wrap',
                  }}
                >
                  <Center
                    _light={{ bg: 'primary.900' }}
                    _dark={{ bg: 'coolGray.400' }}
                    p="1"
                    rounded="full"
                  >
                    <Icon
                      as={MaterialIcons}
                      name="check"
                      _light={{
                        color: 'coolGray.50',
                      }}
                      _dark={{
                        color: 'coolGray.900',
                      }}
                      size="xs"
                    />
                  </Center>
                  <Text
                    flex={1}
                    fontSize="sm"
                    _light={{
                      color: 'coolGray.800',
                    }}
                    _dark={{ color: 'coolGray.100' }}
                    fontWeight="medium"
                  >
                    Save upto 1000 words
                  </Text>
                </HStack>
                <HStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  space={3}
                  display={{
                    md: 'flex',
                  }}
                  flexWrap={{
                    md: 'wrap',
                  }}
                >
                  <Center
                    _light={{ bg: 'primary.900' }}
                    _dark={{ bg: 'coolGray.400' }}
                    p="1"
                    rounded="full"
                  >
                    <Icon
                      as={MaterialIcons}
                      name="check"
                      _light={{
                        color: 'coolGray.50',
                      }}
                      _dark={{
                        color: 'coolGray.900',
                      }}
                      size="xs"
                    />
                  </Center>
                  <Text
                    flex={1}
                    fontSize="sm"
                    _light={{
                      color: 'coolGray.800',
                    }}
                    _dark={{ color: 'coolGray.100' }}
                    fontWeight="medium"
                  >
                    Maintain notes and access them anytime
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Hidden>
        </>
      )}
    </>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout title={'Subscription Plans'} displaySidebar={false}>
      <VStack
        safeAreaBottom
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        px={{
          base: 4,
          md: 32,
        }}
      >
        <Center mt="8">
          <IconSubscription />
        </Center>
        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          mt="8"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.100' }}
        >
          Upgrade to Premium
        </Text>
        <Text
          mt="3"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
          fontSize="sm"
          textAlign="center"
          fontWeight="medium"
        >
          Unlock over 15 courses, 120 chats and so more!
        </Text>
        <OptionSection />
        <Center mt={{ base: '18px', md: 15 }} pb="8" w="100%">
          <Button
            borderRadius="4"
            width="100%"
            size="md"
            py="4"
            _light={{
              bg: 'primary.900',
            }}
            _dark={{
              bg: 'primary.700',
              _pressed: { bg: 'primary.500' },
            }}
            onPress={() => console.log('subscription will be taken')}
            _text={{
              fontSize: 'sm',
              fontWeight: 'semibold',
            }}
          >
            SUBSCRIBE NOW
          </Button>
        </Center>
      </VStack>
    </DashboardLayout>
  );
}
