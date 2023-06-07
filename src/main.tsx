import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./redux/store";

import { App } from "./App";

import { AlertProvider } from "./context/AlertContext";
import { LoaderProvider } from "./context/LoaderContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </AlertProvider>
    </Provider>
  </BrowserRouter>
);
