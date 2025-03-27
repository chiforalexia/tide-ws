<script setup>
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Landscape Valley',
    link: 'https://example.com/photo1'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: 'Mountain Forest',
    link: 'https://example.com/photo2'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    title: 'Peaceful Lake',
    link: 'https://example.com/photo3'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'Autumn Colors',
    link: 'https://example.com/photo4'
  }
];
</script>

<template>
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
  max-height: 80vh;
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

