import Header from '../../components/Header/Header';
import Casa from '../../data/Casa.json';
import CarouselC from "../../components/Carousel/CarouselC";
import PriceCard from "../../components/PriceCard/PriceCard";
import Footer from '../../components/Footer/Footer';


function Description() {
  return (
    <>
        <Header logged={true}/>
        <div className="content-section">
            <div className="wrapper">
                <div className="house-desc">
                  <div className="house-title">
                    <h2 style={{fontSize:"2rem"}}>{Casa.titulo}</h2>
                    <p style={{fontSize:"1.5rem"}}>{Casa.barrio}</p>
                  </div>
                  <div className="house-photos">     
                    <CarouselC/>
                  </div>
                  <div className="house-data-grid">
                    <div className="grid-el house-description">
                      <div className="house-caracter">
                        <h2>Características</h2>
                        <ul>
                        {Casa.caracteristicas.map((caracteristica,index)=>(
                          <li key={index}>{caracteristica.nombre}: {caracteristica.valor}</li>
                        ))}
                        </ul>
                      </div>
                      <h2>Descripción</h2>
                      <p>{Casa.descripcion}</p>
                      <div className="house-adicionales">
                        <h2>Adicionales</h2>
                        <ul>
                        {Casa.adicionales.map((caracteristica,index)=>(
                          <li key={index}>🟩{caracteristica}</li>
                        ))}
                        </ul>
                      </div>
                    </div>
                    <div className="house-price grid-el">
                        <PriceCard/>
                    </div>
                  </div>
              </div>

            </div>

        </div>
        <Footer/>
    </>
  )
}

export default Description