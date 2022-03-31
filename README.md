# **Primer entregable de Front-End III**

## Comandos para correr el proyecto
-   Correr el proyecto localmente: "npm start".
-   Deploy de la App: https://fedefpaz-frontend3.netlify.app/

## Temas abordados

-   Utilizar CRA para crear una aplicación.

-   Estructura de archivos y carpetas en React.
    
-   Componentes de clase.
    
-   Props.
    
-   Estados.
    
-   Ciclo de vida.
    

## Descripción

-   La aplicación se trata de un “Elige tu propia aventura”.
    
-   Te presentaremos un texto que describa una situación y dos opciones (A o B) para reaccionar ante la situación. Cada una de estas opciones te llevará por el recorrido de la historia de una forma u otra, dependiendo de tus elecciones.
    
-   El archivo "data.json" es el que se utiliza para el texto de la historia y también para las opciones.
    
-   Se trata de una historia prácticamente lineal. Si elegís una opción, esta te dará un texto único. Sin embargo, tendrás las mismas consecuencias de si hubieras elegido la otra opción. Esto es así para evitar tener un JSON extremadamente confuso, con el cual tengas que perder mucho tiempo descifrando.
    
-   A medida que hagas elecciones "A" o "B", estas se irán registrando.
    
-   Se mostrará en pantalla la última elección que realizó el usuario (por ejemplo, "Selección previa: A").
    
-   Se mostrará un historial de las selecciones anteriores (por ejemplo, "Historial: A B A").
