import React, { useState } from 'react';
import './prova.css';
import Noticias from './components/noticias/noticias'
import Login from './components/login/login'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


class Prova extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: 'hidden',
      auth: 'hidden'
    };    
  }

  news() {
    this.setState({
      news: 'news'
    });
  }

  auth() {
    this.setState({
      auth: 'auth'
    });
  }

  render() {
    return (
      <Container fluid="xl" className = "container">
        <h1 class="custom-h1">Seja bem vindo</h1>
        <p1 class="lead">Acesse os endpoints da API através dos botões abaixo</p1>
        <Row className = "row">
          <Col>
          <Noticias class={this.state.news} id={this.state.news}/>
          <Button id='showNews' size="lg" onClick={() => this.news()} className="btn-clear">Endpoint de Notícias</Button>
          </Col>
        </Row>
        <Row className = "row">
          <Col>
          <Login class={this.state.auth} id={this.state.auth}/>
          <Button id='auth' size="lg" onClick={() => this.auth()}>Login</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Prova;
