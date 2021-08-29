import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import safeSliceReduer from "../store/features/safe/safeSlice";

// const initStore = configureStore({ reducer: { safe: safeSliceReduer } });

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const setup = (
  renderType,
  Component,
  withWrapper = false,
  props,
  store
) => {
  if (!withWrapper) {
    return renderType(<Component {...props} />);
  } else {
    const Wrapper = ({ children }) => {
      return <Provider store={store}>{children}</Provider>;
    };
  }
};
