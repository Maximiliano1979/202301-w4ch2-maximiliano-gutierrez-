import Error from "./components/Error/Error";
import Form from "./components/Form/Form";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Form />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img
            src="https://img2.rtve.es/v/5950795?w=1600"
            className="gif"
            width="300"
            height="400"
            alt="Diego Maradona"
          />
        </div>
      </div>
      <div className="row">
        <Error />
      </div>
    </div>
  );
};

export default App;
