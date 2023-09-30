//EJERCICIO_1

//1 - Objeto type
type Superviviente = {
    altura: number | null;
    edad: number | null;
    peso: number | null;
    genero: string | null;
    
  };
  
const superviviente: Superviviente={
    altura: 50 ,
    edad:  10 ,
    peso: 57 ,
    genero: "male" ,
};


  //2 - Objeto interface
  interface DatosCapsula {
    peso: number | null;
    dimensiones: string | null;
    velocidadCurvatura: number | null;
    listadoPasajeros: string[];
    
  }
  const datosCapsula: DatosCapsula = {
    peso: 50,
    dimensiones: "100",
    velocidadCurvatura: 2000,
    listadoPasajeros: ["Pasajero1", "Pasajero2"], // Puedes agregar más nombres de pasajeros aquí
  };


  //3 - Variable let
  let datosEnterprise: { [key: string]: any } = {
  nombreNave: "Enterprise NCC-1701",
  tipoNave: "Nave estelar",
  tripulantes: 430,
  misionActual: "Exploración espacial",
  }
  


  // 4 - Object.keys y Object.values
  const tripulantesConNombres: { [key: string]: { nombre: string, datosConocidos: string[] } } = {
    tripulante1: { nombre: "Nombre1", datosConocidos: ["altura", "edad"] },
    tripulante2: { nombre: "Nombre2", datosConocidos: ["peso", "genero"] },
    
  };
  


  const nombresTripulantes = Object.keys(tripulantesConNombres);
  const datosConocidosTripulantes = Object.values(tripulantesConNombres);
  


  // Ejemplo de cómo obtener los nombres y datos conocidos de los tripulantes
  for (let i = 0; i < nombresTripulantes.length; i++) {
    console.log("Nombre: " + tripulantesConNombres[nombresTripulantes[i]].nombre);
    console.log("Datos Conocidos: " + tripulantesConNombres[nombresTripulantes[i]].datosConocidos.join(", "));
  }
  


  console.log("Datos de la cápsula:", datosCapsula);
  console.log("Datos del Enterprise:", datosEnterprise);
  console.log("Nombres de tripulantes:", nombresTripulantes);
  console.log("Datos conocidos de tripulantes:");

  for (const nombreTripulante of nombresTripulantes) {
    const datosTripulante = tripulantesConNombres[nombreTripulante];
    console.log(`Nombre: ${datosTripulante.nombre}`);
    console.log(`Datos Conocidos: ${datosTripulante.datosConocidos.join(", ")}`);
  }


const saltolinea="\n\n\n";
console.log(saltolinea);
console.log(saltolinea);

//EJERCICIO_2

//1-Clase Type
type Tripulante = {
  nombre: string;
  infeccion: boolean; // Campo para indicar si el tripulante está infectado
};

// Lista de tripulantes
const tripulacion: Tripulante[] = [
  { nombre: "Kirk", infeccion: false },
  { nombre: "Spock", infeccion: true },
  { nombre: "McCoy", infeccion: false },
  
];

//2-Funciones
console.log("Tripulantes sanos:");
tripulacion.forEach((tripulante) => {
  if (!tripulante.infeccion) {
    console.log(tripulante.nombre);
  }
});



const todosSanos = tripulacion.every((tripulante) => !tripulante.infeccion);
console.log("¿Todos están sanos y curados?", todosSanos);



const siguienteInfectado = tripulacion.find((tripulante) => tripulante.infeccion);
if (siguienteInfectado) {
  console.log("Próximo tripulante infectado:", siguienteInfectado.nombre);
} else {
  console.log("No hay tripulantes infectados.");
}



// Ponemos el unico infectado en no infectado para probar funcionamiento de funciones de nuevo 
tripulacion[1].infeccion = false;

const todosSanosActualizado = tripulacion.every((tripulante) => !tripulante.infeccion);
console.log("¿Todos están sanos y curados después de la actualización?", todosSanosActualizado);

const siguienteInfectadoActualizado = tripulacion.find((tripulante) => tripulante.infeccion);
if (siguienteInfectadoActualizado) {
  console.log("Próximo tripulante infectado después de la actualización:", siguienteInfectadoActualizado.nombre);
} else {
  console.log("No hay tripulantes infectados después de la actualización.");
}




