<script lang="ts">
  import { scale } from 'svelte/transition'
  import type { Product } from '../models'

  export let product: Product
  export let opened: boolean
  export let onClick: (product: Product) => void
  export let handleClose: (product: Product) => void

  let thisCard: HTMLDivElement
  let lastScrollY = scrollY

  $: {
    if (opened) {
      lastScrollY = scrollY
      document.body.style.top = `-${scrollY}px`
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      scrollTo(0, lastScrollY)
    }
  }
  $: style = opened
    ? `
      z-index: 999;
      transform: translate3d(
        ${-thisCard?.getBoundingClientRect().left}px,
        ${-thisCard?.getBoundingClientRect().top}px,
        0
      );
    `
    : ''
</script>

<div
  bind:this="{thisCard}"
  class="product-card"
  class:opened
  style="{style}"
  on:click="{() => onClick(product)}"
>
  <div class="info">
    <div class="info--img" style="background-image: url({product.imageUrl})"></div>
    <div class="info--name">{product.name}</div>
  </div>
  {#if opened}
    <div class="close-btn" type="button" on:click|stopPropagation="{() => handleClose(product)}">
      <span>&times;</span>
    </div>
    <div class="details" in:scale="{{ duration: 500 }}">
      <div class="details--description">{product.description}</div>
    </div>
  {/if}
</div>

<style lang="scss">
  .product-card {
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0.25rem 0.25rem 1rem rgba(#000, 0.25);
    display: flex;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3), box-shadow 0.2s;

    & .close-btn {
      position: fixed;
      top: 0;
      right: 0;
      margin: 1rem;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      border-radius: 50%;
      padding: 0.5rem;
      font-size: 1.75rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      background-color: rgba($color: #ccc, $alpha: 0.5);

      &:hover {
        cursor: pointer;
      }
    }

    & .info {
      position: relative;
      width: 100%;
      height: 100%;
      transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3);

      &--img {
        position: absolute;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        transition: all 0.2s;
      }

      &--name {
        position: absolute;
        bottom: 0;
        border-top-right-radius: 1rem;
        background: #333;
        color: white;
        font-size: 1.25rem;
        margin-top: auto;
        padding: 0.5rem 1rem;
        user-select: none;
        transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3);
      }
    }

    &:not(.opened) .info:hover .info--img {
      transform: scale(1.05);
    }

    & .details {
      flex-grow: 1;
      padding: 1rem;
      width: 100%;
      background-color: white;
      transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3);
    }

    &:hover {
      box-shadow: 0.5rem 0.5rem 1rem rgba($color: #000000, $alpha: 0.5);

      &:not(.opened) {
        cursor: pointer;
      }

      &:active {
        box-shadow: 0.25rem 0.25rem 1rem rgba($color: #000000, $alpha: 0.25);
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }

    &.opened {
      z-index: 999;
      border: none;
      border-radius: 0;
      width: 100vw;
      height: 100vh;
      box-shadow: none;

      & .info {
        max-height: 30rem;

        &--name {
          text-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.75);
          padding: 1rem;
          background: none;
          font-size: 2rem;
          font-weight: 500;
        }
      }
    }
  }
</style>
