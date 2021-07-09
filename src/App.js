export function App(props) {
  return (
    <>
      <div>User login: {props.loginValue}</div>
      <div>User password: {props.loginPassword}</div>
      <button onClick={props.logOut}>Log Out</button>
    </>
  );
}
