import React, { Component } from 'react';
import './Main.css';



export default class Main extends Component {

  //definindo as propriedades de instacia e o estado da classe
  state = {
    novatarefa: '',
    listatarefas: [],
    index: -1,
  };

  handleSubmit=(e)=>{
    e.preventDefault();


    //desestruturando as variaveis :EXTRANDO DO THIS.STATE E CRIANDO VARIAVEIS INDEPENDETES  P USAR
    const { novatarefa, listatarefas,index } = this.state;

    //index -1 indica que o item n existe
    if(index===-1 && novatarefa.trim()!==''){

    this.setState({
        listatarefas:[...listatarefas,novatarefa],
        //setando a lista , minha lista de tarefas vai copiar a 'listatarefas' mais a 'novatarefa'
        novatarefa:'',//depois seto como '' para o input n ficar com um valor fixado

    })
}
else{
    //caso exista eu apenas atualizo a lista
    const updatedList = [...this.state.listatarefas]; //
    updatedList[index] = novatarefa;

    this.setState({
      listatarefas: updatedList,
      novatarefa: '',//limpo o valor da tarefa
      index: -1, //seto novamente com -1 o index
    });
}

  }

  handleDelete = (index) => {
    const { listatarefas } = this.state;
    const novastarefas = [...listatarefas];
    novastarefas.splice(index,1)

    this.setState({
    listatarefas:novastarefas,
    });

  }

  handleEdit = (index) =>{
    const { listatarefas } = this.state;

    this.setState({
       novatarefa:listatarefas[index] || '',
       index,
    })

  }

handleChange =(e) =>{
this.setState({
   novatarefa:e.target.value, //atualizando o estado da novatarefa
})
}
//OBS : O onChange é um evento no elemento de formulário (no caso, o input)
 //que é acionado sempre que o valor do input é alterado pelo usuário.

 render(){

   const { novatarefa,listatarefas} = this.state

return(
    <div className="main">
    <h1>Minha Lista de Tarefas</h1>
    <section>
    <form className="form" onSubmit={this.handleSubmit}>
    <div  className="div-send">
    <label >Tarefa</label>
    <input  type="text" onChange={this.handleChange} value={novatarefa}/>
    <button >send</button>
  </div>
    </form>
    <ul  className="tarefas">
     {listatarefas.map((tarefa,index)=>
     <li key={tarefa}>{tarefa}
     <span>
     <button className="dlt" onClick={()=>this.handleDelete(index)}>delete</button>
     <button className="edit" onClick={()=>this.handleEdit(index)}>edit</button>
     </span>
     </li>)}
    </ul>
    </section>
    </div>
)
 }
}
