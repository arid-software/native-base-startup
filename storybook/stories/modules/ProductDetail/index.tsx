import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import ProductScreen from './ProductScreen';
import ReviewPage from './ReviewPage';
import FullScreenProductPage from './FullScreenProductPage';
import SizeChart from './SizeChart';

storiesOf('ProductDetail', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('SizeChart', () => <SizeChart />)
  .add('ReviewPage', () => <ReviewPage />)
  .add('ProductScreen', () => <ProductScreen />)
  .add('FullScreenProductPage', () => <FullScreenProductPage />);
