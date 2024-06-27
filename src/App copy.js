//import logo from './logo.svg';
import './App.css';
import { ComponenteNome } from "./componentes/ComponenteNome";
import { ComponenteResumoSobreVoce } from "./componentes/ComponenteResumoSobreVoce";
import { ComponenteCompetencia } from "./componentes/ComponenteCompetencia";
import { ComponenteCandidato } from './componentes/ComponenteDeDadosCandidato';
import { ComponenteEndereco } from './componentes/ComponenteEndereco';
import { ComponenteFormacao } from './componentes/ComponenteFormacao';
import { ComponenteQualidade } from './componentes/ComponenteQualidade';





function App() {
  return (
    <div className="App">
      <p>BEM VINDO
      </p>
      <ComponenteNome>

      </ComponenteNome>
      <hr />
      <ComponenteResumoSobreVoce />

      <ComponenteResumoSobreVoce>
        Bem Vindo
      </ComponenteResumoSobreVoce>
      <div>
        <h1>  Lista de Competencias </h1>
        <ComponenteCompetencia nome="HTML" descricao=" Linguagem de marcacao" />
        <ComponenteCompetencia nome="CSS" descricao=" estilizacao da pagina" />
        <ComponenteCompetencia nome="js" descricao=" javascript " informacoes="funçoesbasicas" />
      </div>




    </div>



  );
}

export default App;



