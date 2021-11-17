import {
    IntroduccionInterface,
    PerfilInterface,
    AptitudesHabilidadesInterface,
    TecnologiasInterface,
    InteresesInterface,
    ContactosInterface,
    ContactoInterface,
    ProyectoInterface,
    ProyectosInterface,
    TrabajoInterface,
    TrabajosInterface,
    EducacionInterface,
    EstudiosInterface,
} from '../interface/interface'

export const INTRODUCCION: IntroduccionInterface = {
    name: 'AGUSTÍN EZEQUIEL ARENAS BAREA',
    description: 'FULL STACK WEB DEVELOPER',
}

export const PERFIL: PerfilInterface = {
    title: 'PERFIL PERSONAL',
    description: 'Programador y web developer, imaginativo, curioso y capaz de resolver diversos problemas. Soy un programador dispuesto a ayudar a mis colegas.',
}

export const APTITUDES_HABILIDADES: AptitudesHabilidadesInterface = {
    title: 'APTITUDES Y HABILIDADES',
    description: [
        'Persona motivada y disciplinada',
        'Curioso por como funcionan las apps',
        'Buen trabajador en equipo',
        'Abierto a críticas constructivas',
    ],
}

export const TECNOLOGIAS: TecnologiasInterface = {
    title: 'CONOCIMIENTOS DE TECNOLOGIAS',
    description: [
        'JavaScript',
        'React y Redux',
        'Node.js',
        'HTML, CSS y Less',
        'SQL, PostgreSQL y Sequelize',
        'MongoDB y Mongoose',
        'Git y GitHub',
        'Express',
        'JSON',
    ]
}

export const INTERESES: InteresesInterface = {
    title: 'INTERESES Y AFICCIONES',
    description: 'Tengo interés por el estudio de diferentes tecnologías. En la actualidad estoy aprendiendo por mi cuenta el uso de Typescript y React Native. También disfruto con la música y el dibujo.',
}

const CONTACTOS: ContactosInterface[] = [
    {
        type: 'Teléfono:',
        data: '+54 3517738914'
    },
    {
        type: 'Email:',
        data: 'arenasagustin@gmail.com'
    },
    {
        type: 'LinkedIn:',
        data: 'https://www.linkedin.com/in/agustin-arenas-barea/'
    },
    {
        type: 'GitHub:',
        data: 'https://github.com/ArenasAgustin'
    },
    {
        type: 'Portfolio:',
        data: 'https://portfolio-agustin-arenas.web.app/'
    }
]

export const CONTACTO: ContactoInterface = {
    title: 'INFORMACIÓN DE CONTACTO',
    description: CONTACTOS,
}

const PROYECTOS_ARRAY: ProyectoInterface[] = [
    {
        title: 'Wave Music',
        description: 'Proyecto de una consola de comandos, donde uso JavaScript, Node.',
        url: 'https://github.com/ArenasAgustin/Repo-para-PG',
        url_deploy: 'https://proyecto-grupal-18c81.web.app/',
    },
    {
        title: 'Pikemons',
        description: 'Proyecto para ver todos los pokemons y crear propios donde uso JavaScript, Node, React, Redux Express, Css, PostgreSQL y Sequelize.',
        url: 'https://github.com/ArenasAgustin/Pikemons',
    },
    {
        title: 'AgusWeather',
        description: 'Proyecto de una App del clima, donde uso JavaScript, React, Redux, Css.',
        url: 'https://github.com/ArenasAgustin/AgusWeather',
        url_deploy: 'https://arenasagustin.github.io/AgusWeather/',
    },
    {
        title: 'To do App con TypeScript',
        description: 'Proyecto de una App de tareas, donde uso TypeScript, React, Redux, Css.',
        url: 'https://github.com/ArenasAgustin/TodoAppTypescript',
        url_deploy: 'https://arenasagustin.github.io/TodoAppTypescript/',
    }
]

export const PROYECTOS: ProyectosInterface = {
    title: 'PROYECTOS',
    description: PROYECTOS_ARRAY,
}

const TRABAJOS_ARRAY: TrabajoInterface[] = [
    {
        title: 'Ventas y atención al Cliente',
        subtitle: 'Praga Revestimientos (Agosto de 2020 - Noviembre de 2021)',
        description: [
            '- Seguimiento de la satisfacción del cliente para todos los productos y servicios de la empresa.',
            '- Asistencia en resolución de problemas y búsqueda de soluciones para problemas en existentes.',
        ],
    },
    {
        title: 'Atención al Cliente (Pasantías)',
        subtitle: 'Municipalidad de Córdoba (Octubre de 2019 - Noviembre de 2019)',
        description: [
            '- Gestión personal de consultas de clientes.',
            '- Gestión de operaciones internas para la mejora de la calidad de servicio',
        ],
    },
]

export const TRABAJOS: TrabajosInterface = {
    title: 'TRABAJOS',
    description: TRABAJOS_ARRAY,
}

const EDUCACION_ARRAY: EducacionInterface[] = [
    {
        title: 'Full Stack Web Developer',
        subtitle: 'Soy Henry',
        description: 'Desde Julio de 2021 hasta Noviembre de 2021',
    },
    {
        title: 'Carrera de Ingeniería en Computación',
        subtitle: 'Facultad de Ciencias Exactas, Físicas y Naturales',
        description: 'Desde Febrero de 2020 hasta la Actualidad',

    },
    {
        title: 'Secundario Técnico Maestro Mayor de Obras',
        subtitle: 'Instituto de Enseñanza Domingo Faustino Sarmiento',
        description: 'Desde Marzo de 2015 hasta Diciembre de 2019',
    }
]

export const EDUCACION: EstudiosInterface = {
    title: 'EDUCACIÓN',
    description: EDUCACION_ARRAY,
}

const numeroDeAlumnos:string[] = ['1.000.000']

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}