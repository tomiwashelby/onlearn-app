<template>
	<nav class="px-16 h-28 flex items-center justify-between text-color-pri mx-auto">
		<NuxtLink to="/">
			<NuxtImg src="/svg/headerlogo.svg" alt="" class="text-center w-[90px] h-[90px] md:w-[190px] md:h-[190px]"/>
		</NuxtLink>
		<ul class="flex gap-4 sm:gap-8 md:gap-14">
			<li v-for="(item, i) in menuItems" :key="i" class="text-color-pri font-semibold hover:text-color-sec duration-200 text-[8px] md:text-base">
				<NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
			</li>
		</ul>
		<ul class="flex gap-8">
			<li v-for="(item, i) in cta" :key="i" class="cursor-pointer px-8 font-semibold py-3 rounded-md hover:scale-[0.95] duration-200 text-[8px] md:text-base" :class="[item.bgColor, item.color]">
				<NuxtLink>{{item.title}}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const menuItems = ref([
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Career",
		path: "/",
	},
	{
		title: "Blog",
		path: "/",
	},
	{
		title: "About Us",
		path: "/",
	},
]);

const cta = ref([
	{
		title: "LOG IN",
		bgColor: "bg-white",
		color: "text-color-pri"
	},
	{
		title: "SIGN UP",
		bgColor: "bg-color-pri",
		color: "text-white"
	}
]);
</script>

<style lang="scss" scoped>

</style>