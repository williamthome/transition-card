<script lang="ts">
  import { onMount } from 'svelte'
  import { ProductCard } from '.'
  import type { Product } from '../models'

  let pickedProductId: string | undefined
  let products: Product[] = [
    {
      id: '1',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '5',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1543512214-bb1d7ac7e925?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '7',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '8',
      name: 'Veniam et dolore',
      description:
        'Pariatur ullamco et laborum ullamco exercitation fugiat nostrud. Proident adipisicing consectetur incididunt deserunt consectetur cillum incididunt non occaecat labore laborum incididunt qui. Ea velit mollit sint ipsum irure non reprehenderit fugiat esse proident. Mollit ea enim ex mollit non veniam commodo dolor ut sint irure consequat nisi amet. Ex magna sunt commodo veniam eu id. Ut ut occaecat anim elit eiusmod. Exercitation cillum id culpa sit cillum anim dolore voluptate.',
      imageUrl:
        'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ]

  const onProductCardClick = (product: Product) => {
    pickedProductId = product.id
    history.pushState({ productId: product.id, scrollY }, document.title)
  }

  const handleProductCardClose = (_product: Product) => {
    pickedProductId = undefined
    history.replaceState({ productId: undefined }, document.title)
  }

  onMount(() => {
    const { state } = history
    if (!state) return

    const { productId, scrollY } = state
    window.scrollTo(0, scrollY)
    if (products.some((p) => p.id === productId)) {
      pickedProductId = productId
    }
  })
</script>

<div class="product-list">
  {#each products as product}
    <ProductCard
      product="{product}"
      opened="{!!pickedProductId && pickedProductId === product.id}"
      onClick="{onProductCardClick}"
      handleClose="{handleProductCardClose}"
    />
  {/each}
</div>

<style lang="scss">
  .product-list {
    max-width: 30rem;
  }
</style>
