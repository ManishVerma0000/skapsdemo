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
        axios.get("http://192.168.4.88:5001/aanya").then((data) => {
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
                        <div className="imagetag" style={{ margin: 20 }}>
                            <img src="/aanya.jpg" className="innerimagetag"></img>
                        </div>
                        <div className="skapstext" style={{ marginRight: 300 }}>
                            <div>
                                Aanya Composites Pvt. Ltd.
                            </div>

                        </div>
                    </header>

                    <div className="midsection" style={{ backgroundColor: "yellow" }}>
                        <div className="safetyinformation" style={{ fontWeight: "bold", fontSize: 80, }}>
                            SAFETY INFORMATION DISPLAY
                        </div>
                    </div>
                    <div className="midsectionmid">
                        <table className="table">
                            <thead>
                                <tr>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: 60, fontWeight: "bold" }} > TODAY'S DATE</td>
                                    <td style={{ fontSize: 60, }}> {
                                        newcurrentdate
                                    }</td>

                                </tr>
                                <tr>
                                    <td style={{ fontSize: 60, fontWeight: "bold" }}> LAST ACCIDENT ON</td>
                                    <td style={{ fontSize: 60, }}>
                                        {
                                            lastaccidentdate
                                        }
                                    </td>

                                </tr>
                                <tr>
                                    <td style={{ fontSize: 60, fontWeight: "bold" }}> ACCIDENT FREE DAYS</td>
                                    <td style={{ fontSize: 60, }}>{
                                        accidentfreedays
                                    }</td>

                                </tr>
                                <tr>
                                    <td style={{ fontSize: 60, fontWeight: "bold" }}>PREVIOUS BEST DAYS</td>
                                    <td style={{ fontSize: 60, }}>{
                                        previous
                                    }</td>

                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <footer className="footer">
                                <div className="helmet">
                                    {
                                        quotes
                                    }
                                </div>
                            </footer>
                        </div>




                        {/* <div className="linedivtag"></div> */}
                        {/* <div className="latesttime">
                            <div className="todaydate" style={{ fontWeight: "bold", fontSize: 50 }} >
                                TODAY'S DATE
                            </div>

                            <div className="localtimestring">
                                {
                                    newcurrentdate
                                }
                            </div>
                        </div> */}
                        {/* <div className="linedivtag"></div> */}

                        {/* <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                LAST ACCIDENT ON
                            </div>
                            <div className="localtimestring">
                                {
                                    lastaccidentdate
                                }
                            </div>
                        </div> */}
                        {/* <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                ACCIDENT FREE DAYS
                            </div>
                            <div className="localtimestring">
                                {
                                    accidentfreedays
                                }
                            </div>
                        </div> */}
                        {/* <div className="lastaccidenton">
                            <div className="lastaccidenttext" style={{ fontWeight: "bold", fontSize: 50 }}>
                                PREVIOUS BEST DAYS
                            </div>
                            <div className="localtimestring">
                                {
                                    previous
                                }
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="footerabovediv">
                    </div> */}


                </div>
            </div>
        </>
    )
}

module.exports = MainComponent

