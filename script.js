async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js', {scope:"/"}).then(reg => {
            console.log('Registration succeeded. Scope is ' + reg.scope);
        });
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }