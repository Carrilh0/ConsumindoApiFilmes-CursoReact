import React, {Component} from 'react';
import { Container, ListaFilmes, Filme, Acessar, NomeFilme, Capa} from './style';
import { HashLink } from 'react-router-hash-link';
class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
        filmes: []
    }

    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount(){
    this.loadFilmes();
  }

  loadFilmes(){
    // Url da API
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'

    fetch(url)
    .then((r) => r.json())
    .then((json) => {
        this.setState({filmes: json});
        console.log(json);
    });
  }

  render(){
    return(
      <Container>
          {
                this.state.filmes.map((filme) =>{
                  return(
                    <div>
                      
                      <HashLink smooth to={`#${filme.nome}`} className="venom">{filme.nome}</HashLink>

                    </div>
                  );
                })
              }
          <ListaFilmes>
              {
                this.state.filmes.map((filme) =>{
                  return(
                    <Filme key={filme.id} id={filme.nome} className="filme">
                        <NomeFilme>{filme.nome} </NomeFilme>
                        <Capa src={filme.foto} alt="Capa"/>
                        <Acessar to={`filme/${filme.id}`}>Acessar</Acessar>
                        
                    </Filme>
                  );
                })
              }
          </ListaFilmes>
      </Container>
    );
  }
}

export default Home;