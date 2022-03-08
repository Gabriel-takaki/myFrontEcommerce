import react from 'react';
import pix from '../imagens/pix.jpeg'
// import '../styles/search.css'
import { useNavigate } from 'react-router-dom';


function PayMetods() {

const navigate = useNavigate();  

  return (
    <div className='itens-div'>
      <img className='iten-image' src={ pix } />
      <button onClick={() => navigate('/cart')}>
          Retornar
      </button>

    </div>
  );
}


export default PayMetods;
