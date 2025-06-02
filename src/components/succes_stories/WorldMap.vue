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

let cachedMapdata1 = null;
let cachedMapdata2 = null;

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve(); // skip if already loaded
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
};

const preloadMapdata = async (src) => {
  await loadScript(src);
  const data = window.simplemaps_worldmap_mapdata;
  if (!data || typeof data !== "object") throw new Error("Invalid mapdata");
  return structuredClone
    ? structuredClone(data)
    : JSON.parse(JSON.stringify(data));
};

const replaceObjectProperties = (target, source) => {
  for (const key in target) delete target[key];
  for (const key in source) target[key] = source[key];
};

const loadMap = async (mapId) => {
  const container = document.getElementById(mapId);
  if (container) container.innerHTML = "";

  const rawConfig =
    mapId === "map1" ? cachedMapdata1 : cachedMapdata2;

  const config = structuredClone
    ? structuredClone(rawConfig)
    : JSON.parse(JSON.stringify(rawConfig));

  config.main_settings.div = mapId;
  config.main_settings.auto_load = "no";

  replaceObjectProperties(window.simplemaps_worldmap_mapdata, config);
  window.simplemaps_worldmap.html_id = mapId;
  window.simplemaps_worldmap.load();
};

onMounted(async () => {
  cachedMapdata1 = await preloadMapdata("/simplemaps/mapdata.js");
  cachedMapdata2 = await preloadMapdata("/simplemaps/mapdata_clustering.js");

  // Set initial mapdata before loading engine
  window.simplemaps_worldmap_mapdata = structuredClone
    ? structuredClone(cachedMapdata1)
    : JSON.parse(JSON.stringify(cachedMapdata1));

  window.simplemaps_worldmap_mapdata.main_settings.div = "map1";
  window.simplemaps_worldmap_mapdata.main_settings.auto_load = "no";

  await loadScript("/simplemaps/worldmap.js");

  window.simplemaps_worldmap.html_id = "map1";
  window.simplemaps_worldmap.load();
});

watch(activeTab, async (newTab) => {
  await loadMap(newTab);
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
