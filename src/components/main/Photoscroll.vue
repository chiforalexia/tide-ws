<script setup>
const photos = [
  {
    id: 1,
    src: './public/Generative AI Erasmus University.jpg.avif',
    title: 'Generative AI model',
    link: 'https://www.eur.nl/en/news/erasmus-university-trains-first-generative-ai-model-social-science-and-humanities',
    description: 'learn about the Generative AI model build at the Erasmus University',
  },
  {
    id: 2,
    src: './public/tile_AI.png',
    title: 'SURF Futuring',
    link: 'https://www.surf.nl/en/themes/futuring',
    description: 'learn more about SURF Futuring and their mission',
  },
  {
    id: 3,
    src: './public/House of AI.png',
    title: 'House of AI',
    link: 'https://www.surf.nl/en/themes/futuring',
    description: 'explore a virtual network of AI labs',
  },
  {
    id: 4,
    src: './public/EDGE.jpg',
    title: 'EDGE Research Center',
    link: 'https://www.utwente.nl/en/edge/',
    description: 'read all about Twente Universities EDGE Research',
  }
];
</script>

<template>


<div class="container mx-auto px-4 mb-10">
      <!-- Title section -->
      <div class="text-center">
        <!-- Badge -->
        <div class="text-center">
            <div class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
                Stories
            </div>
        </div>

        <!-- Main title -->
        <h2 class="text-3xl md:text-4xl font-bold mb-2">
          Get inspired
        </h2>

        <!-- Subtitle -->
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore the Future of Technology: From AI to Quantum and beyond, explore how emerging technologies are shaping the future of research and innovation in the Netherlands.
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
              <p class="text-sm text-gray-300">Click to {{photo.description}}</p>
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
  max-width: 1250px;
  padding: 1rem;
  margin: 0 auto; /* Center the gallery horizontally */
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

