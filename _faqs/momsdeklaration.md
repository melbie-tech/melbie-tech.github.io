---
category: "Momsdeklaration"
questions:
  - title: "Utför ni momsdeklaration?"
    content: "Vi erbjuder momsdeklaration som en tilläggstjänst."
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