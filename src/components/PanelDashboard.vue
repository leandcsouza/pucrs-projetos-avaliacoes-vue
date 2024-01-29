<template>
  <div class="area-table">
    <div
      style="
        background-color: rgb(182, 181, 181);
        margin: 10px 0px;
        padding: 10px;
        border-radius: 10px;
        font-weight: 800;
      "
    >
      Salas > Gerenciar Salas
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Capacidade</th>
          <th>Ativa</th>
          <th>Hora Inicio</th>
          <th>Hora Fim</th>
          <th>Duração Reserva</th>
          <th>Reservada</th>
          <th>Clinica</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.capacidade }}</td>
          <td>{{ item.ativa }}</td>
          <td>{{ item.hora_inicio }}</td>
          <td>{{ item.hora_fim }}</td>
          <td>{{ item.duracao_reserva }}</td>
          <td>{{ item.reservada }}</td>
          <td>{{ item.clinica }}</td>
        </tr>
      </tbody>
    </table>

    <button
      style="
        background-color: green;
        margin: 50px 0px;
        padding: 10px;
        width: 100%;
        border-width: 0px;
        border-radius: 10px;
        color: white;
      "
      @click="atualizaListagem"
    >
      <b>Buscar</b> resultados
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PanelDashboard",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async atualizaListagem() {
      try {
        const response = await axios.get(
          "http://localhost:8000/salas/gerenciar/",
          {
            auth: {
              username: "admin",
              password: "admin",
            },
          }
        );
        this.items = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.area-table {
  margin: 100px;
}
</style>
