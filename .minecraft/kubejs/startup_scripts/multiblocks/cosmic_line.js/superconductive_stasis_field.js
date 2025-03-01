GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('stasis_field')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('superconductive_stasis_field', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('stasis_field')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:superconductive_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('####CCC####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####CCC####', )
        .aisle('##CCCCCCC##', '####EEE####', '####EEE####', '####EEE####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####EEE####', '####EEE####', '####EEE####', '##CCCCCCC##', )
        .aisle('#CCCCCCCCC#', '##EEEEEEE##', '##EEEEEEE##', '##EEEEEEE##', '###EEEEE###', '####EEE####', '####EEE####', '####CCC####', '####EEE####', '####EEE####', '###EEEEE###', '##EEEEEEE##', '##EEEEEEE##', '##EEEEEEE##', '#CCCCCCCCC#', )
        .aisle('#CCCCCCCCC#', '##E#####E##', '##E#####E##', '##E#####E##', '##E#####E##', '###E###E###', '###E###E###', '###CCCCC###', '###E###E###', '###E###E###', '##E#####E##', '##E#####E##', '##E#####E##', '##E#####E##', '#CCCCCCCCC#', )
        .aisle('CCCCCCCCCCC', '#EE##A##EE#', '#EE##A##EE#', '#EE##A##EE#', '##E#####E##', '##E#####E##', '##E#####E##', '##CCC#CCC##', '##E#####E##', '##E#####E##', '##E#####E##', '#EE##A##EE#', '#EE##A##EE#', '#EE##A##EE#', 'CCCCCCCCCCC', )
        .aisle('CCCCCCCCCCC', '#EE#AAA#EE#', '#EE#AAA#EE#', '#EE#AAA#EE#', '##E##A##E##', '##E##A##E##', '##E##A##E##', '##CC#A#CC##', '##E##A##E##', '##E##A##E##', '##E##A##E##', '#EE#AAA#EE#', '#EE#AAA#EE#', '#EE#AAA#EE#', 'CCCCCCCCCCC', )
        .aisle('CCCCCCCCCCC', '#EE##A##EE#', '#EE##A##EE#', '#EE##A##EE#', '##E#####E##', '##E#####E##', '##E#####E##', '##CCC#CCC##', '##E#####E##', '##E#####E##', '##E#####E##', '#EE##A##EE#', '#EE##A##EE#', '#EE##A##EE#', 'CCCCCCCCCCC', )
        .aisle('#CCCCCCCCC#', '##E#####E##', '##E#####E##', '##E#####E##', '##E#####E##', '###E###E###', '###E###E###', '###CCCCC###', '###E###E###', '###E###E###', '##E#####E##', '##E#####E##', '##E#####E##', '##E#####E##', '#CCCCCCCCC#', )
        .aisle('#CCCCCCCCC#', '##EEEEEEE##', '##EEEEEEE##', '##EEEEEEE##', '###EEEEE###', '####EEE####', '####EEE####', '####CCC####', '####EEE####', '####EEE####', '###EEEEE###', '##EEEEEEE##', '##EEEEEEE##', '##EEEEEEE##', '#CCCCCCCCC#', )
        .aisle('##CCCCCCC##', '####EEE####', '####EEE####', '####EEE####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####EEE####', '####EEE####', '####EEE####', '##CCCCCCC##', )
        .aisle('####CKC####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####CCC####', )
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('antiblocksrechiseled:bright_white'))
            .where("E", Predicates.blocks('kubejs:conductive_glass'))
            .where("C", Predicates.blocks('kubejs:superconductive_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))
        )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/superconductive_casing", 'gtceu:block/multiblock/generator/large_plasma_turbine', true)
})