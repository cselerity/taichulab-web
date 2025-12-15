<style>
@import "tailwindcss";

.navbar-taichu {
    background-color: rgba(10, 10, 15, 0.95) !important;
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
    backdrop-filter: blur(20px);
    padding: 0.5rem 0;
}

@media (min-width: 1024px) {
    .navbar-taichu {
        padding: 0.75rem 0;
    }
}

.nav-link {
    color: #9ca3af !important;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.active {
    color: var(--color-gold) !important;
}

/* Mobile menu styles */
.mobile-menu-open {
    max-height: 500px;
    opacity: 1;
}

.mobile-menu-closed {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

@media (max-width: 1023px) {
    .navbar-collapse-mobile {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: rgba(10, 10, 15, 0.98);
        border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        transition: all 0.3s ease;
        backdrop-filter: blur(20px);
    }
}

/* Brand gradient */
.brand-gradient {
    background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-jade) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Footer styles */
.footer-glow {
    box-shadow: 0 -20px 80px rgba(0, 212, 255, 0.05);
}
</style>

<template>
    <div class="min-h-screen bg-void text-white" style="background-color: #0a0a0f;">
        <Navbar expand="lg" class="navbar-taichu w-full fixed top-0 left-0 z-50 transition-all duration-300">
            <div class="w-full px-4 sm:px-6 lg:px-12 h-16 lg:h-18 flex items-center justify-between">
                <NavbarBrand to="/" class="flex items-center gap-2 sm:gap-3 group">
                    <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-gold to-jade flex items-center justify-center" style="background: linear-gradient(135deg, #00d4ff, #00ff88);">
                        <span class="text-black font-bold text-sm">太</span>
                    </div>
                    <span class="text-lg sm:text-xl font-bold tracking-tight brand-gradient">{{ $t('brand') }}</span>
                </NavbarBrand>
                
                <div class="flex items-center gap-3 sm:gap-6 lg:order-3">
                    <!-- Desktop language switcher -->
                    <div class="hidden lg:flex items-center gap-0.5 px-0.5 py-0.5 rounded-full border border-gray-800">
                         <button 
                            v-for="locale in availableLocales" 
                            :key="locale.code"
                            @click="setLocale(locale.code)"
                            class="text-[0.4rem] font-semibold tracking-wide px-1 py-0.5 rounded-full transition-all duration-300"
                            :class="locale.code === $i18n.locale ? 'text-black' : 'text-gray-500 hover:text-white'"
                            :style="locale.code === $i18n.locale ? 'background: linear-gradient(135deg, #00d4ff, #00ff88); border-radius: 9999px;' : ''"
                        >
                            {{ locale.code.toUpperCase() }}
                        </button>
                    </div>
                    <NavbarToggler @click="toggleMobileMenu" class="lg:hidden border-0 text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </NavbarToggler>
                </div>

                <!-- Desktop Navigation -->
                <NavbarCollapse class="hidden lg:flex lg:flex-grow-0 lg:ml-16 xl:ml-24">
                    <NavbarNavList class="flex flex-row gap-8 xl:gap-10 items-center">
                        <NavItem v-for="link in ['home', 'research', 'solutions', 'tech_innovation', 'social_experiment']" :key="link">
                            <NavLink :to="link === 'home' ? '/' : '/' + link.replace('_', '-')" 
                                     active-class="text-gold"
                                     class="nav-link">
                                {{ $t(`nav.${link}`) }}
                            </NavLink>
                        </NavItem>
                    </NavbarNavList>
                </NavbarCollapse>
            </div>
            
            <!-- Mobile Navigation -->
            <div class="lg:hidden navbar-collapse-mobile" :class="mobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'">
                <div class="px-4 py-4 space-y-1">
                    <NuxtLink 
                        v-for="link in ['home', 'research', 'solutions', 'tech_innovation', 'social_experiment']" 
                        :key="link"
                        :to="link === 'home' ? '/' : '/' + link.replace('_', '-')"
                        @click="mobileMenuOpen = false"
                        class="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                        style="border-left: 2px solid transparent;"
                        :style="$route.path === (link === 'home' ? '/' : '/' + link.replace('_', '-')) ? 'border-left-color: #00d4ff; color: #00d4ff; background: rgba(0, 212, 255, 0.05);' : ''"
                    >
                        {{ $t(`nav.${link}`) }}
                    </NuxtLink>
                    
                    <!-- Mobile language switcher -->
                    <div class="flex items-center gap-3 px-4 py-4 border-t border-gray-800/50 mt-3">
                        <span class="text-xs text-gray-500">Language:</span>
                        <div class="flex items-center gap-0.5 px-0.5 py-0.5 rounded-full border border-gray-800">
                            <button 
                                v-for="locale in availableLocales" 
                                :key="locale.code"
                                @click="setLocale(locale.code)"
                            class="text-[0.45rem] font-semibold tracking-wide px-1 py-0.5 rounded-full transition-all duration-300"
                            :class="locale.code === $i18n.locale ? 'text-black' : 'text-gray-500 hover:text-white'"
                            :style="locale.code === $i18n.locale ? 'background: linear-gradient(135deg, #00d4ff, #00ff88); border-radius: 9999px;' : ''"
                            >
                                {{ locale.code.toUpperCase() }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
        
        <main class="w-full pt-16 lg:pt-18">
            <slot />
        </main>

        <footer class="py-12 sm:py-16 text-center border-t border-gray-800/50 footer-glow" style="background-color: #0a0a0f;">
            <Container>
                <div class="flex flex-col items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-gold to-jade flex items-center justify-center mb-2" style="background: linear-gradient(135deg, #00d4ff, #00ff88);">
                        <span class="text-black font-bold">太</span>
                    </div>
                    <p class="text-gray-400 text-sm">{{ $t('footer.copyright') }}</p>
                    <p class="text-gray-600 text-xs">{{ $t('footer.tagline') }}</p>
                </div>
            </Container>
        </footer>
    </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
