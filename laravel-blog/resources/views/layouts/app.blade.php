<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Thomas :: @yield('title')</title>
</head>
<body>
@yield('body')
</body>
</html>
