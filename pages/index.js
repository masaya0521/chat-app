<script lang>
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      number: 100,
      price: 100,
      tax: 50,
    };
  },
  computed: {
    totalValue() {
      return this.price + this.tax;
    },
  },
  methods: {
    plus(x) {
      this.price = this.price + x;
    },
  },
});
</script>
