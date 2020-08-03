---
category: "Viktiga datum"
questions:
  - title: "Hur vet jag vilka datum som är viktiga för mitt bolag?"
    content: "Vi hjälper dig att hålla kolla på alla viktiga datum för ditt bolag."
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