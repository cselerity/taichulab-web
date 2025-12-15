<script setup lang="ts">
useHead({
  title: 'Solutions - Tai Chu Lab'
})
</script>

<template>
    <div class="pt-20 min-h-screen bg-black w-full px-6 lg:px-16">
        <div class="border-b border-gray-900 pb-12 mb-16 pt-16">
            <h1 class="text-6xl font-serif text-white mb-6">{{ $t('nav.solutions') }}</h1>
            <p class="text-xl text-gray-400 max-w-3xl font-light">
                Applied wisdom for the digital age. We build engines that think, systems that flow, and interfaces that feel.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-900 border border-gray-900 mb-32">
            <div v-for="(item, index) in $tm('solutions.items')" :key="index"
                    class="bg-black p-12 hover:bg-void transition-colors duration-500 flex flex-col group h-full">
                <div class="flex items-baseline justify-between mb-8">
                    <div class="text-6xl text-gray-800 font-serif group-hover:text-jade/20 transition-colors">{{ (index + 1).toString().padStart(2, '0') }}</div>
                    <div class="text-2xl text-jade group-hover:text-gold transition-colors">✣</div>
                </div>
                
                <h3 class="text-3xl font-serif text-white mb-6">{{ $rt(item.title) }}</h3>
                <p class="text-gray-400 text-lg font-light leading-relaxed mb-8 flex-grow">{{ $rt(item.desc) }}</p>
                
                <button class="self-start px-6 py-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gold transition-colors text-sm uppercase tracking-widest">
                    Learn More
                </button>
            </div>
        </div>
    </div>
</template>