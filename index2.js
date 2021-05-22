class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class SerVivo extends Persona{
    caminar(){
        console.log('Ahora esta caminando: ' + this.nombre);
    }
}

const ben = new SerVivo('Ben');
ben.caminar()