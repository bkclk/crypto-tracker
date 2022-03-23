import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cryptoReducer from "./cryptoReducer";
import coinReducer from "./coinReducer";

export default combineReducers({
  form: formReducer,
  crypto: cryptoReducer,
  coin: coinReducer,
});
