function ComponenteEndereco(props) {

    return (

        <div>
            <div> {props.rua}</div>
            <div> {props.bairro}</div>
            <div> {props.numero}</div>
            <div>{props.complemento}</div>

        </div>)

}

export { ComponenteEndereco };