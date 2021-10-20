<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import { Home } from './pages'

  export let url = ''
</script>

<main>
  <Router url="{url}">
    <Route path="/"><Home /></Route>
    <!-- <Route path="/:id" let:params><Home pickedProductId="{params.id}" /></Route> -->
  </Router>
</main>
