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

  const unidad = document.getElementById("unidad-cuadrado");
  const unidad_value = unidad.value;

  const area_cuadrado = areaCuadrado(value_cuadrado).toFixed(2);
  const result_text = document.getElementById("result-text-cuadrado");
  result_text.innerText = "El área del cuadrado es: ";

  const result_cuadrado = document.getElementById("result-cuadrado");
  result_cuadrado.innerText = area_cuadrado + " " + unidad_value + "\xB2";
}
function calcularPerimetroCuadrado() {
  const input_cuadrado = document.getElementById("square");
  const value_cuadrado = input_cuadrado.value;

  const unidad = document.getElementById("unidad-cuadrado");
  const unidad_value = unidad.value;

  const perimetro_cuadrado = perimetroCuadrado(value_cuadrado);
  const result_text = document.getElementById("result-text-cuadrado");
  result_text.innerText = "El perímetro del cuadrado es: ";

  const result_cuadrado = document.getElementById("result-cuadrado");
  result_cuadrado.innerText = perimetro_cuadrado + " " + unidad_value;
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

  const unidad = document.getElementById("unidad-triangulo");
  const unidad_triangulo = unidad.value;

  const altura = triangulo(lado1_value, lado2_value, base_value);
  if (Boolean(altura)) {
    const area_triangulo = areaTriangulo(altura, base_value).toFixed(2);
    const result_text = document.getElementById("result-text-triangulo");
    result_text.innerText = "El área del triángulo es:";
    const result_triangulo = document.getElementById("result-triangulo");
    result_triangulo.innerText =
      area_triangulo + " " + unidad_triangulo + "\xB2";
  } else {
    const result_text = document.getElementById("result-text-triangulo");
    result_text.innerText =
      "No son valores adecuados para un triángulo isósceles";
    const result_triangulo = document.getElementById("result-triangulo");
    result_triangulo.innerText = " ";
  }
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado-uno");
  const lado1_value = lado1.value;

  const lado2 = document.getElementById("lado-dos");
  const lado2_value = lado2.value;

  const base = document.getElementById("base");
  const base_value = base.value;

  const unidad = document.getElementById("unidad-triangulo");
  const unidad_triangulo = unidad.value;

  const altura = triangulo(lado1_value, lado2_value, base_value);
  if (Boolean(altura)) {
    const perimetro_triangulo = perimetroTriangulo(lado1_value, base_value);
    const result_text = document.getElementById("result-text-triangulo");
    result_text.innerText = "El perímetro del triángulo es:";
    const result_triangulo = document.getElementById("result-triangulo");
    result_triangulo.innerText = perimetro_triangulo + " " + unidad_triangulo;
  } else {
    const result_text = document.getElementById("result-text-triangulo");
    result_text.innerText =
      "No son valores adecuados para un triángulo isósceles";
    const result_triangulo = document.getElementById("result-triangulo");
    result_triangulo.innerText = " ";
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
  const unidad = document.getElementById("unidad-circulo");
  const unidad_circulo = unidad.value;
  const area_circulo = areaCirculo(radio_value).toFixed(2);
  const result_text = document.getElementById("result-text-circulo");
  result_text.innerText = "El área del circulo es: ";

  const result_circulo = document.getElementById("result-circulo");
  result_circulo.innerText = area_circulo + " " + unidad_circulo + "\xB2";
}

function calcularPerimetroCirculo() {
  const input_radio = document.getElementById("circle");
  const radio_value = input_radio.value;

  const unidad = document.getElementById("unidad-circulo");
  const unidad_circulo = unidad.value;

  const perimetro_circulo = perimetroCirculo(radio_value).toFixed(2);
  const result_text = document.getElementById("result-text-circulo");
  result_text.innerText = "El perímetro del circulo es: ";

  const result_circulo = document.getElementById("result-circulo");
  result_circulo.innerText = perimetro_circulo + " " + unidad_circulo;
}
