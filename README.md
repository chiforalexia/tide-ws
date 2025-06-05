# Bridging Innovation and Adoption: A Digital Transformation of the SURF Tech Trends Report for Implementation in Academia.

## Project Overview
This project investigates the adoption and implementation of emerging technologies within Dutch higher education and research institutions. Conducted in collaboration with **SURF**, the study leverages both **micro** and **meso-level theoretical frameworks** to analyze technology integration challenges and opportunities.

At the micro level, the **Unified Theory of Acceptance and Use of Technology (UTAUT)** was employed to understand individual decision-making. At the meso level, frameworks such as **Strategic Foresight**, **institutional isomorphism**, and **Rational Actor Theory** provided insight into organizational behavior.


### Methodology
- The research included both qualitative and quantitative approaches.
- **Qualitative**: 3 exploratory interviews and a focus group with university staff and innovation managers.
- **Quantitative**: Machine learning methods (e.g., Recursive Feature Elimination, Lasso Regression) were applied to macro-level datasets from the Global Innovation Index (WIPO, 2024) and World Bank EdStats.

Initial findings revealed a disconnect between **bottom-up innovation initiatives** (e.g., AI, XR) and **top-down strategic decisions**. As a result, the project evolved from merely diagnosing implementation issues to **developing an intervention** that supports strategic foresight and institutional innovation planning.

### Intervention Outcome
This website offers a tailored toolkit for SURF member institutions, including:
- A personalised version of the **SURF Tech Trends Report**,
- **Success stories** from other institutions,
- An **implementation roadmap**,
  - Inclduing additional **tools** to inspire futureproofing.
  
## Folder Structure
public/
│ ├── 2023TechTrendsReport.pdf # Report PDF
│ ├── *.jpg / *.png / *.svg # Visual assets (institution images, diagrams, logos)
│ ├── phases_resources/ # Resources related to planning & implementation phases
│ ├── simplemaps/ # ML-generated data visualizations and results
├── src/
│ ├── assets/ # Static assets like icons, images, etc.
│ ├── components/ # Vue.js UI components
│ ├── pages/ # App page views
│ ├── survey/ # Survey logic and frontend components
│ ├── index.vue # Main entry Vue component
│ └── main.js # App entry script
├── tailwind.config.mjs # Tailwind CSS configuration
├── vite.config.js # Vite build configuration
├── README.md # Project overview and guide (this file)
├── package.json / package-lock.json # Project dependencies and scripts
## Methodology
- **Expert Interviews**:
  - Conducted to gather qualitative insights on AI moderation.
  
- **Thematic Analysis**:
  - Performed on interview data to identify key themes and considerations.
  
- **Survey Design and Execution**:
  - Surveys designed to capture user perceptions of AI moderation.
  
- **Quantitative Analysis**:
  - Analysis of survey responses to quantify user perceptions.
  - Logistic regression model to predict truthfulness of tweets.
  - Confusion matrix to compare classifier performance across different LLMs.

## Analysis and Interpretation
- Critical theory analysis to explore and challenge existing content moderation paradigms.
- Quantitative analysis to assess biases, user perceptions, and the effectiveness of LLMs.
- Interpretation of findings to identify potential benefits and threats of automated content moderation.

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

