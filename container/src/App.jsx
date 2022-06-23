import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
const AmazonPayApp = lazy(() => import('amazonPay/amazonPayApp'));
const AmazonShopApp = lazy(() => import('amazonShop/amazonShopApp'));
import AmazonHome from "./pages/Home";
import history from "./utils/history";
import "./index.css";
const App = () => (
    <BrowserRouter history={history}>
      <Suspense fallback={() => <div>Progress...</div>}>
       <Switch>
        <Route path="/amazon-pay" component={AmazonPayApp} />
        <Route path="/amazon-shop" component={AmazonShopApp} />
        <Route exact path="/" component={AmazonHome} />
      </Switch>
      </Suspense>
    </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
