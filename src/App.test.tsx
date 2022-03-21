import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import CountryDetails from "./components/CountryDetails";
import DetailsWeather from "./components/DetailsWeather";
import CountryOutput from "./components/CountryOutput";


describe("Sample", () => {
  test("expecting to be true", ()=> {
    const isCo = true;
    expect (isCo).toBe(true);
  });
});

describe("test on Form component", () => {
  test("test to find existence of button", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});

describe("test on Forme component", () => {
  test("finding placeHolder text inside Form component", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );

    const text = screen.getByPlaceholderText(/Enter Country/);
    expect(text).toBeInTheDocument();
  });
});

describe("test on form component", () => {
  test("test to find number of textbox element", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(1);
  });
});

describe("test on DetailsWeather component", () => {
  test("rendering DetailsWeather component", () => {
    render(
      <BrowserRouter>
        <DetailsWeather></DetailsWeather>
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryOutput component", () => {
  test("rendering CountryOutput component", () => {
    render(
      <BrowserRouter>
        <CountryOutput></CountryOutput>
      </BrowserRouter>
    );
    screen.debug();
  });
});