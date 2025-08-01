GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('svs')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(8, 4, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('supercriticalvibrationsifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('svs')
        .appearanceBlock(GTBlocks.MACHINE_CASING_UHV)
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('########CCC########', '#######ACACA#######', '#####AA#CCC#AA#####', '####A#########A####', '###A###########A###', '##A#############A##', '##A#############A##', '#A###############A#', '#A#######E#######A#', '#A######EEE######A#', '#A#######E#######A#', '#A###############A#', '##A#############A##', '##A#############A##', '###A###########A###', '####A#########A####', '#####AA#####AA#####', '#######AAAAA#######', '###################')
            .aisle('#######CCACC#######', '#####CCBBBBBCC#####', '####CBBCCACCBBC####', '###CBCC#DDD#CCBC###', '##CBC#########CBC##', '#CBC###########CBC#', '#CBC###########CBC#', 'CBC#############CBC', 'CBCD####EEE####DCBC', 'ABAD####EEE####DABA', 'CBCD####EEE####DCBC', 'CBC#############CBC', '#CBC###########CBC#', '#CBC###########CBC#', '##CBC#########CBC##', '###CBCC#DDD#CCBC###', '####CBBCCACCBBC####', '#####CCBBBBBCC#####', '#######CCACC#######')
            .aisle('########CCC########', '#######ACKCA#######', '#####AA#CCC#AA#####', '####A#########A####', '###A###########A###', '##A#############A##', '##A#############A##', '#A###############A#', '#A#######E#######A#', '#A######EEE######A#', '#A#######E#######A#', '#A###############A#', '##A#############A##', '##A#############A##', '###A###########A###', '####A#########A####', '#####AA#####AA#####', '#######AAAAA#######', '###################')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:electrolytic_cell'))
            .where('A', Predicates.blocks('gtceu:superconducting_coil'))
            .where('D', Predicates.blocks('draconicevolution:energy_core_stabilizer'))
            .where('E', Predicates.blocks('draconicevolution:particle_generator'))
            .where(
                "C",
                Predicates.blocks('kubejs:neutronium_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/neutronium/ncasing", 'gtceu:block/multiblock/pyrolyse_oven')
})