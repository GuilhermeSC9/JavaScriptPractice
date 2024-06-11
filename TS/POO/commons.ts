export class ações{
    private nome:string = "" // Qualquer informação que for declarada como "private", será de uso exclusivo desta class e não sera incluída no export.
    public nadar(){
        return console.log("Está nadando!")
    }
    public comer(){
        return console.log("Está comendo!")
    }
}