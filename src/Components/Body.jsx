import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'


export default function Body(props) {
    const [radioButton, setRadioButton] = useState("Phone Number")
    const [value, setValue] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log(radioButton);
    }, [radioButton])

    var temp = {
        name: "",
        job: "Developer",
        phone: "",
        email: "",
    }

    function checkNumeric(e) {
        e.preventDefault();
        let str = e.target.value
        str = str.replace(/[^A-Z a-z]/ig, "");
        setValue(str);
        temp = {
            name: str,
            job: "Developer",
            phone: phone,
            email: email,
        }
        console.log(temp)
    }
    const handleRadioButton = (e) => {

        setRadioButton(e.target.value)
    }
    function checkEmailOrPhone(e) {
        e.preventDefault();
        if (radioButton === "Phone Number") {

            temp = {
                name: value,
                job: "Developer",
                phone: e.target.value,
                email: email,
            }
            setPhone(e.target.value)
        }
        else {
            temp = {
                name: value,
                job: "Developer",
                phone: phone,
                email: e.target.value,
            }
            setEmail(e.target.value)
        }
        console.log(temp)

    }
    function doneCheck(e) {
        temp = {
            name: value,
            job: "Developer",
            phone: phone,
            email: email
        }
        e.preventDefault()
        console.log(temp);
        if (value.trim() === "") alert("Your Name can't be empty!");
        else {
            Axios.post("https://reqres.in/api/users", temp).then((success) => { props.redirect(success.data) }).catch(err => { console.log(err); })
        }

    }
    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    return (
        <div className="body">
            <form required onSubmit={e => { e.preventDefault(); doneCheck(e) }}>
                <input className="class_name" placeholder="Enter Your Name" value={value} type="text" onChange={e => checkNumeric(e)} required /><br />
                <div onChange={handleRadioButton}><h3> Search By: </h3>
                    <h5><label>
                        <input type="radio" id="phone" name="search_by" value="Phone Number" defaultChecked />Phone Number
                    </label></h5>
                    <h5><label>
                        <input type="radio" id="email" name="search_by" value="Email Address" />Email Address
                    </label></h5><br />
                </div>
                <input className="class_Search" type={radioButton === "Phone Number" ? "number" : "email"}
                    maxLength={radioButton === "Phone Number" ? "10" : "40"}
                    onInput={maxLengthCheck}
                    placeholder={`Enter ${radioButton}`} onChange={e => checkEmailOrPhone(e)}
                    value={radioButton === "Phone Number" ? phone : email}
                    required />
                <br /><br /><br /><input className="class_submit_btn" type="submit" value="submit" />
            </form>

        </div>
    )
}
