<script lang="ts">
  import { ProductList } from '../components'
</script>

<div class="hero">
  <ProductList />
</div>

<style lang="scss">
  :global(main) {
    display: flex;
    background-color: #eee;
  }

  .hero {
    padding: 1rem;
    margin: auto;
    width: 30rem;
    height: 100%;
  }
</style>
