@extends('layouts.app')
@section('title', 'Home')
@section('body')
	<?php Lareact::createHtml($_data, $_route) ?>
@endsection