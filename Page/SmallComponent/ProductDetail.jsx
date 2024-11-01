import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProductDetail = () => {
  return (
      <>
          <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.allDetailsContainer}><Text style={styles.alldetails}>Price Details </Text>
              <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Price : </Text>

                  <Text style={styles.allDetailsName}> ₹ 1,299 </Text>
              </View>
              

               <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Discount : </Text>

                  <Text style={styles.allDetailsName}> -₹500 </Text>
              </View>
              

              <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Platform Fee : </Text>

                  <Text style={styles.allDetailsName}> ₹3 </Text>
              </View>
              
               <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Delivery Charges : </Text>
                  <View style={styles.row}>
                      <Text style={styles.allDetailsName}> ₹3 </Text>
                  <Text style={styles.allDetailsName}> Free Delivery </Text>
                      
                  </View>
              </View>
              
              <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Total Amount : </Text>
                      <Text style={styles.allDetailsName}> ₹3000 </Text>
              </View>
          </View>
          <View style={styles.paymentRow}>
        <MaterialCommunityIcons name="security" color="grey" size={23} />
        <Text style={styles.safe}> Safe and secure payments. Easy returns. 100% Authentic products.</Text>
              </View>
                </ScrollView>
      </>
  )
}

const styles = StyleSheet.create({
     row: {
        flexDirection: 'row',
         justifyContent: "space-between",
    alignItems: 'center',
        marginTop: 5,
    
    
    },
    paymentRow: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 90,
        alignItems: "center",
        justifyContent: "center"
    },
    allDetailsContainer: {
        marginTop: 10,
        backgroundColor: "white",
        elevation: 5,
        margin: 10,
        padding: 10
    },
    alldetails: {
        fontSize: 15,
        fontWeight: "400",
         borderBottomWidth: 1,
        borderBottomColor: "#ebebeb",
        paddingBottom: 10
        
    },
    allDetailsContent: {
        fontSize: 14,
        fontWeight: "400"
    },
    allDetailsName: {
        fontSize: 13
    },
    paymentrow: {
        flexDirection: "row"
    },
    safe: {
        paddingLeft: 5,
        fontSize: 10
    }
})
export default ProductDetail