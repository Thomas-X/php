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
	public static function sendParams(array $params, string $route) {
		return [
			'_data' => $params,
			'_route' => $route,
		];
	}

	public static function toObject(array $array, $class = 'stdClass') {
		$object = new $class;
		foreach ($array as $key => $value) {
			if (is_array($value)) {
				// Convert the array to an object
				$value = arr::to_object($value, $class);
			}
			// Add the value to the object
			$object->{$key} = $value;
		}
		return $object;
	}

	// TODO Objectify data array for usage with JS
	public static function createHtml(array $_data, string $_route) {
		if (!$_data || !$_route) {
			\Illuminate\Support\Facades\App::abort(500, 'LAREACT: Invalid data mapping to generate html. see createHtml function');
		}

		$dataJsonEncoded = json_encode(self::toObject($_data));
		$routeJsonEncoded = json_encode($_route);

		$root = "<div id='root'></div>";
		$lareactScripts = "
<script> 
function getResult (data) {
    var stringified = JSON.stringify(data);
    return JSON.parse(stringified);
}
window.LAREACT_DATA = getResult($dataJsonEncoded);
window.LAREACT_ROUTE = getResult($routeJsonEncoded);
</script>
            ";
		$appScripts = "
                <script src=\"js/app.js\"></script>
            ";

		echo $root . $lareactScripts . $appScripts;
		return;
	}
}

Route::get('/', function () {
	$hello = 'hello';
	$world = 'worldddd';
	$params = compact('hello', 'world');

	return view('welcome', Lareact::sendParams($params, 'Home'));
});