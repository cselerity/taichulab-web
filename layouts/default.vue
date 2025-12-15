<style>
@import "tailwindcss";

.navbar-taichu {
    background-color: var(--color-primordial-black) !important;
    border-bottom: 1px solid var(--color-void-grey);
    padding: 1rem 0;
}

.nav-link {
    color: var(--color-starlight-white) !important;
    font-family: var(--font-serif);
    margin: 0 0.5rem;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.active {
    color: var(--color-qi-gold) !important;
}

.navbar-brand img {
    height: 40px;
    filter: brightness(0.9);
}
</style>

<template>
    <div class="min-h-screen bg-black text-white">
        <Navbar expand="lg" class="navbar-taichu w-full border-b border-gray-800 bg-black/95 backdrop-blur fixed top-0 left-0 z-50 transition-all duration-300">
            <div class="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
                <NavbarBrand to="/" class="flex items-center gap-3 group">
                     <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-jade-900 to-gold-900 border border-gold/30 group-hover:border-gold/60 transition-colors"></div>
                    <span class="text-xl font-sans font-bold tracking-tight text-white group-hover:text-gold transition-colors">Taichu Hub</span>
                </NavbarBrand>
                
                <div class="flex items-center gap-6 lg:order-3">
                    <div class="hidden md:flex items-center gap-2">
                         <button 
                            v-for="locale in availableLocales" 
                            :key="locale.code"
                            @click="setLocale(locale.code)"
                            class="text-xs font-sans font-medium px-2 py-1 rounded transition-colors"
                            :class="locale.code === $i18n.locale ? 'text-gold bg-gold/10' : 'text-gray-500 hover:text-white'"
                        >
                            {{ locale.code.toUpperCase() }}
                        </button>
                    </div>
                    <NavbarToggler class="lg:hidden border-0 text-white p-0" />
                </div>

                <NavbarCollapse class="lg:flex-grow-0">
                    <NavbarNavList class="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center">
                        <NavItem v-for="link in ['home', 'research', 'solutions', 'tech_innovation', 'social_experiment']" :key="link">
                            <NavLink :to="link === 'home' ? '/' : '/' + link.replace('_', '-')" 
                                     active-class="text-gold"
                                     class="text-sm font-sans font-medium text-gray-400 hover:text-white transition-colors py-2 lg:py-0">
                                {{ $t(`nav.${link}`) }}
                            </NavLink>
                        </NavItem>
                    </NavbarNavList>
                </NavbarCollapse>
            </div>
        </Navbar>
        
        <main class="w-full pt-20">
            <slot />
        </main>

        <footer class="py-12 bg-void text-center border-t border-jade/30 mt-20">
            <Container>
                <p class="text-gray-500 font-serif text-sm">© {{ new Date().getFullYear() }} {{ $t('welcome') }}</p>
            </Container>
        </footer>
    </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value
})
</script>