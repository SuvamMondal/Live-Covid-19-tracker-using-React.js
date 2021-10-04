import React,{ useEffect, useState } from 'react'
import './stateWise.css'
import { motion } from 'framer-motion'

const StateWise = () => {
    
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise); //returns an array//
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData(); 
    },[])


    return(
        <>
            <div className='container-fluid mt-5'>
                <div className="main-heading">
                    <motion.h1 className="center"
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition={{type:'tween'}}
                    ><span className="font-weight-bold red-text">Covid 19 Table </span><span className='orange-text'>Indian</span><span className='green-text'> States</span></motion.h1>
                </div>

                <motion.div className='table-responsive'
                 initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{type:'tween'}}>
                    <table className="table table-hover highlight">
                        <thead>
                            <tr className="black white-text">
                                <th className="center">State</th>
                                <th style={{textAlign: 'center'}}>Confirmed</th>
                                <th className="center">Recovered</th>
                                <th className="center">Deaths</th>
                                <th className="center">Active</th>
                                <th className="center">Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((eachdata)=>{
                                return(
                                    <tr key={eachdata.statecode}>
                                        <td >{eachdata.state}</td>
                                        <td className="center">{eachdata.confirmed}</td>
                                        <td className="center">{eachdata.recovered}</td>
                                        <td className="center">{eachdata.deaths}</td>
                                        <td className="center">{eachdata.active}</td>
                                        <td className="center">{eachdata.lastupdatedtime}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </motion.div>
            </div>
        </>
    )
}
export default StateWise;