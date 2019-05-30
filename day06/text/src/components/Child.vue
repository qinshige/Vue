<template>
    <div id="app">
        <ul>
          <slot v-for="book in books" name="book" :book-name="book.name"></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Child",
        props : ["books"]

    }
</script>

<style scoped>

</style>
