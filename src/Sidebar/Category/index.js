import "./Category.css";

function Category({ checkboxHandler } ) {

  return (
    <div>
      <h2 className="sidebar-title">Categorias</h2>
      <div className="sidebar-category">
        <label htmlFor="placaDeVideo" className="sidebar-label-container">
          <input id="placaDeVideo" type="checkbox" value="placaDeVideo" className="input-category" onChange={checkboxHandler}/>
          Placa de Vídeo
        </label>
        <label htmlFor="teclado" className="sidebar-label-container">
          <input id="teclado" type="checkbox" value="teclado" className="input-category" onChange={checkboxHandler}/>
          Teclado
        </label>
        <label htmlFor="headset" className="sidebar-label-container">
          <input id="headset" type="checkbox" value="headset" className="input-category" onChange={checkboxHandler}/>
          Headset
        </label>
        <label htmlFor="jogo" className="sidebar-label-container">
          <input id="jogo" type="checkbox" value="jogo" className="input-category" onChange={checkboxHandler}/>
          Jogo
        </label>
      </div>
    </div>
  );
}

export default Category;
