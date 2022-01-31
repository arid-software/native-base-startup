import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';

import Cart from './Cart';
import TrackOrders from './TrackOrders';
import MyOrders from '../Catalog/MyOrders';
import DeliveryDetails from './DeliveryDetails';
import ProductCatalogue from './ProductCatalogue';
import ReturnOrder from './ReturnOrder';
import Wishlist from './Wishlist';
import Refund from './Refund';
import RequestCancellationMultipleProductsOptions from './RequestCancellationMultipleProductsOptions';
import RequestCancellationMultipleProductsSuccess from './RequestCancellationMultipleProductsSuccess';

import PhotoLibraryTwo from './PhotoLibraryTwo';
storiesOf('Catalog', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Cart', () => <Cart />)
  .add('MyOrders', () => <MyOrders />)
  .add('TrackOrders', () => <TrackOrders />)
  .add('DeliveryDetails', () => <DeliveryDetails />)
  .add('ProductCatalogue', () => <ProductCatalogue />)
  .add('PhotoLibraryTwo', () => <PhotoLibraryTwo />)
  .add('Wishlist', () => <Wishlist />)
  .add('Refund', () => <Refund />)
  .add('ReturnOrder', () => <ReturnOrder />)
  .add('RequestCancellationMultipleProductsOptions', () => (
    <RequestCancellationMultipleProductsOptions />
  ))
  .add('RequestCancellationMultipleProductsSuccess', () => (
    <RequestCancellationMultipleProductsSuccess />
  ));
