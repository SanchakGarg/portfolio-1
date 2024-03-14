// This adds some nice ellipsis to the description:
document.querySelectorAll(".event-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
  });