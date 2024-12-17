<template>
	<section data-aos="fade up" class="mx-auto max-w-[1400px] py-14 px-32" id="categories">
		<div class="grid justify-center mb-10">
			<h1 class="text-[46px] font-Inter text-color-pri font-bold">Course Category</h1>
			<div class="flex justify-end">
				<NuxtImg src="/svg/stripeorange.svg" class="-mr-12 -mt-2" width="170" alt="" />
			</div>
		</div>
		<p class="text-center text-xl text-[#696984]">Onlearning  is one powerful online software suite that combines all the tools <br> needed to run a successful school or office.
		</p>
		<div class="grid grid-cols-4 gap-8 py-16">
			<div v-for="(category, i) in categories" :key="i">
				<div 
					class="rounded-2xl w-64 h-80 px-4 py-8 overflow-hidden hover:shadow-xl flex flex-col justify-between items-center bg-inherit hover:bg-white duration-200"
					@mouseover="category.cta = changedCta"
					@mouseleave="category.cta = defaultCta"
				>
					<div class="w-10 h-10 rounded-full" :class="category.iconColor">
						<NuxtImg :src="category.image" alt="" class="scale-[1.7]" />
					</div>
					<h2 class="text-center text-2xl font-semibold text-color-pri">{{category.header}}</h2>
					<p class="text-center text-sm text-[#696984]">{{ category.description }}</p>
					<NuxtLink 
						class="text-[12px] px-4 py-2 rounded-md text-color-pri font-medium text-center w-[55%] cursor-pointer shadow-sm hover:bg-color-sec hover:w-[60%] hover:text-white duration-300"
					>
						{{category.cta}}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="flex justify-center">
			<NuxtLink class="text-center text-[12px] text-color-pri px-14 py-2 border border-solid border-color-pri rounded-xl font-medium hover:bg-color-pri hover:text-white duration-200 cursor-pointer">view all</NuxtLink>
		</div>
	</section>
</template>

<script setup>
const defaultCta = 'more';
const changedCta = ref('Explore courses');
const categories = ref([
	{
		image: '/img/cate-beauty.png',
		header: 'Beauty',
		description: 'One powerful online software suite that combines',
		cta: 'more',
		iconColor: 'bg-[#A3D3FF]'
	},
	{
		image: '/img/cate-med.png',
		header: 'Medical',
		description: 'One powerful online software suite that combines',
		cta: 'more',
		iconColor: 'bg-[#F1C9FF]'
	},
	{
		image: '/img/cate-sport.png',
		header: 'Sports',
		description: 'One powerful online software suite that combines',
		cta: 'more',
		iconColor: 'bg-[#FFB800]'
	},
	{
		image: '/img/cate-nut.png',
		header: 'Nutrition',
		description: 'One powerful online software suite that combines',
		cta: 'more',
		iconColor: 'bg-[#CAC9FF]'
	}
]);
</script>

<style lang="scss" scoped></style>