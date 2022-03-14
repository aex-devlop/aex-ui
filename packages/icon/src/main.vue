<template>
    <i :class="`aex-icon-${name}`"></i>
</template>

<script>
export default {
    name: 'AexIcon',
    props: {
        name: String,
    },
};
</script>
