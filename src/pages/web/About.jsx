import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About | UCI International</title>
      </Helmet>
      <h1 className="text-3xl font-bold underline">About us</h1>
      <p className="text-left">Lorem ipsum is dolor sit amet</p>
    </>
  );
}

export default About;
