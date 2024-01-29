<template>
  <div class="header">
    <img alt="background" src="../assets/logo.png" width="600px" />
  </div>
  <div class="body">
    <div class="title">
      <b>Gerenciador completo</b> para sua clínica ou consultório
    </div>
    <div class="subtitle">
      - Gerencie salas, horários disponíveis e reservas em apenas um lugar!
    </div>
    <div class="text">
      Entre em contato com nosso suporte para obter mais informações a respeito
      da plataforma.
    </div>
  </div>
  <div class="sessao-vendas">
    <div class="option1"><p>Fale Conosco</p></div>
    <div class="option2"><p>Planos</p></div>
  </div>
  <div class="background-area">
    <img
      alt="background-logo"
      src="../assets/logo.png"
      class="background-logo"
    />
    <img alt="background" src="../assets/back.jpg" class="background" />
  </div>
  <div class="rodape">
    <img
      alt="Logo PUCRS"
      src="https://www.pucrs.br/wp-content/themes/pucrs-responsivo/images/pucrs_com_brasao_primario.svg"
      width="200px"
    />
    <div style="padding: 10px; font-size: 12px">
      Website desenvolvido para o trabalho de conclusão de curso. FullStack
      PUCRS
    </div>
    <div>Desenvolvido por: Leandro Ciescielski de Souza</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.body {
  background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
  min-height: 500px;
  margin: 50px;
}

@media screen and (max-width: 1000px) {
  .body {
    background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
    min-height: 500px;
    margin: 10px;
  }
}

.body .title {
  font-size: 80px;
  font-weight: 300;
  color: white;
  margin: 0px 100px 0px 100px;
  padding: 100px 50px 0px 50px;
}

@media screen and (max-width: 1000px) {
  .body .title {
    font-size: 50px;
    font-weight: 300;
    color: white;
    margin: 0px 10px 0px 10px;
    padding: 100px 20px 0px 20px;
  }
}

.body .subtitle {
  font-size: 30px;
  font-weight: 500;
  color: white;
  margin: 0px 50px 0px 50px;
  padding: 100px 50px 100px 50px;
}

.body .text {
  font-size: 15px;
  font-weight: 400;
  color: white;
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 100px 0px;
}

.sessao-vendas {
  width: 100%;
  display: flex;
  margin: 50px;
  min-height: 50vh;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1000px) {
  .sessao-vendas {
    width: 100%;
    display: grid;
    margin: 0px;
    min-height: 50vh;
    position: relative;
    z-index: 1;
  }
}

.sessao-vendas .option1 {
  width: 47%;
  min-height: 50vh;
  background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
}

@media screen and (max-width: 1000px) {
  .sessao-vendas .option1 {
    width: 97%;
    min-height: 50vh;
    background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    align-content: center;
    justify-self: center;
    justify-items: center;
  }
}
.sessao-vendas .option1:hover {
  background: linear-gradient(45deg, #797979, #737373);
}

.sessao-vendas .option1 p {
  font-size: 60px;
  color: white;
}
.sessao-vendas .option2 {
  width: 47%;
  background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
}

@media screen and (max-width: 1000px) {
  .sessao-vendas .option2 {
    width: 97%;
    min-height: 50vh;
    background: linear-gradient(45deg, #6c6c6c, #3e3e3e);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    align-content: center;
    justify-self: center;
    justify-items: center;
  }
}

.sessao-vendas .option2:hover {
  background: linear-gradient(45deg, #797979, #737373);
}

.sessao-vendas .option2 p {
  font-size: 60px;
  color: white;
}
.rodape {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  align-self: center;
  align-content: center;
}
.background-area {
  background-color: white;
}

.background-area .title {
  font-size: 60px;
}

@media screen and (max-width: 1000px) {
  .background-area .title {
    font-size: 60px;
  }
}

.background-logo {
  position: relative;
  z-index: 2;
  opacity: 0.1;
  margin-top: 50px;
}

@media screen and (max-width: 1000px) {
  .background-logo {
    position: relative;
    z-index: 2;
    opacity: 0.1;
    width: 100%;
    margin-top: 10px;
  }
}

.background {
  width: 100vw;
  margin-top: -600px;
  position: relative;
  z-index: 0;
  opacity: 0.3;
}
</style>
