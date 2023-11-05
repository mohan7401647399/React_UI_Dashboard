import React from 'react';
import Sidebar from './components/side/Sidebar';
import Input from './components/input/Input';
import InputEle from './components/inputelements/InputEle';
import Tabledata from './components/Tabledata/Tabledata';


function App() {
  return (
    <div className="row">
      <div className='col-sm-12 col-md-2 col-lg-2'>
        <Sidebar />
      </div>
      <div className="col-sm-12 col-md-10 col-lg-10 p-3 m-auto">
        <Input />
        <InputEle />
        <Tabledata />
      </div>
    </div>
  );
}

export default App;
