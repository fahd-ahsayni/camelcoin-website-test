import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      NavBar1: "Home",
      NavBar2: "Who we are",
      NavBar3: "Services",
      NavBar4: "Reservation",
      NavBar5: "Rental Conditions",
      NavBar6: "Contacts",
      "header title": "Starting from 195 MAD per day!",
      "header subtitle":
        "The best car rental agency in Laayoune offers you free delivery of cars and 4x4s at Laayoune airport.",
      headermintitle: "Choose your language",
      reserveButton: "Book Now",
      contactButton: "Call Us",
      whoWeAreSmallTitle: "Who we are ?",
      whoWeAreBigTitle:
        "Car rental laayoune the number 1 car rental service in the south.",
      whoWeAreContent:
        "Whatever car you want, Laayoune car rental guarantees you the best online rates for your car rented in Laayoune with a reasonable price from 195.00 MAD, and you have a wide choice of vehicle with a free GPS and a seat. baby at 40.00 MAD per day for the period of your choice, long or short.",
      whoWeAreOfferOne: "Easy booking",
      whoWeAreOfferTwo: "Special prices",
      whoWeAreOfferThree: "Support 24/24",
      whoWeAreOfferFour: "Cash on delivery",
      whyChoosingUsSmallTitle: "Why Choosing Us?",
      whyChoosingUsBigTitle: "Laayoune Car Rental",
      whyChoosingUsContent:
        "If you choose our car rental service, you have opted for a superior quality service. We are committed to providing you with an easy, convenient and hassle-free car rental experience.",
      whyChoosingUsCardOneTitle: "Free Car Delivery",
      whyChoosingUsCardTwoTitle: "A Wide Selection of Vehicles",
      whyChoosingUsCardThreeTitle: "Free GPS with your rental",
      whyChoosingUsCardFourTitle: "Competitive Rates",
      whyChoosingUsCardFiveTitle: "Cancellation - Modification",
      whyChoosingUsCardSixTitle: "24/7 Phone Assistance",
      whyChoosingUsCardOne:
        "Laayoune Car Rental, the best car rental agency in Laayoune, offers free car and 4x4 delivery at Laâyoune Hassan 1er airport (Rent the best cars starting from 195.00 MAD per day)",
      whyChoosingUsCardTwo:
        "We offer a wide selection of recent vehicles, whatever your needs, budget or preferences. For more information, please consult our vehicle guide.",
      whyChoosingUsCardThree:
        "Free GPS with your Jet Sahara car rental, most of our vehicles are equipped with a free GPS. Be sure to select free GPS when booking.",
      whyChoosingUsCardFour:
        "Enjoy our excellent rates, for personal or professional vehicle rental, and unparalleled service quality (Rent the best cars starting from 195.00 MAD per day)",
      whyChoosingUsCardFive:
        "Free cancellation and modification, if you are unsure of your dates, you can choose the Pay Later option, which allows you to modify or cancel your reservation at any time without fees.",
      whyChoosingUsCardSix:
        "We are committed to providing our customers with a high-end service and 24/7 phone assistance. If you need help, do not hesitate to contact us at this number: +212 679-232-802.",
      categoriesSmallTitle: "Categories",
      categoriesBigTitle: "Vehicle Categories",
      categoriesContent:
        "you can be sure that you will receive top quality service and a vehicle in perfect condition for your trip.",
      categoriesCardPrice1: "JUST",
      categoriesCardPrice2: "PER DAY",
      categoriesCardPrice3: "DHS",
      categoriesChoiceOne: "Seats",
      categoriesChoiceTwo: "Bags",
      categoriesChoiceThree: "Doors",
      categoriesReserveBtn: "RESERVE",
      categoriesContactBtn: "CALL US",
      ctaContent:
        "Our vehicle is at your disposal 7 days a week, if you need more information you can contact us. You can visit us at the following address: Boulevard Mekka, 70 000 Laayoune – Morocco",
      ctaTitle: "Laayoune Car Rental",
      ctaLocation: "Laayoune, Morocco",
      conditionsSmallTitle: "Condition",
      conditionsBigTitle: "Laayoune car rental conditions",
      conditionsMediumTitle: "Agency – Laayoune Airport",
      conditionOneTitle: "The driver",
      conditionOneContent:
        "To rent, the driver designated in the contract must be over 21 years old. He must also have held a valid driving license for at least one year. This must be justified by original documents. If a second driver is requested, he/she must be present at the time of departure and present the original of his/her driving license as well as an identity card (for Moroccan residents) or a passport ( for foreigners). Only drivers identified on the rental contract are authorized to drive the rented vehicle.",
      conditionTwoTitle: "Duration",
      conditionTwoContent:
        "The rental is granted for the duration determined in the contract, except for a conventional extension granted by the lessor. Failing return, on the agreed due date, the latter reserves the right to take back the vehicle wherever it is , at the tenant's expense.",
      conditionThreeTitle: "Delivery",
      conditionThreeContent:
        "LAAYOUNE CAR RENTAL lets you choose where you want to pick up or return the vehicle (Hassan 1er Airport in Laayoune, Laayoune Agency: N37 Av Miloud Khaloufi, Laayoune. Morocco) subject to agreement prior.",
      conditionFourTitle: "Fuel",
      conditionFourContent:
        "Fuel is the responsibility of the renter. The car will be delivered with one level of fuel and returned with the same level, fuel left in the tank will not be refunded.",
      conditionFiveTitle: "Payment/Deposit",
      conditionFiveContent:
        "This website is provided as is, with all faults, and Motors makes no representations or warranties of any kind relating to this website or the materials contained on this website. further, nothing contained on this website should be construed as advising you.",
      conditionSixTitle: "Limitation of Liability",
      conditionSixContent:
        "Payment can be made on site in cash (euro or MAD), by credit card (please note that payment by credit card entails an additional commission of 4%), by secure online payment or by bank transfer Swift, Our prices include Unlimited mileage, lubricants and maintenance of the vehicle, delivery / recovery of the vehicle. Our prices are expressed in Euros. The deposit is compulsory by pre-authorization on the credit card (the amount will be fixed according to of the category of the rented or desired car) and will be canceled when the car is returned.",
      conditionSevenTitle: "Insurance",
      conditionSevenContent:
        "Vehicles are insured against all risks (tires are not included). However, for any damage other than theft of the vehicle, fire, glass breakage, civil liability and persons transported (PAI), an excess not Reimbursable capped remains the responsibility of the driver in the event that his or her partial or full liability is engaged.For any accident, damage to the vehicle is only covered on production of an accident report within 24 hours. vehicles on unpaved roads (track) is prohibited except for 4×4. The driver is solely responsible for road traffic offenses and fines. In the event of a mechanical breakdown not caused by the customer, the replacement car is insured by our agency!In the event of a responsible accident, the replacement car will be invoiced to the customer with delivery costs!In the event of a responsible accident, the transport of the damaged car by the tow truck is on the at the customer's expense! It is strictly forbidden to drive our vehicles in the coast, seaside, and rivers, if necessary and in case of breakdown and / or drowning or other damage caused to the vehicle the tenant will be obliged to pay the full amount of repair without any ceiling and the amount could reach the purchase amount of the vehicle, in these cases the deductible will not be applicable.",
      conditionEightTitle: "Jurisdiction Assignment",
      conditionEightContent:
        "By express agreement, the court within the jurisdiction of which the lessor's head office is located shall have sole jurisdiction to hear any dispute relating to this contract. The lessor may, however, waive the benefit of this jurisdiction clause and bear the stalks in all courts of competent jurisdiction.",
      conditionNineTitle: "Refund",
      conditionNineContent:
        "The rental amount is payable in advance for the entire rental period, and will not be refunded in the event of a reduction in the rental period. The deposit, on the other hand, implies a firm commitment by both parties .The customer can cancel his reservation, and the deposit paid will not be refundable, but it will be a credit on your next reservation.",
      conditionTenTitle: "Required Documents",
      conditionTenContent:
        "Driver's license: A driver's license for at least 2 years with no major infractions. Identity document(s): A valid identity document (passport or identity card). 'identity does not include or match your current address, a separate proof of address will also be required.",
      smallTitleForm: "Contact Us",
      bigTitleForm: "Feel free to contact us",
      formContent:
        "You can contact us via Phone, Email or our website. You are welcome",
      locationCityTitle: "Agence Laayoune",
      locationCity: "N37 Av Miloud Khaloufi, Laayoune",
      locationAirportTitle: "Laayoune Airport",
      locationAirport: "Laâyoune Hassan 1er El Aaiún Airport, 70000",
      phoneTitle: "Phone Number",
      phoneNumber: "+212 660-303334",
      inputName: "Full Name",
      inputName1: "Email",
      inputName2: "Phone",
      inputName3: "Message",
      formBtn: "SEND US",
      footer: "© 2023 Web Services sh™.",
      lastfooter: ". All Rights Reserved.",
      pricePerDay: "DH/DAY",
      ChooseCar: "Choose Car",
      start: "Choose the start date",
      end: "Choose the end date",
      startT: "Choose the start time",
      endT: "Choose the end time",
      add1: "Baby Seat",
      priceAdd1: "40.00 Dhs/Day",
      add2: "Free GPS",
      priceAdd2: "0.00 Dhs/Day",
      ReserveBtn: "RESERVE",
      CancelBtn: "CANCEL",
      verification: "Verify your information carefully.",
      Price: "Total Price",
      PriceT: "DHS",
      CheckOne: "Laayoune Agency",
      CheckTwo: "Laayoune Airport",
      Livraison: "Payment On Delivery",
      Livraison1: "Pay cash on delivery.",
      waitingMessage: "Please wait",
      ReserveationCompleted: "Reservation Complete!",
      ReservationNotCompleted: "Error! Reservation not complete.",
    },
  },
  fr: {
    translation: {
      NavBar1: "Accueil",
      NavBar2: "Qui nous sommes",
      NavBar3: "Services",
      NavBar4: "Réservation",
      NavBar5: "Conditions de location",
      NavBar6: "Contacts",
      "header title": "À Partir de 195 Dhs Par jour!",
      "header subtitle":
        "la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune",
      headermintitle: "Choisissez votre langue",
      reserveButton: "Réserver",
      contactButton: "Appellez-nous",
      whoWeAreSmallTitle: "Qui Nous Somme ?",
      whoWeAreBigTitle:
        "Location de voiture laayoune le service numéro 1 au sud de location de voiture.",
      whoWeAreContent:
        "Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte.",
      whoWeAreOfferOne: "Réservation facile",
      whoWeAreOfferTwo: "Prix ​​spéciaux",
      whoWeAreOfferThree: "supporte 24/24",
      whoWeAreOfferFour: "Paiement à la livraison",
      whyChoosingUsSmallTitle: "Pourquoi nous choisir?",
      whyChoosingUsBigTitle: "Location de Voiture Laayoune",
      whyChoosingUsContent:
        "Si vous choisissez notre service de location de voiture,vous avez opté pour un service de qualité supérieure.ous nous engageons à vous fournir une expérience de location de voiture facile, pratique et sans tracas.",
      whyChoosingUsCardOneTitle: "Livraison gratuite des voitures",
      whyChoosingUsCardTwoTitle: "Un grand choix de véhicules",
      whyChoosingUsCardThreeTitle: "GPS Gratuit avec votre location",
      whyChoosingUsCardFourTitle: "Tarifs Compétitifs",
      whyChoosingUsCardFiveTitle: "Annulation - Modification",
      whyChoosingUsCardSixTitle: "Assistance téléphonique 7/7jours",
      whyChoosingUsCardOne:
        "Laayoune Voiture Location la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune Hassan 1er ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
      whyChoosingUsCardTwo:
        "Nous offrons un grand choix de véhicules récents, quelques soient vos besoins, votre budget ou vos préférences. Pour plus de renseignements, veuillez consulter notreguide de véhicules,",
      whyChoosingUsCardThree:
        "GPS Gratuit avec votre location de voiture jet sahara, La plupart de nos véhicules sont équipées d’un GPS gratuit. Assurez-vous d’avoir sélectionné GPS gratuit lors de la réservation",
      whyChoosingUsCardFour:
        "Profitez de nos excellents tarifs, pour une location de véhicule,personnelle ou professionnelle, et d’une qualité de service hors pair ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
      whyChoosingUsCardFive:
        "Annulation et modification gratuites, Si vous n’êtes pas sûr de vos dates, vous pouvez choisir l’option Payer plus tard, qui vous permet de modifier ou annuler votre réservation à tout moment sans frais.",
      whyChoosingUsCardSix:
        "Nous nous engageons à fournir à nos clients un service haut de gamme et une assistance téléphonique 7 jour / 7 jour. Si vous avez besoin d’aide n’hésitez pas à nous contacter à ce numéro:+212 679-232-802",
      categoriesSmallTitle: "Catégories",
      categoriesBigTitle: "Catégories des véhicules",
      categoriesContent:
        "vous pouvez être sûr que vous bénéficierez d'un service de qualité supérieure et d'un véhicule en parfait état pour votre voyage.",
      categoriesCardPrice1: "DE",
      categoriesCardPrice2: "PAR JOUR",
      categoriesCardPrice3: "DHS",
      categoriesChoiceOne: "Places",
      categoriesChoiceTwo: "Valises",
      categoriesChoiceThree: "Portes",
      categoriesReserveBtn: "RÉSERVER",
      categoriesContactBtn: "APPELLEZ-NOUS",
      ctaContent:
        "Notre véhicule est à votre disposition 7j/7j, si vous avez besoin de plus d’information vous pouvez nous contacter. Vous pouvez nous visiter sur l’adresse suivante: Boulevard Mekka, 70 000 Laâyoune – Maroc",
      ctaTitle: "Location de Voiture Laâyoune",
      ctaLocalisation: "Laâyoune, Maroc",
      conditionsSmallTitle: "Condition",
      conditionsBigTitle: "Location de voiture laayoune conditions",
      conditionsMediumTitle: "Agence – Aéroport de Laâyoune",
      conditionOneTitle: "Le conducteur",
      conditionOneContent:
        "Pour louer, le conducteur désigné au contrat doit être âgé de plus de 21 ans. Il doit être également titulaire depuis au moins une année, d’un permis de conduire en cours de validité. Cela doit être justifié par des documents originaux. Si un second conducteur est demandé. Celui/celle-ci doit être présente au moment du départ et présenter l’original de son permis de conduire ainsi qu’une carte d’identité (pour les résidents marocains) ou un passeport (pour les étrangers). Seuls les conducteurs identifiés sur le contrat de location sont autorisés à conduire le véhicule loué.",
      conditionTwoTitle: "Durée",
      conditionTwoContent:
        "La location est consentie pour la durée déterminée au contrat sauf prolongation conventionnelle accordée par le loueur. A défaut de restitution, à l’échéance convenue, celui ci se réserve le droit de reprendre le véhicule où qu’il se trouve, aux frais du locataire.",
      conditionThreeTitle: "Livraison",
      conditionThreeContent:
        "LOCATION DE VOITURE LAAYOUNE vous laisse le choix de l’endroit ou vous voulez prendre ou rendre le véhicule (Aéroport Hassan 1er de Laâyoune, Agence de Laâyoune : N37 Av Miloud Khaloufi, Laayoune. Maroc) sous réserve d’accord préalable.",
      conditionFourTitle: "Carburant",
      conditionFourContent:
        "Le carburant est à la charge du locataire. La voiture sera livrée avec un niveau de carburant et rendu avec le même niveau, le carburant laissé au réservoir ne sera pas remboursé.",
      conditionFiveTitle: "Paiement/Caution",
      conditionFiveContent:
        "Ce site Web est fourni tel quel, avec tous les défauts, et Motors n'exprime aucune représentation ou garantie, de quelque nature que ce soit, liée à ce site Web ou aux éléments contenus sur ce site Web. De plus, rien de ce qui est contenu sur ce site Web ne doit être interprété comme vous conseillant.",
      conditionSixTitle: "Limitation de responsabilité",
      conditionSixContent:
        "Le paiement peut se faire sur place en espèce (euro ou MAD), par carte de crédit (veuillez noter que le paiement par carte bancaire entraine une commission supplémentaire de 4%), par payement en ligne sécurisé ou par virement Swift, Nos tarifs comprennent Le kilométrage illimité, les lubrifiants et l’entretient du véhicule, la livraison / récupération du véhicule. Nos tarifs sont exprimés en Euros. La caution est obligatoire par pré autorisation sur la carte bancaire (le montant sera fixé en fonction de la catégorie de la voiture loué ou désiré) et sera annulé à la restitution de la voiture.",
      conditionSevenTitle: "Assurances",
      conditionSevenContent:
        "Les véhicules sont assurés tout risques (les pneus ne sont pas inclus). Toutefois, pour tout dégât autre que le vol du véhicule, incendie, bris de glace, responsabilité civile et personnes transportées (PAI), une franchise non rachetable plafonnée reste à la charge du conducteur dans le cas ou sa responsabilité partielle ou entière serait engagée. Pour tout accident, Les dégâts du véhicule ne sont couverts que sur production d’un constat d’accident dans les 24 heures. L’utilisation des véhicules sur les routes non goudronnées (piste) est interdite sauf pour les 4×4. Le conducteur est seul responsable des délits et contraventions de la circulation routière. En cas de panne mécanique non causé par le client, la voiture de remplacement est assurée par notre agence! En cas d’accident responsable, la voiture de remplacement sera facturé au client avec frais de livraison ! En cas d’accident responsable, le transport de la voiture accidenté par la dépanneuse est sur la charge du client! Il est strictement interdit de conduire nos véhicules dans la côte, bord de mer, et rivières, dans le cas échéant et en cas de panne et/ou de noyade ou autre dégâts causés au véhicule le locataire sera obligé de payer tout le montant de réparation sans aucun plafond et le montant pourrait atteindre le montant d’achat du véhicule, dans ces cas la franchise ne sera pas applicable.",
      conditionEightTitle: "Attribution de juridiction",
      conditionEightContent:
        "De convention expresse le tribunal dans le ressort duquel est situe le siège social du loueur sera seul compétent pour connaître de tout litige relatif au présent contrat. Le loueur pourra toutefois renoncer au bénéfice de la présente clause de juridiction et porter les tiges devant tous les tribunaux compétents.",
      conditionNineTitle: "Remboursement",
      conditionNineContent:
        "Le montant de la location est payable à l’avance pour toute la durée de location, et ne sera pas remboursé en cas de réduction de la durée de location. L’acompte implique en revanche un engagement ferme des deux parties.Le client peut annuler sa réservation, et l’acompte versé ne sera pas remboursable, mais il sera un avoir sur votre prochaine réservation.",
      conditionTenTitle: "Documents obligatoires",
      conditionTenContent:
        "Permis de conduire: Un permis de conduire d’au moins 2 ans sans infractions majeures. Pièce(s) d’identité : Une pièce d’identité valide (passeport ou carte d’identité). Si votre pièce d’identité n’inclut pas ou ne correspond pas à votre adresse actuelle, il faudra également présenter un justificatif d’adresse séparé.",
      smallTitleForm: "Contactez-nous",
      bigTitleForm: "N’hésitez pas à nous contacter",
      formContent:
        "Vous pouvez nos contacter via Télephone, Email ou bien notre site web.Vous êtes les bienvenus",
      locationCityTitle: "Agence Laayoune",
      locationCity: "N37 Av Miloud Khaloufi, Laayoune",
      locationAirportTitle: "Aéroport Laayoune",
      locationAirport: "Aéroport Laâyoune Hassan 1er El Aaiún, 70000",
      phoneTitle: "Numéro de téléphone",
      phoneNumber: "+212 660-303334",
      inputName: "Nom Complet",
      inputName1: "Email",
      inputName2: "Téléphone",
      inputName3: "Message",
      formBtn: "ENVOYEZ-NOUS",
      footer: "© 2023 Web Services sh™",
      lastfooter: ". Tous les droits sont réservés.",
      pricePerDay: "DH/JOUR",
      ChooseCar: "Choisissez la voiture",
      start: "Choisissez la date de début",
      end: "Choisissez la date de fin",
      startT: "Choisissez l'heure de début",
      endT: "Choisissez l'heure de fin",
      add1: "Siége Bébé",
      priceAdd1: "40.00 Dhs/Jour",
      add2: "GPS Gratuit",
      priceAdd2: "0.00 Dhs/Jour",
      ReserveBtn: "RÉSERVER",
      CancelBtn: "ANNULER",
      verification: "Vérifiez bien vos informations.",
      Price: "Prix Total",
      PriceT: "DHS",
      CheckOne: "Agence Laayoune",
      CheckTwo: "Aéroport Laayoune",
      Livraison: "Paiment à La Livraison",
      Livraison1: "Payer en argent comptant à la livraison.",
      waitingMessage: "S'il vous plaît, attendez",
      ReserveationCompleted: "Reservation Compléte!",
      ReserveationNotCompleted: "Error! Reservation non Compléte.",
    },
  },
  ar: {
    translation: {
      
    },
  },
  es: {
    translation: {
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
