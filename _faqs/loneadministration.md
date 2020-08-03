---
category: "Löneadministration"
questions:
  - title: "Vad behöver jag själv göra när det kommer till lönerna?"
    content: "Du och din personal som ska ha lön behöver rapportera in avvikelser om det finns några sådana. Det kan vara semester, vab, ledighet, komp, övertid. Efter all avvikelserapportering kan vi korrigera och betala ut lönerna."
  - title: "Vad kostar lönen?"
    content: "En lön kostar mera än det som kommer in på ens bankkonto. Många av oss vet att löneskatt och arbetsgivaravgifter tillkommer, men tillkommer det något mer.
    <br />
    <br />
    Bruttolön
    <ul>
        <li>Semester lön</li>
        <li>Rörlig lönedel</li>
        <li>Pensionpremier</li>
        <li>Löneskatt</li>
        <li>Sjukförsäkringspremier</li>
        <li>Kostnad för olika förmåner</li>
        <li>Arbetsgivardeklarationen</li>
        <li>= Lönekostnad</li>
    </ul>"
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