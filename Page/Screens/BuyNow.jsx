import { View, Text,ScrollView } from 'react-native';
import fashion from "../../Page/assets/fashion.png";
import React from 'react'
import Header from '../ReusableComponent/Header';
import ShowImage from '../SmallComponent/ShowImage';
import ChangePassword from '../SmallComponent/ChangePassword';
import BuyNowFooter from '../SmallComponent/BuyNowFooter';
import Services from '../SmallComponent/Services';
import SimilarProduct from '../SmallComponent/SimilarProduct';

const BuyNow = () => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <ShowImage />
        <ChangePassword />
      <SimilarProduct/>
      {/* <Text>BuyNow</Text> */}
      </ScrollView>
      <BuyNowFooter/>
          </View>
  )
}

export default BuyNow