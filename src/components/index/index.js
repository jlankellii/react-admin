import React, { Component } from 'react';
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { Card, Avatar, Row, Col, Progress, Timeline, Collapse, Table, Icon } from 'antd';
import '../../style/index.less';
const { Meta } = Card;


const columns = [
    { title: '头像', width: 100, dataIndex: 'img', key: 'img', fixed: 'left' },
    { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '状态', width: 100, dataIndex: 'state', key: 'state', fixed: 'left' },
    { title: '留言', width: 100, dataIndex: 'written', key: 'written', className:'column-written' },
    { title: '邮箱', width: 100,dataIndex: 'mail', key: 'mail', fixed: 'right' },
    { title: '时间', width: 100,dataIndex: 'time', key: 'time', fixed: 'right' }
];
const data = [{
    key: '1',
    img: <Avatar style={{ backgroundColor: '#f56a00' }}>Z</Avatar>,
    name: 'John Brown',
    state: <Icon type="caret-up" style={{ color: 'red' }}/>,
    written: '撸起袖子加油干，中国梦定能实现！',
    mail: 'marinus.jagesar@example.com',
    time: '2015-03-01 17:55:21',
}, {
    key: '2',
    img: <Avatar style={{ backgroundColor: '#7265e6' }}>H</Avatar>,
    name: 'Jim Green',
    state: <Icon type="caret-up" style={{ color: 'red' }}/>,
    written: '只要坚持一切为了人民，共产党就始终有其活力。',
    mail: 'zachary.lavigne@example.com',
    time: '2015-06-03 18:22:13',
},{
    key: '3',
    img: <Avatar style={{ backgroundColor: '#ffbf00' }}>A</Avatar>,
    name: 'Joe Black',
    state: <Icon type="caret-down" style={{ color: 'gray' }}/>,
    written: '跟着党中央，百姓不心慌。跟着习核心，党民一家亲。',
    mail:'levi.willis@example.com',
    time: '2016-01-02 23:11:01',
},{
    key: '4',
    img: <Avatar style={{ backgroundColor: '#00a2ae' }}>O</Avatar>,
    name: 'Jim Red',
    state:<Icon type="caret-up" style={{ color: 'red' }}/>,
    written: '必须坚持改革创新、将改革进行到底！只有在改革中推动社会发展、在创新中找到科学发展之路！',
    mail: 'tobias.pedersen@example.com',
    time: '2016-12-21 13:03:59',
},{
    key: '5',
    img: <Avatar style={{ backgroundColor: '#48ae6a' }}>Y</Avatar>,
    name: 'Jake White',
    state: <Icon type="caret-down" style={{ color: 'gray' }}/>,
    written: '在各领域凝心聚力齐心协力集聚改革发展的正能量。',
    mail: 'lígio.carvalho@example.com',
    time: '2017-03-06 10:19:07',
},{
    key: '6',
    img: <Avatar style={{ backgroundColor: '#ae007c' }}>U</Avatar>,
    name: 'Smith White',
    state: <Icon type="caret-up" style={{ color: 'red' }}/>,
    written: '对“为官不为”及时亮剑，集中曝光、整治“为官不为”“为官乱为”，使无为者让位、干事者有位。',
    mail: 'samuel.leon@example.com',
    time: '2017-11-03 13:43:33',
}];

export default class MIndex extends Component {
    CountUp(){
        let imgSrc = ["mail","chat","heart"];
        let imgName = ["Mails","Dialogue","Collection"];
        let count = ["1379","768","413"];
        let cu = imgSrc.map(function(item,index){
            return(
                <Col md={6} key={item}>
                    <Card style={{cursor:'pointer', marginBottom:16}}
                          actions={[<Icon type="info-circle-o" />, <Icon type="ellipsis" />]}>
                        <Meta
                            style={{fontSize:22}}
                            avatar={<img src={require('../../style/img/'+item+'.png')} alt=""/>}
                            title={imgName[index]}
                        />
                    </Card>
                </Col>
            )
        });
        return cu;
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <div className='mindex'>
                    <Row gutter={20}>
                        {this.CountUp()}
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Card>
                                <div style={{marginBottom:16}}>
                                    <h3>留言板</h3>
                                </div>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination = {true}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
