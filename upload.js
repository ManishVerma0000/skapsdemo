import React, { useState } from "react";
import '../app/custom.css'
import axios from "axios";



const uploadfile = () => {
    const formdaata = new FormData()

    const [file, setfile] = useState({})

    const uplaodthefile = () => {
        formdaata.set('excel', file)
        axios.post("http://192.168.4.88:5001/uplaodfile", formdaata, {
            headers: {
                "Content-Type": "multipart/form-data;"
            }
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
    console.log(file, 'tjos os the s')
    return (
        <>
            <div className="maincontaineroffile">
                <div className="imagefile">
                    <img src="https://skaps.com/wp-content/uploads/2023/02/SkapsLogo_300px-243x300.png"></img>
                </div>

                <div className="inputbox">
                    <input type="file" name="select the excel file" onChange={(e) => {
                        setfile(e.target.files[0])
                    }} ></input>
                </div>
                <div className="btnfileupload">
                    <button onClick={uplaodthefile}>Click Here</button>
                </div>
            </div>

        </>
    )
}


export default uploadfile