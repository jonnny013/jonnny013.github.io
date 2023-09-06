export const UserGreeting = () => {
  const isLoggedIn = false;
  return <div>Welcome {isLoggedIn && "Jon"}</div>;
};
