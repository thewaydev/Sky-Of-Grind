
// Star Technology Code, Thanks!

const oreProcessableTiers = {
    'lv': [
        { material: 'cassiterite', secondary: 'tin', tertiary: 'tin', quaternary: 'bismuth' },
        { material: 'silver', secondary: 'gold', tertiary: 'lead', quaternary: 'sulfur' },
        { material: 'gold', secondary: 'silver', tertiary: 'copper', quaternary: 'nickel' },
        { material: 'iron', secondary: 'nickel', tertiary: 'tin' },
        { material: 'copper', secondary: 'gold', tertiary: 'nickel' },
        { material: 'tin', secondary: 'iron', tertiary: 'zinc' },
        { material: 'sphalerite', secondary: 'gallium', tertiary: 'sulfur' },
        { material: 'galena', secondary: 'silver', tertiary: 'sulfur' },
        { material: 'stibnite', secondary: 'antimony', tertiary: 'sulfur' },
        { material: 'salt', secondary: 'rock_salt', tertiary: 'rock_salt', quaternary: 'borax' },
        { material: 'coal', secondary: 'coal', tertiary: 'coal', quaternary: 'thorium' }
    ],

    'mv': [
        { material: 'pyrochlore', secondary: 'apatite', tertiary: 'apatite', quaternary: 'calcium' },
        { material: 'cobaltite', secondary: 'cobalt', tertiary: 'sulfur', quaternary: 'cobalt' },
        { material: 'vanadium_magnetite', secondary: 'magnetite', tertiary: 'gold', quaternary: 'vanadium' },
        { material: 'chromite', secondary: 'iron', tertiary: 'magnesium', quaternary: 'iron' },
        { material: 'beryllium', secondary: 'emerald', tertiary: 'emerald', quaternary: 'beryllium' },
        { material: 'apatite', secondary: 'tricalcium_phosphate', tertiary: 'tricalcium_phosphate', quaternary: 'phosphate' }
    ],

    'hv': [
        { material: 'bauxite', secondary: 'gallium', tertiary: 'grossular', quaternary: 'rutile' },
        { material: 'pitchblende', secondary: 'thorium', tertiary: 'thorium', quaternary: 'uraninite' },
        { material: 'ilmenite', secondary: 'iron', tertiary: 'iron', quaternary: 'rutile' },
        { material: 'molybdenite', secondary: 'molybdenum', tertiary: 'sulfur', quaternary: 'molybdenum' },
        { material: 'tantalite', secondary: 'manganese', tertiary: 'niobium', quaternary: 'niobium' }
    ],

    'ev': [
        { material: 'bastnasite', secondary: 'neodymium', tertiary: 'neodymium', quaternary: 'rare_earth' },
        { material: 'tungstate', secondary: 'silver', tertiary: 'manganese', quaternary: 'lithium' },
        { material: 'scheelite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'molybdenum' },
        { material: 'zeolite', secondary: 'calcium', tertiary: 'aluminium', quaternary: 'silicon' },
    ],

    'iv': [
        { material: 'cosmic_iridium', secondary: 'iridium', tertiary: 'titanium', quaternary: 'tungsten' },
        { material: 'cosmic_titanium', secondary: 'titanium', tertiary: 'tungsten', quaternary: 'osmium' },
        { material: 'cosmic_tungsten', secondary: 'tungsten', tertiary: 'osmium', quaternary: 'iridium' },
        { material: 'cosmic_osmium', secondary: 'osmium', tertiary: 'iridium', quaternary: 'titanium' },
        { material: 'cosmic_neutronium', secondary: 'cosmic_neutronium', tertiary: 'neutronium', quaternary: 'resonant_essence' },
        { material: 'resonant_essence', secondary: 'resonant_essence', tertiary: 'kaemite', quaternary: 'kaemite' },
        { material: 'resonant_naquadah', secondary: 'resonant_naquadah', tertiary: 'naquadah', quaternary: 'naquadria' },
        { material: 'kaemite', secondary: 'rare_earth', tertiary: 'rare_earth', quaternary: 'naquadria' },
        { material: 'pure_cosmic_matter', secondary: 'pure_cosmic_matter', tertiary: 'pure_cosmic_matter', quaternary: 'pure_cosmic_matter' },
        { material: 'infinity_catalyst', secondary: 'infinity_catalyst', tertiary: 'pure_cosmic_matter', quaternary: 'space_time' }
    ]
};

    

const crushed_ore = (mat, amount) =>  {
    return `${amount}x gtceu:crushed_${mat}_ore`;
}
const dust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
}
const fluids = {
    water: 'minecraft:water 100',
    distilled_water: 'gtceu:distilled_water 100',
    sodium_persulfate: 'gtceu:sodium_persulfate 100',
    sodium_persulfate_5x: 'gtceu:sodium_persulfate 500'
}


