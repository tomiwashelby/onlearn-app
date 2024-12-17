<template>
	<footer class="relative h-[420px] max-w-[1400px] mx-auto text-color-pri">
		<div 
			class="absolute top-0 left-0 object-cover h-full w-full text-sm bg-color-bg bg-no-repeat bg-[url('/img/footerdeco.png')] bg-right-bottom flex gap-12 px-28 pt-36"
		>
			<div class="-mt-10">
				<NuxtLink to="#home">
					<NuxtImg src="/svg/footerlogo.svg" width="160" />
				</NuxtLink>
				<ul class="mt-8 flex flex-col gap-4">
					<li v-for="(info, i) in companyInfo" :key="i">
						<div v-if="i === 0">
							<div class="flex gap-4 items-center mb-1">
								<NuxtImg :src="info.image" width="17"/>
								<span>{{ info.type }}</span>
							</div>
							<div class="w-72">{{ info.description }}</div>
						</div>
						<div v-else class="flex gap-4 items-center">
							<NuxtImg :src="info.image" width="17"/>
							<span class="w-96">{{ info.description }}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="flex gap-16 -mt-2">
				<div class="flex flex-col gap-5">
					<NuxtLink to="#categories" class="text-[15px] font-bold text-[#0A033C]">Categories</NuxtLink>
					<ul>
						<li v-for="(category, i) in categories" :key="i" class="mb-3 hover:text-color-sec duration-300">
							<NuxtLink to="#categories">{{ category }}</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="flex flex-col gap-5">
					<NuxtLink to="#course" class="text-[15px] font-bold text-[#0A033C]">Links</NuxtLink>
					<ul>
						<li v-for="(link, i) in links" :key="i" class="mb-3 hover:text-color-sec duration-300">
							<NuxtLink to="/">{{ link }}</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="mt-10">
					<p class="font-normal text-[13px] text-center mb-2 text-[#0A033C]">Stay up to date with the latest courses</p>
					<div class="w-[295px] h-12 bg-white flex items-center justify-center rounded-xl">
						<input type="text" placeholder="Email" class="pr-10 focus:outline-none">
						<button type="submit" class="px-5 py-2 bg-color-pri text-center text-white rounded-xl">Send</button>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
const companyInfo = ref([
	{
		image: '/svg/address.svg',
		type: 'Address:',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		image: '/svg/tel.svg',
		description: 'Tel: +9229341037'
	},
	{
		image: '/svg/time.svg',
		description: 'Response hours: 8 to 20'
	},
	{
		image: '/svg/mail.svg',
		description: 'Email: info@onlearn.com'
	}
]);

const categories = ref(['Counseling', 'Health and fitness', 'Individual development', 'more']);

const links = ref(['About us', 'Blog']);
</script>

<style scoped>
footer div {
	/* border-top-left-radius: 100% 70px;
	border-top-right-radius: 100% 70px; */
	clip-path: ellipse(1900px 100% at 55% 100%);
}
</style>