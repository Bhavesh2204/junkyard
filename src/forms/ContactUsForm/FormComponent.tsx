import React from 'react';
import { Row, Col, Form, Input, Select, Button, Slider } from 'antd';


const { Option } = Select;

const FormComponent: React.FC = () => (
    <div className="relative mt-[-40px] px-4 sm:px-6 lg:px-8" >
        <div className="mx-auto" style={{ width: '1176px' }}>
            <div className="bg-white m-3 p-6 shadow-lg z-10 rounded">
                <Row gutter={24}>
                    <Col xs={24} md={16}>
                        <Form layout="vertical">
                            <Row gutter={24}>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Car Model" name="carModel" rules={[{ required: true, message: 'Please enter the car model' }]}>
                                        <Input placeholder="Enter car model" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Vehicle Status" name="vehicleStatus" rules={[{ required: true, message: 'Please enter the vehicle status' }]}>
                                        <Input placeholder="Enter vehicle status" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Select Model" name="selectModel" rules={[{ required: true, message: 'Please select the model' }]}>
                                        <Select placeholder="Select model">
                                            <Option value="model1">Model 1</Option>
                                            <Option value="model2">Model 2</Option>
                                            <Option value="model3">Model 3</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Select Year" name="selectYear" rules={[{ required: true, message: 'Please select the year' }]}>
                                        <Select placeholder="Select year">
                                            <Option value="2024">2024</Option>
                                            <Option value="2023">2023</Option>
                                            <Option value="2022">2022</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Select Body Type" name="selectBodyType" rules={[{ required: true, message: 'Please select the body type' }]}>
                                        <Select placeholder="Select body type">
                                            <Option value="sedan">Sedan</Option>
                                            <Option value="suv">SUV</Option>
                                            <Option value="coupe">Coupe</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Additional Information" name="additionalInfo">
                                        <Input.TextArea placeholder="Enter additional information" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form layout="vertical">
                            <Form.Item label="Price Range" name="priceRange">
                                <Slider
                                    range
                                    min={0}
                                    max={10000}
                                    defaultValue={[1000, 5000]}
                                    marks={{ 0: '$0', 10000: '$10,000' }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="w-full">Search</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

export default FormComponent;
