---
category: "Deklaration"
questions:
  - title: "Kan ni hjälpa mig med K3?"
    content: "Vi hjälper er med K3 om så önskas."
  - title: "Kan ni även hjälpa mig med min privata deklaration?"
    content: "Vi erbjuder detta som en tilläggstjänst."
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