export const getMockChatbotResponse = () => {
  const randomIndex = Math.floor(Math.random() * chatbotResponses.length);

  return {
    text: chatbotResponses[randomIndex],
    author: "chatbot",
  };
};

const chatbotResponses = [
  "Sveiki! Kaip galiu jums padėti su jūsų automobilio priežiūra ar remontu?",
  "Reguliarus alyvos keitimas yra svarbus variklio ilgaamžiškumui. Kada paskutinį kartą keitėte alyvą?",
  "Jei girdite keistus garsus iš variklio, tai gali būti susidėvėjęs diržas ar kita detalė. Ar pastebėjote kokių nors pokyčių?",
  "Padangų slėgio tikrinimas kas kelias savaites padeda išvengti netolygaus dėvėjimosi. Ar jau patikrinote savo automobilio padangas?",
  "Jei automobilis trūkčioja važiuojant, tai gali būti užsikimšęs kuro filtras arba uždegimo žvakės problema.",
  "Stabdžių kaladėlių keitimas yra svarbus saugumui. Ar pastebėjote, kad stabdant girdisi girgždėjimas ar vibracija?",
  "Oro filtras turi būti keičiamas reguliariai, kad variklis gautų pakankamai švaraus oro. Kada paskutinį kartą keitėte filtrą?",
  "Jei jūsų automobilio akumuliatorius senesnis nei 3-4 metai, verta jį patikrinti prieš žiemą, kad išvengtumėte problemų užvedant.",
  "Jei variklio indikatorius prietaisų skydelyje įsijungė, geriausia kuo greičiau atlikti diagnostiką servise.",
  "Klimato kontrolės sistemos efektyvumui svarbu reguliariai pildyti kondicionieriaus freoną ir valyti filtrus.",
  "Deguonies jutiklis gali turėti įtakos degalų sąnaudoms. Jei jūsų automobilis sunaudoja daugiau degalų nei įprastai, verta jį patikrinti.",
  "Pavarų dėžės alyva turėtų būti keičiama kas 60 000 – 100 000 km, priklausomai nuo gamintojo rekomendacijų.",
  "Važiuoklės elementai, tokie kaip šarnyrai ar stabilizatoriaus traukės, gali susidėvėti ir sukelti bildesį. Ar pastebėjote pašalinius garsus važiuodami?",
  "Jei automobilis sunkiai užsiveda šaltu oru, problema gali būti susijusi su uždegimo žvakėmis arba akumuliatoriumi.",
  "Kai kurie degalų priedai gali padėti išvalyti kuro sistemą ir pagerinti variklio darbą, tačiau svarbu pasirinkti tinkamą produktą.",
  "Automobilio žibintai turėtų būti reguliariai tikrinami – prastai veikiantys žibintai gali sumažinti matomumą naktį.",
  "Antifrizas turi būti keičiamas pagal gamintojo rekomendacijas, kad apsaugotų variklį nuo perkaitimo ir korozijos.",
  "Jei automobilis tempia į vieną pusę, gali būti išsiderinęs ratų suvedimas arba nevienodai dėvisi padangos.",
  "Reguliarus techninis aptarnavimas gali padėti išvengti brangių remontų ateityje. Ar jau suplanuotas jūsų automobilio patikrinimas?",
  "Stabdžių skystis sugeria drėgmę laikui bėgant, todėl jį rekomenduojama keisti kas dvejus metus, kad išlaikytumėte stabdžių efektyvumą.",
];
