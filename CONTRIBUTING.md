# Contributing to ReactBits Frontend Design Skill

Thank you for your interest in contributing! This document provides guidelines for contributing to the ReactBits Frontend Design Skill.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists in [GitHub Issues](https://github.com/YOUR_USERNAME/reactbits-frontend-design-skill/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment (Claude Code version, OpenClaw version, OS)

### Suggesting Enhancements

We welcome suggestions for:
- New component examples
- Additional animation patterns
- Performance optimization tips
- Accessibility improvements
- Documentation enhancements

Open an issue with the "enhancement" label.

### Pull Requests

1. **Fork the repository**

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Update documentation
   - Add examples if applicable

4. **Test your changes**
   - Install the skill in Claude Code or OpenClaw
   - Verify skill triggers correctly
   - Test examples work as expected

5. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
   Use conventional commit messages:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for improvements
   - `Docs:` for documentation

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Development Guidelines

### File Structure

```
reactbits-frontend-design-skill/
├── SKILL.md              # Core skill (keep concise, ~2k words)
├── references/           # Detailed guides (can be longer)
│   ├── component-catalog.md
│   ├── animation-patterns.md
│   └── best-practices.md
├── examples/             # Working code examples
│   ├── hero-section.tsx
│   ├── animated-card.tsx
│   └── background-demo.tsx
└── scripts/              # Utility scripts
    └── install-component.sh
```

### Writing Guidelines

**SKILL.md:**
- Use imperative/infinitive form (not second person)
- Keep under 3,000 words (ideally 1,500-2,000)
- Move detailed content to `references/`
- Include clear examples
- Reference supporting files

**Reference Files:**
- Can be longer (2,000-5,000+ words)
- Provide comprehensive details
- Include code examples
- Use clear headings

**Example Files:**
- Must be complete and working
- Include comments explaining key parts
- Show best practices (accessibility, performance)
- Demonstrate real-world usage

### Code Style

**TypeScript/React:**
- Use TypeScript for all examples
- Follow React best practices
- Include accessibility features
- Add performance optimizations
- Use functional components with hooks

**Bash Scripts:**
- Include shebang (`#!/usr/bin/env bash`)
- Add clear comments
- Use `set -e` for error handling
- Provide usage examples

### Testing Checklist

Before submitting a PR:

- [ ] Skill triggers correctly in Claude Code
- [ ] Skill works in OpenClaw
- [ ] Examples run without errors
- [ ] Scripts are executable (`chmod +x`)
- [ ] Documentation is clear and accurate
- [ ] No typos or grammar errors
- [ ] References are up to date
- [ ] New components are documented

## Areas We Need Help With

### High Priority

1. **Video Tutorials**
   - Screen recordings of skill usage
   - Component installation walkthroughs
   - Animation timing demonstrations

2. **Additional Examples**
   - Portfolio layouts
   - E-commerce product pages
   - SaaS pricing pages
   - Blog layouts

3. **Performance Guides**
   - Bundle size optimization
   - Lazy loading strategies
   - Mobile optimization techniques

### Medium Priority

4. **Accessibility Enhancements**
   - WCAG AAA compliance examples
   - Screen reader testing results
   - Keyboard navigation patterns

5. **Testing Strategies**
   - Visual regression tests
   - Performance benchmarks
   - Accessibility audits

6. **Integration Guides**
   - Next.js integration
   - Remix integration
   - Astro integration

### Nice to Have

7. **Component Combinations**
   - Pre-built layout patterns
   - Common compositions
   - Design system integration

8. **Animation Recipes**
   - Scroll-based animations
   - Page transitions
   - Micro-interactions

9. **Troubleshooting Guide**
   - Common errors and solutions
   - Performance issues
   - Browser compatibility

## Questions?

- Open a [Discussion](https://github.com/YOUR_USERNAME/reactbits-frontend-design-skill/discussions)
- Join our [Discord](https://discord.gg/reactbits)
- Email: [your-email@example.com]

## Code of Conduct

Be respectful, constructive, and helpful. We're all here to make this skill better for everyone.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
