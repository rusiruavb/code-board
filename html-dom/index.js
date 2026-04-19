const root = document.getElementById("root"); // O(1)

let count = 0;

/** Full document HTML; empty #dom-dump in the clone so the string does not nest itself. */
function getDocumentSnapshotHtml() {
  const clone = document.documentElement.cloneNode(true);
  const dump = clone.querySelector("#dom-dump");
  if (dump) {
    dump.textContent = "";
  }
  const doctype = document.doctype
    ? `<!DOCTYPE ${document.doctype.name}>\n`
    : "";
  return `${doctype}${clone.outerHTML}`;
}

/**
 * Rebuilds everything inside #root from a string. Old nodes are discarded; new ones are parsed and inserted.
 * Then the <pre> shows the serialized document so you can see the whole page after that rerender.
 */
function render() {
  root.innerHTML = `
    <div class="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 font-sans">
      <h1>Counter</h1>
      <div class="flex w-full max-w-xl flex-col items-center gap-5">
        <button type="button" id="btn" class="cursor-pointer rounded border border-gray-400 bg-gray-100 px-4 py-1.5 text-base hover:bg-gray-200">Click</button>
        <p class="m-0 text-7xl font-semibold leading-none text-black" aria-live="polite">${count}</p>
      </div>
    </div>
  `;

  document.getElementById("btn").addEventListener("click", () => {
    count += 1;
    render();
  });

  document.getElementById("dom-dump").textContent = getDocumentSnapshotHtml();
}

render();
