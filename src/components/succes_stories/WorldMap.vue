 <!-- World map component -->
<template>
    <!-- Title section -->
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <div class="bubble">
          Innovation Stats
        </div>
        <h2 class="text-4xl font-bold mb-4">Innovation around the World </h2>
        <!-- Subtitle section -->
        <p class="text-gray-600 text-xl max-w-2xl mx-auto">
          Discover and compare innovation stats form each country.
        </p>
      </div>
    </section>
    <div id="map"
        class="hidden sm:block max-w-5xl mx-auto h-[600px] border-[0.5vw] border-[#385e8a] p-[1vw] m-[3vw] z-[2]"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const s = document.createElement("script");
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.body.appendChild(s);
        });
    };

    const loadMap = async () => {
        await loadScript("/simplemaps/mapdata.js");      // Load first
        await loadScript("/simplemaps/worldmap.js");     // Then the display functions
        if (typeof simplemaps_worldmap !== "undefined") {
            simplemaps_worldmap.load();
        }
    };

    loadMap();
});
</script>

<script>
export default {
    name: "WorldMap",
};
</script>