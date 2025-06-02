<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-4">Innovation around the World</h2>
      <p class="text-gray-600 text-xl max-w-2xl mx-auto">
        Discover and compare innovation stats from each country.
      </p>
    </div>

    <div class="flex justify-center mb-8 space-x-4">
      <button @click="activeTab = 'map1'" :class="tabClass('map1')">Innovation Map 1</button>
      <button @click="activeTab = 'map2'" :class="tabClass('map2')">Innovation Map 2</button>
    </div>

    <div v-show="activeTab === 'map1'" id="map1" class="map-container w-full h-[500px]"></div>
    <div v-show="activeTab === 'map2'" id="map2" class="map-container w-full h-[500px]"></div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const activeTab = ref("map1");
const mapLoaded = {
  map1: false,
  map2: false,
};

let mapdata1 = null;
let mapdata2 = null;

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.remove(); // Force re-injection
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
};

const loadEngineOnce = (() => {
  let loaded = false;
  return async () => {
    if (!loaded) {
      await loadScript("/simplemaps/worldmap.js");
      loaded = true;
    }
  };
})();

const loadMap = async (mapId) => {
  const container = document.getElementById(mapId);
  if (container) container.innerHTML = "";

  const mapdataSrc =
    mapId === "map1"
      ? "/simplemaps/mapdata.js"
      : "/simplemaps/mapdata_clustering.js";

  // Remove old engine script ONLY
  document.querySelectorAll('script[src*="worldmap.js"]').forEach(s => s.remove());
  // DO NOT delete global variables — overwrite them instead

  // Load the appropriate mapdata first
  await loadScript(mapdataSrc);

  // Set correct target div and disable auto-load
  const mapdata = window.simplemaps_worldmap_mapdata;
  if (!mapdata || typeof mapdata !== "object") {
    console.error("Mapdata not loaded or malformed");
    return;
  }

  mapdata.main_settings.div = mapId;
  mapdata.main_settings.auto_load = "no";

  // Load the map engine after the config is prepared
  await loadScript("/simplemaps/worldmap.js");

  // Force reload
  window.simplemaps_worldmap.html_id = mapId;
  window.simplemaps_worldmap.load();

  mapLoaded[mapId] = true;
};


watch(activeTab, async (newTab) => {
  await loadEngineOnce();
  await loadMap(newTab);
});

onMounted(async () => {
  await loadEngineOnce();
  await loadMap(activeTab.value);
});

const tabClass = (id) => {
  return [
    "px-6 py-2 rounded-full border font-medium",
    activeTab.value === id
      ? "bg-blue-600 text-white border-blue-600"
      : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50",
  ].join(" ");
};
</script>
