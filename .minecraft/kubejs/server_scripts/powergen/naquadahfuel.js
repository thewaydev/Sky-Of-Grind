ServerEvents.recipes(event => {

    event.recipes.gtceu.large_chemical_reactor('procnaqusulfate')
        .inputFluids(Fluid.of('gtceu:fluoroantimonic_acid 1000'))
        .itemInputs('3x gtceu:naquadria_sulfate_dust')
        .outputFluids('gtceu:processed_naquadria_sulfate 3105')
        .duration(700)
        .EUt((GTValues.VA[GTValues.LuV]))
    event.recipes.gtceu.large_chemical_reactor('acidprocnaqusulfate')
        .inputFluids('gtceu:sulfuric_acid 250', 'gtceu:processed_naquadria_sulfate 1000')
        .notConsumable('gtceu:naquadah_credit')
        .outputFluids('gtceu:acidic_processed_naquadria_sulfate 3105')
        .duration(700)
        .EUt((GTValues.VA[GTValues.LuV]))
    event.recipes.gtceu.large_chemical_reactor('acidicfuelsolution')
        .inputFluids('gtceu:sulfuric_heavy_fuel 1500', 'gtceu:acidic_processed_naquadria_sulfate 1000')
        .notConsumable('gtceu:tiny_yttrium_dust')
        .outputFluids('gtceu:acidic_naquadria_fuel_solution 500')
        .duration(1000)
        .EUt((GTValues.VA[GTValues.LuV]))
    event.recipes.gtceu.large_chemical_reactor('impurenaqfuel')
        .inputFluids('gtceu:acidic_naquadria_fuel_solution 5000', 'gtceu:nitrobenzene 500')
        .itemInputs('gtceu:enriched_naquadah_sulfate_dust')
        .outputFluids('gtceu:impure_naquadria_fuel 5000')
        .duration(1000)
        .EUt((GTValues.VA[GTValues.LuV]))
    event.recipes.gtceu.centrifuge('purenaqfuel')
        .inputFluids('gtceu:impure_naquadria_fuel 250')
        .itemOutputsRanged('gtceu:resonant_naquadah_dust', 5, 15)
        .outputFluids('gtceu:pure_naquadria_fuel 250')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1000)
        .EUt((GTValues.VA[GTValues.LuV]))
    event.recipes.gtceu.naquadahmk1('naquadriaplasma')
        .inputFluids('gtceu:pure_naquadria_fuel 5000', 'gtceu:helium_plasma 1500')
        .outputFluids('gtceu:naquadria_plasma_plasma 5000')
        .duration(4200)
        .EUt((GTValues.VA[GTValues.UV]))




})