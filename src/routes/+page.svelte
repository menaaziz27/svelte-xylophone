<script lang="ts">
  import NoteButton from "$lib/Components/NoteButton.svelte";
  import { notes } from "../lib/utils/constants";
</script>

<div class="page">
  <h1>Svelte Xylophone</h1>
  <div class="xylophone">
    {#each notes as note, index}
      <NoteButton {note} {index} />
    {/each}
  </div>
</div>
