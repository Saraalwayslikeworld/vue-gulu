<template>
    <svg class="lu-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'lu-icon',
    props: ['name']
}
</script>
<style lang="scss" scoped>
.lu-icon {width: 1em; height: 1em;}
</style>
