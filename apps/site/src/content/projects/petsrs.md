---
title: 'PetsRS'
description: 'Volunteer platform to reunite lost pets with their owners during the 2024 floods in Rio Grande do Sul.'
period:
  start: '2024-05-01'
tags: ['vue', 'typescript', 'open-source', 'civic-tech']
url: 'https://petsrs.com.br'
repo: 'https://github.com/petsrs/petsrs'
icon: '/projects/icons/petsrs.webp'
---

The project started in 2023, during the floods that hit the Taquari Valley. Back then it was a smaller, regional effort to reconnect rescued animals with their families. When the worst floods in Rio Grande do Sul's recent history struck in May 2024, the need became statewide, and the project grew into PetsRS to cover the whole state.

The pattern was the same in both disasters: families had to leave their homes in a hurry, and many of them could not take their pets along. As the water receded, hundreds of rescued animals ended up scattered across temporary shelters and foster homes, with no easy way back to their families. Other groups were already building tools to help people, and I saw that the pets had been left out of that response.

I built petsrs.com.br to close that gap. The idea was deliberately simple: owners registered a lost pet with a photo, name, breed, description, and neighborhood, while volunteers and shelters registered the animals they had rescued, with photos and the place where they were found. The platform cross-referenced both sides and surfaced the most likely matches.

I shipped the first version fast, with Vue and TypeScript, because in a crisis the software has to work on the day it matters, not weeks later.

The response was immediate. The project spread through the state's network of pet volunteers, drew thousands of visits and local media coverage, and helped reunite over 500 pets with their families. The work was also recognized by the Rio Grande do Sul state government as part of the official flood response, which is the moment captured in the photos below. The site is still online today, kept running as a contribution to the community.

<div class="gallery">
  <img src="/projects/petsrs/pets1.webp" alt="Presentation of the state plan for animal disaster response, part of the Plano Rio Grande" loading="lazy" />
  <img src="/projects/petsrs/pets2.webp" alt="Meeting with the Rio Grande do Sul animal response team" loading="lazy" />
</div>

Working this close to a real emergency shaped how I build: get close to the problem, make sure the product holds up under pressure, and remember that coordination usually has to come before automation. Those are lessons I still carry into everything I work on.
