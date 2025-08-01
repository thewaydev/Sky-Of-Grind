
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('atmospheric_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gas_collector')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', '#CDC#', '#CDC#', '#CCC#', '##C##', '#####')
            .aisle('CABAC', 'C###C', 'C###C', 'C###C', '#DDD#', '##D##')
            .aisle('CBBBC', 'D###D', 'D###D', 'C###C', 'CDDDC', '#DDD#')
            .aisle('CABAC', 'C###C', 'C###C', 'C###C', '#DDD#', '##D##')
            .aisle('#CKC#', '#CDC#', '#CDC#', '#CCC#', '##C##', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:assembly_line_casing'))
            .where('D', Predicates.blocks('gtceu:laminated_glass'))
            .where('A', Predicates.blocks('gtceu:electrolytic_cell'))
            .where("C", Predicates.blocks('gtceu:watertight_casing')
                  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("gtceu:block/casings/gcym/watertight_casing", 'gtceu:block/machines/gas_collector')
})