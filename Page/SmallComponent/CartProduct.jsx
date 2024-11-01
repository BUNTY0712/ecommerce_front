import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import fashion from "../../Page/assets/fashion.png";
import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl, getRatingBuyNow } from '../utils/helper';
import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { setBill, setCartItems } from '../../Reducers/UiReducer';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const CartProduct = () => {
    const { singledata, cartitems } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [incr, setIncr] = useState("1");
    //   console.log("cartitems", cartitems[0].product.productTitle)
    const [selectedQuantity, setSelectedQuantity] = useState("1");
    const [items, setItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' }
    ]);

    const [cartData, setCartData] = useState([]);
const [totalBill, setTotalBill] = useState(0);

useEffect(() => {
    // Update cartData whenever cartitems changes
    setCartData(cartitems);

    // Calculate the total bill
    const bill = cartitems.reduce((acc, item) => {
        return acc + parseFloat(item.product.productDiscountPrice);
    }, 0);

    // Set the total bill state
    setTotalBill(bill);
    dispatch(setBill(bill));
    console.log("Total Bill:", bill);
}, [cartitems]);

        const  userId = "66d81f001f97f3da6aed1b4b" 

    if (!singledata || typeof singledata !== 'object') {
        return <Text>No Data Available</Text>; // Safeguard if singledata is undefined or not an object
    }

    const handleAdd = async () => {
        await setIncr((prev) => prev + 1)
    }

    const handleSub = async () => {
        if (incr > 0) {
          await setIncr((prev) => prev - 1)
        }
    }

  const handleRemoveFromCart = async (productId) => {
    try {
        const response = await fetch("http://192.168.29.107:8080/api/v1/cart/removefromcart", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId, userId: "66d81f001f97f3da6aed1b4b" }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Product removed successfully", data);
          dispatch(setCartItems(data.cartItems)); // Assuming data contains cart items
            setCartData(data.cartItems)
        } else {
            console.error("Error removing product", data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


    return (
        <>
            {cartData.length > 0 ? (
                cartData.map((items, i) => (
                    <View key={i} style={styles.cartContainer}>
                        <Text style={styles.topDiscount}>Top Discount</Text>

            <View>
            <View style={styles.mainrow}>
                <View>
                    <Image style={styles.ImgStyle} source={{uri: getImgUrl(items.product.productImg)}} />
                </View>
                <View>
                    <Text style={styles.prodtittle}>{items.product.productTitle}</Text>

                    <View style={styles.ratingDetails}>
                        <View>{getRatingBuyNow(3.6)}</View>
                        <Text style={styles.ratingcolor}>{items.product.productRating}</Text>
                    </View>

                    <View style={styles.ratingrow}>
                   

                        <Text style={styles.reviewcolor}>Very Good</Text>
                        <Text style={styles.ratingcolor}>{items.product.productRatingCount} ratings</Text>
                     
                    </View>

                    <View style={styles.ruppeerow}>
                        <Text style={styles.price}>₹ {items.product.productDiscountPrice}</Text>
                        <Text style={styles.mrp}>M.R.P</Text>
                        <Text style={styles.crossout}>₹ {items.product.productActualPrice}</Text>
                    </View>

                    <View style={styles.qtyrow}>
                        <Text>Qty</Text>
                        {/* <TouchableOpacity onPress={handleAdd}>
                        <Text style={styles.addbutton}>+</Text>
                        </TouchableOpacity> */}
                        <Text style={styles.addsubbutton}>{items.quantity}</Text>
                        {/* <TouchableOpacity onPress={handleSub}>
                            <Text style={styles.subbutton}>-</Text>
                            </TouchableOpacity> */}
                  </View>
                </View>
            </View>

            <View style={styles.removebuyrow} >
                <View style={styles.remove}>


              <TouchableOpacity onPress={() => handleRemoveFromCart(items._id)}>
    <Text> Remove </Text>
</TouchableOpacity>
                </View>

                <View style={styles.buynow}>


                <Text >Buy Now</Text>
                </View>
            
            </View>
                    </View>
                    </View>
                ))
            ) : (
                    <>
                        <View style={styles.emptycart}>
                            <View>
                            <Text> <MaterialCommunityIcons name="cart-variant" size={100} color="grey" /></Text>
                            <Text>Oops no items found </Text>
                            </View>
                        
                        </View>
                    </>
            )}
            </>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        elevation: 5,
    },
    mainrow: {
        flexDirection: "row"
    },
    ratingrow: {
        flexDirection: "row",
       alignItems: "center"
    },
    ruppeerow: {
        flexDirection: "row",
        alignItems: "center",
    },
    topDiscount: {
        color: "green",
        backgroundColor: "#6dc171ab",
        padding: 4,
        fontSize: 10,
        width: 70,
    },
    ImgStyle: {
        width: 120,
        margin: 10,
        height: 120
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
    ratingcolor: {
        color: "purple",
        fontSize: 10,
        marginLeft: 4
    },
    reviewcolor: {
        color: "green",
        fontSize: 12
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
    dropdownContainer: {
        marginTop: 10,
        flexDirection: "row"
    },
    dropdown: {
        width: 60,
        backgroundColor: '#fafafa',
        
    },
    dropdownInnerContainer: {
        backgroundColor: '#fafafa',
    },
    qtyrow: {
        flexDirection: "row",
        alignItems: "center"
    },
    addbutton: {
        marginHorizontal: 5
    },
    subbutton: {
        marginHorizontal: 5,
        fontSize: 22
    },
    addsubbutton: {
        paddingHorizontal: 3,
        fontSize: 12,
        alignItems: "center",
        paddingTop: 3
    },
    removebuyrow: {
        flexDirection: "row",

    },
    remove: {
        paddingHorizontal: 40,
        elevation: 1,
        paddingVertical: 5
        // borderWidth: 1,
        // borderColor: "grey"
        
    },
    buynow: {
         paddingHorizontal: 40,
        elevation: 1,
        paddingVertical: 5,
        //     borderWidth: 1,
        // borderColor: "grey",
        marginLeft: 10
    },
    emptycart: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    }
});

export default CartProduct;
