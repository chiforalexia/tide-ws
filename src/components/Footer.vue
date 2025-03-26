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
                <div class="flex space-x-4 mt-4 text-gray-700">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
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
