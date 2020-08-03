---
category: "Ny kund"
questions:
  - title: "Hur flyttar jag över min gamla bokföring till Melbie?"
    content: "När du blir kund hos Melbie hjälper vi dig att exportera en så kallad SE/SIE-fil från ditt gamla bokföringsprogram som vi sedan importerar i våra system.
    <br />
    <br />
    Om du har använt dig av en extern byrå eller konsult så kontaktar vi dem för att underlätta flytten för dig."
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