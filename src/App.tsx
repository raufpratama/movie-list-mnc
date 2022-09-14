import React from 'react';
import './App.css';

import { API_URL } from './constants';

import Header from './components/Header';
import useListMovie from './hook/useListMovie';

const color = (rating: number) => {
if(rating <= 5) {
  return "bg-red-600"
} else if(rating < 7) {
    return "bg-amber-300"
  } else {
    return "bg-green-700"
  }
}

function App() {
  const { moveList, loadingList } = useListMovie()
  return (
    <div className="App">
      <Header/>

      <div className='flex items-center justify-center mt-20'>
        <div className='grid grid-cols-4 gap-3 w-3/5 p-3'>
        {moveList?.map((_,index) => (
          <div key={index} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:z-50 duration-300 w-full bg-slate-100 rounded-md overflow-hidden drop-shadow-lg'>
            <div className='flex transition duration-200 ease-in-out opacity-0 absolute w-full h-full hover:opacity-100 z-20 text-white p-2 hover:bg-black/[0.8] text-sm items-center'>
              {_.overview}
            </div>
            <div className={`${color(_.vote_average)} px-4 py-2 absolute rounded-br-md rounded-tl-md text-white`}>
              {_.vote_average}
            </div>
            <img src={API_URL.img_directory(_.poster_path)} className="object-fill w-full h-80"/>
            <div className='p-3 font-bold text-sm'> 
{_.title}
            </div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default App;
