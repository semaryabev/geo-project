<template>
  <div class="header">
      <div class="header-input">
          <input type="text" class="search" placeholder="Введите название объекта для поиска">
      </div>
      <div class="header-button">
          <button class="search-button">
              Найти
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MyHeader'
}
</script>

<style lang="scss" scope>

    .header {
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }

    .header-input {
        width: 80%;
        background-color: #fff;
    }

    .search {
        border: 2px solid #ddd;
        width: 100%;
        border-radius: 6px;
        height: 30px;
    }

    .search-button {
        border: 1px solid #ddd;
        color: #fff;
        background-color:#00695C;
        width: 170px;
        height: 30px;
        border-radius: 10px;
    }

</style>