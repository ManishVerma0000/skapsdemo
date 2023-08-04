import React, { useEffect, useState } from "react";
import '../app/custom.css'
import axios from "axios";


const MainComponent = () => {
    const [currentDate, setCurrentDate] = useState('')
    const [lastaccidentdate, setlastaccidentdate] = useState('')
    const [accidentfreedays, setAccidentFreedays] = useState('')

    const refreshInterval = setInterval(() => {
        // Reload the page every 1 hour (3600000 milliseconds)
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }, 36000);
    // refreshInterval()
    clearInterval(refreshInterval);
    useEffect(() => {
        axios.get("http://localhost:5000/data").then((data) => {
            console.log(data)
            setCurrentDate(data.data.data.currentdate)
            setlastaccidentdate(data.data.data.lastaccidentdate)
            setAccidentFreedays(data.data.data.dayswithoutaccident)
        }).catch((err) => {
            console.log(err)
        })
    })
    // const apihit = () => {
    //     axios.get("http://localhost:5000/data").then(async (data) => {
    //         // console.log(data)
    //         await setCurrentDate(data.data.data.currentdate)
    //         await setlastaccidentdate(data.data.data.lastaccidentdate)
    //         await setAccidentFreedays(data.data.data.dayswithoutaccident)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    // setInterval(
    //     apihit, 1000 * 60 * 60 * 24)


    return (
        <>
            <div className="maincontainer">
                <div className="headerofcontainer">
                    <header className="header">
                        <div className="imagetag">
                            <img src="https://skaps.com/wp-content/uploads/2023/02/SkapsLogo_300px-243x300.png" className="innerimagetag"></img>
                        </div>
                        <div className="skapstext">
                            SKAPS Industries India  Pvt Ltd
                        </div>
                    </header>
                    <div className="midsectionmid">
                        <div className="midsection">
                            <div className="safetyinformation">
                                SAFETY INFORMATION DISPLAY
                            </div>

                        </div>
                        <div className="latesttime">
                            <div className="todaydate">
                                TODAY'S DATE

                            </div>
                            <div className="localtimestring">
                                {
                                    currentDate
                                }
                                {/* {new Date().toLocaleDateString()} */}
                            </div>
                        </div>

                        <div className="lastaccidenton">

                            <div className="lastaccidenttext">
                                LAST ACCIDENT ON
                            </div>
                            <div className="localtimestring">
                                {/* {date} */}
                                {
                                    lastaccidentdate
                                }
                            </div>
                        </div>

                        <div className="lastaccidenton">

                            <div className="lastaccidenttext">
                                ACCIDENT FREE DAYS
                            </div>
                            <div className="localtimestring">
                                {
                                    accidentfreedays
                                }
                            </div>
                        </div>

                        <div className="lastaccidenton">

                            <div className="lastaccidenttext">
                                PREVIOUS BEST
                            </div>
                            <div className="localtimestring">
                                109
                            </div>
                        </div>

                    </div>
                    <footer className="footer">
                        <div className="helmet">
                            WEAR HELMET
                        </div>
                    </footer>


                </div>

            </div>

        </>
    )
}

module.exports = MainComponent

