function getMenuItems() {
  return Promise.resolve([
    {
      name: "Carte de la cuisine",
      icon: "cuisine.png",
      produit: [
        {
          name: "ENTREES CHAUDES",
          plats: [
            {
              name: "AILES DE POULET FACON BARBECUE",
              src: "src/ARapp1/video/menu/plat7.mp4",
              description: "poulet, Katchup",
              price: 11500.0,
            },
            {
              name: "CREVETTES A L'AIL",
              src: "src/ARapp1/video/2222.webm",
              description: "crevette",
              price: 11500.0,
            },
            {
              name: "VELOUTE DE POULET",
              src: "src/ARapp1video/menu/plat8.mp4",
              description: "poulet",
              price: 11500.0,
            },
          ],
        },
        {
          name: "ENTRÉE FROIDES",
          plats: [
            {
              name: "SALADE NICOISE",
              src: "src/ARapp1video/menu/plat2.mp4",
              description:
                "Laitue, anchois, tomates cerises, radis, poivrons, haricots verts, concombres, œuf dur, olives noires, basilic, huile d’olive, pomme vapeur",
              price: 14500.0,
            },
            {
              name: "SALADE CESAR AU POULET",
              src: "src/ARapp1video/menu/plat9.mp4",
              description: "Contain - Chicken",
              price: 11500.0,
            },
            {
              name: "CARPACCIO DE SAUMON",
              src: "src/ARapp1video/menu/plat3.mp4",
              description: "saumon",
              price: 11500.0,
            },
          ],
        },
      ],
    },
    {
      name: "Carte de boisson",
      icon: "boisson.png",
      produit: [
        {
          name: "NOS CHAMPAGNES",
          plats: [
            {
              name: "BILLECART - SALMON BRUT ROSE",
              src: "src/ARapp1video/menu/plat10.mp4",
              description: "champagne",
              price: 220000.0,
            },
            {
              name: "BILLECART - SALMON BRUT BLANC DE BLANC",
              src: "src/ARapp1video/menu/plat4.mp4",
              description: "champagne",
              price: 220000.0,
            },
            {
              name: "BILLECART - SALMON BRUT RESERVE",
              src: "src/ARapp1video/menu/plat11.mp4",
              description: "champagne",
              price: 160000.0,
            },
          ],
        },
        {
          name: "NOS BIERES",
          plats: [
            {
              name: "33 EXPORT PM",
              src: "src/ARapp1video/menu/plat5.mp4",
              description: "biere blonde",
              price: 4500.0,
            },
            {
              name: "MUTZIG PM",
              src: "src/ARapp1video/menu/plat12.mp4",
              description: "biere blonde",
              price: 4500.0,
            },
            {
              name: "HEINEKEN",
              src: "src/ARapp1video/menu/plat6.mp4",
              description: "biere blonde",
              price: 4500.0,
            },
          ],
        },
      ],
    },
    {
      name: "Carte de sushis",
      icon: "sushis.png",
      produit: [
        {
          name: "NIGIRI 2 PIECES",
          plats: [
            {
              name: "NIGIRI SHAKE",
              src: "src/ARapp1video/menu/plat13.mp4",
              description: "SAUMON, RICE",
              price: 3000.0,
            },
            {
              name: "NIGIRI MAGURO",
              src: "src/ARapp1video/menu/plat17.mp4",
              description: "TUNA, RICE",
              price: 4500.0,
            },
            {
              name: "NIGIRI PLATTER",
              src: "src/ARapp1video/menu/plat16.mp4",
              description:
                "salmon nigiri, unagi nigiri, ebi nigiri, kani nigiri, marugo nigiri, tako nigiri AND hotate nigiri",
              price: 20000.0,
            },
          ],
        },
        {
          name: "FUTO MAKI 6PIECES",
          plats: [
            {
              name: "SPIDER FUTO MAKI",
              src: "src/ARapp1video/menu/plat15.mp4",
              description: "soft shell crab,avocado",
              price: 14500.0,
            },
            {
              name: "EBI TEMPURA FUTO MAKI",
              src: "src/ARapp1video/menu/plat14.mp4",
              description: "ebi tempura, lettuce",
              price: 11500.0,
            },
            {
              name: "GARDEN SPRING ROLL",
              src: "src/ARapp1video/menu/plat12.mp4",
              description:
                "rice paper, lettuce, carrots, cucumer, red cabbage, avocado, green bell pepper, mango, apple and peanut sauce",
              price: 11500.0,
            },
          ],
        },
      ],
    },
    {
      name: "Carte des cocktails",
      icon: "desserts.png",
      produit: [
        {
          name: "COCKTAILS CLASSIQUE",
          plats: [
            {
              name: "MINT JULEP",
              src: "src/ARapp1video/menu/plat7.mp4",
              description: "Bourbon, Feuilles de la menthe, sirop de canne.",
              price: 12000.0,
            },
            {
              name: "MOSCOW MULE",
              src: "src/ARapp1video/menu/plat11.mp4",
              description:
                "Vodka, jus de gingembre, jus de citron, Ginger ale.",
              price: 12000.0,
            },
            {
              name: "PINNA COLADA",
              src: "src/ARapp1video/menu/plat10.mp4",
              description: "pinna colada",
              price: 12000.0,
            },
          ],
        },
        {
          name: "COCKTAILS CREATIONS",
          plats: [
            {
              name: "YELLOW ORDONNANCE",
              src: "src/ARapp1video/menu/plat7.mp4",
              description:
                "Tequila blanche infusé avec du safran, jus de gingembre, sweet and Sour, sirop d’agave, noix de muscade",
              price: 12000.0,
            },
            {
              name: "YAOUNDE SLING",
              src: "src/ARapp1video/menu/plat1.mp4",
              description:
                "Vodka infusé a la fleur de hibiscus, jus de bissap, liqueur de lychee, liqueur de mure, purée de la framboise.",
              price: 14500.0,
            },
            {
              name: "CARAMEL CHERIE",
              src: "src/ARapp1video/menu/plat7.mp4",
              description:
                "Vodka infuse au bonbons caramel, Malibu, sirop de caramel, baileys, crème fraiche.",
              price: 14500.0,
            },
          ],
        },
      ],
    },
  ]);
}
