import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import  store  from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
 
  expect(logo[0].src).toBe("http://localhost/dummy.png");

  
});

test("Online status should show on rendering header", ()=>{
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const status = header.getByTestId("online");
  expect(status.innerHTML).toBe("✅");
});
