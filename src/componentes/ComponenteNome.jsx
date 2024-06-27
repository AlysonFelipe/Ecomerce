

import { useEffect, useState } from "react";

function ComponenteNome() {

    const [nome, setNome] = useState("SEU NOME");

    useEffect(() => {

        alert(`O alterado o nome para ${nome}`)
    }, [nome]
    )

    //Obervação: []esta com a variavel nome, para gerar evento quando alterar o nome 




    return (
        <div>
            <button onClick={() => setNome("Nosylla")}> Alterar Apelido</button>
            <button onClick={() => setNome("Alyson")}> Alterar Nome</button>


            <p>  nome:{nome} </p>

        </div>
    )
}

export { ComponenteNome };


