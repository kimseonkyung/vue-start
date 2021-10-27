<template>
  <div>
    <Modal />
    <TableList :userList="userList" />
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";
import TableList from "@/components/TableList.vue";
import EventBus from '@/eventBus';

export default {
  components: {
    Modal,
    TableList,
  },
  data() {
    return {
      // 유저 리스트 data
      userList: [
        { id:1, name:'성일', email:'one@naver.com', checked:false },
        { id:2, name:'지호', email:'jiho@naver.com', checked:true },
        { id:3, name:'다빈', email:'dabin@naver.com', checked:false },
      ]
    }
  },
  created() {
      // 모달에서 작성한 user 정보 받아오기
      EventBus.$on('FORM_DATA', (res) => {
        // console.log(res)
        this.addUser(res);
      })

      // 체크박스 클릭 정보 받아오기 
      EventBus.$on('CHECK_VAL', (res) => {
        // onsole.log(res)
        this.updateChecked(res);
      })
  },
  methods: {
    // 회원 정보 추가 메서드
    addUser(data) {
        this.userList.push({
        id: Math.random(),
        name: data.name,
        email: data.email,
        checked: data.checked,
        })
    },
    // 유저 정보 변경 메서드
    updateChecked(data) {
        // console.log(data);
        const idx = this.userList.findIndex(item => {
          return item.id === data.id;
        })
        this.userList[idx].checked = data.checked
    },
  }
};
</script>
