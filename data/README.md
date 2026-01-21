# Portfolio Data Management

This folder contains JSON files that store data for your portfolio website. Edit these files to update your projects and skills without touching the HTML code.

## Files

### `projects.json`
Contains all your project information displayed in the "Some Things I've Built" section.

#### Structure
Each project has the following fields:
- **icon**: Font Awesome icon class (e.g., `"fas fa-chart-line"`)
- **title**: Project name
- **description**: Brief description of the project
- **technologies**: Array of technology names (displayed as tags)
- **githubUrl**: GitHub repository URL (leave empty `""` to hide the GitHub icon)
- **websiteUrl**: Live website URL (leave empty `""` to hide the website icon)

#### Example
```json
{
  "icon": "fas fa-chart-line",
  "title": "My Awesome Project",
  "description": "A brief description of what this project does.",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/yourusername/project",
  "websiteUrl": "https://project.example.com"
}
```

**Note**: If you leave `githubUrl` or `websiteUrl` empty, the corresponding icon will not be displayed.

---

### `skills.json`
Contains all your skills information displayed in the "Skills & Tools" section.

#### Structure
Each skill category has the following fields:
- **icon**: Font Awesome icon class (e.g., `"fas fa-code"`)
- **title**: Skill category name
- **description**: Brief description of the skill category
- **technologies**: Array of technology names (displayed as tags)

#### Example
```json
{
  "icon": "fas fa-code",
  "title": "Programming Languages",
  "description": "Languages I've worked with extensively.",
  "technologies": ["Python", "JavaScript", "TypeScript", "Go"]
}
```

---

## How to Update

1. **Add a new project**: Add a new object to the `projects` array in `projects.json`
2. **Edit existing project**: Find the project in the array and modify its fields
3. **Remove a project**: Delete the entire project object from the array
4. **Update GitHub/Website links**: Edit the `githubUrl` or `websiteUrl` fields
5. **Hide links**: Set `githubUrl` or `websiteUrl` to an empty string `""`

6. **Same process for skills**: Edit the `skills` array in `skills.json`

## Available Font Awesome Icons

Here are some commonly used icons you can use:

### Project Icons
- `fas fa-chart-line` - Analytics/Dashboard
- `fas fa-leaf` - Sustainability/Green
- `fas fa-seedling` - Agriculture/Growth
- `fas fa-book-medical` - Medical/Healthcare
- `fas fa-users` - Collaboration/Team
- `fas fa-search` - Search/Discovery
- `fas fa-code-branch` - Code/Development
- `fas fa-question-circle` - Q&A/Help
- `fas fa-mobile-alt` - Mobile
- `fas fa-desktop` - Desktop/Web
- `fas fa-robot` - AI/ML
- `fas fa-database` - Database
- `fas fa-cloud` - Cloud/Deployment

### Skill Category Icons
- `fas fa-code` - Programming
- `fas fa-brain` - AI/ML
- `fas fa-server` - Backend
- `fas fa-laptop-code` - Frontend
- `fas fa-cloud` - DevOps/Cloud
- `fas fa-mobile-alt` - Mobile

For more icons, visit: https://fontawesome.com/icons

## Tips

- Keep descriptions concise and focused
- List technologies in order of importance
- Use consistent naming for technologies across all projects
- Test your changes by opening `index.html` in a browser
- Make sure your JSON is valid (use a JSON validator if needed)
