interface User {
    id: number;
    nombre: string;
    contrasenia: string;
    correo: string;
    tipo_usuario:string;
    compania:string;
  };

export type Usuario= Partial<User>;