import {  useEffect } from "react";
import axios from "axios";

const TestFetchUserProxy06 = () => {

    // const fetchDatalocal = async () => {
    // const resp=await fetch('/api/data.json');
    // const data_local_json=await resp.json();
    // console.log("data_local_json", data_local_json);
    // };
    const fetchData1 = async () => {
        const response = await fetch('/api/v1');
        const data1 = await response.json();
        console.log("fetch data1", data1);
    };
    const fetchData2 = async () => {
        const data2 = await axios.get('/api/v1')
        console.log("axios data2", data2);
    };
    const fetchData3 = async () => {
        const currentUser = {
            name: "Tony Zhan",
            email: 'abcdqazdfzaddq@gmail.com',
            password: 'sdefdfrsdfd',
        };

        try {
            const { data } = await axios.post(
                '/api/v1/auth_06/register_06',
                currentUser
            );
            console.log('register data', data)
        }
        catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => {
    //     fetchDatalocal();
    // }, []);

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

export default TestFetchUserProxy06;