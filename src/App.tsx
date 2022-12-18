import './App.css'
import companyLogo from './img/risologo-removebg-preview.png'
import mainPhoto from './img/riso-image-01.png';
import svgEcoHouse from './img/external-eco-house-ecology-fauzidea-detailed-outline-fauzidea.png'
import photo01 from './img/Screenshot from 2022-11-29 15-30-49.png'
import photo02 from './img/Screenshot from 2022-11-29 15-31-22.png'
import photo03 from './img/Screenshot from 2022-11-29 15-31-51.png'
import svg01 from './img/growing-plant.png'
import svg02 from './img/external-ecology-ecology-fauzidea-detailed-outline-fauzidea-3.png'
import svg03 from './img/external-ecology-plastic-pollution-photo3ideastudio-lineal-photo3ideastudio.png'

function App() {

  return (
    <div className="App">

      <header>
        <img className='logo-img' src={companyLogo} alt="Logotipo Risoflora"></img>
      </header>

      <div className='headline-section grid-display'>
        <div className='headline-paragraph'>
          <h1>Viveiro e Soluções Ambientais</h1>
          <div>
            <p>
              Fundada em 2020, a Risoflora é uma empresa especializada em viveiro florestal
              e consultoria ambiental, que vem ampliando seus serviços em busca de oferecer
              soluções práticas e sustentáveis às demandas ambientais de seus clientes.
            </p>
            <p>
              Contando com uma equipe técnica multidisciplinar, experiente e capacitada,
              buscamos, em cada projeto, atender nossos clientes de forma prática e eficiente,
              garantindo sua satisfação e a conformidade ambiental de seus empreendimentos,
              atuando sempre com profissionalismo, ética e responsabilidade.
            </p>
            <p>
              Venha conhecer nosso trabalho e serviços oferecidos para o seu empreendimento!
            </p>
          </div>
        </div>
        <img className='main-img' src={mainPhoto} alt="Inseto pousado sobre uma folha de planta"></img>
      </div>

      <div className='call-to-action-section grid-display'>
        <div className='form-card'>
          <form>
            <h2 className='set-gray'>Fale com a gente!</h2>
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className='div-label'>Name</label>
            </div>
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className='div-label'>Email</label>
            </div>
            <button className='button'>Peça um orçamento</button>
          </form>
        </div>
        <div className='svg-feature-card-address set-gray'>
          <div>
            <img className='svg-icon-address' src={svgEcoHouse}></img>
          </div>
          <label>Visite o viveiro</label>
          <p>Endereço: R. Rones Cândido Alves, nº190 - Morada dos Pássaros, Uberlândia - MG, 38406-301</p>
        </div>
      </div>

      <div className='activities-section'>
        <h2>Atividades Recentes</h2>
        <div className=' grid-display'>
          <div className='activity-card'>
            <div>
              <img className='activity-img' src={photo01} alt=""></img>
            </div>
            <label>Escolas</label>
            <p>Atividade educativa para conscientização infantil...</p>
          </div>
          <div className='activity-card'>
            <div>
              <img className='activity-img' src={photo02} alt=""></img>
            </div>
            <label>Estudos</label>
            <p>Atividade de campo para registro e preservação das espécies nativas em...</p>
          </div>
          <div className='activity-card'>
            <div>
              <img className='activity-img' src={photo03} alt=""></img>
            </div>
            <label>Visitas técnicas</label>
            <p>Apresentação à comunidade em visita a usina x, realizada em ...</p>
          </div>
        </div>
      </div>

      <div className='features-section grid-display set-gray'>
        <div className='svg-feature-card'>
          <div>
            <img className='svg-icon' src={svg01}></img>
          </div>
          <label>Cultivo</label>
          <p>Cultivamos mudas em nosso viveiro, totalizando até o momento 300+ novas plantas</p>
        </div>
        <div className='svg-feature-card'>
          <div>
            <img className='svg-icon' src={svg02}></img>
          </div>
          <label>Ecologia</label>
          <p>Esta empresa está envolvida na preservação do meio ambiente e reflorestamento</p>
        </div>
        <div className='svg-feature-card'>
          <div>
            <img className='svg-icon' src={svg03}></img>
          </div>
          <label>Consciência</label>
          <p>Realizamos atividades que visam despertar a consciência de jovens e adultos nas comunidades em que estamos envolvidos</p>
        </div>
        {/* <img src="public/external-ecology-ecology-fauzidea-detailed-outline-fauzidea-3.png"></img> */}
        {/* <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
        </svg> */}

      </div>

      {/* <footer>Rodapé Risoflora</footer> */}

    </div>
  )
}

export default App
