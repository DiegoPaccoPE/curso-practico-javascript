// Cuadrado

function areaCuadrado(lado) {
  return lado * lado;
}

function perimetroCuadrado(lado) {
  return 4 * lado;
}

function calcularAreaCuadrado() {
  const input_cuadrado = document.getElementById("square");
  const value_cuadrado = input_cuadrado.value;
  const area_cuadrado = areaCuadrado(value_cuadrado).toFixed(2);
  alert(area_cuadrado);
}
function calcularPerimetroCuadrado() {
  const input_cuadrado = document.getElementById("square");
  const value_cuadrado = input_cuadrado.value;
  const perimetro_cuadrado = perimetroCuadrado(value_cuadrado);
  alert(perimetro_cuadrado);
}

//Triángulo (isósceles)

function triangulo(lado1, lado2, base) {
  const mitad_base = base / 2;
  if (lado1 > 0 && lado2 > 0 && base > 0) {
    if (lado1 == lado2) {
      if (lado1 > mitad_base) {
        const altura = Math.sqrt(lado1 ** 2 - mitad_base ** 2);
        return altura;
      }
    }
  }
  return 0;
}

function areaTriangulo(altura, base) {
  return (base * altura) / 2;
}

function perimetroTriangulo(lado1, base) {
  return Number(lado1 * 2) + Number(base);
}

function calcularAreaTriangulo() {
  const lado1 = document.getElementById("lado-uno");
  const lado1_value = lado1.value;

  const lado2 = document.getElementById("lado-dos");
  const lado2_value = lado2.value;

  const base = document.getElementById("base");
  const base_value = base.value;

  const altura = triangulo(lado1_value, lado2_value, base_value);
  if (Boolean(altura)) {
    const area_triangulo = areaTriangulo(altura, base_value).toFixed(2);
    alert(area_triangulo);
  } else {
    alert("No son medidas de un triangulo isósceles");
  }
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado-uno");
  const lado1_value = lado1.value;

  const lado2 = document.getElementById("lado-dos");
  const lado2_value = lado2.value;

  const base = document.getElementById("base");
  const base_value = base.value;

  const altura = triangulo(lado1_value, lado2_value, base_value);
  if (Boolean(altura)) {
    const perimetro_triangulo = perimetroTriangulo(lado1_value, base_value);
    alert(perimetro_triangulo);
  } else {
    alert("No son medidas de un triangulo isósceles");
  }
}

//Círculo

const PI = Math.PI;

function areaCirculo(radio) {
  return PI * Math.pow(radio, 2);
}

function perimetroCirculo(radio) {
  return 2 * PI * radio;
}

function calcularAreaCirculo() {
  const input_radio = document.getElementById("circle");
  const radio_value = input_radio.value;
  const area_circulo = areaCirculo(radio_value).toFixed(2);
  alert(area_circulo);
}

function calcularPerimetroCirculo() {
  const input_radio = document.getElementById("circle");
  const radio_value = input_radio.value;
  const perimetro_circulo = perimetroCirculo(radio_value).toFixed(2);
  alert(perimetro_circulo);
}
