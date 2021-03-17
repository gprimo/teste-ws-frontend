import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function ListarNoticias(props) {
    const NOTICIAS_URL = 'https://localhost:44396/api/Noticias';
    const [noticias, setNoticias] = useState([]); 

    useEffect(() => {
        async function obterNoticias() {
            try {
                let { data } = await axios.get(NOTICIAS_URL);
                setNoticias(data);
            } catch (err) {
                setNoticias([]);
            }
        }

        obterNoticias();
    });

    return noticias.map(noticia =>
        <div id={noticia.id} className={props.class}>
            <Card>
                <Card.Body>
                    <Card.Header className='cardTitle'>{noticia.titulo}</Card.Header>
                    <Card.Text className='cardText lead'>
                        {noticia.texto}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


        //<div id={noticia.id} className={props.class}>
        //    <h1>{noticia.titulo}</h1>
        //    {noticia.texto}
        //</div>
    );
}


export default ListarNoticias;