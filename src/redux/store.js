import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
