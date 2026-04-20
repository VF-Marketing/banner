(function () {
  "use strict";

  var clickTagValue = typeof window.clickTag === "string" && window.clickTag.length
    ? window.clickTag
    : "https://example.com";

  var banner = document.getElementById("banner");

  if (!banner) {
    return;
  }

  banner.addEventListener("click", function () {
    window.open(clickTagValue, "_blank");
  });

  window.setTimeout(function () {
    banner.classList.add("is-animated");
  }, 80);

  var logoSwapped = false;
  window.setInterval(function () {
    logoSwapped = !logoSwapped;
    banner.classList.toggle("is-logo-swapped", logoSwapped);
  }, 3000);
})();
