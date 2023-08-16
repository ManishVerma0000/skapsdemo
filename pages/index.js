import React, { useEffect, useState } from "react";
import '../app/custom.css'
import axios from "axios";


const MainComponent = () => {
    var newcurrentdate = []
    var newprevious = []
    const [currentDate, setCurrentDate] = useState('')
    const [lastaccidentdate, setlastaccidentdate] = useState('')
    const [accidentfreedays, setAccidentFreedays] = useState('')
    const [previous, setprevious] = useState('')
    const [quotes, setQuotes] = useState('')

    const refreshInterval = setInterval(() => {
        if (typeof window !== 'undefined') {

            window.location.reload();
        }
    }, 360000);
    if (currentDate) {
        newcurrentdate = currentDate.replaceAll("/", "-")
        newprevious = lastaccidentdate.replaceAll('""', "")

    }


    useEffect(() => {
        axios.get("http://192.168.4.88:5001/data").then((data) => {
            setprevious(data.data.data.accidentfress)
            setCurrentDate(data.data.data.currentdate)
            setlastaccidentdate(data.data.data.lastaccidentdate)
            setAccidentFreedays(data.data.data.dayswithoutaccident)
            setQuotes(data.data.data.quotes)
        }).catch((err) => {
            console.log(err)
        })
    })
    return (
        <>
            <div className="maincontainer">
                <div className="headerofcontainer">
                    <header className="header">
                        <div className="imagetag">
                            <img src="https://skaps.com/wp-content/uploads/2023/02/SkapsLogo_300px-243x300.png" className="innerimagetag"></img>
                        </div>
                        <div className="skapstext" style={{ fontWeight: "bold", fontSize: 70 }}>
                            SKAPS Industries India  Pvt Ltd
                        </div>
                    </header>
                    <div className="midsectionmid">
                        <div className="midsection">
                            <div className="safetyinformation" style={{ fontWeight: "bold", fontSize: 50 }}>
                                SAFETY INFORMATION DISPLAY
                            </div>
                        </div>
                        <div className="linedivtag"></div>
                        <div className="latesttime">
                            <div className="todaydate" style={{ fontWeight: "bold", fontSize: 50 }} >
                                TODAY'S DATE
                            </div>

                            <div className="localtimestring">
                                {
                                    newcurrentdate
                                }
                            </div>
                        </div>
                        {/* <div className="linedivtag"></div> */}

                        <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                LAST ACCIDENT ON
                            </div>
                            <div className="localtimestring">
                                {
                                    lastaccidentdate
                                }
                            </div>
                        </div>
                        <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                ACCIDENT FREE DAYS
                            </div>
                            <div className="localtimestring">
                                {
                                    accidentfreedays
                                }
                            </div>
                        </div>
                        <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                PREVIOUS BEST DAYS
                            </div>
                            <div className="localtimestring">
                                {
                                    previous
                                }
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="helmet">
                            {
                                quotes
                            }
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

module.exports = MainComponent

