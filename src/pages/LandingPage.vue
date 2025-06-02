<template>
  <div>
    <!-- Hero Section-->
    <section>
      <Hero />
    </section>

    <!-- Website Introduction Section -->
    <section id="website-introduction">
      <WebsiteIntroduction />
    </section>

    <!-- Report Chapters -->
    <section id="chapters">
      <ImageGrid />
    </section>

    <!-- Personal Report -->
    <section id="getpersonalreport">
      <GetPersonalReport />
    </section>

    <!-- Roadmap Introduction Section-->
    <section id="roadinfo">
      <RoadmapIntro />
    </section>

    <!-- Get inspired menu -->
    <section id="photoscroll">
      <Photoscroll />
    </section>
  </div>
</template>

<script>
// com
import Hero from "../components/main/Hero.vue";
import Photoscroll from "../components/main/Photoscroll.vue";
import ImageGrid from "../components/main/ImageGrid.vue";
import SuccessStories from "../components/succes_stories/SuccessStories.vue";
import WebsiteIntroduction from "../components/main/WebsiteIntroduction.vue";
import RoadmapIntro from "../components/main/RoadmapIntro.vue";
import GetPersonalReport from "../components/main/GetPersonalReport.vue";

export default {
  name: "LandingPage",
  components: {
    Hero,
    Photoscroll,
    ImageGrid,
    SuccessStories,
    WebsiteIntroduction,
    RoadmapIntro,
    GetPersonalReport,
  },
};
</script>

