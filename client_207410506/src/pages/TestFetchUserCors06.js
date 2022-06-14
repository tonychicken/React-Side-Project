import {  useEffect } from "react";
import axios from "axios";

const TestFetchUseCors06 = () => {

    const fetchData1 = async () => {
        const response = await fetch('http://localhost:5000');
        const data1 = await response.json();
        console.log("fetch data1", data1);
    };
    const fetchData2 = async () => {
        const data2 = await axios.get('http://localhost:5000')
        console.log("axios data2", data2);
    };
    const fetchData3 = async () => {
        const currentUser = {
            name: "Tony Zhan",
            email: 'abcdqazzaq_207410506@gmail.com',
            password: 'secret3',
        };

        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/v1/auth_06/register_06',
                currentUser
            );
            console.log('register data', data)
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData1();
    }, []);

    useEffect(() => {
        fetchData2();
    }, []);

    useEffect(() => {
        fetchData3();
    }, []);

    return <div></div>;

};

export default TestFetchUseCors06;