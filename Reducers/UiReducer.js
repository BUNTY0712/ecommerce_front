import { createSlice } from "@reduxjs/toolkit";

const UiReducer = createSlice({
  name: "ui",
  initialState: {
    id: null,
    newId: null,
    senderId: "1",
    receiverId: "3",
    allchat: [],
    allproduct: null,
    categoryproduct: null,
    chooseImage: null,
    newdata: null,
    singledata: null,
    cartitems: null,
    bill: null,
    tittle: null,
    loading: false,
    emailData: {
      name: null,
      email: null,
      message: null,
    },
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setTittle(state, action) {
      state.tittle = action.payload;
    },
    setEmailData(state, action) {
      state.emailData = action.payload;
    },

    setBill(state, action) {
      state.bill = action.payload;
    },
    setCartItems(state, action) {
      state.cartitems = action.payload;
    },
    setSingleData(state, action) {
      state.singledata = action.payload;
    },
    setCategoryProduct(state, action) {
      state.categoryproduct = action.payload;
    },
    setNew(state, action) {
      state.newdata = action.payload;
    },
    setAllProduct(state, action) {
      state.allproduct = action.payload;
    },
    setChooseImage(state, action) {
      state.chooseImage = action.payload;
    },
    setAllChat(state, action) {
      state.allchat = action.payload;
    },
    setNewId(state, action) {
      state.newId = action.payload;
    },
    setSenderId(state, action) {
      state.senderId = action.payload;
    },
    setReceiverId(state, action) {
      state.receiverId = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const { actions, reducer } = UiReducer;
export const {
  setId,
  setNewId,
  setSenderId,
  setReceiverId,
  setAllChat,
  setChooseImage,
  setAllProduct,
  setNew,
  setCategoryProduct,
  setSingleData,
  setCartItems,
  setBill,
  setEmailData,
  setLoading,
  setTittle,
} = actions;
export default reducer;
