import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import EditAccount from './EditAccount';
import DeleteAccount from './DeleteAccount';
import ManageAccount from './ManageAccount';
import LinkedAccounts from './LinkedAccounts';
import ContactDetails from './ContactDetails';
import AccountSettings from './AccountSettings';
import RemoveFromGroup from './RemoveFromGroup';
import DeactivateAccount from './DeactivateAccount';
import EditProfilePicture from './EditProfilePicture';
import ContactList from './ContactList';

storiesOf('Accounts', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('EditAccount', () => <EditAccount />)
  .add('ManageAccount', () => <ManageAccount />)
  .add('DeleteAccount', () => <DeleteAccount />)
  .add('ContactDetails', () => <ContactDetails />)
  .add('LinkedAccounts', () => <LinkedAccounts />)
  .add('AccountSettings', () => <AccountSettings />)
  .add('RemoveFromGroup', () => <RemoveFromGroup />)
  .add('DeactivateAccount', () => <DeactivateAccount />)
  .add('ContactList', () => <ContactList />);

// .add('EditProfilePicture', () => <EditProfilePicture />);
