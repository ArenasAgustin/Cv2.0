export interface IntroduccionInterface {
    name: string;
    description: string;
}

export interface PerfilInterface {
    title: string;
    description: string;
}

export interface AptitudesHabilidadesInterface {
    title: string;
    description: string[];
}

export interface TecnologiasInterface {
    title: string;
    description: string[];
}

export interface InteresesInterface {
    title: string;
    description: string;
}

export interface ContactosInterface {
    type: string;
    data: string;
}

export interface ContactoInterface {
    title: string;
    description: ContactosInterface[];
}

export interface ProyectoInterface {
    title: string;
    description: string;
    url: string;
    url_deploy?: string;
}

export interface ProyectosInterface {	
    title: string;
    description: ProyectoInterface[];
}

export interface TrabajoInterface {
    title: string;
    subtitle: string;
    description: string[];
}

export interface TrabajosInterface {
    title: string;
    description: TrabajoInterface[];
}

export interface EducacionInterface {
    title: string;
    subtitle: string;
    description: string;
}

export interface EstudiosInterface {
    title: string;
    description: EducacionInterface[];
}