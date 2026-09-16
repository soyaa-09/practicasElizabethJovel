<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 
    <h1 id="puntaje">0</h1>
 
    <button onclick="Agregar()">Agregar</button>
    <button onclick="Duplicar()">Duplicar</button>
    <button onclick="Restar()">Restar</button>
    <button onclick="Reiniciar()">Reiniciar</button>
 
    <script>
        let puntaje = 0;
 
        function Agregar() {
            puntaje++;
            document.getElementById("puntaje").innerHTML = puntaje;
        }
 
        function Duplicar() {
            puntaje *= 2;
            document.getElementById("puntaje").innerHTML = puntaje;
        }
 
        function Restar() {
            puntaje--;
            document.getElementById("puntaje").innerHTML = puntaje;
        }
 
        function Reiniciar() {
            puntaje = 0;
            document.getElementById("puntaje").innerHTML = puntaje;
        }
    </script>
</body>
</html>