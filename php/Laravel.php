<?php
	/*
	    编写PHP的语法代码
		echo的用法
		* 作用 - 向客户端浏览器响应数据内容
		* 用法
		   * （常见）类似于关键字的用法 - echo 响应数据
		   * 类似于函数的用法 - echo（响应数据）
      */
	echo '<h1>The First PHP Page.</h1>';
?>
/*

//@if, @elseif, @else, and @endif directives
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif

*/
/*

//循环 for	  @foreach
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
//    or <p>This is user {{ '$user[id'] }}</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse

@while (true)
    <p>I'm looping forever.</p>
@endwhile
*/
/*

//模板继承

//1. 可以传参数
@include('shared.errors')
@include('view.name', ['some' => 'data'])

//模板循环
@each('view.name', $jobs, 'job')
*/
/*

//可扩展模板

//定义一个容器
<!-- Stored in resources/views/layouts/master.blade.php -->
@yield('title')
 @yield('content')

//继承容器
@extends('layouts.master')
//拓展容器
@section('title', 'Page Title')
@section('content')
    <p>This is my body content.</p>
@endsection
*/

//问题1 @component
@component('pc.components.modal', ['custom_avator'=>$tplData['avatar_url']])
@endcomponent

//问题2 explode()
<?php
   $birth_date= explode('-', $tplData["birth_date"]);
   $edit_index = 0;
?>
   
























