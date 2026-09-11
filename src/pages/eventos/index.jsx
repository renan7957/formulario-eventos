import './index.scss';

export default function Eventos() {

    function Mudou() {
        alert("mudou o valor do input");
    }

    function Passou() {
        alert("passou o mouse por cima do paragrafo");
    }

    function Clicou() {
        alert("clicou no botão");
    }

    function Digitou(e) {
     let digitado = e.target.value;

        alert("foi digitado:" + digitado);
    }


    return (

        <div className='Pagina-Eventos'>
            <div className="container">

                <h2>Renan Boyzao</h2>

                <p onMouseMove={Passou}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus sed ad adipisci architecto fuga nam ut saepe
                    necessitatibus ab nostrum omnis, repellat fugit alias
                    praesentium expedita minus culpa cupiditate numquam?
                </p>
                <input onChange={Digitou} type='text' placeholder="Digite algo..." />


                    <select onChange={Mudou}>
                        <option >selecione</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>


                <div className='opcoes'>
                    
                        <label>
                            <input onChange={Mudou} type="radio" />
                            Opção 1
                        </label>

                        <label>
                            <input onChange={Mudou} type="radio" />
                            Opção 2
                        </label>

                        <label>
                            <input onChange={Mudou} type="radio" />
                            Opção 3
                        </label>

                        <label>
                            <input onChange={Mudou} type="radio" />
                            Opção 4
                        </label>
                    
                </div>
                
                    <button onClick={Clicou}>Clique aqui</button>

            </div>

        </div>

    );
}