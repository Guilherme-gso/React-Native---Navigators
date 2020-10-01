import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Header, Image, UserName } from './styles';

const CustomDrawer = (props) => (
  <DrawerContentScrollView {...props}>
    <Header>
      <Image
        source={{ uri: "https://github.com/guilherme-gso.png" }}
      />
      <UserName>Guilherme Gonçalves</UserName>
    </Header>

    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default CustomDrawer;
