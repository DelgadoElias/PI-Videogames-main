import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LandingPage from "./LandingPage"
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider><LandingPage/></Provider>);
  });

  it("deberia renderizar 3 componentes <Todos />", () => {
    expect(wrapper.find(Todos)).toHaveLength(3);
  });

  it('Un componente Todos deberia recibir como prop status con el valor "Todo"', () => {
    expect(wrapper.contains(<Todos status="Todo" />)).toEqual(true);
  });

  it('Un componente Todos deberia recibir como prop status con el valor "InProgress"', () => {
    expect(wrapper.contains(<Todos status="InProgress" />)).toEqual(true);
  });

  it('Un componente Todos deberia recibir como prop status con el valor "Done"', () => {
    expect(wrapper.contains(<Todos status="Done" />)).toEqual(true);
  });
});