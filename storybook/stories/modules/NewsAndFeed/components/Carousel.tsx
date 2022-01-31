import React from 'react';
import { HStack, Image, Center, VStack, Pressable } from 'native-base';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
} from 'react-native';

type Carousel = {
  images: any[];
  height: any;
};

export function Carousel({ images, height }: Carousel) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);

  const ref = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    if (containerWidth)
      ref.current?.scrollTo({ x: activeIndex * containerWidth });
  }, [activeIndex, containerWidth]);

  let timeout = React.useRef<any>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (containerWidth) {
      if (timeout) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        const nextActiveIndex = Math.round(
          e.nativeEvent.contentOffset.x / containerWidth
        );
        if (nextActiveIndex !== activeIndex) {
          setActiveIndex(nextActiveIndex);
        } else {
          ref.current?.scrollTo({ x: activeIndex * containerWidth });
        }
      }, 50);
    }
  };

  const onMomentumScrollEnd = (e: any) => {
    const nextActiveIndex = Math.round(
      e.nativeEvent.contentOffset.x / containerWidth
    );
    if (activeIndex !== nextActiveIndex) {
      setActiveIndex(nextActiveIndex);
      return nextActiveIndex;
    }
  };

  return (
    <VStack
      space="2"
      flex={1}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        ref={ref}
        // RN Web doesn't support onMomentumScrollEnd so use onScroll
        onScroll={Platform.OS === 'web' ? onScroll : undefined}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        // Paging enabled is only supported in native
        pagingEnabled={Platform.OS !== 'web'}
      >
        {images.map((image, idx) => {
          return (
            <Image
              key={idx}
              // rounded="lg"
              alt="advertisement"
              height={height}
              width={containerWidth}
              source={image}
            />
          );
        })}
      </ScrollView>
      <Center>
        <HStack space="1">
          {images.map((_image, index) => {
            return (
              <Pressable onPress={() => setActiveIndex(index)} key={index}>
                <Center
                  // bg={index === activeIndex ? 'coolGray.500' : 'coolGray.300'}
                  bg={index === activeIndex ? 'primary.700' : 'coolGray.300'}
                  p="1"
                  rounded="full"
                />
              </Pressable>
            );
          })}
        </HStack>
      </Center>
    </VStack>
  );
}
