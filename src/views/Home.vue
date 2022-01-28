<template>
	<navbar></navbar>
	<Content></Content>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Content from "@/components/Content.vue";

export default {
	name: "Home",
	components: {
		Navbar,
		Content,
	},
};
</script>
