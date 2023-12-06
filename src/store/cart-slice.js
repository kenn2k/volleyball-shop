import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //! в payload мы будем получать объект
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      //!Если в корзине нет ничего, то мы добавляем объект элементов с помощью метода push()
      //* если existingItem == undefined, то будет выполнятся if
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        //!Если у нас уже есть элементы в корзине, то мы обновляем то, что нам нужно, в нашем случае это количество товара и цена
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    removeFromCart(state, action) {
      //* в payload мы будем получать id
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        //*Получаем новый массив, в котором уже не будет элемента
        //?Получаем в новый массив все элементы, в котором не будет id
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