const electric_primitive_processing = (event, materialObj) => {
    event.recipes.gtceu.processing_plant(`${materialObj.material}`)
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 4500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 0)
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.LV]);
}

/*
 * Energy based ore processing.
 * Needs distilled water or sodium persulfate.
*/
const processing_plant = (event, materialObj, tier) => {
    const voltages = {
        'lv': GTValues.VA[GTValues.LV],
        'mv': GTValues.VA[GTValues.MV],
        'hv': GTValues.VA[GTValues.HV],
        'ev': GTValues.VA[GTValues.EV]
    }
    const fluid = (tier == 'lv' || tier == 'mv') ? fluids.distilled_water : fluids.sodium_persulfate;
    event.recipes.gtceu.processing_plant(`${materialObj.material}`)
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 5000, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 2500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 1250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 750, 100)
        .duration(20*60)
        .EUt(voltages[tier]);
}

/*
* Improved energy based primitive ore processing.
* Uses less energy and is quicker.
* Chances are boosted.
*/
const plant_primitive_processing = (event, materialObj) => {
   event.recipes.gtceu.processing_plant(`${materialObj.material}`)
       .itemInputs(crushed_ore(materialObj.material, 1))
       .inputFluids(fluids.water)
       .itemOutputs(dust(materialObj.material, 1))
       .chancedOutput(dust(materialObj.material, 1), 9500, 50)
       .chancedOutput(dust(materialObj.secondary, 1), 6500, 100)
       .chancedOutput(dust(materialObj.tertiary, 1), 5250, 50)
       .duration(240)
       .EUt(GTValues.VHA[GTValues.LV]);
}

/*
 * Improved energy based ore processing.
 * Uses less energy and is quicker.
 * Chances are boosted.
*/
const plant_electric_processing = (event, materialObj, tier) => {
    const voltages = {
        'lv': GTValues.VHA[GTValues.LV],
        'mv': GTValues.VHA[GTValues.MV],
        'hv': GTValues.VHA[GTValues.HV],
        'ev': GTValues.VHA[GTValues.EV]
    }
    const fluid = (tier == 'lv' || tier == 'mv') ? fluids.distilled_water : fluids.sodium_persulfate;
    event.recipes.gtceu.processing_plant(`${materialObj.material}`)
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 5500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 1750, 100)
        .duration(20*60)
        .EUt(voltages[tier]);
}

/*
 * Final form of 1-step ore processing.
*/
const plant_ore_processing = (event, materialObj) => {
    event.recipes.gtceu.processing_plant(`${materialObj.material}`)
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluids.sodium_persulfate_5x)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 5500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 1750, 100)
        .chancedOutput(dust(materialObj.quinary, 1), 750, 150)
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);
}

/* Final Product */
ServerEvents.recipes(event => {



    // Iterate over each tier and processable item and register the recipes
    Object.keys(oreProcessableTiers).forEach((tier) => {
        oreProcessableTiers[tier].forEach((item) => {
            if (tier == 'primitive') {
                primitive_processing(event, item);
                electric_primitive_processing(event, item);
                plant_primitive_processing(event, item);
            } else if (tier == 'iv') {
                plant_ore_processing(event, item);
            } else {
                processing_plant(event, item, tier);
            }
        });
    });
});