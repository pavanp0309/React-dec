import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from '../services/todo'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoApi.reducerPath]:todoApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

