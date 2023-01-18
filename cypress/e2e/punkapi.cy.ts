describe(`Punk API's Random endpoint`, () => {
  beforeEach(() => {
    /* get beers and save the body to @beers alias */
    cy.request('https://api.punkapi.com/v2/beers/random').its('body').as('randomBeer')
  })

  it('returns only 1 beer with 21 keys', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      expect(beer).to.have.lengthOf(1)
      expect(Object.keys(beer[0])).to.have.lengthOf(21)
    })
  })

  it('returns 9 property value with Number type', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      cy.collectTypes(beer[0], "number").then((result) => {
        cy.log(`Beer response contains ${result} Number type values`)
      })
      cy.collectTypes(beer[0], "number").should('equal', 9)
    })
  })

  it('returns 6 or 7 property value with String type', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      cy.collectTypes(beer[0], "string").then((result) => {
        cy.log(`Beer response contains ${result} String type values`)
      })
      cy.collectTypes(beer[0], "string").should('be.gte', 6);
      cy.collectTypes(beer[0], "string").should('be.lte', 7);
    })
  })

  it('returns 5 property value with Object type', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      cy.collectTypes(beer[0], "object").then((result) => {
        cy.log(`Beer response contains ${result} String type values`)
      })
      cy.collectTypes(beer[0], "object").should('be.gte', 5);
      cy.collectTypes(beer[0], "object").should('be.lte', 6);
    })
  })

  it('returns the expected types', () => {
    cy.get('@randomBeer').then((beer: Object) => {

      /* "Id" type check */
      assert.isNumber(beer[0].id, `id content should be Number`)
      cy.log(`Id's type is Number, value: ` + beer[0].id)

      /* "Name" type check */
      assert.isString(beer[0].name, `name's content should be String`)
      cy.log(`Name's type is String, value: ` + beer[0].name)

      /* "Tagline" type check */
      assert.isString(beer[0].tagline, `tagline's content should be String`)
      cy.log(`Tagline's type is String, value: ` + beer[0].tagline)

      /* "First_brewed" type check */
      assert.isString(beer[0].first_brewed, `first_brewed's content should be String`)
      cy.log(`first_brewed's type is String, value: ` + beer[0].first_brewed)

      /* "Description" type check */
      assert.isString(beer[0].description, `description's content should be String`)
      cy.log(`Description's type is String, value: ` + beer[0].description)

      /* "Image_url" type check */
      assert.isString(beer[0].image_url, `image_url's content should be String`)
      cy.log(`image_url's type is String, value: ` + beer[0].image_url)

      /* "abv" type check */
      assert.isNumber(beer[0].abv, `abv's content should be Number`)
      cy.log(`abv's type is Number, value: ` + beer[0].abv)

      /* "ibu" type check */
      assert.isNumber(beer[0].ibu, `ibu's content should be Number`)
      cy.log(`ibu's type is Number, value: ` + beer[0].ibu)

      /* "target_fg" type check */
      assert.isNumber(beer[0].target_fg, `target_fg's content should be Number`)
      cy.log(`target_fg's type is Number, value: ` + beer[0].target_fg)

      /* "target_og" type check */
      assert.isNumber(beer[0].target_fg, `target_og's content should be Number`)
      cy.log(`target_og's type is Number, value: ` + beer[0].target_og)

      /* "ebc" type check */
      assert.isNumber(beer[0].ebc, `target_og's content should be Number`)
      cy.log(`ebc's type is Number, value: ` + beer[0].ebc)

      /* "srm" type check */
      assert.isNumber(beer[0].srm, `target_og's content should be Number`)
      cy.log(`srm's type is Number, value: ` + beer[0].srm)

      /* "ph" type check */
      assert.isNumber(beer[0].ph, `target_og's content should be Number`)
      cy.log(`ph's type is Number, value: ` + beer[0].ph)

      /* "attenuation_level" type check */
      assert.isNumber(beer[0].attenuation_level, `attenuation_level's content should be Number`)
      cy.log(`attenuation_level's type is Number, value: ` + beer[0].attenuation_level)

      /* "volume" type check */
      assert.isObject(beer[0].volume, `volume's content should be an Object`)
      cy.log(`volume's type is Object, value: ` + beer[0].volume)

      /* "boil_volume" type check */
      assert.isObject(beer[0].boil_volume, `boil_volume's content should be an Object`)
      cy.log(`boil_volume's type is Object, value: ` + beer[0].boil_volume)

      /* "method" type check */
      assert.isObject(beer[0].method, `method's content should be an Object`)
      cy.log(`method's type is Object, value: ` + beer[0].method)

      /* "ingredients" type check */
      assert.isObject(beer[0].ingredients, `ingredients's content should be an Object`)
      cy.log(`ingredients's type is Object, value: ` + beer[0].ingredients)

      /* "food_pairing" type check */
      assert.isArray(beer[0].food_pairing, `food_pairing's content should be an Array`)
      cy.log(`food_pairing's type is Array, value: ` + beer[0].food_pairing)

      /* "brewers_tips" type check */
      assert.isString(beer[0].brewers_tips, `brewers_tips's content should be an String`)
      cy.log(`brewers_tips's type is String, value: ` + beer[0].brewers_tips)

      /* "contributed_by" type check */
      assert.isString(beer[0].contributed_by, `contributed_by's content should be an String`)
      cy.log(`contributed_by's type is String, value: ` + beer[0].contributed_by)
    })
  })

  it('first_brewed is in MM/YYYY format (regex)', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      expect(beer[0].first_brewed).to.match(/((0[1-9])|(1[0-2]))\/(\d{4})/,
        `first_brewed is in MM/YYYY format`)
    })
  })

  it('volume related properties are correct', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      /* Volume's unit must be "litres" */
      assert.equal(beer[0].volume.unit, "litres", `Volume's unit must be "litres"`)
      cy.log(`Volume's unit is "litres", value: ` + beer[0].volume.unit)

      /* Volume's value must be between 0 and 100 */
      expect(beer[0].volume.value).to.be.gte(0);
      expect(beer[0].volume.value).to.be.lte(100);
      cy.log(`Volume's value is between 0 and 100, value: ` + beer[0].volume.value);

      /* Boil Volume's unit must be "litres" */
      assert.equal(beer[0].boil_volume.unit, "litres", `Boil Volume's unit must be "litres"`)
      cy.log(`Boil Volume's unit is "litres", value: ` + beer[0].boil_volume.unit)

      /* Boil Volume's value must be between 0 and 100 */
      expect(beer[0].boil_volume.value).to.be.gte(0);
      expect(beer[0].boil_volume.value).to.be.lte(100);
      cy.log(`Boil Volume's value is between 0 and 100, value: ` + beer[0].boil_volume.value);
    })
  })

  it('method and ingredients contains mash_temp, fermentation, twist, malt, hops, yeast props', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      /* Beer's object "method" contains mash_temp, fermentation, twist items */
      cy.checkIfObjectContainsExpectedKey(beer[0].method, "mash_temp")
        .should("equal", true, "Beers's method obj contains mash_temp")
      cy.checkIfObjectContainsExpectedKey(beer[0].method, "fermentation")
        .should("equal", true, "Beers's method obj contains fermentation")
      cy.checkIfObjectContainsExpectedKey(beer[0].method, "twist")
        .should("equal", true, "Beers's method obj contains twist")

      /* Beer's object "ingredients" contains malt, hops, yeast items*/
      cy.checkIfObjectContainsExpectedKey(beer[0].ingredients, "malt")
        .should("equal", true, "Beers's method obj contains malt")
      cy.checkIfObjectContainsExpectedKey(beer[0].ingredients, "hops")
        .should("equal", true, "Beers's method obj contains hops")
      cy.checkIfObjectContainsExpectedKey(beer[0].ingredients, "yeast")
        .should("equal", true, "Beers's method obj contains yeast")

      /* Beer's malt and hops ingredient should contain more item than 3*/
      expect(beer[0].ingredients.malt.length, "Beer's malt ingredient should contain more item than 3").to.be.gte(1)
      expect(beer[0].ingredients.hops.length, "Beer's hops ingredient should contain more item than 3").to.be.gte(1)
    })
  })

  it('food_pairing contains strings and brewers_tips are longer than 3 words', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      /* Beer's object "food_pairing" contains array with string type only*/
      cy.checkIfObjectContainsStringArray(beer[0].food_pairing)
        .should("equal", true, "Beers's food_pairing arr contains only strings")

      /* Beer's object "brewers_tips" should contain more words than 3*/
      expect(beer[0].brewers_tips.split(" ").length, "Beer's brewer tips should contain more words than 3").to.be.gte(3)
    })
  })

  it('sum of malt/hops ingredients are higher than 1kg/20g', () => {
    cy.get('@randomBeer').then((beer: Object) => {
      /* Beer's object "food_pairing" contains array with string type only*/
      cy.sumIngredients(beer[0].ingredients.malt)
        .should("gte", 1, "Beers's malt ingredients amount are more than 1 kilograms")

      cy.sumIngredients(beer[0].ingredients.hops)
        .should("gte", 20, "Beers's hops ingredients amount are more than 20 grams")
    })
  })
})

