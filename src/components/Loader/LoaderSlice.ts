import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";

interface LoaderState {
  loaderMap: { [key: string]: boolean };
}

const initialState: LoaderState = {
  loaderMap: {},
};

export const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    setLoader: (
      state,
      action: PayloadAction<{ scope: string; isLoading: boolean }>
    ) => {
      state.loaderMap[action.payload.scope] = action.payload.isLoading;
    },
  },
});

export const { setLoader } = loaderSlice.actions;

export const selectLoadingScope = (state: RootState) => state.loading.loaderMap;

export default loaderSlice.reducer;
