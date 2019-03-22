<template>
  <div>
    <!--solo un elemento padre
    todos los elementos que modificacos se modificaran en tienpo real en la pagina -->    
    <h1>hola mundo {{msg }}es coodigo scrip</h1> <!--v- etc son directivas -->
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button><!--envento onclick llamamos el metodo guargar -->
    <table>
      <tr>
        <th>Nombre</th>
      </tr>
      <tr v-for="(num ,index) in municipios" :key="index"><!--recorremos un arreglo el cual es municipios-->          
        <td>{{num}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "william calvache hernandez",
      municipios: ["mocoa", "Villagarzon", "Pto Asis"]
    };
  },
  methods:{
      guardar(){
          alert("guardando")
          this.municipios.push(this.msg)   //acedemos a la variblae msg donde esta la informacion y guardamos en municipio
          this.msg="" //limpeamos donde ingresamos el texto 
      }
  }
};
</script>
<style>
</style>

