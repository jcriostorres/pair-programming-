
(function () {
   let calcularFibonacciNoRecursivo = (num) => {
      let fibo = [0, 1];
      document.write(0 + "<br/>" + 1 + "<br/>");
      for (i = 2; i <= num; i++) {
         fibo.push(fibo[i - 1] + fibo[i - 2]);
         document.write(fibo[i] + "<br/>");
      }
    }

   let calcularSerieFibonacci = () => {
      let num = window.prompt("Ingrese la cantidad de números que desea tener en la serie de Fibonacci: ");
      if(num >= 0) {
         document.write("<h4>Sucesión de los primeros " + num + " números de Fibonacci.</h4>");
         calcularFibonacciNoRecursivo(num);
      } else {
         window.alert("Ingrese cantidades mayores o iguales a cero.");
      }
   }

   calcularSerieFibonacci();

})();