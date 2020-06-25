<template>
  <div class="info-tools">
    <v-card>
        <v-tabs
        background-color="#00695C"
        dark
        fixed-tabs
        class = "v-tabs"
        show-arrows
        >
         <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab>
                Информация
            </v-tab>
            <v-tab>
                Инструменты
            </v-tab>
            
            <v-tab-item class='v-tab-item'>
                    <v-card flat>
                        <v-card-text>Подробная информация об объекте</v-card-text>
                        <v-text-field
                            class = 'v-text-field'
                            placeholder="Название объекта на карте"
                            outlined
                            dense
                            label="Объект"
                        ></v-text-field>
                        <v-card-text>Просмотр информации об объекте введенном выше из базы данных</v-card-text>
                        <v-btn color="info">Просмотр</v-btn>
                    </v-card>
            </v-tab-item>
            <v-tab-item class='v-tab-item'>
                    <v-card flat>
                        <v-card-text>Инструменты для создания новых объектов и добавления их в базу данных</v-card-text>
                         <v-select
                            :items="items"
                            label="Выберите тип объкта"
                            dense
                            outlined
                        ></v-select>
                        <v-card-text>Здесь будут выведены поля для ввода данных. Каждый тип объекта имеет свой набор полей</v-card-text>
                        <v-btn :color="color">Собрать объекты в файл</v-btn>
                    </v-card>
            </v-tab-item>

        </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'InfoTools',
    data: () => ({
        items: ['Здание', 'Территория', 'Река', 'Улица','Дорога','Водоем',],
        color:"info",
    })
}
</script>

<style>
    .info-tools {
        width: 300px;
    }

    .v-tab-item {
        height: 550px;
        overflow-y: scroll;
        overflow-x:hidden;
    }
    .v-text-field {
        width: 85%;
        margin: 15px auto 10px !important;
    }
    .v-tab {
        font-size: 10px !important;
    }

</style>