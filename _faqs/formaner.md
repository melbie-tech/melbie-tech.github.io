---
category: "Förmåner"
questions:
  - title: "Hur ska man hantera förmåner?"
    content: "Redan vid uppstart så går vi igenom vilka förmåner som finns på bolaget. Lägger in dem i systemet därefter så bokförs de och deklareras som allt annat."
---

<div class="ui styled fluid accordion">

    {% for question in page.questions %}
            <div class="title">
                <i class="dropdown icon"></i>
                {{ question.title }}
            </div>
            <div class="content">
                <p>{{ question.content }}</p>
            </div>
    {% endfor %}

</div>