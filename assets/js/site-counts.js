(function () {
  const records = Array.isArray(window.pricingCaseRecords) ? window.pricingCaseRecords.slice() : [];
  const caseCount = records.length;
  const latest = records.slice().sort(function (a, b) {
    return String(b.reviewed_at || "").localeCompare(String(a.reviewed_at || ""));
  })[0];

  function setAll(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value;
    });
  }

  setAll("[data-pricing-case-count]", String(caseCount));
  setAll("[data-pricing-case-count-label]", caseCount === 1 ? "pricing case" : "pricing cases");
  setAll("[data-published-case-count-label]", caseCount === 1 ? "published case" : "published cases");

  if (latest && latest.title) {
    setAll("[data-pricing-case-latest]", "Latest case: " + latest.title);
  }
}());
