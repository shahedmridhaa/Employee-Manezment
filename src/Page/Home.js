import React, { useState } from 'react';
import Form from './Component/Form';
import Table from './Component/Table';

const Home = () => {

    const [visibale, setVisibale] = useState(false)
    const handler =() =>{
      setVisibale(visibale ? false : true)
    }


    return (
        <div>
       <section className="main">
     
      <main className="container mx-auto">
        <h1 className="text-2xl text-center font-bold pt-10 pb-7">Employee Managment</h1>

        <div className="flex justify-between">
         <div>
            <button className="bg-[#1e293b] px-3 py-2 rounded-md hover:bg-indigo-700" onClick={handler}>Add Employee</button>
          </div>

        <div className="">
          <input className="w-96 py-1 px-3 rounded-md focus:outline-none border border-[#2f4569]" placeholder="Search here" type="text" />
        </div>

     <div>     
    <select className="select select-info w-32 max-w-xs">
      <option disabled selected>Filter</option>
      <option>acc</option>
      <option>dcc</option>
    </select>
        </div>
        </div>

        {/* ===collaspable Form */}
       {
        visibale? 
        <><Form/></>
        :
        <></>
       }

        {/* ===table==== */}
        <Table/>
      </main>
    </section>
        </div>
    );
};

export default Home;