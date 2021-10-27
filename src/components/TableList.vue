<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
    checkbox-color="red"
    @item-selected="checkBoxClick"
    @current-items="resetSelected"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
</template>

<script>
import EventBus from '@/eventBus';

  export default {
    props: {
        userList: {
            type:Array
        }
    },
    data() {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Checked', value: 'checked' },
        ],
        desserts: this.userList,
      }
    },
    beforeMount() {
        this.resetSelected();
    },
    methods: {
        // 체크박스 클릭 이벤트
        checkBoxClick(e) {
            // console.log(e)
            EventBus.$emit('CHECK_VAL', {
                id: e.item.id,
                checked: e.value
            })
        },
        // 체크 정보 초기화
        resetSelected() {
            this.selected = this.userList.filter(item => item.checked)
        }
    }
  }
</script>

<style>

</style>