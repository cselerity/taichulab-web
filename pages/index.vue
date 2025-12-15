<script setup lang="ts">
// Page-level logic
</script>

<template>
    <div class="flex flex-col w-full min-h-screen" style="background-color: #0a0a0f;">
        <!-- Hero Section: Centered, Futuristic -->
        <section class="relative -mt-12 sm:-mt-14 lg:-mt-16 min-h-[95vh] flex items-start justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0 z-0">
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-[#010308] via-[#02070f] to-[#05070c]"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent"></div>
                <!-- Matrix Digital Rain -->
                <div class="absolute inset-0 opacity-25 overflow-hidden mix-blend-screen">
                    <div class="digital-rain"></div>
                </div>
                <!-- Aurora Bands -->
                <div class="hero-aurora absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] max-w-6xl h-72 sm:h-80 lg:h-96 opacity-60"></div>
                <div class="hero-aurora absolute top-6 left-[8%] w-[55%] h-52 sm:h-60 rotate-12 opacity-45" style="background: linear-gradient(120deg, rgba(0, 255, 136, 0.4), rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.35));"></div>
                <div class="hero-aurora absolute top-12 right-[6%] w-[50%] h-56 sm:h-68 -rotate-6 opacity-55" style="background: linear-gradient(120deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.35), rgba(0, 212, 255, 0.4));"></div>
                <!-- Glow Orbs -->
                <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style="background-color: rgba(0, 212, 255, 0.1);"></div>
                <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse" style="background-color: rgba(0, 255, 136, 0.1);"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]" style="background-color: rgba(168, 85, 247, 0.05);"></div>
            </div>
            
            <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <!-- Subtitle Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full backdrop-blur-sm animate-fade-in-up" style="border: 1px solid rgba(0, 212, 255, 0.3); background-color: rgba(0, 212, 255, 0.05);">
                    <span class="w-2 h-2 rounded-full animate-pulse" style="background-color: #00ff88;"></span>
                    <span class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase" style="color: #00d4ff;">
                        {{ $t('hero.subtitle') }}
                    </span>
                </div>
                
                <!-- Main Title -->
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 animate-fade-in-up delay-100">
                    <span class="gradient-text">{{ $t('hero.title') }}</span>
                </h1>
                
                <!-- Slogan -->
                <p class="text-lg sm:text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    {{ $t('slogan') }}
                </p>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up delay-300">
                    <NuxtLink to="/research" class="btn-primary-taichu">
                        {{ $t('cta.explore_research') }}
                    </NuxtLink>
                    <NuxtLink to="/solutions" class="group flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] text-sm uppercase tracking-widest transition-all duration-300">
                        <span>{{ $t('cta.our_mission') }}</span>
                        <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </NuxtLink>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <div class="w-1 h-2 rounded-full mt-2 animate-pulse" style="background-color: #00d4ff;"></div>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="py-16 sm:py-20 lg:py-28 relative">
            <div class="w-full">
                <div class="text-center mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
                    <span class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 block" style="color: #00d4ff;">
                        {{ $t('sections.mission.title') }}
                    </span>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {{ $t('sections.mission.subtitle') }}
                    </h2>
                    <p class="text-base sm:text-lg text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        {{ $t('sections.mission.text') }}
                    </p>
                </div>
                
                <!-- Features Grid - Full Width Centered -->
                <div class="element-card-grid gap-8 lg:gap-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Feature 1: 无限潜能 -->
                    <div class="group">
                        <div class="flex flex-col items-center text-center p-8 lg:p-10">
                            <div class="w-24 h-24 mb-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]" style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 255, 136, 0.15)); border: 2px solid rgba(0, 255, 136, 0.3);">
                                <span class="text-5xl" style="color: #00ff88;">∞</span>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">{{ $t('features.infinite_potential.title') }}</h3>
                            <p class="text-gray-400 text-base lg:text-lg leading-relaxed">{{ $t('features.infinite_potential.desc') }}</p>
                        </div>
                    </div>
                    
                    <!-- Feature 2: 动态平衡 -->
                    <div class="group">
                        <div class="flex flex-col items-center text-center p-8 lg:p-10">
                            <div class="w-24 h-24 mb-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(244, 114, 182, 0.15)); border: 2px solid rgba(168, 85, 247, 0.3);">
                                <span class="text-5xl" style="color: #a855f7;">☯</span>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">{{ $t('features.dynamic_balance.title') }}</h3>
                            <p class="text-gray-400 text-base lg:text-lg leading-relaxed">{{ $t('features.dynamic_balance.desc') }}</p>
                        </div>
                    </div>
                    
                    <!-- Feature 3: 以人为本 -->
                    <div class="group">
                        <div class="flex flex-col items-center text-center p-8 lg:p-10">
                            <div class="w-24 h-24 mb-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]" style="background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(0, 212, 255, 0.15)); border: 2px solid rgba(34, 211, 238, 0.3);">
                                <span class="text-5xl" style="color: #22d3ee;">⌘</span>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">{{ $t('features.human_centric.title') }}</h3>
                            <p class="text-gray-400 text-base lg:text-lg leading-relaxed">{{ $t('features.human_centric.desc') }}</p>
                        </div>
                    </div>

                    <!-- Feature 4: 智能进化 -->
                    <div class="group">
                        <div class="flex flex-col items-center text-center p-8 lg:p-10">
                            <div class="w-24 h-24 mb-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(249, 115, 22, 0.15)); border: 2px solid rgba(59, 130, 246, 0.3);">
                                <span class="text-5xl" style="color: #3b82f6;">⚛</span>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">{{ $t('features.intelligent_evolution.title') }}</h3>
                            <p class="text-gray-400 text-base lg:text-lg leading-relaxed">{{ $t('features.intelligent_evolution.desc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Insights Section -->
        <section class="py-16 sm:py-20 lg:py-24 relative" style="background-color: rgba(18, 18, 26, 0.3);">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 lg:mb-16">
                    <span class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 block" style="color: #00d4ff;">{{ $t('sections.explore') }}</span>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        {{ $t('sections.recent_insights') }}
                    </h2>
                </div>

                <!-- Cards Grid - Centered Symmetrical Layout -->
                <div class="element-card-grid gap-6 lg:gap-8 max-w-4xl mx-auto">
                    <NuxtLink to="/research" class="futuristic-card p-6 lg:p-8 group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
                        <div class="w-14 h-14 lg:w-16 lg:h-16 mb-4 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]" style="background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 212, 255, 0.1)); border: 1px solid rgba(0, 255, 136, 0.2);">
                            <span class="text-2xl lg:text-3xl" style="color: #00ff88;">◈</span>
                        </div>
                        <h3 class="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors tracking-wide">
                            {{ $t('nav.research') }}
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                            {{ $t('research.desc') }}
                        </p>
                        <div class="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span class="text-xs font-medium uppercase tracking-widest" style="color: #00ff88;">{{ $t('cta.explore') }} &rarr;</span>
                        </div>
                    </NuxtLink>
                    
                    <NuxtLink to="/solutions" class="futuristic-card p-6 lg:p-8 group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
                        <div class="w-14 h-14 lg:w-16 lg:h-16 mb-4 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(244, 114, 182, 0.1)); border: 1px solid rgba(168, 85, 247, 0.2);">
                            <span class="text-2xl lg:text-3xl" style="color: #a855f7;">✣</span>
                        </div>
                        <h3 class="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors tracking-wide">
                            {{ $t('nav.solutions') }}
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                            {{ $t('solutions.desc') }}
                        </p>
                        <div class="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span class="text-xs font-medium uppercase tracking-widest" style="color: #a855f7;">{{ $t('cta.discover') }} &rarr;</span>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/tech-innovation" class="futuristic-card p-6 lg:p-8 group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
                        <div class="w-14 h-14 lg:w-16 lg:h-16 mb-4 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]" style="background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(0, 212, 255, 0.1)); border: 1px solid rgba(34, 211, 238, 0.2);">
                            <span class="text-2xl lg:text-3xl" style="color: #22d3ee;">❂</span>
                        </div>
                        <h3 class="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors tracking-wide">
                            {{ $t('nav.tech_innovation') }}
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                            {{ $t('tech_innovation.desc') }}
                        </p>
                        <div class="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span class="text-xs font-medium uppercase tracking-widest" style="color: #22d3ee;">{{ $t('cta.join_us') }} &rarr;</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]" style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1));"></div>
            </div>
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {{ $t('cta.ready_title') }}
                </h2>
                <p class="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    {{ $t('cta.ready_desc') }}
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <NuxtLink to="/social-experiment" class="btn-primary-taichu">
                        {{ $t('cta.start_exploring') }}
                    </NuxtLink>
                    <NuxtLink to="/tech-innovation" class="px-6 py-3.5 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/5" style="border: 1px solid rgba(0, 212, 255, 0.3); color: #00d4ff;">
                        {{ $t('cta.contact_us') }}
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
</style>
