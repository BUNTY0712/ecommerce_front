import { View, Text , Image, StyleSheet} from 'react-native'
import fashion from "../../Page/assets/fashion.png";
import React from 'react'
import { getImgUrl, getRating, getRatingBuyNow } from '../utils/helper';
import { useSelector } from 'react-redux';

const ShowImage = () => {
    const { singledata } = useSelector((state) => state.ui)

    
    console.log("singledata", singledata)
    if (!singledata || typeof singledata !== 'object') {
        return <Text>No Data</Text>;
    }
  return (
      <View style={styles.container}>
         
         <View>
                <Image style={styles.imgstyle} source={{uri: getImgUrl(singledata.productImg)}} />
                <Text style={styles.prodtittle}>{singledata.productTitle}</Text>
                <View style={styles.ratingDetails}>
                    <View>{getRatingBuyNow(3.6)}</View>
                    <Text style={styles.ratingcolor}>{singledata.productRating}</Text>
                    <Text style={styles.reviewcolor}>Very Good</Text>
                    <Text style={styles.ratingcolor}>{singledata.productRatingCount} ratings</Text>
                </View>
                <Text style={styles.assured}>Assured By Amazon</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>₹ {singledata.productDiscountPrice}</Text>
                    <Text style={styles.mrp}>M.R.P</Text>
                    <Text style={styles.crossout}>₹ {singledata.productActualPrice}</Text>
                </View>
                <Text style={styles.cashback}>Up to 5% cashback with Amazon Pay Credit card</Text>
                <Text style={styles.cashback}>Free Delivery by 24 Aug {singledata.productDeliveryBy}</Text>
            </View>
         
          <View style={styles.allDetailsContainer}><Text style={styles.alldetails}>All Details </Text>
              <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Product Name : </Text>

                  <Text style={styles.allDetailsName}> Kurti </Text>
              </View>
              

               <View style={styles.row}>
                  <Text style={styles.allDetailsContent}>Product Category : </Text>

                  <Text style={styles.allDetailsName}> Clothes </Text>
          </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    padding: 15
    },
    imgstyle: {
        height: 450,
        width: "100%"
    },
    prodtittle: {
        fontSize: 15,
    marginTop: 10
    },
    ratingDetails: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "center",
        gap: 5
    },
    reviewcolor: {
        color: "green",
        fontSize: 12
    },
    ratingcolor: {
        color: "purple"
    },
    assured: {
        marginTop: 2,
        fontSize: 13
    },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    },
      price: {
    fontSize: 16,
    color: '#000000',
    },
      mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
    },
      crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
    },
      cashback: {
    fontSize: 9,
    marginVertical: 2,
    },
    allDetailsContainer: {
        marginTop: 10,
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
    }
})

export default ShowImage