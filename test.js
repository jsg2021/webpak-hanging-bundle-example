import('./dist/main.js').then(async module => {
    console.log(module);
    let t = setTimeout(() => (console.error('failed'),process.exit(1)), 1000);
    await module?.default
    clearTimeout(t);
    console.log('passed');
})
