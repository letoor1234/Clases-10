function testingFor() {
  const Array = [1, 2, 3];

  for (let i = 0; i < Array.length; i++) {
    console.log(i);
  }

  console.log(i);
}

// testingFor();

const arrayObject = [1, 2, 3, 4];

function tryArrayDestructuring() {
  const [a, b] = arrayObject;

  console.log(a);
  console.log(b);
}

// tryArrayDestructuring();
const alumnos = [
  {
    name: "Cristian",
    lastName: "Lopez",
    edad: 28,
    hobbies: ["tomar vino", "jugar al futbol", "jueguitos"],
    juegoFavorito: {
      gameName: "League of Legends",
      rango: "Plata",
      cantidadDeObjectos: 100,
      horasJugadas: 750,
    },
  },
  {
    name: "Tristan",
    lastName: "Landriel",
    edad: 21,
    hobbies: ["tomar fernet", "conducir", "jugar jueguitos"],
    juegoFavorito: {
      gameName: "Rocket League",
      rango: "Oro",
      cantidadDeObjectos: 250,
      horasJugadas: 850,
    },
  },
];

function tryObjectDestructuring() {
  alumnos.forEach((alumno) => {
    const { juegoFavorito, name, ...otrasPropiedades } = alumno;
    const { horasJugadas } = juegoFavorito;

    console.log(name);
    console.log(horasJugadas);
  });
}

// tryObjectDestructuring();

const unir = (...y) => {
  console.log(y);
};

const nombre = "Rodolfo";
// unir("Hola", " ", "mi nombre es ", nombre);

const spreadAndDestructuring = ({ name, lastName, ...others }) => {
  console.log(name);
  console.log(lastName);
  console.log(others);
};

spreadAndDestructuring(alumnos[0]);
