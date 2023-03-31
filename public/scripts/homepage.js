function setHeroImageHeight() {
    $(".hero-image").css({
        "height": `${window.innerHeight * 0.60}px`
    });
}

setHeroImageHeight();

window.addEventListener('resize', () => {
    setHeroImageHeight();
});
