<script lang="ts">
  import type { NoteType } from "$lib/utils/constants";

  export let index = 0;
  export let note: NoteType;

  const handleClick = () => {
    new Audio(note.file).play();
  };
</script>

<button class={`note-button ${note.name}`} on:click={handleClick} style={`height: ${200 - 15 * index}px`}>
  {note.name}
</button>
