<template>
    <footer class="bg-gray-50 text-gray-700 py-12 px-6 md:px-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Branding -->
            <div>
                <div class="flex items-center">
                    <!-- Logo Section -->
                    <a href="/" class="flex items-center space-x-2">
                        <img src="/SURF_fc-01.jpg" alt="SURF Logo"
                            class="w-30 h-10 rounded-lg bg-primary flex items-center justify-center" />
                        <span class="font-display font-semibold text-xl">
                            Roadmap
                        </span>
                    </a>
                </div>
                <p class="text-sm">
                    Guiding institutions through successful technology adoption with collaborative tools and expert
                    knowledge.
                </p>
                <div class="flex items-center gap-4 mt-4">
                    <!-- LinkedIn -->
                    <a href="#" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 hover:text-blue-700"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 8.98h3.96V21H3V8.98zM8.98 8.98h3.8v1.63h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V21h-3.97v-5.59c0-1.33-.03-3.04-1.86-3.04-1.87 0-2.16 1.46-2.16 2.95V21h-3.96V8.98z" />
                        </svg>
                    </a>

                    <!-- YouTube -->
                    <a href="#" aria-label="YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 hover:text-red-600"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.6-1-2-1.1C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.7.3c-.4.1-1.2.2-2 1.1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v4c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3s5.9 0 8.7-.3c.4-.1 1.2-.2 2-1.1.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8v-4c0-1.9-.5-3.8-.5-3.8zM9.75 15.02v-6l6 3-6 3z" />
                        </svg>
                    </a>

                    <!-- Mastodon -->
                    <a href="#" aria-label="Mastodon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 hover:text-indigo-500"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M21.43 11.07c-.23 1.73-2.05 3.66-4.14 4.01-1.1.18-2.15.35-3.3.34-1.64-.02-2.64-.4-2.64-.4v2.6s.02 1.1-1.38 1.29c-1.55.2-2.77-.06-3.06-.18-.23-.1-.36-.32-.36-.57v-2.23s-3.53.77-4.48-1.58C1.23 12.47 1 9.3 1 6.2V6.1C1 3.36 3.07 1.3 5.8 1.1c0 0 1.94-.14 5.84-.14s5.84.14 5.84.14c2.74.2 4.8 2.26 4.8 5v.1c0 1.53.05 3.06-.25 4.46zM17 8.5h-2v3.5c0 .49-.4.88-.88.88h-.25c-.48 0-.87-.4-.87-.88V8.5h-2v3.5c0 .49-.4.88-.88.88h-.25c-.48 0-.87-.4-.87-.88V8.5H6v3.75c0 .49.12 1.02.37 1.4.45.7 1.28 1.13 2.48 1.17 2.3.07 2.88-.6 2.88-.6s.57.65 2.88.6c1.2-.04 2.03-.47 2.48-1.17.25-.38.37-.9.37-1.4V8.5z" />
                        </svg>
                    </a>
                </div>

            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-gray-900 font-semibold mb-4">Contact</h4>
                <ul class="space-y-3 text-sm">
                    <li class="flex items-start gap-2">
                        <!-- Location -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
                        </svg>
                        <span>123 Sample Street, Amsterdam</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <!-- Email -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>info@example.nl</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <!-- Phone -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h2l2 5-2 1a16 16 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1c-7.18 0-13-5.82-13-13V5z" />
                        </svg>
                        <span>+31 20 000 0000</span>
                    </li>
                </ul>

            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-gray-900 font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-blue-600">Knowledge Hub</a></li>
                    <li><a href="#" class="hover:text-blue-600">Success Stories</a></li>
                    <li><a href="#" class="hover:text-blue-600">Community Portal</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between text-gray-500">
            <p>© 2025 SURF. All rights reserved.</p>
            <div class="flex space-x-4 mt-2 md:mt-0">
                <a href="#" class="hover:text-blue-600">Privacy Policy</a>
                <a href="#" class="hover:text-blue-600">Terms of Service</a>
                <a href="#" class="hover:text-blue-600">Cookie Policy</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
/* Custom styles for the Footer section */
.hero {
    background: #f9fafa;
}
</style>
