# Content Authoring Guide

This guide explains how to create and manage content for the VantagePoint website.

## 📝 Writing Case Studies

### File Location
`content/case-studies/your-slug.mdx`

### Required Frontmatter

```yaml
---
title: "Full Case Study Title"
client: "Client Organization Name"
specialty: "Medical Specialty"
deviceClass: "Device Classification (e.g., Class II, Class III)"
geography: "Geographic Region"
tags: ["Tag1", "Tag2", "Tag3"]
challenge: "One-sentence challenge description"
approach: "One-sentence approach description"
outcomes:
  - metric: "Metric description"
    value: "+50%"
    qualifier: "optional qualifier"
  - metric: "Another metric"
    value: "120 days"
quote:
  text: "Client testimonial quote"
  author: "Full Name"
  role: "Job Title"
  org: "Organization"
heroImage: "/images/case-studies/filename.jpg"
downloadablePDF: "/downloads/filename.pdf"
publishedAt: "2024-01-01"
---
```

### Content Structure

```markdown
## The Challenge

Describe the client's situation, barriers to adoption, and business goals.

## Our Approach

### Phase 1: Discovery
...

### Phase 2: Design
...

## Outcomes

### Education Metrics
- Completion rates
- Satisfaction scores
- Knowledge gains

### Clinical Adoption
- Adoption rates
- Procedure volumes

### Business Impact
- ROI
- Sales cycle

## Key Success Factors

1. Factor one
2. Factor two

## Client Testimonial

> Extended quote from client

## Lessons Learned

- Lesson one
- Lesson two
```

### Best Practices

- **Be Specific**: Use real numbers and timelines
- **Show Evidence**: Include pre/post data
- **Tell a Story**: Challenge → Approach → Outcome
- **Protect Privacy**: Use pseudonyms if needed
- **Cite Sources**: Reference clinical evidence
- **Visual Hierarchy**: Use headings consistently

## 📚 Writing Resources

### File Location
`content/resources/your-slug.mdx`

### Required Frontmatter

```yaml
---
title: "Resource Title"
type: "guide" | "webinar" | "brief"
tags: ["Tag1", "Tag2"]
summary: "2-3 sentence summary"
gated: true | false
heroImage: "/images/resources/filename.jpg"
publishedAt: "2024-01-01"
---
```

### Content Structure

```markdown
## Introduction

Hook the reader and explain what they'll learn.

## Section 1

### Subsection
...

## Section 2

### Subsection
...

## Conclusion

Summarize key takeaways and provide next steps.

---

**Call to Action**: [Link text](/link)
```

### Resource Types

#### Guide
- Comprehensive how-to content
- 2,000-5,000 words
- Multiple sections with subsections
- Actionable takeaways

#### Webinar
- Recording summary and key points
- 500-1,000 words
- Embed video if available
- Slides/transcript download

#### Brief
- Quick reference or summary
- 500-1,500 words
- Focused on single topic
- Scannable format

## 🎨 Formatting Guidelines

### Headings

```markdown
# H1 - Page Title (auto-generated from frontmatter)
## H2 - Major Sections
### H3 - Subsections
#### H4 - Sub-subsections (use sparingly)
```

### Lists

```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Another item
```

### Emphasis

```markdown
**Bold text** for emphasis
*Italic text* for subtle emphasis
`Code or technical terms`
```

### Links

```markdown
[Link text](/internal-path)
[External link](https://example.com)
```

### Images

```markdown
![Alt text description](/images/path/to/image.jpg)
```

### Blockquotes

```markdown
> This is a quote or callout
```

### Tables

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## ✅ Content Checklist

Before publishing, verify:

- [ ] Frontmatter is complete and accurate
- [ ] Title is clear and descriptive
- [ ] Summary/challenge is compelling
- [ ] Content is well-structured with headings
- [ ] All claims are supported by evidence
- [ ] No PHI or confidential information
- [ ] Images have descriptive alt text
- [ ] Links are working and relevant
- [ ] Spelling and grammar are correct
- [ ] Tone matches brand voice (credible, clear, compassionate)
- [ ] SEO: Include relevant keywords naturally
- [ ] Accessibility: Avoid jargon, explain acronyms

## 🔍 SEO Best Practices

### Title
- 50-60 characters
- Include primary keyword
- Compelling and specific

### Summary
- 150-160 characters
- Include secondary keywords
- Clear value proposition

### Content
- Use headings hierarchically
- Include keywords in first paragraph
- Link to related content
- Use descriptive link text (not "click here")

### Images
- Descriptive file names (cardiac-device-training.jpg)
- Alt text describes image content
- Optimize file size (<200KB)

## 🚫 What to Avoid

- **PHI**: No patient names, MRNs, or identifiable health information
- **Off-Label Claims**: Don't promote unapproved uses
- **Unsubstantiated Claims**: Always cite sources
- **Jargon Overload**: Explain technical terms
- **Promotional Language**: Education, not marketing
- **Competitor Bashing**: Focus on your value
- **Absolute Claims**: Avoid "best," "only," "always"

## 📊 Metrics to Include

### Education Programs
- Completion rates
- Satisfaction scores (x.x/5.0)
- Knowledge gains (pre/post %)
- Confidence increases
- Learner counts

### Clinical Adoption
- Adoption rates (% or absolute)
- Procedure volumes
- Time to adoption
- Geographic reach

### Business Impact
- ROI (x.x×)
- Sales cycle reduction
- Market share gains
- Cost savings

## 🎯 Voice & Tone

### Voice (Consistent)
- **Credible**: Evidence-based, cite sources
- **Clear**: Simple language, avoid jargon
- **Compassionate**: Patient outcomes matter
- **Confident**: We know our craft

### Tone (Varies by Context)
- **Case Studies**: Professional, data-driven, storytelling
- **Resources**: Educational, helpful, authoritative
- **About**: Warm, authentic, inspiring
- **Solutions**: Strategic, consultative, outcomes-focused

## 📞 Questions?

Contact the content team:
- Email: content@vantagepoint.health
- Slack: #content

## 📚 References

- [AP Style Guide](https://www.apstylebook.com)
- [AMA Manual of Style](https://www.amamanualofstyle.com)
- [Plain Language Guidelines](https://www.plainlanguage.gov)
- [WCAG Writing Guidelines](https://www.w3.org/WAI/WCAG21/quickref/#readable)
