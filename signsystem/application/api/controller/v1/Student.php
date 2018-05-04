<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/21
 * Time: 11:08
 */
namespace app\api\controller\v1;


class Student extends BaseController
{
    protected $beforeActionList = [
        'checkStudent' => ['only' => 'sign']
    ];

    protected function checkStudent(){
        //检测学生信息
    }

    public function register(){

    }

    public function signIn(){
        //获取学生位置
        //获取课程信息
        //获取目标位置
        //进行距离检测
        //返回签到结果
    }
}