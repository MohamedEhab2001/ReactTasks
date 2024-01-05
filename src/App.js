import React from 'react';
import Counter from './Counter';
import Timer from './Timer';



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