import React from 'react';
import Counter from './Task1/Counter';
import Timer from './Task1/Timer';



const App = () => {
  return (
    <div>
      
      <div className='container mt-5'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 ">
          <Counter />
          </div>
          <div className="col-md-4"><Timer/></div>
         
          
        </div>
      </div>

     
    </div>
  );
};

export default App;