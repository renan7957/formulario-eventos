import './index.scss';

export default function Formulario() {

    function Mudou(e) {
        let valor = e.target.value;
        alert("Seu departamento é: " + valor);
    }

    function Passou() {
        alert("passou o mouse por cima do botão!!");
    }

    function Clicou(){
        alert("O usuario foi cadastrado!!")
    }

    function Clicou2(){
        alert("O formulario foi limpo!!")
    }

    function Clicou3(){
        alert("O Formulario foi enviado com sucesso!!")
    }


    return (

        <div className='pagina-formulario'>

            <div className="container">



                <h1>Cadastro de Funcionario</h1>



                <div className='campos'>
                    <h2>Nome do funcionário</h2>
                    <input type='text' placeholder='Escreva aqui' />
                </div>



                <div className='campos2'>
                    <h2>Departamento</h2>
                    <select onChange={Mudou}>
                        <option >selecione</option>
                        <option value="RH">RH </option>
                        <option value="TI">TI</option>
                        <option value="ADM">ADM</option>
                        <option value="FINANCEIRO">Financeiro</option>
                    </select>
                </div>



                <div className="campos3">
                    <h2>Tipo de Funcionario</h2>
                    <div className="opcoes">
                        <label>
                            <input type="radio" name="opcao" />
                            Temporario
                        </label>

                        <label>
                            <input type="radio" name="opcao" />
                            Efetivo
                        </label>

                        <label>
                            <input type="radio" name="opcao" />
                            Estagiario
                        </label>

                        <label>
                            <input type="radio" name="opcao" />
                            Jovem Aprendiz
                        </label>
                    </div>
                </div>




                <div className="campos4">
                    <p onMouseMove={Passou}>
                        Passe o mouse por cima
                    </p>
                </div>




                <div className='campos5'>

                    <button onClick={Clicou}>
                        Cadastrar o Funcionario
                    </button>

                    <button onClick={Clicou2}>
                        Limpar
                    </button>

                    <button onClick={Clicou3}>
                        Enviar o formulario
                    </button>

                </div>

            </div>

        </div>
    );
}