import React, { Component } from 'react';
import { Form, Input,Button} from 'antd';
import BreadcrumbCustom from "../common/BreadcrumbCustom";
import {message} from "antd/lib/index";

const FormItem = Form.Item;
let user=localStorage.getItem("zoie_user");
let admin=JSON.parse(user);
let username=admin.username;
let password=admin.password;

class Password extends Component{
    state={
        confirmDirty: true
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var url='http://tt.tunnel.echomod.cn/api/admin/account/login';
        fetch(url).then(
            function (res) {
                if (res.ok) {
                    return res.json()
                } else {
                    {this.LogError(res)}
                }
            }
        ).then(function (json) {
            if (json.code == "200") {  // 判断请求是否正确
                return json.datas
            }
        }).then(function (datas) {
           console.log(datas)
        }).then( (e) => {
            console.log("props111=====" + e );
            this.setState({  // setState 将数据塞在 state 中以便在组件间进行数据传递
                slideList:e
            });

        });
    }
    LogError(res) {
        console.error('服务器繁忙,请稍后重试; \r\nCode:' + res.status)
    }

    validateToUser = (rule ,value, callback) => {
        if(value && value !== username){
            callback('用户名输入错误！');
        }else{
            callback();
        }
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value === form.getFieldValue('oldPas')) {
            callback('请输入新密码!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        console.log(password)
        if(value && value !==password){
            callback('密码输入错误！');
        }else{
            callback();
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(err){
                return;
            }
            console.log('Received values of form: ', values);
            username=values.name;
            console.log(username)
            password=values.newPas;
            const valObj={
                username:username,
                password:password
            }
            const value=JSON.stringify(valObj);
            console.log(value)
            localStorage.setItem('zoie_user',JSON.stringify(value));
            message.success('修改成功!');
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const FormItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 2,
                },
            },
        };
        return (
            <div>
                <BreadcrumbCustom paths={['修改密码']}/>
                <div className='formBody'>
                    <Form layout="horizontal" style={{marginTop:30}} onSubmit={this.handleSubmit}>
                        <FormItem label="用户名" {...FormItemLayout} hasFeedback>
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: '请输入用户名！' },
                                    {validator:this.validateToUser}
                                    ],
                            })(
                                <Input  placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem label="原始密码" {...FormItemLayout} hasFeedback>
                            {getFieldDecorator('oldPas',{
                                rules:[
                                    {required:true,message:'请输入原始密码!'},
                                    { validator: this.validateToNextPassword}
                                    ]
                            })(
                                <Input type="password" placeholder="请输入原始密码" onBlur={this.handleConfirmBlur}/>
                            )}
                        </FormItem>
                        <FormItem label="新密码" {...FormItemLayout} hasFeedback>
                            {getFieldDecorator('newPas',{
                                rules:[
                                    {required:true,message:'请输入新密码!'},{
                                        validator: this.compareToFirstPassword,
                                    }]
                            })(
                                <Input type="password" placeholder="请输入新密码!" />
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">确定</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
const PasswordCreateForm = Form.create()(Password);
export default PasswordCreateForm;