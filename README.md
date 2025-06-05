# Bridging Innovation and Adoption: A Digital Transformation of the SURF Tech Trends Report for Implementation in Academia.

## Project Overview
This project investigates the adoption and implementation of emerging technologies within Dutch higher education and research institutions. Conducted in collaboration with **SURF**, the study leverages both **micro** and **meso-level theoretical frameworks** to analyse technology integration challenges and opportunities.

At the micro level, the **Unified Theory of Acceptance and Use of Technology (UTAUT)** was employed to understand individual decision-making. At the meso level, frameworks such as **Strategic Foresight**, **institutional isomorphism**, and **Rational Actor Theory** provided insight into organisational behaviour.


### Methodology
- The research included both qualitative and quantitative approaches.
- **Qualitative**: 3 exploratory interviews and a focus group with university staff and innovation managers.
- **Quantitative**: Machine learning methods (e.g., Recursive Feature Elimination, Lasso Regression) were applied to macro-level datasets from the Global Innovation Index (WIPO, 2024) and World Bank EdStats.

Initial findings revealed a disconnect between **bottom-up innovation initiatives** (e.g., AI, XR) and **top-down strategic decisions**. As a result, the project evolved from merely diagnosing implementation issues to **developing an intervention** that supports strategic foresight and institutional innovation planning.

### Intervention Purpose
This website offers a tailored toolkit for SURF member institutions, including:
- A personalised version of the **SURF Tech Trends Report**,
- **Success stories** from other institutions,
- An **implementation roadmap**,
  - Inclduing additional **tools** to inspire futureproofing.
  
## Folder Structure
### 1. public/
Contains all static assets and resources used in the frontend and reporting interface.

- 2023TechTrendsReport.pdf:
The full PDF version of the SURF Tech Trends Report, personalized for institutional use.

- phases_resources/:
Visual and textual content describing stages of the implementation roadmap.

- simplemaps/:
Output of the machine learning analysis, including maps, datasets, and visualizations derived from Recursive Feature Elimination and Lasso Regression.

- Images and Logos (*.jpg, *.png, *.svg):
Visuals representing partner institutions (e.g., TU Delft, Erasmus), planning diagrams, success stories, and thematic tiles for different technologies (e.g., AI, XR, Quantum).

### 2. src/
Contains all the source code for the Vue.js web application.

- assets/:
Static media assets (e.g., icons, logos) used throughout the UI.

- components/:
Reusable Vue components used to build the app's interface (e.g., cards, navbars, layout blocks).

- pages/:
Main page views for the site (e.g., landing page, report section, roadmap view, success stories).

- survey/:
Survey-specific frontend components and logic for collecting user feedback and engagement data.

- index.vue:
Root Vue component where the app layout is initialised.

- main.js:
Application entry point where Vue, Tailwind, and router are set up.

- not_included/:
Placeholder for components or content that were developed but not used in the current release.

### 3. Root Configuration Files
- vite.config.js:
Configuration for the Vite bundler to enable fast development and build optimisations.

- tailwind.config.mjs:
Tailwind CSS customisation file defining design tokens and utility behaviour.

- postcss.config.mjs:
PostCSS configuration used to process Tailwind CSS.

- package.json / package-lock.json:
Lists all dependencies, build scripts, and metadata for the project.

- README.md:
Documentation and project overview (this file).


## Setup and Usage
### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (Node package manager)

### Install & Run Locally
```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev

# Contributing
If you would like to contribute to this project, please submit a pull request or contact the project maintainers.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

