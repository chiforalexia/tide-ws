<script setup>
const photos = [
  {
    id: 1,
    src: './public/tile_AC.png',
    title: 'Advanced Computing',
  },
  {
    id: 2,
    src: './public/tile_AI.png',
    title: 'Artificial Intelligence',
  },
  {
    id: 3,
    src: './public/tile_Edge.png',
    title: 'Edge',
  },
  {
    id: 4,
    src: './public/tile_Network.png',
    title: 'Network',
  }
];
</script>

<template>


<div class="container mx-auto px-4 mb-10">
      <!-- Title section -->
      <div class="text-center">
        <!-- Badge -->
        <div class="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-4">
          Technologies
        </div>

        <!-- Main title -->
        <h2 class="text-3xl md:text-4xl font-bold mb-2">
          Explore the Future of Technology
        </h2>

        <!-- Subtitle -->
        <p class="text-gray-600 max-w-2xl mx-auto">
          From AI to Quantum and beyond, explore how emerging technologies are shaping the future of research and innovation in the Netherlands.
        </p>
      </div>
    </div>

  <!-- Photo gallery section -->
  <section class="photo-gallery">
    <div class="photos-container">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="photo-item"
      >
        <div class="photo-wrapper">
          <a :href="photo.link" target="_blank" class="photo-link">
            <img :src="photo.src" :alt="photo.title">
            <div class="photo-title">
              <h3>{{ photo.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo-gallery {
  width: 100%;
  padding: 1rem;
}

.photos-container {
  display: flex;
  gap: 1rem;
  width: 100%;
  aspect-ratio: 16/9;
  max-height: 60vh;
}

.photo-item {
  flex: calc(100% / 4); /* Divide into 4 columns */
  position: relative;
  transition: all 0.5s ease;
}

.photo-item:hover {
  flex: calc((100% / 4) * 2); /* Expand on hover */
}

.photo-item:not(:hover) {
  flex: calc((100% / 4) * 0.8); /* Shrink when not hovered */
}

.photo-wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.photo-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.photo-item:hover .photo-title {
  opacity: 1;
  transform: translateY(0);
}

.photo-title h3 {
  color: white;
  margin: 0;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: 500;
}

.photo-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
}

@media (max-width: 768px) {
  .photos-container {
    flex-direction: column;
    aspect-ratio: auto;
    height: auto;
    gap: 1.5rem;
  }

  .photo-item {
    flex: 1;
    aspect-ratio: 16/9;
  }

  .photo-item:hover,
  .photo-item:not(:hover) {
    flex: 1;
  }

  .photo-title {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

