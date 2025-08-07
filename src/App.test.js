import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store"; // store dosyanın doğru yolu olduğundan emin ol
import App from "./App";

test("Ekranda Karadutlu dondurma başlığı var", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const heading = screen.getByRole("heading", { name: /karadutlu dondurma/i });
  expect(heading).toBeInTheDocument();
});
