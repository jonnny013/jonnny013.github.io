export const ChildComponent = (props) => {
  return (
    <>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </>
  );
};
