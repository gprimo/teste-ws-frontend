import React, { useState } from 'react';
import ListarNoticias from './listar-noticias';
import Button from 'react-bootstrap/Button';


function Noticias(props) {

  function render() {
    return <ListarNoticias class={props.class}/>;
  }

  return render();
}

export default Noticias;