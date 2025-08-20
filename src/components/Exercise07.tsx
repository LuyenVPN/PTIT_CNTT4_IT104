import React, { Component } from "react";

type Theme = "light" | "dark";
type Lang = "english" | "vietnamese";

type StateType = {
  theme: Theme;
  language: Lang;
};

export default class Exercise07 extends Component<unknown, StateType> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }

  toggle=() => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
      language: prev.language === "english" ? "vietnamese" : "english",
    }));
  };

  render() {
    const { theme, language } = this.state;
    const styles =
      theme === "light"
        ? {
            backgroundColor: "white",
            color: "black",
            padding: 10,
            border: "1px solid white",
          }
        : {
            backgroundColor: "black",
            color: "white",
            padding: 10,
            border: "1px solid black",
          };

    const themeText =
      theme === "light"
        ? language === "vietnamese"
          ? "Sang"
          : "Light"
        : language === "vietnamese"
        ? "Toi"
        : "Dark";

    const langText = language === "vietnamese" ? "Tieng Viet" : "English";

    return (
      <div style={styles}>
        <h2>Nen: {themeText}</h2>
        <h2>Ngon ngu: {langText}</h2>
        <button onClick={this.toggle}>Doi</button>
      </div>
    );
  }
}
