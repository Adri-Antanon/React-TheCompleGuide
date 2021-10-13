const DemoOutput = ({ show }) => {
  console.log("DemoOutput");
  return <p>{show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
