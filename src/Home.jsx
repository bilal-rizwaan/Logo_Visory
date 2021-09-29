import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  LogoList from './LogoList';
import OverSec from './OverSec';
import LogoType from './LogoType';
import Sdata from './Sdata';
import Data from './Data';
import HomeBanner from './HomeBanner';
import Design from './Design';
import Crafting from './Crafting';
import OverProcess from './OverProcess';


const Home =() =>{
    return(
   <React.Fragment>

   {
    Sdata.map((val,ind)=>{
      return <HomeBanner
       images={val.images}
      />
    })
   }

    {
    Sdata.map((val, ind)=>{
       return <LogoList
       title={val.title}
       tit={val.tit}
       titling={val.titling}
       titles={val.titles}
       titled={val.titled}
     />
    })
    }
    {
    Sdata.map((val,ind)=>{
        return  <OverSec
         sname={val.sname}
         img={val.img}
        />
    })
    }
     <LogoType/>
      <Design/>
      <Crafting/>
      <OverProcess/>
     </React.Fragment>


    )
};

export default Home;