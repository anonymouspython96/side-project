<template>
  <main>
    <section class="intro">
      <h2>Chi Sono</h2>
      <p>
        Emilian, sviluppatore esperto e appassionato di didattica, ha creato
        questo sito web con una missione chiara: aiutare i programmatori a
        padroneggiare il codice attraverso la Regola del 5. Questo metodo
        innovativo si basa su un principio semplice ma potente: ripetere il
        codice 5 volte per assimilare concetti, strutture e logica in modo
        naturale e duraturo. Immersi in un ambiente di apprendimento dinamico,
        gli utenti possono praticare con esercizi reali, ricevere feedback
        immediato e consolidare le proprie competenze in modo progressivo. Ma il
        nostro approccio va oltre la semplice memorizzazione: crediamo che la
        programmazione sia un'arte che si affina con la pratica costante. Per
        questo, la Regola del 5 non è solo un metodo, ma una filosofia di
        apprendimento che trasforma i principianti in sviluppatori competenti.
        Se vuoi imparare a programmare, migliorare la tua capacità di scrivere
        codice pulito ed efficiente e sviluppare una mentalità da programmatore,
        sei nel posto giusto. Inizia oggi stesso e scopri il potere della
        ripetizione consapevole!
      </p>
    </section>
  </main>
</template>

<script>
import "../assets/main.css";
</script>

<style scoped>
section {
  width: 100%;
  padding: 80px 240px;
}
.intro {
  background-color: var(--color-110green);
  background-image: linear-gradient(
    to bottom,
    var(--color-110green),
    var(--color-80green)
  );
}

h2 {
  font-size: 2.5rem;
}

p {
  text-align: justify;
  font-size: 1.25rem;
}

h2,
.intro p {
  padding-bottom: 40px;
  color: white;
}
</style>
