import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <ImageComponent
            imgName="https://images.unsplash.com/photo-1653819164599-2bc6a800990b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="Molo"
            customTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, rerum."
          />
          <ButtonComponent customTitle="TESTO BOTTONE" />
        </div>
      </div>
    </>
  );
}

export default App;
