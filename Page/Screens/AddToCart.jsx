import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Header from '../ReusableComponent/Header'
import CartProduct from '../SmallComponent/CartProduct'
import CartFooter from '../SmallComponent/CartFooter'

const AddToCart = () => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Text style={styles.mycart}>My Cart</Text>
          <CartProduct/>

      </ScrollView>
      <CartFooter/>
       </View>
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
export default AddToCart