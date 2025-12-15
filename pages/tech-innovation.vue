<script setup lang="ts">
useHead({
  title: 'Tech Innovation - Tai Chu Lab'
})
</script>

<template>
    <div class="py-20 bg-black min-h-screen">
        <Container>
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-serif text-gold mb-8 animate-fade-in-up">{{ $t('nav.tech_innovation') }}</h1>
                
                 <div class="flex flex-col items-center justify-center py-20 text-center">
                    <div class="w-24 h-24 rounded-full border-2 border-dashed border-jade animate-spin-slow mb-8 flex items-center justify-center">
                        <div class="w-16 h-16 rounded-full bg-gold/10"></div>
                    </div>
                    <h3 class="text-2xl text-white font-serif mb-4">Co-Creation Hub</h3>
                    <p class="text-gray-500 max-w-lg">
                        We are building a community where open source meets deep tech. 
                        Join us in shaping the future protocols of intelligence.
                    </p>
                    <button class="mt-8 btn-primary-taichu">Join the Community</button>
                </div>
            </div>
        </Container>
    </div>
</template>

<style scoped>
.animate-spin-slow {
    animation: spin 10s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>