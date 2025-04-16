<template>
  <div class="container mx-auto px-4 py-16 max-w-3xl">
    <div class="card border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="card-header bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg p-6">
        <h2 class="text-2xl text-purple-700">Your Institution Profile</h2>
        <p class="text-gray-600">
          Tell us about your institution to receive personalized technology trend recommendations.
        </p>

        <div class="w-full h-2 bg-gray-200 rounded-full mt-4">
          <div
            class="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-in-out"
            :style="{ width: formProgress + '%' }"
          ></div>
        </div>
        <p class="text-xs text-right text-gray-500 mt-1">{{ formProgress }}% complete</p>
      </div>

      <div class="card-content pt-6 p-6">
        <form @submit.prevent="onSubmit" class="space-y-8">
          <!-- Institution -->
          <div class="form-item transition-all duration-300 hover:-translate-y-0.5">
            <label class="flex items-center gap-2 text-purple-700">
              <svg class="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 10l9-7 9 7" />
                <path d="M4 10v10h4v-6h8v6h4V10" />
              </svg>
              Your Institution
            </label>
            <select v-model="form.institution" class="input border-purple-200 focus:ring-purple-500 w-full">
              <option disabled value="">Select your Institution</option>
              <option v-for="item in institutions" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <p class="text-gray-500 text-sm">
              The educational or research institution you represent.
            </p>
          </div>


          <!-- Institution Type -->
          <div class="form-item transition-all duration-300 hover:-translate-y-0.5">
            <label class="flex items-center gap-2 text-purple-700">
              <!-- Simplified Building SVG for Institution Type -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M3 10V3h18v7M3 10h18v10H3z" />
              </svg>
              Your Institution Type
            </label>
            <select v-model="form.institutionType" class="input border-purple-200 focus:ring-purple-500 w-full">
              <option disabled value="">Select your institution type</option>
              <option v-for="item in institution_type" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <p class="text-gray-500 text-sm">
              The type of educational or research institution you represent.
            </p>
          </div>

          <!-- Institution Size -->
          <div class="form-item space-y-3 transition-all duration-300 hover:-translate-y-0.5">
            <label class="flex items-center gap-2 text-blue-600">
              <!-- Simplified SVG for People -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <!-- First head -->
                <circle cx="7" cy="7" r="3" />
                <!-- Second head -->
                <circle cx="17" cy="7" r="3" />
                <!-- First body -->
                <path d="M4 17c0-2 1.5-4 3-4h0c1.5 0 3 2 3 4v1H4v-1z" />
                <!-- Second body -->
                <path d="M14 17c0-2 1.5-4 3-4h0c1.5 0 3 2 3 4v1h-6v-1z" />
              </svg>
              Size of Institution
            </label>
            <div class="flex flex-col space-y-1">
              <div
                v-for="size in institutionSizes"
                :key="size.value"
                class="flex items-center space-x-3 rounded-md p-2 hover:bg-purple-50 transition-colors"
              >
                <input
                  type="radio"
                  :value="size.value"
                  v-model="form.size"
                  class="text-purple-600"
                  :id="size.value"
                />
                <label :for="size.value" class="text-gray-700 cursor-pointer">{{ size.label }}</label>
              </div>
            </div>
          </div>

          <!-- Institution Values -->
          <div class="form-item transition-all duration-300 hover:-translate-y-0.5">
            <label class="flex items-center gap-2 text-green-600 text-base mb-1">
              <!-- Simplified SVG for Heart -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Values
            </label>
            <p class="text-gray-500 text-sm mb-3">
              Select the values that are most important to your institution.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="item in institutionValues"
                :key="item.id"
                class="flex flex-row items-start space-x-3 rounded-md p-3 hover:bg-green-50 transition-colors border border-transparent hover:border-green-100"
              >
                <input
                  type="checkbox"
                  :id="item.id"
                  :value="item.id"
                  :checked="form.values.includes(item.id)"
                  @change="handleCheckboxChange($event, item.id)"
                  class="accent-green-600"
                />
                <label :for="item.id" class="text-gray-700 cursor-pointer">{{ item.label }}</label>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            :disabled="formProgress < 100"
          >
            Get Personalized Recommendations
          </button>

          <p v-if="formProgress < 100" class="text-center text-sm text-amber-600">
            Please complete all fields to continue
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const form = ref({
      institution: "",
      institutionType: "",
      size: "",
      values: [],
    });

    const institutions = [
      { value: "aeres-group-groenhorst-college", label: "Aeres Group (Groenhorst College)" },
      { value: "aeres-group-groenhorst-college", label: "Aeres Group (Groenhorst College)" },
      { value: "aeres-university-college", label: "Aeres University College" },
      { value: "albeda-college", label: "Albeda College" },
      { value: "amsterdam-school-of-the-arts", label: "Amsterdam School of the Arts" },
      { value: "amsterdam-umc", label: "Amsterdam UMC" },
      { value: "artEZ-university-for-the-arts", label: "ArtEZ University for the Arts" },
      { value: "avans-university-of-applied-sciences", label: "Avans University of Applied Sciences" },
      { value: "breda-university-of-applied-sciences", label: "Breda University of Applied Sciences" },
      { value: "cibap-school-of-design", label: "CIBAP School of Design" },
      { value: "codarts-rotterdam", label: "Codarts Rotterdam" },
      { value: "curio", label: "Curio" },
      { value: "da-vinci-college", label: "Da Vinci College" },
      { value: "delft-university-of-technology", label: "Delft University of Technology" },
      { value: "de-rooi-pannen", label: "De Rooi Pannen" },
      { value: "design-academy-eindhoven", label: "Design Academy Eindhoven" },
      { value: "dcterra", label: "DCTerra" },
      { value: "deltion-college", label: "Deltion College" },
      { value: "driestar-university-of-applied-sciences", label: "Driestar University of Applied Sciences" },
      { value: "eindhoven-university-of-technology", label: "Eindhoven University of Technology" },
      { value: "ede-university-of-applied-sciences", label: "Ede University of Applied Sciences" },
      { value: "erasmus-university-medical-centre", label: "Erasmus University Medical Centre" },
      { value: "erasmus-university-rotterdam", label: "Erasmus University Rotterdam" },
      { value: "firda", label: "Firda" },
      { value: "fontys-universities-of-applied-sciences", label: "Fontys Universities of Applied Sciences" },
      { value: "gerrit-rietveld-academie", label: "Gerrit Rietveld Academie" },
      { value: "gilde-opleidingen", label: "Gilde Opleidingen" },
      { value: "graafschap-college", label: "Graafschap College" },
      { value: "groningen-university-of-applied-sciences", label: "Groningen University of Applied Sciences" },
      { value: "graphic-lyceum-rotterdam", label: "Graphic Lyceum Rotterdam" },
      { value: "graphic-lyceum-utrecht", label: "Graphic Lyceum Utrecht" },
      { value: "hotelschool-the-hague", label: "Hotelschool The Hague" },
      { value: "has-university-of-applied-sciences", label: "HAS University of Applied Sciences" },
      { value: "hz-university-of-applied-sciences", label: "HZ University of Applied Sciences" },
      { value: "integral-cancer-centre-of-the-netherlands", label: "Integral Cancer Centre of the Netherlands" },
      { value: "iselinge-university-of-applied-sciences", label: "Iselinge University of Applied Sciences" },
      { value: "kempel-university-of-applied-sciences", label: "Kempel University of Applied Sciences" },
      { value: "knmi", label: "KNMI" },
      { value: "kpz-university-of-applied-sciences", label: "KPZ University of Applied Sciences" },
      { value: "landstede-mbo", label: "Landstede MBO" },
      { value: "leiden-instrumentation-school", label: "Leiden Instrumentation School" },
      { value: "leiden-university", label: "Leiden University" },
      { value: "leiden-university-medical-centre", label: "Leiden University Medical Centre" },
      { value: "lentiz-onderwijsgroep", label: "Lentiz Onderwijsgroep" },
      { value: "maastricht-university", label: "Maastricht University" },
      { value: "maastricht-university-hospital", label: "Maastricht University Hospital" },
      { value: "media-college-amsterdam", label: "Media College Amsterdam" },
      { value: "marnix-academy", label: "Marnix Academy" },
      { value: "mbo-amersfoort", label: "MBO Amersfoort" },
      { value: "mbo-rhineland", label: "MBO Rhineland" },
      { value: "mbo-utrecht", label: "MBO Utrecht" },
      { value: "national-archives", label: "National Archives" },
      { value: "netherlands-forensic-institute", label: "Netherlands Forensic Institute" },
      { value: "netherlands-organisation-for-scientific-research", label: "Netherlands Organisation for Scientific Research" },
      { value: "nimeto-utrecht", label: "Nimeto Utrecht" },
      { value: "noorderpoort", label: "Noorderpoort" },
      { value: "police-academy", label: "Police Academy" },
      { value: "radboud-university-nijmegen", label: "Radboud University Nijmegen" },
      { value: "radboudumc", label: "Radboudumc" },
      { value: "roc-alfa-college", label: "ROC Alfa-college" },
      { value: "roc-aventus", label: "ROC Aventus" },
      { value: "roc-central-netherlands", label: "ROC Central Netherlands" },
      { value: "roc-mondriaan", label: "ROC Mondriaan" },
      { value: "roc-nijmegen", label: "ROC Nijmegen" },
      { value: "roc-nova-college", label: "ROC Nova College" },
      { value: "roc-rivor", label: "ROC Rivor" },
      { value: "roc-van-amsterdam-flevoland", label: "ROC van Amsterdam-Flevoland" },
      { value: "roc-of-twente", label: "ROC of Twente" },
      { value: "royal-library", label: "Royal Library" },
      { value: "royal-netherlands-academy-of-arts-and-sciences", label: "Royal Netherlands Academy of Arts and Sciences" },
      { value: "rivm", label: "RIVM" },
      { value: "saxion", label: "Saxion" },
      { value: "scalda", label: "Scalda" },
      { value: "sivon", label: "SIVON" },
      { value: "sintlucas", label: "SintLucas" },
      { value: "soma-college", label: "SOMA College" },
      { value: "stc-group", label: "STC Group" },
      { value: "svo-foundation-for-vocational-education", label: "SVO Foundation for Vocational Education" },
      { value: "summa-college", label: "Summa College" },
      { value: "talland-college", label: "Talland College" },
      { value: "the-hague-university-of-applied-sciences", label: "The Hague University of Applied Sciences" },
      { value: "ter-aa", label: "Ter AA" },
      { value: "tno", label: "TNO" },
      { value: "university-for-humanistics", label: "University for Humanistics" },
      { value: "university-of-amsterdam", label: "University of Amsterdam" },
      { value: "university-of-applied-sciences-amsterdam", label: "University of Applied Sciences Amsterdam" },
      { value: "university-of-applied-sciences-inholland", label: "University of Applied Sciences Inholland" },
      { value: "university-of-applied-sciences-ipabo", label: "University of Applied Sciences iPabo" },
      { value: "university-of-applied-sciences-leiden", label: "University of Applied Sciences Leiden" },
      { value: "university-of-applied-sciences-rotterdam", label: "University of Applied Sciences Rotterdam" },
      { value: "university-of-applied-sciences-utrecht", label: "University of Applied Sciences Utrecht" },
      { value: "university-of-applied-sciences-viaa", label: "University of Applied Sciences Viaa" },
      { value: "university-of-arnhem-and-nijmegen", label: "University of Arnhem and Nijmegen" },
      { value: "university-of-groningen", label: "University of Groningen" },
      { value: "university-of-twente", label: "University of Twente" },
      { value: "utrecht-school-of-the-arts", label: "Utrecht School of the Arts" },
      { value: "utrecht-university", label: "Utrecht University" },
      { value: "van-hall-larenstein-university-of-applied-sciences", label: "Van Hall Larenstein University of Applied Sciences" },
      { value: "windesheim", label: "Windesheim" },
      { value: "willem-i-college", label: "Willem I College" },
      { value: "wood-and-furnishings-college", label: "Wood and Furnishings College" },
      { value: "yonder", label: "Yonder" },
      { value: "yuverta", label: "Yuverta" },
      { value: "zadkine", label: "Zadkine" },
      { value: "zonmw", label: "ZonMw" },
      { value: "zone-college", label: "Zone.College" },
      { value: "zuyd-university-of-applied-sciences", label: "Zuyd University of Applied Sciences" }



    ];

    const institution_type = [
      { value: "university", label: "University" },
      { value: "college", label: "College" },
      { value: "mbo", label: "Mbo" },
      { value: "umc", label: "Umc" },
      { value: "research", label: "Research" },
      { value: "other", label: "Other" },
    ];

    const institutionSizes = [
      { value: "small", label: "Small (< 1,000 students/members)" },
      { value: "medium", label: "Medium (1,000 - 10,000 students/members)" },
      { value: "large", label: "Large (10,000 - 30,000 students/members)" },
      { value: "very-large", label: "Very Large (> 30,000 students/members)" },
    ];

    const institutionValues = [
      { id: "autonomy", label: "Autonomy" },
      { id: "humanity", label: "Humanity" },
      { id: "justice", label: "Justice" },
    ];

    const formProgress = computed(() => {
      let progress = 0;
      if (form.value.institution) progress += 25;
      if (form.value.institutionType) progress += 25;
      if (form.value.size) progress += 25;
      if (form.value.values.length > 0) progress += 25;
      return progress;
    });

    const handleCheckboxChange = (event, id) => {
      if (event.target.checked) {
        if (form.value.values.length < 3) {
          form.value.values.push(id);
        }
      } else {
        form.value.values = form.value.values.filter((v) => v !== id);
      }
    };

    const onSubmit = () => {
      console.log("Form submitted:", form.value);
      router.push({ path: "/recommendations", state: { formData: form.value } });
    };

    return {
      form,
      formProgress,
      onSubmit,
      institutions,
      institution_type,
      institutionSizes,
      institutionValues,
      handleCheckboxChange,
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
}
.card-header {
  border-bottom: 1px solid #e5e7eb;
}
.input {
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
}
</style>
