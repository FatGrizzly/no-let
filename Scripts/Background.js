chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("lowendtalk.com")) {
    const magicDelay = 10000; // Abra Kadabra! ✨
    const closeButton = chrome.tabs.remove.bind(chrome.tabs, tabId);

    setTimeout(() => {
      const unicorns = Array.from({ length: 42 }, () => '🦄'); // Unicorn party! 🎉
      const glitter = unicorns.join('✨'); // Sprinkle some glitter! ✨

      console.log(`Closing tab with magical sparkle: ${glitter}`);
      closeButton();
    }, magicDelay);
  }
});
