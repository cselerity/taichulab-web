<template>
    <div class="min-h-screen" style="background-color: #0a0a0f;">
        <!-- Hero Section -->
        <section class="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" style="background-color: rgba(0, 255, 136, 0.1);"></div>
                <div class="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-[100px]" style="background-color: rgba(0, 212, 255, 0.1);"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-4xl mx-auto">
                    <span class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 block" style="color: #00ff88;">{{ $t('research.subtitle') }}</span>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
                        {{ $t('research.title') }}
                    </h1>
                    <p class="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        {{ $t('research.intro') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Research Areas Grid -->
        <section class="py-20 sm:py-28 relative">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="element-card-grid gap-6 lg:gap-8">
                    <!-- Card 1 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 136, 0.2));">
                            <span class="text-3xl" style="color: #00ff88;">☯</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.qi_computing.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.qi_computing.desc') }}</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2));">
                            <span class="text-3xl" style="color: #a855f7;">∞</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.harmony_ai.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.harmony_ai.desc') }}</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(0, 212, 255, 0.2));">
                            <span class="text-3xl" style="color: #22d3ee;">◈</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.wisdom_network.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.wisdom_network.desc') }}</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2));">
                            <span class="text-3xl" style="color: #fbbf24;">◉</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.consciousness.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.consciousness.desc') }}</p>
                    </div>

                    <!-- Card 5 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2));">
                            <span class="text-3xl" style="color: #ec4899;">⟁</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.quantum_mind.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.quantum_mind.desc') }}</p>
                    </div>

                    <!-- Card 6 -->
                    <div class="futuristic-card p-8 lg:p-10 group flex flex-col items-center text-center">
                        <div class="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2));">
                            <span class="text-3xl" style="color: #10b981;">❋</span>
                        </div>
                        <h3 class="text-xl lg:text-2xl font-semibold text-white mb-4">{{ $t('research.areas.bio_ai.title') }}</h3>
                        <p class="text-gray-400 text-sm lg:text-base leading-relaxed">{{ $t('research.areas.bio_ai.desc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 sm:py-28 relative" style="background-color: rgba(18, 18, 26, 0.3);">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {{ $t('cta.ready_title') }}
                </h2>
                <p class="text-lg text-gray-400 mb-10">
                    {{ $t('cta.ready_desc') }}
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <NuxtLink to="/tech-innovation" class="btn-primary-taichu">
                        {{ $t('cta.join_us') }}
                    </NuxtLink>
                    <NuxtLink to="/" class="px-8 py-4 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/5" style="border: 1px solid rgba(0, 212, 255, 0.3); color: #00d4ff;">
                        {{ $t('cta.back_home') }}
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
