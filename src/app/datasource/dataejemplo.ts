import { ProductDetail } from "./productdetail.interface"

export const lpersona = [
    {
        "id": 1,
        "nombres": "Carlos",
        "apellidos": "Gómez Pérez",
        "fecha_nacimiento": "1985-02-14",
        "genero": "M",
        "telefono": "555-1234",
        "ciudad": "Madrid",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 2,
        "nombres": "María",
        "apellidos": "López Sánchez",
        "fecha_nacimiento": "1990-06-22",
        "genero": "F",
        "telefono": "555-5678",
        "ciudad": "Barcelona",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 3,
        "nombres": "Luis",
        "apellidos": "Fernández Torres",
        "fecha_nacimiento": "1978-11-03",
        "genero": "M",
        "telefono": "555-9876",
        "ciudad": "Valencia",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 4,
        "nombres": "Ana",
        "apellidos": "Martínez Ramírez",
        "fecha_nacimiento": "1982-09-15",
        "genero": "F",
        "telefono": "555-2468",
        "ciudad": "Sevilla",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 5,
        "nombres": "Javier",
        "apellidos": "García López",
        "fecha_nacimiento": "1993-04-27",
        "genero": "M",
        "telefono": "555-1357",
        "ciudad": "Bilbao",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 6,
        "nombres": "Elena",
        "apellidos": "Hernández Gómez",
        "fecha_nacimiento": "1987-07-30",
        "genero": "F",
        "telefono": "555-9753",
        "ciudad": "Zaragoza",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 7,
        "nombres": "Miguel",
        "apellidos": "Ruiz Díaz",
        "fecha_nacimiento": "1975-12-18",
        "genero": "M",
        "telefono": "555-8642",
        "ciudad": "Murcia",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 8,
        "nombres": "Laura",
        "apellidos": "Jiménez Castro",
        "fecha_nacimiento": "1991-03-08",
        "genero": "F",
        "telefono": "555-7531",
        "ciudad": "Málaga",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 9,
        "nombres": "Fernando",
        "apellidos": "Moreno Fernández",
        "fecha_nacimiento": "1980-05-19",
        "genero": "M",
        "telefono": "555-6420",
        "ciudad": "Alicante",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 10,
        "nombres": "Isabel",
        "apellidos": "Ortiz Sánchez",
        "fecha_nacimiento": "1994-10-01",
        "genero": "F",
        "telefono": "555-5319",
        "ciudad": "Córdoba",
        "nivel_estudios": "Licenciatura"
    }/*,
    {
        "id": 11,
        "nombres": "Alberto",
        "apellidos": "Vargas Ruiz",
        "fecha_nacimiento": "1983-08-12",
        "genero": "M",
        "telefono": "555-4208",
        "ciudad": "Granada",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 12,
        "nombres": "Carmen",
        "apellidos": "Gutiérrez Romero",
        "fecha_nacimiento": "1979-01-25",
        "genero": "F",
        "telefono": "555-3197",
        "ciudad": "Valladolid",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 13,
        "nombres": "Pablo",
        "apellidos": "Núñez Molina",
        "fecha_nacimiento": "1988-02-14",
        "genero": "M",
        "telefono": "555-2086",
        "ciudad": "Palma",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 14,
        "nombres": "Sofía",
        "apellidos": "Blanco Martínez",
        "fecha_nacimiento": "1992-07-23",
        "genero": "F",
        "telefono": "555-0975",
        "ciudad": "Las Palmas",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 15,
        "nombres": "Juan",
        "apellidos": "Castro Pérez",
        "fecha_nacimiento": "1976-11-11",
        "genero": "M",
        "telefono": "555-9753",
        "ciudad": "Pamplona",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 16,
        "nombres": "Lucía",
        "apellidos": "Gil Rodríguez",
        "fecha_nacimiento": "1981-06-06",
        "genero": "F",
        "telefono": "555-8642",
        "ciudad": "Santander",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 17,
        "nombres": "Andrés",
        "apellidos": "Santos Rivera",
        "fecha_nacimiento": "1995-12-20",
        "genero": "M",
        "telefono": "555-7531",
        "ciudad": "Burgos",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 18,
        "nombres": "Patricia",
        "apellidos": "Lara González",
        "fecha_nacimiento": "1989-03-03",
        "genero": "F",
        "telefono": "555-6420",
        "ciudad": "León",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 19,
        "nombres": "Ricardo",
        "apellidos": "Reyes Navarro",
        "fecha_nacimiento": "1986-10-09",
        "genero": "M",
        "telefono": "555-5319",
        "ciudad": "Salamanca",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 20,
        "nombres": "Marta",
        "apellidos": "Méndez Pérez",
        "fecha_nacimiento": "1997-08-15",
        "genero": "F",
        "telefono": "555-4208",
        "ciudad": "Almería",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 21,
        "nombres": "Diego",
        "apellidos": "Vega García",
        "fecha_nacimiento": "1984-04-25",
        "genero": "M",
        "telefono": "555-3197",
        "ciudad": "Logroño",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 22,
        "nombres": "Teresa",
        "apellidos": "Díaz Herrera",
        "fecha_nacimiento": "1977-02-18",
        "genero": "F",
        "telefono": "555-2086",
        "ciudad": "Badajoz",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 23,
        "nombres": "Manuel",
        "apellidos": "Cruz Suárez",
        "fecha_nacimiento": "1982-05-12",
        "genero": "M",
        "telefono": "555-0975",
        "ciudad": "Huelva",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 24,
        "nombres": "Rocío",
        "apellidos": "Torres Mendoza",
        "fecha_nacimiento": "1990-09-29",
        "genero": "F",
        "telefono": "555-9753",
        "ciudad": "Lugo",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 25,
        "nombres": "Sergio",
        "apellidos": "Flores Moreno",
        "fecha_nacimiento": "1981-07-21",
        "genero": "M",
        "telefono": "555-8642",
        "ciudad": "Jaén",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 26,
        "nombres": "Victoria",
        "apellidos": "Ramos Gutiérrez",
        "fecha_nacimiento": "1992-01-11",
        "genero": "F",
        "telefono": "555-7531",
        "ciudad": "Cáceres",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 27,
        "nombres": "Raúl",
        "apellidos": "Iglesias Romero",
        "fecha_nacimiento": "1983-11-28",
        "genero": "M",
        "telefono": "555-6420",
        "ciudad": "Tarragona",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 28,
        "nombres": "Alicia",
        "apellidos": "Ortega Castro",
        "fecha_nacimiento": "1996-04-16",
        "genero": "F",
        "telefono": "555-5319",
        "ciudad": "Girona",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 29,
        "nombres": "Gabriel",
        "apellidos": "Pérez Muñoz",
        "fecha_nacimiento": "1979-10-30",
        "genero": "M",
        "telefono": "555-4208",
        "ciudad": "Toledo",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 30,
        "nombres": "Cristina",
        "apellidos": "Gómez López",
        "fecha_nacimiento": "1991-06-08",
        "genero": "F",
        "telefono": "555-3197",
        "ciudad": "Ourense",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 31,
        "nombres": "Francisco",
        "apellidos": "Soto Vargas",
        "fecha_nacimiento": "1985-12-24",
        "genero": "M",
        "telefono": "555-2086",
        "ciudad": "Melilla",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 32,
        "nombres": "Beatriz",
        "apellidos": "Martín Domínguez",
        "fecha_nacimiento": "1993-08-14",
        "genero": "F",
        "telefono": "555-0975",
        "ciudad": "Ceuta",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 33,
        "nombres": "Enrique",
        "apellidos": "Serrano Morales",
        "fecha_nacimiento": "1980-01-06",
        "genero": "M",
        "telefono": "555-9753",
        "ciudad": "Soria",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 34,
        "nombres": "Gloria",
        "apellidos": "López Ruiz",
        "fecha_nacimiento": "1994-05-18",
        "genero": "F",
        "telefono": "555-8642",
        "ciudad": "Cuenca",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 35,
        "nombres": "Víctor",
        "apellidos": "Álvarez Gil",
        "fecha_nacimiento": "1977-03-19",
        "genero": "M",
        "telefono": "555-7531",
        "ciudad": "Segovia",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 36,
        "nombres": "Sandra",
        "apellidos": "Molina Serrano",
        "fecha_nacimiento": "1988-07-09",
        "genero": "F",
        "telefono": "555-6420",
        "ciudad": "Ávila",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 37,
        "nombres": "Hugo",
        "apellidos": "Reyes Ortega",
        "fecha_nacimiento": "1982-11-04",
        "genero": "M",
        "telefono": "555-5319",
        "ciudad": "Guadalajara",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 38,
        "nombres": "Inés",
        "apellidos": "Romero Gómez",
        "fecha_nacimiento": "1996-06-26",
        "genero": "F",
        "telefono": "555-4208",
        "ciudad": "Zamora",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 39,
        "nombres": "Oscar",
        "apellidos": "Vázquez Méndez",
        "fecha_nacimiento": "1981-09-13",
        "genero": "M",
        "telefono": "555-3197",
        "ciudad": "Huesca",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 40,
        "nombres": "Clara",
        "apellidos": "Santos Pérez",
        "fecha_nacimiento": "1983-02-27",
        "genero": "F",
        "telefono": "555-2086",
        "ciudad": "Lérida",
        "nivel_estudios": "Doctorado"
    },
    {
        "id": 41,
        "nombres": "Ignacio",
        "apellidos": "Muñoz Rodríguez",
        "fecha_nacimiento": "1978-08-03",
        "genero": "M",
        "telefono": "555-0975",
        "ciudad": "Tenerife",
        "nivel_estudios": "Ingeniería"
    },
    {
        "id": 42,
        "nombres": "Natalia",
        "apellidos": "Morales López",
        "fecha_nacimiento": "1997-03-15",
        "genero": "F",
        "telefono": "555-9753",
        "ciudad": "Ciudad Real",
        "nivel_estudios": "Licenciatura"
    },
    {
        "id": 43,
        "nombres": "Eduardo",
        "apellidos": "Hidalgo Varela",
        "fecha_nacimiento": "1989-12-06",
        "genero": "M",
        "telefono": "555-8642",
        "ciudad": "Albacete",
        "nivel_estudios": "Maestría"
    },
    {
        "id": 44,
        "nombres": "Verónica",
        "apellidos": "Campos Ortega",
        "fecha_nacimiento": "1991-07-04",
        "genero": "F",
        "telefono": "555-7531",
        "ciudad": "Linares",
        "nivel_estudios": "Doctorado"
    }*/
]

export const listaproducto: ProductDetail[] = [
    {
      "productoid": 1,
      "producto": "Play Station 5",
      "modelo": "Ultra Slim",
      "proveedor": "H&B sa",
      "precio": 600.00,
      "stock": 40,
      "categoria": "OC"
    },
    {
      "productoid": 2,
      "producto": "PC Gammer",
      "modelo": "AS-001-wm",
      "proveedor": "Asus",
      "precio": 850.00,
      "stock": 2000,
      "categoria": "OC"
    },
    {
      "productoid": 3,
      "producto": "MousePad",
      "modelo": "MP-2001-A",
      "proveedor": "Juan Marcet",
      "precio": 10.00,
      "stock": 1,
      "categoria": "VA"
    },
    {
      "productoid": 4,
      "producto": "Doppler",
      "modelo": "2HXDB",
      "proveedor": "General Electric",
      "precio": 120.00,
      "stock": 11,
      "categoria": "HT"
    },
    {
      "productoid": 5,
      "producto": "AirFried",
      "modelo": "ZY 2020",
      "proveedor": "Hometech",
      "precio": 230.00,
      "stock": 0,
      "categoria": "CO"
    }
]