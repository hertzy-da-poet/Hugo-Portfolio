# Hugo Phan's Portfolio

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/hertzy-da-poet/Hugo-Portfolio)

This repository contains the source code for my personal portfolio website. It is a fully responsive, single-page application designed to showcase my skills, projects, and professional background. The site is built with modern web technologies, focusing on a clean UI, smooth animations, and an interactive user experience.

[**View Live Demo**](https://hertzy-da-poet.github.io/Hugo-Portfolio/)

## Features

-   **Responsive Design**: The layout adapts seamlessly to various screen sizes, from mobile phones to desktop monitors.
-   **Dynamic Typewriter Effect**: An engaging typewriter animation cycles through different job titles on the home page.
-   **Animated Skills Section**: Visual skill bars dynamically animate to represent proficiency levels in different technologies.
-   **Scroll Animations**: Subtle fade and zoom animations are implemented using the AOS (Animate on Scroll) library to enhance user engagement.
-   **Project Showcase**: A dedicated section to display featured projects with descriptions, technology stacks, and links.
-   **Functional Contact Form**: An integrated contact form that sends messages directly to my email using [Formsubmit.co](https://formsubmit.co/).
-   **Mobile Navigation**: A collapsible hamburger menu provides easy navigation on smaller devices.

## Technologies Used

-   **Frontend**:
    -   HTML5
    -   CSS3
    -   JavaScript (ES6)
-   **Libraries**:
    -   [Font Awesome](https://fontawesome.com/) for icons.
    -   [Animate on Scroll (AOS)](https://michalsnik.github.io/aos/) for scroll animations.
-   **Deployment**:
    -   GitHub Pages

## File Structure

```
.
├── .github/workflows/static.yml  # GitHub Actions workflow for deployment
├── index.html                    # Main HTML file with all page content
├── script.js                     # Handles typewriter effect and mobile navigation
└── style.css                     # Contains all styling, animations, and media queries
```

## Setup and Usage

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hertzy-da-poet/Hugo-Portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Hugo-Portfolio
    ```

3.  **Open the website:**
    Simply open the `index.html` file in your web browser to view the site.

## Deployment

This website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is managed by the GitHub Actions workflow defined in `.github/workflows/static.yml`. This workflow checks out the repository, builds the pages artifact, and deploys it to the `gh-pages` environment.