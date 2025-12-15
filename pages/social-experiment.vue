<script setup lang="ts">
useHead({
  title: 'Social Experiment - Tai Chu Lab'
})
</script>

<template>
    <div class="py-20 bg-black min-h-screen">
        <Container>
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-serif text-gold mb-8 animate-fade-in-up">{{ $t('nav.social_experiment') }}</h1>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div class="col-span-1 md:col-span-2 bg-void p-12 rounded-lg border border-jade/30 text-center">
                        <p class="text-2xl font-serif text-white italic mb-6">
                            "The best way to predict the future is to create it."
                        </p>
                        <p class="text-gray-500">
                            Our social experiments test the boundaries of human-AI collaboration in real-world scenarios.
                        </p>
                     </div>
                </div>
            </div>
        </Container>
    </div>
</template>