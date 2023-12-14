import {render} from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../Utils/store.js";
import {StaticRouter} from "react-router-dom/server"

test("Logo Should load on rendering header",()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>
    );
    console.log(header); 
})