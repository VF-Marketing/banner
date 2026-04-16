(function () {
  "use strict";

  var clickTagValue = typeof window.clickTag === "string" && window.clickTag.length
    ? window.clickTag
    : "https://example.com";

  var banner = document.getElementById("banner");
  var video = document.getElementById("bgVideo");

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

  if (!video) {
    return;
  }

  var markVideoReady = function () {
    banner.classList.add("is-video-ready");
  };

  video.addEventListener("loadeddata", markVideoReady, { once: true });
  video.addEventListener("canplay", markVideoReady, { once: true });

  var playPromise = video.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(markVideoReady).catch(function () {
      banner.classList.remove("is-video-ready");
    });
  }
})();
