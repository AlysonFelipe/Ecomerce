//import logo from './logo.svg';
import "font-awesome/css/font-awesome.css";
import './App.css';
import { RouteApp } from './route';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrinhoContextProvider from "./hooks/CarrinhoContext";



function App() {
  return (
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;



