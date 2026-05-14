# CSP451 - CheckPoint 1: Introduction to Git and Version Control

> A hands-on project demonstrating Git fundamentals, GitHub repository
> management, and a feature-branch workflow. Built for CSP451 - DevOps
> and Cloud-Adjacent Topics at Seneca Polytechnic, Summer 2026.

---

## Description

This project is a static web application created as part of CheckPoint 1
for CSP451. It demonstrates:

- Initializing and managing a local Git repository
- Authoring commits using the Conventional Commits standard
- Publishing a repository to GitHub using the GitHub CLI (`gh`)
- Working with feature branches and pull requests
- Writing professional Markdown documentation

**Technologies used:** Git, GitHub CLI, HTML5, CSS3, JavaScript (ES6)

---

## Installation

**Prerequisites:**
- Git 2.x or newer ([https://git-scm.com](https://git-scm.com))
- A terminal (macOS Terminal, Windows Git Bash, or Linux shell)

**Clone and run locally:**

```bash
# 1. Clone the repository
git clone https://github.com/hawed-gh/CSP451-CheckPoint1-Awed.git

# 2. Navigate into the project directory
cd CSP451-CheckPoint1-Awed

# 3. Open index.html in your browser
xdg-open index.html    # Linux
open index.html        # macOS
start index.html       # Windows
```

---

## Usage

Once opened in a browser, `index.html` serves as the landing page.
The `about.html` page contains personal information added via a
feature branch.

Helpful Git commands for exploring this repository:

```bash
git log --oneline --graph --all --decorate   # full branch history
git branch -a                                 # list all branches
git remote -v                                 # view remote URLs
git status                                    # check working tree
```

---

## Contributing

This project follows a **feature-branch workflow**:

1. Create a branch: `git checkout -b feature/<short-description>`
2. Make atomic commits using **Conventional Commits** format:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation only
   - `style:` formatting only
   - `refactor:` code restructure
   - `test:` tests added or updated
   - `chore:` tooling or config
3. Push: `git push -u origin feature/<short-description>`
4. Open a Pull Request on GitHub with a reviewer assigned.
5. After approval, merge using a merge commit.
6. Delete the branch locally and remotely after merging.

---

## License

MIT License

Copyright (c) 2026 Hussein Awed

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.