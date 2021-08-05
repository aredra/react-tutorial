import { render, fireEvent, act } from "@testing-library/react";
import Button from "./Button";
describe("Button 컴포넌트 (@test-liberary/react)", () => {
  it("컴포넌트 생성 성공", () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });

  it("button 요소는 HTMLButtonElement 이다.", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("Click me");

    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it("버튼을 클릭하면 p 태그 내용이 Clicked 로 작성된다.", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    const p = getByText("Clicked");

    expect(p).not.toBe(null);
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하기 전에는 p 태그 내용이 - 로 작성된다.", () => {
    const { getByText } = render(<Button />);
    const p = getByText("-");

    expect(p).not.toBe(null);
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭 후 5초 후 p 태그 내용이 - 로 작성된다.", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("-");
    expect(p).not.toBe(null);
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼을 클릭하면 5초 간 버튼이 비활성화 된다.", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    expect(buttonElement).toBeDisabled();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(buttonElement).not.toBeDisabled();
  });
});