console.log(saltolinea);
console.log(saltolinea);

//EJERCICIO_3

//1-Funcion filtro


//Buscando ayuda internet funcion verifica si fecha es valida
function isValidDate(date: string): boolean {
  // Aquí puedes implementar tu lógica para validar las fechas.
  // Por ejemplo, podrías usar expresiones regulares para verificar el formato.
  // En este ejemplo, asumimos un formato simple 'YYYY-MM-DD HH:mm:ss'.
  const dateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return dateRegex.test(date);
}


//filtrar fecha a fecha y si es valida meterla a un vector
function filterDates(dates: string[]): string[] {
  const validDates: string[] = [];

  for (const date of dates) {
    // Aquí puedes agregar tu lógica de filtrado.
    // Por ejemplo, podrías verificar si la fecha es válida y comprensible para la tripulación.
    // Supongamos que solo aceptamos fechas en formato 'YYYY-MM-DD HH:mm:ss'
    if (isValidDate(date)) {
      console.log("Fecha valida y añadida");
      validDates.push(date);
    }
  }

  return validDates;
}



// 2-Definición de la función de mapeo
function mapToExactDate(dates: string[]): ExactDate[] {
  const exactDates: ExactDate[] = [];

  for (const date of dates) {
    //usamos split para dividir en sus partes correspondientes
    const components = date.split(' ');
    const dateComponents = components[0].split('-');
    const timeComponents = components[1].split(':');
    //parsea datos en cada variable
    const exactDate: ExactDate = {
      year: parseInt(dateComponents[0]),
      month: parseInt(dateComponents[1]),
      day: parseInt(dateComponents[2]),
      hour: parseInt(timeComponents[0]),
      minute: parseInt(timeComponents[1]),
      second: parseInt(timeComponents[2]),
    };

    exactDates.push(exactDate);
  }

  return exactDates;
}

// Definición uuna clase interfaz para almacenar los datos de las pruebas
interface ExactDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}


// Pruebas 
const inputDates: string[] = ["2023-09-29 10:15:30", "invalid_date", "2024-05-15 08:30:00"];
const filteredDates = filterDates(inputDates);
const exactDates = mapToExactDate(filteredDates);

console.log(filteredDates);
console.log(exactDates);


console.log(saltolinea);
console.log(saltolinea);

//EJERCICIO_4

// Definicmos datos para realizar pruebas
const turboConductors = [
  { numero: 1, danos: 15, tribbles: 10 },
  { numero: 2, danos: 30, tribbles: 25 },
  { numero: 3, danos: 10, tribbles: 5 },
];

//Calculamos tubos con mas de 20 daños
function calcularTotalTribbles(turboConductorsData: any[]): number {
  return turboConductorsData
    .filter((tc) => tc.danos > 20)
    .reduce((total, tc) => total + tc.tribbles, 0);
}

// Función para generar la señal con todos los datos
function generarSenalLisa(turboConductorsData: any[]): string {
  return turboConductorsData
    .flatMap((tc) => [tc.numero, tc.danos, tc.tribbles])
    .join('');
}

// Función que decide si enviar señal de SOS
function debeEnviarSenalDePeligro(turboConductorsData: any[]): boolean {
  const totalTribbles = calcularTotalTribbles(turboConductorsData);
  const totalDanos = turboConductorsData.reduce((total, tc) => total + tc.danos, 0);

  return totalTribbles > 1.5 * totalDanos;
}

// Practicas para verificar
const totalTribbles = calcularTotalTribbles(turboConductors);
const senalLisa = generarSenalLisa(turboConductors);
const enviarSenalDePeligro = debeEnviarSenalDePeligro(turboConductors);

console.log('Número total de tribbles en turbo conductores con más de 20 daños:', totalTribbles);
console.log('Señal Lisa:', senalLisa);
console.log('¿Enviar señal de peligro?', enviarSenalDePeligro);


//Todo ha sido verificado en node y deno y su funcionamiento ha sido correcto

 