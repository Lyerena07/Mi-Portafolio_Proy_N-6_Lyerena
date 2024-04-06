import React from 'react'
import "../assets/css/main.css"
import Imagen0 from "../assets/images/pic00.jpg"
import Imagen1petty from "../assets/images/Imagen1petty.jpg"
import Pettyimg from "../assets/images/Pettyimg.png"
//import CoinApi1 from "../assets/images/CoinApi1.png"
import AppTipico from "../assets/images/AppTipico.jpg"
import ComElec from "../assets/images/ComElec.jpg"
import MiPort from "../assets/images/MiPort.jpg"


const HomePage = () => {
  return (
    <>
			<div>
  <nav id="nav">
    <ul className="container">
      <li><a href="#top">Top</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <article id="top" className="wrapper style1">
    <div className="container">
      <div className="row">
        <div className="col-4 col-5-large col-12-medium">
          <span className="image fit"><img src={Imagen0} alt /></span>
        </div>
        <div className="col-8 col-7-large col-12-medium">
          <header>
            <h1>Hola. Mi Nombre es <strong>Linda L Yerena Perez</strong>.</h1>
          </header>
          <p>este es <strong>Mi perfil profesional</strong> donde prodran conocer todo lo relacionacion a mi trabajo y habilidades como desarrollador Full Stack <a href="http://twitter.com/ajlkn"></a>  <a href="http://html5up.net"></a><a href="http://html5up.net/license"></a>.</p>
          <a href="#work" className="button large scrolly">Conoce todo sobre mi trabajo!</a>
        </div>
      </div>
    </div>
  </article>
  
  <article id="work" className="wrapper style2">
    <div className="container">
      <header>
        <h2>Mis Habilidades </h2>
        <p>¡Lo perfecto es enemigo de lo bueno!</p>
      </header>
      <div className="row aln-center">
        <div className="col-4 col-6-medium col-12-small">
          <section className="box style1">
            <span className="icon featured fa-comments" />
            <h3>Trabajo en Equipo </h3>
            <p>En el universo de la ingeniería de software, la colaboración es el combustible que impulsa el progreso.</p>
          </section>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <section className="box style1">
            <span className="icon solid featured fa-camera-retro" />
            <h3>Aprender y Crecer </h3>
            <p>El conocimiento compartido se convierte en tesoro colectivo, que impulsa el crecimiento profesional y personal.</p>
          </section>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <section className="box style1">
            <span className="icon featured fa-thumbs-up" />
            <h3>Resciliencia </h3>
            <p>La resolución de problemas se vuelve accesible cuando se enfrentan desde diferentes ángulos, y es así como se construyen soluciones  innovadoras.</p>
          </section>
        </div>
      </div>
      <footer>
        <p>¿Es la satisfacción del cliente la primera prioridad?</p>
        <a href="#portfolio" className="button large scrolly">Ver algunos de mis trabajos recientes</a>
      </footer>
    </div>
  </article>

  <article id="portfolio" className="wrapper style3">
    <div className="container">
      <header>
        <h2>Aqui mis proyectos creados segun requerimientos y temas vistos en la Ucamp!</h2>
        <p>Frontened:Html5,css,JavaScript,React,Apis.- Backend: Node con ExpressJS - Base de datos: MongoDB </p>
      </header>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src={Imagen1petty} alt /></a>
            <h3><a href="#">Proyecto #1 -Landing de Negocio PETTY </a></h3>
            <p>Enfocado en construir una página "landing" para vender servicios de belleza a domicilio.</p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src={Pettyimg } alt /></a>
            <h3><a href="#"> Proyecto #2 - Aplicación CRUD</a></h3>
            <p>desarrolló una aplicación con operaciones CRUD.
            AGREGAR,LEER,EDITAR,ELIMINAR.
            </p>
          </article>
        </div>
        <div classname="col-4 col-6-medium col-12-small">
          <article className="box style2">
           <h3><a href="#"> Proyecto #3 - Tablero de Datos "Dashboard"</a></h3>
            <p>aplicación que consuma una API.
            Crear un ambiente de desarrollo con Node.js
            Conocer el funcionamiento de las APIs
            Aplicar procesos síncronos y asíncronos en JavaScript
            </p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src={AppTipico} alt /></a>
            <h3><a href="#">Proyecto #4 - Aplicación "Restaurante"</a></h3>
            <p>Este proyecto está enfocado en construir una aplicación web para un restaurante.
          </p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src={ComElec} alt /></a>
            <h3><a href="#">Proyecto #5 - Aplicación de Comercio Electrónico</a></h3>
            <p>proyecto  enfocado en construir una aplicación de eCommerce..</p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src={MiPort} alt /></a>
            <h3><a href="#">Proyecto #6-Portafolio</a></h3>
            <p> Este proyecto consta de la construcción de tu perfil profesional con respecto a todo lo que aprendiste.</p>
          </article>
        </div>
      </div>
      <footer>
        <p>¿Es la satisfacción del cliente la primera prioridad?</p>
        <a href="#contact" className="button large scrolly">Ponte en contacto con migo</a>
      </footer>
    </div>
  </article>
  
  <article id="contact" className="wrapper style4">
    <div className="container medium">
      <header>
        <h2>Que mas te gustaria saber de mi?.</h2>
        <p>La resciliencia es la clave del exito.</p>
      </header>
      <div className="row">
        <div className="col-12">
          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-small">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-small">
                <input type="text" name="email" id="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <input type="text" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" defaultValue="Send Message" /></li>
                  <li><input type="reset" defaultValue="Clear Form" className="alt" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12">
          <hr />
          <h3>Find me on ...</h3>
          <ul className="social">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
            <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon brands fa-instagram"><span>Instagram</span></a></li>
          
          </ul>
          <hr />
        </div>
      </div>
      <footer>
        <ul id="copyright">
          <li>© Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>
    </div>
  </article>
</div>


    </>
		

		
	
  )
};

export default HomePage;