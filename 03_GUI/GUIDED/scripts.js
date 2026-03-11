const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const charLowerElement = document.getElementById("hk");
const charUpperElement = document.getElementById("hb");
const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");
const btnParagraf = document.getElementById("huruf-paragraf");

btnBesar.addEventListener("click", () => {
  const text = editorElement.value;
  editorElement.value = text.toUpperCase();
});

btnKecil.addEventListener("click", () => {
  const text = editorElement.value;
  editorElement.value = text.toLowerCase();
});

btnParagraf.addEventListener("click", () => {
  const text = editorElement.value;
  const sentences = text.split(". ");
  const formattedText = sentences
    .map((sentence) => {
      if (sentence.length > 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }
      return sentence;
    })
    .join(". ");
  editorElement.value = formattedText;
});

function hitungHuruf(event) {
  const text = event.target.value;
  const chr = text.split("");

  let jmlHurufSejati = 0;
  let jmlHurufBesar = 0;
  let jmlHurufKecil = 0;

  const spasi = /\s+/;
  const besar = /[A-Z]/;
  const kecil = /[a-z]/;

  chr.forEach((char) => {
    if (spasi.test(char)) {
      return;
    }

    if (besar.test(char)) {
      jmlHurufBesar++;
    }

    if (kecil.test(char)) {
      jmlHurufKecil++;
    }

    jmlHurufSejati++;

    charLowerElement.textContent = jmlHurufKecil;
    charUpperElement.textContent = jmlHurufBesar;
    charCountElement.textContent = jmlHurufSejati;
  });
}

editorElement.addEventListener("input", (event) => {
  hitungHuruf(event);
});