describe(`Punk API's default endpoint`, () => {
  beforeEach(() => {
    /* get beers and save the body to @beers alias */
    cy.request('https://api.punkapi.com/v2/beers').its('body').as('beers')
  })

  it('returned as expected', () => {
    cy.get('@beers').then((beers: any) => {
      cy.wrap(beers.length).should('equal', 25, `25 beers returned`)
    })

    cy.get('@beers').then((beers: any) => {
      cy.isAscendingById(beers).should('equal', true, `beers are returned ascending by id`)
    })
  })

})

describe('Punk API', () => {
  beforeEach(() => {
    /* get beers and save the body to @beers alias */
    cy.request('https://api.punkapi.com/v2/beers?yeast=Wyeast_3522_-_Belgian_Ardennes&hops=Tomahawk').its('body').as('beers')
  })

  it('returns beer(s) with Wyeast 3522 - Belgian Ardennes yeast and Tomahawk hops', () => {
    cy.get('@beers').then((beers) => {
      /* validate that there is atleast 1 kind of beer with the given yeast and hops */
      expect(beers.length).to.be.at.least(1)
    })
    cy.get('@beers').each((beer: { name: String }) => {
      console.log(beer)
      /* log the expected beer(s) */
      cy.log(beer.name + ' has Wyeast 1056 - American Ale™ and contains Tomahawk hops!')
    })
  })

  it('Beers w/ Wyeast 3522 - Belgian Ardennes yeast + Tomahawk hops should contain double 12.5g Magnum hops', () => {
    cy.get('@beers').each((beer: { ingredients: { hops } }) => {
      /* validate that only 12.5g of Magnum has been added */
      let result = beer.ingredients.hops
        .filter(({ name, amount }) => name === 'Magnum' && amount.value === 12.5 && amount.unit === 'grams')
      expect(result).to.have.lengthOf(2)

      /* unnecessary, only for the sake of practice */
      expect(result[0].amount.value).to.equal(12.5)
      expect(result[0].amount.unit).to.equal('grams')

      expect(result[1].amount.value).to.equal(12.5)
      expect(result[1].amount.unit).to.equal('grams')
    })
  })

  it('IBU content is number for the selected beer(s)', () => {
    cy.get('@beers').each((beer: { ibu: Number }) => {
      /* validate that only IBU content is a type of number */
      assert.isNumber(beer.ibu, 'IBU content is number')
    })
  })

  it('Description is not empty for the selected beer(s)', () => {
    cy.get('@beers').each((beer: { description: String }) => {
      /* validate that the description is not empty */
      expect(beer.description.length).to.be.greaterThan(0)
    })
  })
})

