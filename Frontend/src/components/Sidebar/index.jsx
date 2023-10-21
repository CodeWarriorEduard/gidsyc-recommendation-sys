import React from 'react';
import './index.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Filtros de Búsqueda</h2>

      <select>
        <option>Ubicación</option>
        <option>Barranquilla</option>
        <option>Santa Marta</option>
      </select>

      <select>
        <option>inmueble</option>
        <option>casa</option>
        <option>apartamento</option>
      </select>

    <div>
        <h3>Habitaciones</h3>
        <div>
            <button>Cualquiera</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+4</button>
        </div>
    </div>

    <div>
        <label>Tamaño</label>
        <input type="text" placeholder='Desde'/>
        <input type="text" placeholder='Hasta'/>
    </div>

    <button className='btn-search'>Buscar</button>


    </aside>
  );
}

export default Sidebar;
