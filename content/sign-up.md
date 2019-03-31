---
layout: sign-up
form:
    - type: email
      name: email
      label: Email address
      autocomplete: email
    - type: text
      name: name
      label: Name
      autocomplete: name
    - type: radio
      name: gender
      label: What is your gender?
      options:
          - value: Female
          - value: Male
          - value: OtherGender
            label: Other
            text: true
    - type: radio
      name: year
      label: What year are you in?
      options:
          - value: "1"
          - value: "2"
          - value: "3"
          - value: "4"
          - value: "5+"
          - value: BCS
    - type: textarea
      name: self-intro
      label: Please provide a brief introduction to yourself so we can send to your matching 😊
    - type: checkbox
      name: non-tech-interests
      label: What would you like to talk about?
      options:
          - value: Academics
          - value: Getting into CS
          - value: Internships
          - value: Switching major
          - value: Extracurricular
          - value: Networking
          - value: Imposter syndrome
          - value: OtherNonTechTopic
            label: Other
            text: true
    - type: checkbox
      name: tech-interests
      label: What technical topics are you interested in?
      options:
          - value: Android
          - value: iOS
          - value: Machine Learning / Data Science
          - value: Web
          - value: Graphics / Game Development
          - value: UI/UX
          - value: AR/VR
          - value: Security
          - value: OtherTechTopic
            label: Other
            text: true
    - type: text
      name: other-prefs
      label: Do you have other preference to your matching?
      placeholder: background, orientation, ...etc
---
