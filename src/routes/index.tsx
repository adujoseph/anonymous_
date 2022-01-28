import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './StackRoutes/index';
import {navigationRef} from '../../rootNavigation';

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;
