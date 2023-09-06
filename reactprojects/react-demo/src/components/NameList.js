export const NameList = () => {
  const names = ["Bruce", "Clark", "Dianna"];

  return (
    <>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </>
  );
};
