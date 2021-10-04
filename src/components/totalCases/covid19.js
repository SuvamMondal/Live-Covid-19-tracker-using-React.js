import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './covid19.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        
        
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const actualData = await res.json();
            // console.log(data.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[])


    return (
        <>
            <section>
                <ul>
                    <motion.li className="card"
                    initial={{x:'-100vw', y:'-100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Our Country</p>
                                <p className="card_total card_small center">INDIA</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li className="card"
                    initial={{x:'0vw', y:'-100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Total Recovered</p>
                                <p className="card_total card_small center">{data.recovered}</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li className="card"
                    initial={{x:'100vw', y:'-100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Total Confirmed</p>
                                <p className="card_total card_small center">{data.confirmed}</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li className="card"
                    initial={{x:'-100vw', y:'100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Total Deaths</p>
                                <p className="card_total card_small center">{data.deaths}</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li className="card"
                    initial={{x:'0vw', y:'100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Total Active</p>
                                <p className="card_total card_small center">{data.active}</p>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li className="card"
                    initial={{x:'100vw', y:'100vw'}}
                    animate={{x:0, y:0}}
                    transition={{delay:0.2, type:'tween'}}
                    >
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name center">Last Updated</p>
                                <p className="card_total card_small center">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </motion.li>

                </ul>
            </section>
        </>
    );
}
 
export default Covid;