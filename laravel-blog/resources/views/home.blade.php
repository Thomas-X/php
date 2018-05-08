@extends('layouts.app')
@section('title', 'Home')
@section('body')
    <script src="./dist/termly-prompt.min.js"></script>
	<?php Lareact::createHtml($_data, $_route) ?>
@endsection