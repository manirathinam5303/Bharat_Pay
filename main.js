const toggleButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const main_conatiner = document.getElementById("main_container");

const main_contenticon = [
  {
    id: 1,
    title: "Mobile prepaid",
    src: "./maincontent_Icon/Phone.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 2,
    title: "mobile-postpaid",
    src: "./maincontent_Icon/mobile-postpaid.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 3,
    title: "broadband",
    src: "./maincontent_Icon/broadband1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 4,
    title: "landline-postpaid",
    src: "./maincontent_Icon/landline-postpaid1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 5,
    title: "DTH",
    src: "./maincontent_Icon/dth1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 6,
    title: "Electricity",
    src: "./maincontent_Icon/Electricity1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 7,
    title: "PipedNaturalGas",
    src: "./maincontent_Icon/PipedNaturalGas.svg.png",
    url: "../secondpage/secondpage.html",
  },
  { id: 8, title: "gas1", src: "./maincontent_Icon/gas1.svg.png" },
  {
    id: 9,
    title: "housing-society",
    src: "./maincontent_Icon/housing-society1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 10,
    title: "cable",
    src: "./maincontent_Icon/cable1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 11,
    title: "education",
    src: "./maincontent_Icon/education1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 12,
    title: "insurance1",
    src: "./maincontent_Icon/insurance1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 13,
    title: "municipal-services",
    src: "./maincontent_Icon/municipal-services.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 14,
    title: "hospital",
    src: "./maincontent_Icon/hospital.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 15,
    title: "loan-repayment",
    src: "./maincontent_Icon/loan-repayment1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 16,
    title: "Water",
    src: "./maincontent_Icon/Water1.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 17,
    title: "subscription",
    src: "./maincontent_Icon/subscription-fees.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 18,
    title: "credit-card",
    src: "./maincontent_Icon/credit-card.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 19,
    title: "fastag",
    src: "./maincontent_Icon/fastag.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 20,
    title: "healthInsurance",
    src: "./maincontent_Icon/health.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 21,
    title: "social-services",
    src: "./maincontent_Icon/social-services.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 22,
    title: "municipality-taxes",
    src: "./maincontent_Icon/municipality-taxes.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 24,
    title: "recurring-deposits",
    src: "./maincontent_Icon/recurring-deposits.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 25,
    title: "metro",
    src: "./maincontent_Icon/metro.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 26,
    title: "Rental",
    src: "./maincontent_Icon/Rental.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 27,
    title: "NCMC",
    src: "./maincontent_Icon/NCMC.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 28,
    title: "Hospital-Pathology",
    src: "./maincontent_Icon/Hospital-Pathology.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 28,
    title: "Hospital-Pathology",
    src: "./maincontent_Icon/Hospital-Pathology.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 29,
    title: "donation",
    src: "./maincontent_Icon/donation.svg.png",
    url: "../secondpage/secondpage.html",
  },
  {
    id: 31,
    title: "Electricity",
    src: "./maincontent_Icon/Electricity1.svg.png",
    url: "../secondpage/secondpage.html",
  },
];

const data = (main_contenticon) => {
  main_conatiner.innerHTML = main_contenticon
    .map((data) => {
      return `<ul>
        <li><img src="${data.src}"><a href="${data.url}">${data.title}</a></li></ul>`;
    })
    .join("");
};
data(main_contenticon);
