<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lareact</title>
</head>
<body>
<div id="root">

</div>
<script>
    function getResult (data) {
        var stringified = JSON.stringify(data);
        return JSON.parse(stringified);
    }
    window.LAREACT_DATA = getResult(@json($_data));
    window.LAREACT_ROUTE = getResult(@json($_route));
</script>
<script src="js/app.js"></script>
</body>
</html>
