import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Input, List, Row, Col, Modal } from 'antd';

export default function Index() {
    const [joke, setJoke] = useState([])
    const [jokesNumber, setJokesNumber] = useState(1)
    const [name, setName] = useState('Chuck')
    const [lastname, setLastname] = useState('Norris')
    const [visible, setVisible] = useState(false)

    const fetchData = async () => {
        let x = [];
        for (let i = 0; i < jokesNumber; i++) {
            const res = await axios.get(`http://api.icndb.com/jokes/random/${jokesNumber}`);
            x.push(res.data.value[i].joke);

        };
        setJoke(x)
        console.log(joke)
    }

    useEffect(() => {
        fetchData()
    }, [jokesNumber])


    const Submit = value => {
        console.log(value)
        setVisible(false);
    }

    const handleJokes = (value) => {
        setJokesNumber(parseInt(value.number))
    }

    return (
        <>
            <Row justify='center'>
                <Modal
                    title="Change your name"
                    visible={visible}
                    okText={"Submit"}
                    onOk={Submit}
                    onCancel={() => setVisible(false)}
                >
                    <Row justify="center" style={{ margin: "5px" }}>
                        <Col span={4}><h3>Name</h3></Col>
                        <Col span={20}><Input value={name} onChange={(e) => setName(e.target.value)} /></Col>
                    </Row>
                    <Row justify="center" style={{ margin: "5px" }}>
                        <Col span={4}><h3>Last Name</h3></Col>
                        <Col span={20}><Input value={lastname} onChange={(e) => setLastname(e.target.value)}></Input></Col>
                    </Row>
                </Modal>
                <Button type='dashed' onClick={() => setVisible(true)}>Change your Name</Button>
            </Row>
            <Row justify='center'>
                <div>
                    <h2>Name: {name}  {lastname}</h2>
                </div>
            </Row>
            <Row justify='center'>
                <Form onFinish={handleJokes}>
                    <Form.Item name='number' >
                        <Input type='number' placeholder="Input joke's number" ></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">get Joke</Button>
                    </Form.Item>
                </Form>
                <List bordered header={<h2>Jokes: </h2>} dataSource={joke} renderItem={(item) => <List.Item>{item}</List.Item>} />
            </Row>

        </>
    )
}

