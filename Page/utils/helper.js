import React from "react";
import { View, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import {
  setAllProduct,
  setCategoryProduct,
  setEmailData,
} from "../../Reducers/UiReducer";
import { useNavigation } from "@react-navigation/native";

const getallproducturl =
  "http://192.168.29.107:8080/api/v1/product/getallproduct";
const getcategoryproducturl =
  "http://192.168.29.107:8080/api/v1/product/getcategoryproduct";

const getproducttittleurl =
  "http://192.168.29.107:8080/api/v1/product/getproducttittle";

const serviceID = "service_yt1a8ee";
const templateID = "template_q2b2fsc";
const publicKey = "9rznymiAa76cUckWm"; // Use your EmailJS public key

export const sendEmail = async (emailData, dispatch, navigation) => {
  if (!emailData.name || !emailData.email || !emailData.message) {
    Alert.alert("Error", "Please fill in all fields");
    return;
  }

  const templateParams = {
    from_name: emailData.name,
    from_email: emailData.email,
    message: emailData.message,
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );
    Alert.alert("Success", "Email sent successfully");
  } catch (error) {
    Alert.alert("Error", "Failed to send email. Please try again later.");
    console.error("Email sending error: ", error);
  }
};

export const getRating = (rating) => {
  const ratingStar = [];
  const fullStar = <FontAwesome name="star" size={10} color="#ffa41c" />;
  const halfStar = (
    <FontAwesome name="star-half-empty" size={10} color="#ffa41c" />
  );
  const emptyStar = <FontAwesome name="star-o" size={10} color="#ffa41c" />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(<React.Fragment key={i}>{fullStar}</React.Fragment>);
    } else {
      ratingStar.push(<React.Fragment key={i}>{emptyStar}</React.Fragment>);
    }
  }

  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = (
      <React.Fragment key="half">{halfStar}</React.Fragment>
    );
  }

  // Return a View to avoid placing array directly into JSX
  return <View style={{ flexDirection: "row" }}>{ratingStar}</View>;
};

export const getRatingBuyNow = (rating) => {
  const ratingStar = [];
  const fullStar = <FontAwesome name="star" size={13} color="green" />;
  const halfStar = (
    <FontAwesome name="star-half-empty" size={13} color="green" />
  );
  const emptyStar = <FontAwesome name="star-o" size={13} color="green" />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(<React.Fragment key={i}>{fullStar}</React.Fragment>);
    } else {
      ratingStar.push(<React.Fragment key={i}>{emptyStar}</React.Fragment>);
    }
  }

  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = (
      <React.Fragment key="half">{halfStar}</React.Fragment>
    );
  }

  // Return a View to avoid placing array directly into JSX
  return <View style={{ flexDirection: "row" }}>{ratingStar}</View>;
};

// by dispatch get
export const getallproducts = async (dispatch, navigation) => {
  try {
    const response = await axios.get(getallproducturl);
    const products = response.data;

    // Dispatch the action to set products in the Redux store
    dispatch(setAllProduct(products.data));

    // Navigate to the AllProductScreen
    if (products.data.length > 0) {
      navigation.navigate("AllProductScreen");
    }

    return products.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error for further handling if needed
  }
};

export const getallproductsathome = async (dispatch, navigation) => {
  try {
    const response = await axios.get(getallproducturl);
    const products = response.data;

    // Dispatch the action to set products in the Redux store
    dispatch(setAllProduct(products.data));

    // Navigate to the AllProductScreen
    // if (products.data.length > 0) {
    //   navigation.navigate("AllProductScreen");
    // }

    return products.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error for further handling if needed
  }
};

export const getcategoryproducts = async (dispatch, navigation, tittle) => {
  try {
    const response = await axios.post(getcategoryproducturl, { tittle });
    const categoryproduct = response.data;
    dispatch(setCategoryProduct(categoryproduct.data));
    navigation.navigate("ProductScreens");
    // if (categoryproduct.data.length > 0) {
    // }
    return categoryproduct.data;
  } catch (error) {
    dispatch(setCategoryProduct([]));
    navigation.navigate("ProductScreens");
    // console.error(
    //   "Error fetching products:",
    //   error.response ? error.response.data : error.message
    // );
  }
};

export const gettitleproducts = async (dispatch, navigation, tittle) => {
  try {
    const response = await axios.post(getproducttittleurl, {
      tittle,
    });
    const categoryproduct = response.data;
    dispatch(setCategoryProduct(categoryproduct.data));
    navigation.navigate("ProductScreens");
    // if (categoryproduct.data.length > 0) {
    // }
    return categoryproduct.data;
  } catch (error) {
    dispatch(setCategoryProduct([]));
    navigation.navigate("ProductScreens");
    // console.error(
    //   "Error fetching products:",
    //   error.response ? error.response.data : error.message
    // );
  }
};

// by useState get
// export const getallproducts = async (setProducts) => {
//   // const dispatch = useDispatch();
//   try {
//     const response = await axios.get(getallproducturl);
//     const products = response.data;
//     // dispatch(setAllProduct(products));
//     console.log("Fetched products:", products.data);
//     setProducts(products.data);
//     return products.data;
//   } catch (error) {
//     console.error(
//       "Error fetching products:",
//       error.response ? error.response.data : error.message
//     );
//     throw error; // Re-throw the error for further handling if needed
//   }
// };

export const getImgUrl = (image) => {
  return `http://192.168.29.107:8080${image}`;
};
