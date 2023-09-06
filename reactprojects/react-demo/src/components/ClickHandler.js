export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("button click", count, event);
  };

  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </>
  );
};
