<script setup lang="ts">
// Page-level logic
</script>

<template>
    <div class="flex flex-col w-full bg-black min-h-screen">
        <!-- Hero Section: Clean, Left-Aligned, Minimalist -->
        <section class="relative min-h-[90vh] flex items-center pt-20">
            <!-- Subtle Background -->
            <div class="absolute inset-0 z-0">
                 <!-- Gradient Mesh -->
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-void-grey),#000000)] opacity-90"></div>
            </div>
            
            <div class="relative z-10 w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div class="lg:col-span-7 flex flex-col justify-center min-h-[50vh]">
                    <div class="inline-block self-start px-3 py-1 mb-6 border border-gold/30 rounded-full bg-gold/5 text-gold text-xs font-sans tracking-widest uppercase animate-fade-in-up">
                        {{ $t('hero.subtitle') }}
                    </div>
                    <h1 class="text-6xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight animate-fade-in-up delay-100">
                        {{ $t('hero.title') }}
                    </h1>
                     <p class="text-2xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                        {{ $t('slogan') }}
                    </p>
                    <div class="flex items-center gap-6 animate-fade-in-up delay-300">
                        <NuxtLink to="/research" class="btn-primary-taichu">
                            Explore Research
                        </NuxtLink>
                        <NuxtLink to="/about" class="text-gray-400 hover:text-white text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-white pb-1">
                            Our Mission &rarr;
                        </NuxtLink>
                    </div>
                </div>
                
                <!-- Visual -->
                <div class="lg:col-span-5 h-full relative min-h-[400px]">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px]">
                         <div class="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow-reverse"></div>
                         <div class="absolute inset-12 border border-jade/10 rounded-full animate-spin-slow"></div>
                         <!-- Dynamic Lines -->
                         <div class="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission: Wide Horizontal Band -->
        <section class="py-24 border-y border-gray-900 bg-void/50">
            <div class="w-full px-6 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div class="lg:col-span-3">
                        <h2 class="text-sm font-bold text-gold uppercase tracking-[0.2em] mb-4">Our Mission</h2>
                        <h3 class="text-3xl font-serif text-white">Bridging Wisdom & Code</h3>
                    </div>
                    <div class="lg:col-span-9">
                         <p class="text-3xl text-gray-300 font-light leading-snug mb-16 max-w-5xl">
                            {{ $t('sections.mission.text') }}
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
                             <div class="flex flex-col gap-4">
                                <span class="text-3xl text-jade">∞</span>
                                <div>
                                    <h4 class="text-white font-serif text-lg mb-2">Infinite Potential</h4>
                                    <p class="text-gray-500 text-sm leading-relaxed">Unlocking new dimensions of algorithmic capability through ancient frameworks.</p>
                                </div>
                             </div>
                             <div class="flex flex-col gap-4">
                                <span class="text-3xl text-gold">☯</span>
                                <div>
                                    <h4 class="text-white font-serif text-lg mb-2">Dynamic Balance</h4>
                                    <p class="text-gray-500 text-sm leading-relaxed">Creating systems that self-regulate and adapt like natural organisms.</p>
                                </div>
                             </div>
                             <div class="flex flex-col gap-4">
                                <span class="text-3xl text-gray-500">⌘</span>
                                <div>
                                    <h4 class="text-white font-serif text-lg mb-2">Human Centric</h4>
                                    <p class="text-gray-500 text-sm leading-relaxed">Technology that amplifies human intent rather than overriding it.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features: Horizontal Cards -->
        <section class="py-32 bg-black">
            <div class="w-full px-6 lg:px-16">
                <div class="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-900 pb-6">
                     <h2 class="text-4xl font-serif text-white">{{ $t('sections.recent_insights') }}</h2>
                     <NuxtLink to="/research" class="text-jade hover:text-white transition-colors mt-4 md:mt-0 text-sm font-medium tracking-widest uppercase">View All Domains &rarr;</NuxtLink>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
                    <!-- Cards using grid-gap for borders effect -->
                    <div class="group bg-black p-12 hover:bg-void transition-colors duration-500 flex flex-col items-start min-h-[400px]">
                        <div class="text-jade mb-auto text-4xl group-hover:scale-110 transition-transform duration-500">◈</div>
                        
                        <div class="mt-8">
                            <h3 class="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{{ $t('nav.research') }}</h3>
                            <p class="text-gray-400 leading-relaxed mb-8">
                                 {{ $t('research.items[0].desc') }}
                            </p>
                            <span class="inline-flex items-center text-xs text-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Explore <span class="ml-2">&rarr;</span>
                            </span>
                        </div>
                    </div>
                    
                    <div class="group bg-black p-12 hover:bg-void transition-colors duration-500 flex flex-col items-start min-h-[400px]">
                        <div class="text-jade mb-auto text-4xl group-hover:scale-110 transition-transform duration-500">✣</div>
                        
                        <div class="mt-8">
                             <h3 class="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{{ $t('nav.solutions') }}</h3>
                            <p class="text-gray-400 leading-relaxed mb-8">
                                 {{ $t('solutions.items[0].desc') }}
                            </p>
                            <span class="inline-flex items-center text-xs text-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Discover <span class="ml-2">&rarr;</span>
                            </span>
                        </div>
                    </div>

                    <div class="group bg-black p-12 hover:bg-void transition-colors duration-500 flex flex-col items-start min-h-[400px]">
                        <div class="text-jade mb-auto text-4xl group-hover:scale-110 transition-transform duration-500">❂</div>
                        
                        <div class="mt-8">
                            <h3 class="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{{ $t('nav.tech_innovation') }}</h3>
                            <p class="text-gray-400 leading-relaxed mb-8">
                                 {{ $t('sections.mission.title') }} - Co-creating the future.
                            </p>
                            <span class="inline-flex items-center text-xs text-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Join Us <span class="ml-2">&rarr;</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

.animate-spin-slow {
    animation: spin 20s linear infinite;
}

.animate-spin-slow-reverse {
    animation: spin 25s linear infinite reverse;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>