<template>
	<navbar></navbar>
	<ContentTv></ContentTv>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import ContentTv from "@/components/ContentTv.vue";

export default {
	name: "Tv",
	components: {
		Navbar,
		ContentTv,
	},
};
</script>
