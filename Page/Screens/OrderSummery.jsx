import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Header from '../ReusableComponent/Header'
import ChangePassword from '../SmallComponent/ChangePassword'
import CartProduct from '../SmallComponent/CartProduct'
import ProductDetail from '../SmallComponent/ProductDetail'
import OrderSummeryFooter from '../SmallComponent/OrderSummeryFooter'

const OrderSummery = () => {
  return (
      <>
 <View>
    <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Text style={styles.mycart}>Order Summery</Text>
          <ChangePassword />
          <CartProduct />
          <ProductDetail/>
      </ScrollView>
      
       </View>
<OrderSummeryFooter/>
      </>
  )
}

const styles = StyleSheet.create({
    mycart: {
        fontSize: 16,
        padding: 10,
        backgroundColor: "white",
        textTransform: "capitalize"
}

})
export default OrderSummery