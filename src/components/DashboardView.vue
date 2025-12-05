<template>
    <MessageComp :msg="msg" v-show="msg"/> 

    <div id="burger-table" class="text-sm">
        <div>
            <div id="burger-table-heading" class="flex flex-wrap font-semibold p-4">
                <div class="order-id">ID:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="burger-table-rows" class="flex flex-wrap">
            <div class="burger-table-row flex flex-wrap p-4" v-for="burger in burgers" :key="burger.id">
                <div class="order-number">{{ burger.id }}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carne }}</div>

                <div>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">
                            {{ opcional }}
                        </li>
                    </ul>
                </div>
                
                <div>
                    <select name="status" id="status" class="cursor-pointer p-1" @change="updateBurger($event, burger.id)">
                        <option value="">Selecione</option>
                        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">
                            {{ s.tipo }}
                        </option>
                    </select>
                    <button class="delete-btn p-1 rounded-md" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MessageComp from './MessageComp.vue';

export default {
    name: "DashboardView",
    components: {
        MessageComp
    },  
    data() {
        return {
            burgers: null,
            burger_id: null,
            status: [],
            msg: null
        }
    },
    methods: {
        async getPedidos() {
            const req = await fetch("http://localhost:3000/burgers");

            const data = await req.json();

            this.burgers = data;

            console.log(this.burgers);

            // Resgatar os status
            this.getStatus();
        },
        async getStatus() {
            const req = await fetch("http://localhost:3000/status");
            const data = await req.json();

            this.status = data;

            console.log(data);
        },
        async deleteBurger(id) {
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();
            console.log(res);

            // msg
            this.msg = `Pedido removido com sucesso!`;

            setInterval(() => {
                this.msg = null;
            }, 3000);

            this.getPedidos();
        },
        async updateBurger(event, id) {
            const option = event.target.value;

            const dataJson = JSON.stringify({ status: option });

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            });

            const res = await req.json();

            console.log(res);
        }
    },
    mounted() {
        this.getPedidos();
    }
}
</script>

<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading {
    border-bottom: 2px solid #333;
  }

  .burger-table-row {
    width: 100%;
    border-bottom: 1px solid #CCC;
  }

  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }

  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    transition: .5s;
  }
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>