import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LandingPage from "./LandingPage"
import { BrowserRouter } from "react-router-dom";
import { render } from "../../../api/src/app";

configure({ adapter: new Adapter() });

describe("<Landing />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<BrowserRouter><LandingPage/></BrowserRouter>);
  });

  it("Debería renderizar un button <Todos />", () => {
    expect(wrapper.find('.button-landing')).toHaveLength(1);
  });

});