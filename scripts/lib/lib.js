Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'PTR_kr_module',
            lang: 'ko',
            dir: '/compendium'
        });
    }
});