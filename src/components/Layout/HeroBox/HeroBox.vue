<template>
  <div class="hero-box-container">
    <div class="hero-box-content">
      <h1>Empreste livros!</h1>
      <ul>
        <li>Leia seus títulos favoritos por preços acessíveis</li>
        <li>Mais de 5.000 títulos à sua disposição</li>
        <li>A maior biblioteca online!</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-box-container {
  padding: 100px 0;
  height: 100%;
  align-self: flex-start;

  .hero-box-content {
    max-width: 350px;
    padding: 100px 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  & h1 {
    text-align: center;
    color: white;
    margin-bottom: 50px;
  }

  & ul {
    list-style: none;
    margin-left: 15px;

    & li {
      color: white;
      margin-bottom: 30px;

      &::before {
        content: "";
        position: absolute;
        border-radius: 3px;
        margin-top: 5px;
        margin-left: -15px;
        width: 10px;
        height: 10px;
        background: #9b97c9;
      }
    }
  }
}
</style>
