<script setup lang="ts">
useHead({
  title: 'Research - Tai Chu Lab'
})
</script>

<template>
    <div class="pt-20 min-h-screen bg-black w-full px-6 lg:px-16">
        <div class="border-b border-gray-900 pb-12 mb-16 pt-16">
            <h1 class="text-6xl font-serif text-white mb-6">{{ $t('nav.research') }}</h1>
            <p class="text-xl text-gray-400 max-w-3xl font-light">
                Exploring the frontiers of consciousness, energy, and computation.
                Our research delves into the "why" and "how" of existence through a technological lens.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            <div v-for="(item, index) in $tm('research.items')" :key="index" 
                    class="bg-gray-900/30 p-10 border-t-2 border-jade hover:border-gold transition-colors duration-500 h-full flex flex-col group">
                <div class="text-jade text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">◈</div>
                <h3 class="text-3xl font-serif text-white mb-6 group-hover:text-gold transition-colors">{{ $rt(item.title) }}</h3>
                <p class="text-gray-400 leading-relaxed flex-grow text-lg font-light">{{ $rt(item.desc) }}</p>
                <div class="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
                    <span class="text-xs uppercase tracking-widest text-gray-500">Domain {{ (index + 1).toString().padStart(2, '0') }}</span>
                    <span class="text-gold opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </div>
            </div>
        </div>
    </div>
</template>