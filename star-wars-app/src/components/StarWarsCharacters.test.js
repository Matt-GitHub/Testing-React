import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData as mockGetData } from "../api";
import StarWarsCharacters from "./StarWarsCharacters";
jest.mock("../api");
test("does this work", async () => {
  mockGetData.mockResolvedValueOnce({
    results: [
      {
        name: "Luke Skywalker",
        url: "test"
      }
    ]
  });
  const { getAllByText } = render(<StarWarsCharacters />);
  // Click button

  expect(mockGetData).toHaveBeenCalledTimes(1);
  //   expect(mockGetData).toHaveBeenCalledWith(url);
  // Wait for page to update with query text

  // fireEvent.click(getByTestId('nextP'));
  // console.log(getAllByText("Luke"));
  await wait(() => expect(getAllByText(/luke/gi)));
});
