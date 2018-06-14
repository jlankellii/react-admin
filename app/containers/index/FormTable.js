import React, { Component } from 'react';
import { Table, Icon, Popconfirm } from 'antd';
import moment from 'moment';

export default class FormTable extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { onDelete, editClick, dataSource, loading } = this.props;
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            width: 80,
        }, {
            title: '性别',
            dataIndex: 'sex',
            // onFilter: (value, record) => record.sex.indexOf(value) === 0,
            width: 80,
        }, {
            title: '年龄',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
            width: 80,
        },{
            title: '地址',
            dataIndex: 'address',
            width: 180,
        },{
            title: '手机号',
            dataIndex: 'phone',
            width: 120,
        },{
            title: '邮箱',
            dataIndex: 'email',
            width:140,
        },{
            title: '创建时间',
            dataIndex: 'createtime',
            sorter: (a, b) => moment(a.createtime) - moment(b.createtime),
            width:150,
        },{
            title: '操作',
            dataIndex: 'opera',
            width:100,
            render: (text, record) =>
                <div className='opera'>
                    <span onClick={() => editClick(record.key)}>
                         <Icon type="edit" /> 修改
                    </span><br />
                    <span><Popconfirm title="确定要删除吗?" okText="确定" cancelText="取消" onConfirm={() => onDelete(record.key)}><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
                </div>
        }];
        return(
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered={true}
                className='formTable'
                loading={loading}
                pagination={false}
            />
        )
    }
}
