function getOutFromUkraine() {
  const militaryIcons = Array.from(
    document.querySelectorAll('.leaflet-marker-icon')
  );

  const enemiIcons = militaryIcons.filter(icon =>
    icon.src.includes('/images/custom/enemy.png')
  );
  //   console.log(militaryIcons[0].src);
  //   console.log(enemiIcons.length);

  const timerId = setInterval(() => {
    enemiIcons.forEach(icon => moveIcon(icon));
  }, 5000);

  function getNumbers(str) {
    const matches = str.match(/\d+/g);
    return matches;
  }

  function moveIcon(militaryIcon) {
    const translateParam = getNumbers(militaryIcon.style.transform);
    const translateX = Number(translateParam[1]) + 3;
    const translateY = Number(translateParam[2]) + 3;
    const newTranslate = `translate3d(${translateX}px, ${translateY}px, 0px)`;
    // console.log(newTranslate);
    militaryIcon.style.transform = newTranslate;
  }
}

getOutFromUkraine();

{
  /* <img
  src="/images/custom/headquarter.png"
  class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
  alt="Marker"
  tabindex="0"
  role="button"
  style="margin-left: -12px; margin-top: -12px; width: 24px; height: 24px; transform: translate3d(470px, 689px, 0px); z-index: 689; outline: none;"
></img>;

<img
  src="/images/custom/enemy.png"
  class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
  alt="Marker"
  tabindex="0"
  role="button"
  style="margin-left: -12px; margin-top: -12px; width: 24px; height: 24px; transform: translate3d(508px, 674px, 0px); z-index: 674; outline: none;"
></img>; */
}
