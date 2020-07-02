<template>
    <div>
    <ClientCard/>
    <ClientList
    class="mt-5"
    />
    
    </div>
</template>

<script>
import ClientList from './../components/ClientList.vue';
import ClientCard from './../components/ClientCard.vue';
export default {
    name:"Client",
    components:{
        ClientCard,
        ClientList
    }
}
</script>

<style scoped>

</style>