// https://chat.openai.com/chat/3ad3d311-1693-4408-9a44-571ac4b4a16c

function applyClasses(mixins) {
  // Loop over all selectors in the `mixins` object
  for (let selector in mixins) {
    if (mixins.hasOwnProperty(selector)) {
      // Find all elements that match the current selector
      document.querySelectorAll("." + selector).forEach(function(element) {
        // If the element already has the `data-liveMixins` attribute, skip over it
        if (element.getAttribute("data-liveMixins")) {
          return;
        }

        // Split the new classes into an array and the existing classes into an array
        let newClasses = mixins[selector].split(" ");
        let existingClasses = element.className.split(" ");
        
        // Remove the targeted class and the "stopFOUC" class from the existing classes array
        existingClasses = existingClasses.filter(function(className) {
          return !className.split(" ").includes(selector) && className !== "stopFOUC";
        });
        
        // Concatenate the two arrays and join them into a string with spaces between the classes
        element.className = existingClasses.concat(newClasses).join(" ");
        
        // Add the `data-liveMixins` attribute to the element so we know not to process it again
        element.setAttribute("data-liveMixins", "true");
      });
    }
  }
}

// Do mixins on DOM watch and update
let liveMixinObserver = new MutationObserver(function() {
	applyClasses(window.liveMixins);
});
liveMixinObserver.observe(document.body, { childList: true, subtree: true });
applyClasses(window.liveMixins);
