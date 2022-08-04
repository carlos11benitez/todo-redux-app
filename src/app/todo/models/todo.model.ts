export class TodoClass {
  id: number
  texto: string
  completado: boolean

  constructor(texto: string){
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1)
    this.completado = false
    this.id = Math.random()
  }
}

export interface TodoInterface {
  id: number
  texto: string
  completado: boolean
}