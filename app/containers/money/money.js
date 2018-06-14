import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';
import { Table, Button,Row,Col,Card } from 'antd';
import './money.less'
const { Meta } = Card;

const data = [{
    key: '1',
    time: '2018-06-12',
    info: '双眼视功能检查' +
          '用户：王小 13688178114' +
          '验光师：王二小 13688178144',
    state: '收入',
    limit:'+24.00'
}, {
    key: '2',
    time: '2018-06-12',
    info: '双眼视功能检查' +
    '用户：王小 13688178114' +
    '验光师：王二小 13688178144',
    state: '收入',
    limit:'+24.00'
}, {
    key: '3',
    time: '2018-06-12',
    info: '双眼视功能检查' +
    '用户：王小 13688178114' +
    '验光师：王二小 13688178144',
    state: '收入',
    limit:'+24.00'
}, {
    key: '4',
    time: '2018-06-12',
    info: '双眼视功能检查' +
    '用户：王小 13688178114' +
    '验光师：王二小 13688178144',
    state: '收入',
    limit:'+24.00'
}];

export default class Money extends Component {
    state = {
        filterDropdownVisible: false,
        data,
        searchText: '',
        filtered: false,
    };
    render() {
        const columns = [{
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '项目信息',
            dataIndex: 'info',
            key: 'info'
        },{
            title:'收支类型',
            dataIndex:'state',
            key:'state'
        },{
            title:'资金额度',
            dataIndex:'limit',
            key:'limit'
        }];
        return(
            <div>
                <BreadcrumbCustom paths={['资金']}/>
                <div className='mindex'>
                    <Row gutter={16}>
                        <Col md={8}>
                            <Card className="card-style">
                                <Meta
                                    className="card-meta"
                                    avatar={<img src={require('../../static/images/balance.png')} alt=""/>}
                                    title="余额（元）"
                                    description="10000.00"
                                />
                                <a href="#" style={{marginLeft:'5rem',fontSize:12}}>收支明细</a>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card className="card-style">
                                <Meta
                                    className="card-meta"
                                    avatar={<img src={require('../../static/images/frozen.png')} alt=""/>}
                                    title="冻结资金（元）"
                                    description="10000.00"
                                />
                                <span style={{marginLeft:'4rem',fontSize:12}}>（提示：冻结资金为提现中或未完成订单资金）</span>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card className="card-style">
                                <Meta
                                    className="card-meta"
                                    avatar={<img src={require('../../static/images/withdraw.png')} alt=""/>}
                                    title="可提现金额（元）"
                                    description="10000.00"
                                />
                                <Button type="primary" style={{marginLeft:'5rem',fontSize:12}} onClick={this.getCash}>提现</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='formBody'>
                    <div style={{marginBottom:16}}>
                        <h3>收支明细</h3>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={this.state.data}
                        bordered={true}
                    />
                </div>
            </div>
        )
    }
}


