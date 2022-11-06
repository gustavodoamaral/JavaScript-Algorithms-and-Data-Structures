var entityMap = { // Lista de entidades
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&apos;',
    "/": '&#x2F;'
};

function convertHTML(str) {
  return String(str).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
};

convertHTML("Dolce & Gabbana");
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("<>")