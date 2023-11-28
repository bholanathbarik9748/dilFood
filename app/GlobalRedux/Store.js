'use client';

const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('./Cart/CartSlice').default;

const store = configureStore({
    reducer: {
        Cart: counterReducer
    }
});

const RootState = store.getState;
const AppDispatch = store.dispatch;

module.exports = {
    store,
    RootState,
    AppDispatch
};
