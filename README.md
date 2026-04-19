# nameer.github.io

Personal portfolio website showcasing my experience as an Associate Technical Lead specializing in machine learning systems, full-stack development, and building scalable applications.

## About

This repository hosts my professional portfolio site featuring:
- Professional experience and work history
- Technical skills and expertise
- Project showcase
- Contact information

**Live Site:** [https://nameer.github.io](https://nameer.github.io)

## Technologies Used

- **Site generator:** [Jekyll](https://jekyllrb.com/) (same build as [GitHub Pages](https://pages.github.com/))
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS with responsive design
- **Icons:** Font Awesome
- **Hosting:** GitHub Pages

## Local Development

The site uses **Jekyll**. Pages such as `index.html` and `404.html` include YAML front matter and Liquid (`{% include %}`, `{{ … }}`), so opening the repo as plain static files or using only `python -m http.server` on the **source** tree will not render the site correctly. Use Jekyll locally so the output matches production.

### Prerequisites

- **Ruby** — GitHub Pages currently builds with Ruby **3.3.4** (see [Dependency versions](https://pages.github.com/versions/)). This repo includes a `.ruby-version` file for [rbenv](https://github.com/rbenv/rbenv), [asdf](https://asdf-vm.com/), and similar tools.
- **Bundler** — usually `gem install bundler` once Ruby is installed.

#### macOS: `bundle install` fails with “ffi … requires ruby version >= 3.0”

The `ruby` in your terminal is often **Apple’s system Ruby 2.6** (`/usr/bin/ruby`), which is too old. Install a current Ruby and put it **first** on your `PATH`.

**If you use Homebrew** (Apple Silicon paths shown; on Intel Macs the prefix is often `/usr/local`):

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
ruby -v   # should show 3.x
cd /path/to/nameer.github.io
bundle install
```

**If you use rbenv or asdf**, install Ruby **3.3.4** (to match `.ruby-version` and GitHub Pages), then open a new shell so `which ruby` points at that install before running `bundle install`.

### Run a local server (recommended)

From the repository root:

```bash
bundle install
bundle exec jekyll serve
```

Then open **http://127.0.0.1:4000** (default port; Jekyll prints the exact URL). The server rebuilds when you change files.

Useful variants:

```bash
# Live reload in the browser when files change (if the gem is available in the bundle)
bundle exec jekyll serve --livereload

# Use another port
bundle exec jekyll serve --port 4321
```

### Build static files only

To compile into `_site/` without starting a server:

```bash
bundle exec jekyll build
```

You can then preview the **built** output with any static file server, for example:

```bash
python3 -m http.server 8000 --directory _site
```

Open **http://localhost:8000**. Serve the `_site` directory, not the repo root.

## Project Structure

```
nameer.github.io/
├── _config.yml             # Jekyll configuration
├── _layouts/
│   └── default.html        # Shared page shell (nav, footer, scripts)
├── _includes/              # Reusable fragments (head, nav, footer)
├── index.html              # Home page (Jekyll-processed)
├── 404.html                # Error page (Jekyll-processed)
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── data/
│   ├── projects.json       # Loaded by script.js for the Projects section
│   └── skills.json         # Loaded for the Skills section
├── assets/
│   └── images/
├── Gemfile                 # github-pages gem for local parity with GitHub Pages
├── site.webmanifest
└── README.md
```

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Interactive experience tabs
- Dynamic content sections
- Mobile-friendly hamburger menu
- Optimized for performance

## Deployment

This site is published with **GitHub Pages**. Pushing to the repository’s publishing branch (often `main` or `master`, depending on your repo settings) triggers a **Jekyll build** on GitHub; the generated site is what visitors see at [nameer.github.io](https://nameer.github.io).

## Contact

- **GitHub:** [github.com/nameer](https://github.com/nameer)
- **LinkedIn:** [linkedin.com/in/pknameer](https://linkedin.com/in/pknameer)

## License

© 2026 Nameer P K. All rights reserved.