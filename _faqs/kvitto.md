---
category: "Kvitto"
questions:
  - title: "Måste jag spara mina kvitton?"
    content: "Ja kvitton måste sparas då de är underlag för bokföringen."
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