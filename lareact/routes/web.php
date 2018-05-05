<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

class Lareact {
    public static function sendParams (array $params, string $route) {
        return [
            '_data' => $params,
            '_route' => $route,
        ];
    }
}

Route::get('/', function () {
    $hello = 'hello';
    $world = 'worldddd';
    $params = compact('hello', 'world');

    return view('welcome', Lareact::sendParams($params, 'Home'));
});

Route::get('/about', function () {
    return view('welcome', Lareact::sendParams(['hello woooorld'], 'About'));
});
