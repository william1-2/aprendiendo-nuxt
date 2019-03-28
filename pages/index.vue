<template>
  <div>
   <!-- <navbar>  a qui apareceran todos los datos que traemos de navbar.vue-->
   <!-- </navbar>   -->
    
    <!--solo un elemento padre
    todos los elementos que modificacos se modificaran en tienpo real en la pagina -->    
    <h1>hola mundo {{msg }}es coodigo scrip</h1> <!--v- etc son directivas -->
    <input type="text" v-model="msg">
      <!--<button @click="guardar">Guardar</button>envento onclick llamamos el metodo guargar -->
      <b-button variant="primary" @click="guardar"> Guardar</b-button><!--botom mediante componentes-->
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

//import navbar from '../components/navbar.vue' //retrocedemos una posicion y entramos a la carpeta componets
//import contacto from'./contacto.vue' //porque no tenemos que ingresar a otroa carpeta

export default {
//  components:{navbar}, //lo podemos usar como una etiqueta   <navbar> </navbar>
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

