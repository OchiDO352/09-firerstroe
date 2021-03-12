<template>
  <header>
    <div class="container">
      <h1>จำนวน {{ totalQty }} ชิ้น</h1>

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">ราการสินค้า</h5>
          </div>
          <!-- รถเข็น -->
          <div class="modal-body">
            <!-- ไม่มีสินค้าในตะกร้า!!! -->
            <div v-if="!cart.length" class="alert alert-secondary" role="alert">
              ไม่มีสินค้าในตะกร้า!!!
            </div>

            <!-- ราการสินค้าสั้งหมด -->
            <ul class="list-group">
              <li class="list-group-item" v-for="item in cart" :key="item.id">
                <!-- ปุ่มยกเลิกสินค้า -->
                <button
                  @click="removeItemFromCart(item.id)"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <!-- สินค้าในตะกร้า -->
                <div class="media">
                  <img
                    width="150px"
                    :src="item.imgUrl"
                    class="mr-3"
                    alt="item.title"
                  />
                  <div class="media-body">
                    <p class="mt-0">{{ item.title }}</p>
                    <!-- ปุ่มเพิ่ม-ลดสินค้า -->
                    <button
                      class="qty-button btn btn-sm btn-dark"
                      @click="reduceQty(item.id)"
                    >
                      -
                    </button>
                    x {{ item.qty }}
                    <button
                      class="qty-button btn btn-sm btn-dark"
                      @click="addQty(item.id)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <!-- ส่งคำสั่งซื้อเรียบร้อยแล้ว! -->
            <div
              v-if="orderPlaced"
              @click="() => (this.orderPlaced = false)"
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              ส่งคำสั่งซื้อเรียบร้อยแล้ว!
            </div>

            <!-- ปุ่มยอดรวม -->
            <center><button
              v-if="cart.length"
              @click="placeOrder"
              class="checkout-button btn btn-lg btn-block btn-dark"
              :disabled="isProcessing"
            >
              <div v-if="isProcessing" class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <span v-else>ยอดรวม {{ totalPrice.toLocaleString() }} บาท</span>
            </button></center>
          </div>
        </div>
      </div>
      
      
      <hr />
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    },
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
      }, 1000);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
header {
  margin-bottom: 3vh;
  font-family: "Prompt", sans-serif;
}
.logo {
  width: 100px;
}
.media {
  width: 100%;
  text-align: center;
}
.qty-button {
  border-radius: 50%;
  width: 30px;
}
.checkout-button {
  margin-top: 20px;
}
.badge {
  width: 4rem;
  height: 3rem;
}
</style>