describe('Punk API', () => {
  beforeEach(() => {
    /* get beers and save the body to @beers alias */
    cy.request('https://api.punkapi.com/v2/beers?yeast=American_Ale&hops=Chinook&food=cheese').its('body').as('beers')
  })

  it('can list all the beers w/ any kind of American Ale yeast with Chinook hops, cheese food pairing and bourbon in brewers tip', () => {
    let result = []
    cy.get('@beers')
      .each((beer: { brewers_tips: String }) => {
        if (beer.brewers_tips.includes('bourbon')) {
          /* push all the beers with bourbon in it's brewers_tip value */
          result.push(beer)
        }
      })
      .then(() => {
        result.forEach((beer) => {
          /* log the beer(s) */
          cy.log(beer.name)
        })
        /* validate there is atleast 1 beer with the given parameters */
        expect(result.length).to.be.greaterThan(0)
      })
  })
})

describe('Punk API response can be saved as a file and can be used as a fixture', () => {
  before(() => {
    /* get beers and save the body to a fixture file */
    cy.request('https://api.punkapi.com/v2/beers/23').then((response) => {
      cy.writeFile('cypress/fixtures/item_id_23.json', response.body)
    })
  })

  it('can be used to validate', () => {
    /* read the fixture file and assert */
    cy.fixture('item_id_23').then((item) => {
      expect(item[0]).to.exist
    })
  })
})

//TODO write negative testcases
/*
it("error when invalid userId", function () {
  cy.request({
    method: "GET",
    url: `${apiUsers}/1234`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(422)
    expect(response.body.errors.length).to.eq(1);
  });
});
*/

/*
describe('Punk API', () => {
  // punk-api-bug-report.txt in the root conains the bug report 
  it('can return multiple hops search', () => {
    cy.request('https://api.punkapi.com/v2/beers?hops=Chinook&hops=Tomahawk').its('body').as('beers')

    cy.get('@beers').each((beer: any) => {
      cy.log(beer.name)
    })
  })
})
*/