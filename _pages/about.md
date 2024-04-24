---
permalink: /
title: "About Me"
excerpt: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}
Hello!👋

I am Lisa, an 3rd year Ph.D. student at the Paul G. Allen School of Computer Science & Engineering at the University of Washington. I am advised by Professor Richard Anderson in the [ICTD Lab](https://ictd.cs.washington.edu/). In 2022, I was selected to [MIT Technology Review Innovators Under 35 Japan](https://www.technologyreview.jp/l/innovators_jp/under35jp_2022). I am a Japanese Quad Fellow for the inaugural cohort of the [Quad Fellowship](https://www.quadfellowship.org/quad-fellows). During 2021-2023, I was funded by [The Funai Foundation for Information Technology](https://www.funaifoundation.jp/english/english002.html). I received my Bachelor's from Wellesley College, where I double majored in Computer Science and Philosophy.


<!-- My research interests are **HCI (human-computer interaction) and ICTD (information and communication technology for development)**. My research interests are in global health + technology, specifically examining and enhancing the role of mobile devices for healthcare delivery in low- and middle-income countries (LMICs). -->


[船井情報科学振興財団](https://www.funaifoundation.jp/index.html)の奨学生です。[留学報告書](https://www.funaifoundation.jp/scholarship/grantee_orii_lisa.html)を書いています。Computer scienceかinformation scienceの海外大学院を検討している方はぜひご覧ください！

# Research
<div class = "row">
  <div class="column card-body text-center">
      <img class = "center images" src="images/global_health.png">
          <!-- <img class="center-block rounded-circle" src="assets/img/FATE_logo.png" alt="Participatory Design Logo" width="165" height="165"><br> -->
          <h3><b>Global Health</b></h3>
          <p>I work with health researchers and the Ministry of Health to address pressing health challenges around the world.</p>
  </div>
  <div class="column card-body text-center">
      <img class = "center images" src="images/smartphone.png">
        <!-- <img class="center-block rounded-circle" src="assets/img/FATE_logo.png" alt="Participatory Design Logo" width="165" height="165"><br> -->
        <h3><b>Technology</b></h3>
        <p>I examine, design, develop, and deploy mobile devices that can enable healthcare delivery.</p>
  </div>
  <div class="column card-body text-center">
      <img class = "center images" src="images/human.png">
          <!-- <img class="center-block rounded-circle" src="assets/img/FATE_logo.png" alt="Participatory Design Logo" width="165" height="165"><br> -->
          <h3><b>Human-Computer Interaction</b></h3>
          <p>I apply HCI frameworks and methods to design, deploy, and improve technologies for global health.</p>
  </div>
</div>


# Celebratory News✨
* Apr 2024: Awarded the Horton-Hallowell Fellowship from Wellesley College!
* Apr 2024: Started my internship with [PATH](https://www.path.org/) and their [Digital Square](https://digitalsquare.org/) and Primary Health Care teams!
* Apr 2024: Going to fieldwork in Kenya!
* Mar 2024: Paper accepted to CHI 2024: [Link to paper](https://arxiv.org/pdf/2404.04444.pdf)!
* Jan 2024: Awarded a grant from the UW Global Innovation Fund for our work on app dev for contraceptive education in Kenya!

<details closed>
  <summary markdown="span">more news!</summary>
  <div markdown=1>
  
  * Nov 2023: Paper accepted to CSCW 2024!
  * June 2023: Attended the [Quad Fellowship Summit in Melbourne, Australia](https://www.quadfellowship.org/updates/2023-quad-fellowship-summit).
  * Dec 2022: Selected to the inaugural cohort of the [Quad Fellowship](https://www.quadfellowship.org/quad-fellows)!
  * Nov 2022: Selected to [MIT Technology Review Innovators Under 35 Japan](https://www.technologyreview.jp/l/innovators_jp/under35jp_2022)!
  * Sept 2022: Conducted fieldwork research at a HIV clinic in Malawi for 2 weeks
  * June 2022: Helped organize and attended ICTD and ACM COMPASS 2022 at UW!
  * May 2022: Attended my first in-person conference at CHI 2022 where I presented our paper ["Designing for Speech Practice Systems: How Do User-Controlled Voice Manipulation and Model Speakers Impact Self-Perceptions of Voice?"](https://dl.acm.org/doi/pdf/10.1145/3491102.3502093)!
  * Sept 2021: Officially started my Ph.D. at UW!
  * Sept 2021: Attended AutomotiveUI '21 and presented our paper ["Perceptions of Trucking Automation: Insights from the r/Truckers Community"](https://dl.acm.org/doi/pdf/10.1145/3409118.3475154)!
  * June 2021: Graduated from Wellesley College
  * May 2021: Attended my first (virtual) conference at CHI 2021
  * Apr 2021: Committed to University of Washington CS Ph.D. program!
  * Nov 2020: Selected as a Grantee of [Funai Overseas Scholarship](https://funaifoundation.jp/scholarship/en/scholarship_guidelines_phd.html)
  
  </div>
</details>


<style>
.column {
  float: left;
  width: 33%;
  padding: 10px; 
}
.text-center {
    text-align: center !important;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    height: 330px; 
    width: 
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.images{
  width: 100px;
  height: auto;
}

@media screen and (max-width: 600px) { /*responsive layout*/
  .column {
    width: 100%;
  }
}
</style>

<!-- Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right.
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header.

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons.

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
