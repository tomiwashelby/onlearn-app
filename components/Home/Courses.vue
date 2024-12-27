<template>
	<section data-aos="fade up" class="mx-auto max-w-[1400px] py-24 px-32" id="course">
		<div class="grid justify-center mb-10">
			<h1 class="text-[46px] font-Inter text-color-sec font-bold">Popular Courses</h1>
			<div class="flex justify-end">
				<NuxtImg src="/svg/stripegreen.svg" class="-mr-12 -mt-2" width="170" alt="" />
			</div>
		</div>
		<ul class="flex justify-center gap-6 mb-16">
			<li v-for="(program, i) in programs" :key="i">
				<NuxtLink class="text-[12px] font-medium text-[#818C96] py-2 px-5 rounded-md border border-solid border-[#C4C4C4] cursor-pointer hover:bg-color-pri hover:text-white hover:border-color-pri duration-100">{{ program }}</NuxtLink>
			</li>
		</ul>
		<div class="grid grid-cols-4 gap-8">
			<div v-for="(course, i) in courseList" :key="i">
				<div class="rounded-2xl w-fit h-fit overflow-hidden shadow-xl">
					<div class="h-[40%]">
						<NuxtImg :src="course.image" alt="" class="w-full h-full" />
					</div>
					<div class="flex justify-center -mt-4 h-auto">
						<NuxtImg 
							:src="course.studentCount" width="190" alt="" 
						/>
					</div>
					<div class="p-4 mx-auto w-cover h-cover">
						<div 
							class="flex flex-col" 
							:class="[course.title === 'The Science of Well-Being' ? 'gap-10' : 'gap-4']"
						>
							<div>
								<span class="text-[10px] text-[#777795] -mt-2">1 - 28 July 2022</span>
								<h2 class="font-extrabold text-color-pri">{{course.title}}</h2>
								<p class="text-[10px] text-[#4D4D4D] mt-2">{{ course.description }}</p>
							</div>
							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<span class="text-[17px] font-Inter text-color-sec font-bold mr-1">{{ course.price }}</span>
									<span class="text-sm font-MavenPro text-[#777795] line-through">$500</span>
								</div>
								<NuxtLink class="text-[10px] px-4 py-2 rounded-md bg-color-pri text-white cursor-pointer hover:bg-color-sec duration-150">Enroll Now</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const programs = ['All Programme', 'UI/UX Design', 'Program Design', 'Program Design', 'Program Design'];

const courseList = ref([
	{
		image: '/img/product.png',
		studentCount: '/svg/mngtstu.svg',
		title: 'Product Management Basic - Course',
		description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
		price: '$ 380'
	},
	{
		image: '/img/data.png',
		studentCount: '/svg/datasci.svg',
		title: 'BM Data Science Professional Certificate',
		description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
		price: '$ 678'
	},
	{
		image: '/img/smile.png',
		studentCount: '/svg/scistu.svg',
		title: 'The Science of Well-Being',
		description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
		price: '$ 123'
	},
	{
		image: '/img/py.png',
		studentCount: '/svg/pystu.svg',
		title: 'Python for Everybody Specialization',
		description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
		price: '$ 567'
	}
]);
</script>

<style lang="scss" scoped>

</style>